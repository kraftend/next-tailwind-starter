import { AnchorHTMLAttributes, FC } from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const cardElementClass = cva(
  'w-full p-4 md:p-6 rounded-xl shadow-md hover:shadow-xl border text-left transition group',
  {
    variants: {
      highlight: {
        true: 'bg-gray-800 text-gray-50',
      },
    },
  },
);

type HomeCardProps = {
  title: string;
  highlight?: boolean;
};

export const HomeCard: FC<HomeCardProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  title,
  children,
  highlight,
  ...props
}) => {
  return (
    <a className={cn(cardElementClass({ highlight }))} {...props}>
      <h3 className="text-lg font-bold transition duration-1000 group-hover:text-pink-500 group-focus:text-pink-500 md:text-2xl">
        {title} &rarr;
      </h3>
      <p className="mt-2 text-base md:mt-4 md:text-xl">{children}</p>
    </a>
  );
};
