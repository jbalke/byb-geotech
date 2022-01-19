import React from 'react';
import Banner from '../components/Banner';
import StyledNextLink from '../components/Link/StyledNextLink';
import { Wrapper } from '../components/styled';
import SiteLayout from '../layouts/SiteLayout';

function FourOhFour() {
  return (
    <>
      <Banner title="Oops..." />
      <Wrapper main padding={'xl'}>
        <div>
          <h1>404 - Page not Found</h1>
          <p>
            Either we broke something or you tried to visit a page that
            doesn&apos;t exist.
          </p>
          <p>
            <StyledNextLink href="/">Go back home</StyledNextLink> and try
            again.
          </p>
        </div>
      </Wrapper>
    </>
  );
}

FourOhFour.layout = SiteLayout;
export default FourOhFour;
