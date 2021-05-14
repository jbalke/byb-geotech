import { Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import Banner from 'components/Banner';

type Props = {};

function OurStory(props: Props) {
  return (
    <>
      <Banner title='Our Story' />
      <Wrapper maxWidth='70ch' main>
        <div>
          <p>
            With our small drilling rig mounted on the back of a very
            manoeuvrable light truck, we can drill in your back yard (or front
            yard) to find water for any purpose.
          </p>
          <p>
            With our large drilling rig (operated by our sister company) we can
            drill your rock bore for stock, domestic and irrigation use (up to
            300mm diameter)
          </p>
        </div>
      </Wrapper>
    </>
  );
}

OurStory.layout = SiteLayout;
export default OurStory;
