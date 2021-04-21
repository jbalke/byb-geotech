import React from 'react';
import SiteLayout from 'layouts/SiteLayout';
import styled from 'styled-components';
import { Wrapper } from 'components/styled';

const Welcome = styled.div`
  font-size: 5rem;
  font-weight: 700;
`;

const SubText = styled.p`
  font-size: 1.5rem;
`;

type InformationRequestProps = {};

function InformationRequest(props: InformationRequestProps) {
  return (
    <Wrapper maxWidth='80ch'>
      <Welcome>Hello!</Welcome>
      <SubText>
        Want more information about bore drilling? One of our drillers will
        contact you soon to answer any questions you may have and offer an
        obligation free quote.
      </SubText>
    </Wrapper>
  );
}

InformationRequest.layout = SiteLayout;
export default InformationRequest;
