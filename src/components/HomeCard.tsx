import { AnchorHTMLAttributes, FC } from 'react';

import tw from 'tailwind-styled-components';

const CardElement = tw.a<{ $highlight?: boolean }>`
    w-full
    p-4 md:p-6
    rounded-xl
    shadow-md hover:shadow-xl
    border
    text-left
    transition
    group
    ${({ $highlight }) => ($highlight ? 'bg-gray-800 text-gray-50' : '')}
`;

const CardTitle = tw.h3`
    text-lg md:text-2xl font-bold
    group-hover:text-pink-500 group-focus:text-pink-500
    transition duration-1000
`;

const CardDescription = tw.p`
    mt-2 md:mt-4 text-base md:text-xl
`;

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
    <CardElement $highlight={highlight} {...props}>
      <CardTitle>{title} &rarr;</CardTitle>
      <CardDescription>{children}</CardDescription>
    </CardElement>
  );
};
