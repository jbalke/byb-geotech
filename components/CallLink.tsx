import React from 'react';
import { PHONE } from '../constants';
import { StyledLink } from './Link';

type CallLinkProps = {};

function CallLink(props: CallLinkProps) {
  return (
    <StyledLink href={`tel:${PHONE.MAIN.NUMBER}`}>
      {PHONE.MAIN.DISPLAY}
    </StyledLink>
  );
}

export default CallLink;
