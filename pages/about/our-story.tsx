import React from 'react';
import styled from 'styled-components';
import SiteLayout from 'layouts/SiteLayout';
import { Wrapper } from 'components/styled';

type Props = {};

function OurStory(props: Props) {
  return (
    <Wrapper maxWidth='80ch'>
      <h1>Our Story</h1>
      <p>
        With our small drilling rig mounted on the back of a very manoeuvrable
        light truck, we can drill in your back yard (or front yard) to find
        water for any purpose.
        <p>
          With our large drilling rig (operated by our sister company) we can
          drill your rock bore for stock, domestic and irrigation use (up to
          300mm diameter)
        </p>
      </p>
    </Wrapper>
  );
}

OurStory.layout = SiteLayout;
export default OurStory;
