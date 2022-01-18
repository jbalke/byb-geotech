import React from 'react';
import { ExternalLink } from './Link';
import { Disclaimer } from './styled';

type PrivacyDisclaimerProps = { className?: string };

function PrivacyDisclaimer({ className }: PrivacyDisclaimerProps) {
  return (
    <Disclaimer className={className}>
      <h2>Privacy Act 1998</h2>
      <p>
        Backyard Bores has registered as an opt in small business for the
        Privacy Act 1998 and we have committed to uphold relevant sections of
        the act and how we deal with your information.
      </p>
      <p>
        For more information please see the{' '}
        <strong>Office of the Australian Information Commissioner</strong>{' '}
        <ExternalLink
          href="https://www.oaic.gov.au/privacy/the-privacy-act/"
          label="here"
          target="_blank"
        />
        .
      </p>
      <p>
        You can read our Privacy Policy{' '}
        <ExternalLink
          label="here"
          href="/resources/BBD-ENV_POL_&_PROC.pdf"
          target="_blank"
        />
        .
      </p>
    </Disclaimer>
  );
}

export default PrivacyDisclaimer;
