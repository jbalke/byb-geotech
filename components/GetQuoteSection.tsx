import React from 'react';
import { Theme } from '../styles/theme';
import PromotionSection from './PromotionSection';

type GetQuoteSectionProps = {};

function GetQuoteSection(props: GetQuoteSectionProps) {
  return (
    <PromotionSection
      href='/request-a-quote'
      label='Request A Quote'
      bgColor={Theme.color.primaryDark}
    >
      <div>
        <h2>
          Request a <span>FREE Quote</span>!
        </h2>
        <p>
          We can help you with all your drilling needs. We also supply and
          repair pumps. Contact us today for an obligation-free quote!
        </p>
      </div>
    </PromotionSection>
  );
}

export default GetQuoteSection;
