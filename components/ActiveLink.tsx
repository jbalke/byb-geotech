//https://github.com/vercel/next.js/tree/canary/examples/active-class-name

import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  as?: string;
  children: React.ReactElement;
  activeClassName: string;
};

const ActiveLink = ({ children, activeClassName, ...props }: Props) => {
  const { asPath } = useRouter();
  const childClassName = children.props.className ?? '';

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const currentPage = asPath === props.href || asPath === props.as;
  const className = currentPage
    ? `${childClassName} ${activeClassName}`.trim()
    : childClassName;

  return (
    <Link {...props} passHref>
      {React.cloneElement(children, {
        className: className || undefined,
        'aria-current': currentPage ? 'page' : undefined,
      })}
    </Link>
  );
};

export default ActiveLink;
