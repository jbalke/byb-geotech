import React from 'react';
import SiteLayout from 'layouts/SiteLayout';
import styled from 'styled-components';
import { Wrapper } from 'components/styled';
import Banner from '../components/Banner';
import { Theme } from '../styles/theme';

const Welcome = styled.h2`
  font-size: 5rem;
  font-weight: 700;
  color: ${Theme.color.primary};
  margin: 0;
`;

const SubText = styled.p`
  font-size: 1.5rem;
  line-height: 1.2em;
`;

type InformationRequestProps = {};

function InformationRequest(props: InformationRequestProps) {
  return (
    <>
      <Banner title='Information Request' />
      <Wrapper maxWidth='70ch' main>
        <div>
          <Welcome>Hello!</Welcome>
          <SubText>
            Want more information about bore drilling? We&apos;ve received your
            request and one of our drillers will contact you soon to answer any
            questions you may have and offer an obligation free quote!
          </SubText>
        </div>
      </Wrapper>
    </>
  );
}

InformationRequest.layout = SiteLayout;
export default InformationRequest;
