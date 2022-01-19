import React from 'react';
import Banner from '../components/Banner';
import StyledNextLink from '../components/Link/StyledNextLink';
import { Wrapper } from '../components/styled';
import SiteLayout from '../layouts/SiteLayout';

function Custom500() {
  return (
    <>
      <Banner title="Oh Bugga..." />
      <Wrapper main padding={'xl'}>
        <div>
          <h1>Something happened and it wasn&apos;t good...</h1>
          <p>
            Please try again later or if the problem persists, give us a shout
            by phone or email.
          </p>
          <StyledNextLink href="/">Go back home</StyledNextLink>
        </div>
      </Wrapper>
    </>
  );
}

Custom500.layout = SiteLayout;
export default Custom500;
