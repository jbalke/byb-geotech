import React from 'react';
import Banner from '../components/Banner';
import StyledNextLink from '../components/Link/StyledNextLink';
import { Wrapper } from '../components/styled';
import SiteLayout from '../layouts/SiteLayout';

function FourOhFour() {
  return (
    <>
      <Banner title='Oops...' />
      <Wrapper main padding={'xl'}>
        <div>
          <h1>404 - Page Not Found</h1>
          <StyledNextLink href='/'>Go back home</StyledNextLink>
        </div>
      </Wrapper>
    </>
  );
}

FourOhFour.layout = SiteLayout;
export default FourOhFour;
