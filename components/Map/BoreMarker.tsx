import React, { FC, SVGProps } from 'react';

const BoreMarker: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-2.436 3.599-4 5.85-4 8.037 0 2.19 1.789 3.963 4 3.963s4-1.773 4-3.963c0-2.187-1.564-4.438-4-8.037zm-.014 2.56c.234.363.514.994.514 1.66 0 1.954-2 2.274-2 1.085 0-.817.994-2.022 1.486-2.745z' />
    </svg>
  );
};

export default BoreMarker;
