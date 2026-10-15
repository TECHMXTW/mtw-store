import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center text-white transition-colors hover:text-neutral-300">
      <ShoppingCartIcon
        className={clsx('h-6 w-6 transition-all ease-in-out hover:scale-110', className)}
      />

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded-full bg-white text-black text-[11px] font-medium">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
