import React from 'react';
import { Theme } from '../styles/theme';
import PromotionSection from './PromotionSection';

type Props = {};

function BoreSearchSection(props: Props) {
  return (
    <PromotionSection
      href='/bore-search'
      label='Bore Search'
      bgColor={Theme.color.darkGrey}
    >
      <div>
        <h2>
          Search for <span>Bores Near You!</span>
        </h2>
        <p>
          Want your own bore but have no idea whether you&apos;ll strike water?
          Try our FREE Bore Search to locate bores near you!
        </p>
      </div>
    </PromotionSection>
  );
}

export default BoreSearchSection;
