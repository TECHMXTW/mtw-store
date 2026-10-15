import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const mutation = `
  mutation SubscribeCustomer($input: CustomerInput!) {
    customerCreate(input: $input) {
      customer { id email emailMarketingConsent { marketingState } }
      userErrors { field message }
    }
  }
`;

export async function POST(request: NextRequest) {
  const origin = request.headers.get('origin');
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ error: 'Solicitud no permitida.' }, { status: 403 });
  }

  const token = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  if (!token || !domain) {
    return NextResponse.json({ error: 'El registro no está disponible temporalmente.' }, { status: 503 });
  }

  let payload: { email?: unknown; consent?: unknown; website?: unknown };
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 });
  }

  if (payload.website) return NextResponse.json({ ok: true });
  const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || payload.consent !== true) {
    return NextResponse.json({ error: 'Introduce un correo válido y acepta recibir comunicaciones.' }, { status: 400 });
  }

  const shop = domain.replace(/^https?:\/\//, '').replace(/\/$/, '');
  try {
    const response = await fetch(`https://${shop}/admin/api/2026-07/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': token
      },
      body: JSON.stringify({
        query: mutation,
        variables: {
          input: {
            email,
            tags: ['newsletter'],
            emailMarketingConsent: {
              marketingState: 'SUBSCRIBED',
              marketingOptInLevel: 'SINGLE_OPT_IN'
            }
          }
        }
      }),
      cache: 'no-store'
    });
    if (!response.ok) throw new Error('Shopify Admin API unavailable');
    const result = await response.json();
    const errors = result?.data?.customerCreate?.userErrors || [];
    if (result.errors?.length || errors.length) {
      const alreadyExists = errors.some((e: { message?: string }) => /taken|already exists|ya existe|already been/i.test(e.message || ''));
      return NextResponse.json(
        { error: alreadyExists ? 'Este correo ya está registrado. Si deseas cambiar tus preferencias, contáctanos.' : 'No pudimos completar tu suscripción. Inténtalo más tarde.' },
        { status: alreadyExists ? 409 : 502 }
      );
    }
    if (!result?.data?.customerCreate?.customer?.id) throw new Error('Missing customer');
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'No pudimos completar tu suscripción. Inténtalo más tarde.' }, { status: 502 });
  }
}
