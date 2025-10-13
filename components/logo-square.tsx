import Image from 'next/image';
import clsx from 'clsx';

export default function LogoSquare({ size }: { size?: 'sm' | undefined }) {
  return (
    <div
      className={clsx(
        'flex flex-none items-center justify-center overflow-hidden',
        {
          'h-[40px] w-[40px] rounded-xl': !size,
          'h-[30px] w-[30px] rounded-lg': size === 'sm'
        }
      )}
    >
      <Image
        src="/logo-mxtw.png"   // tu PNG en /public
        alt="MXTW"
        width={size === 'sm' ? 30 : 40}
        height={size === 'sm' ? 30 : 40}
        priority
      />
    </div>
  );
}
