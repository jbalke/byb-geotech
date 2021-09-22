import React from 'react';
import styled from 'styled-components';
import { BREAKPOINTS } from 'styles/style-constants';
import { Theme } from 'styles/theme';
import { usefulLinks } from '../data/useful-links';
import ActiveLink from './ActiveLink';
import { StyledLink } from './Link';
import { Wrapper } from './styled';

const Container = styled.section`
  background-color: #19191e;
  color: ${Theme.color.white};
  padding: 3rem 0;
  font-size: 0.9rem;
  font-weight: 200;
  letter-spacing: 0.06em;
`;

const CompanyInfo = styled.div`
  width: 100%;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 30%;
    min-width: 300px;
  }
`;

const Title = styled.span`
  font-size: 1rem;
  font-weight: 600;
  color: ${Theme.color.primaryLight};
`;

const UsefulLinks = styled.div`
  width: 100%;

  dl {
    margin: 0;
  }

  dt {
    color: inherit;
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    position: relative;
    text-transform: uppercase;
  }

  dt::after {
    content: '';

    height: 0;
    width: 0;

    border-color: ${Theme.color.primary} transparent transparent;
    border-style: solid;
    border-width: 10px;

    position: absolute;
    bottom: 0;
  }

  dd {
    font-size: 1rem;
    margin-inline-start: 0.5em;
  }

  ${StyledLink} {
    display: inline-block;
    font-weight: normal;
    padding: 0.5em 0;
    color: inherit;
    box-shadow: none;

    @media (hover: hover) {
      &:hover {
        box-shadow: none;
        color: ${Theme.color.primaryLight};

        transition: ${Theme.color.transition};
      }
    }
  }

  .active${StyledLink} {
    color: ${Theme.color.primary};
  }

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: auto;
    min-width: 300px;
  }

  @media print {
    & {
      display: none;
    }
  }
`;

type ExtrasSectionsProps = {};

function ExtrasSection(props: ExtrasSectionsProps) {
  return (
    <Container>
      <Wrapper row gap="2rem">
        <CompanyInfo>
          <Title>Backyard Bores Pty Ltd</Title>
          <p>
            Your water bore and geotech drilling specialists since 2002.
            Covering Mackay from Bowen to Rockhampton and west to Clermont.
          </p>
          <p>
            We have drilled 3x more groundwater monitoring wells in Mackay than
            any other drilling company.
          </p>
        </CompanyInfo>
        <UsefulLinks>
          <dl>
            <dt>Useful Links</dt>
            {usefulLinks.map((link, i) => (
              <dd key={i}>
                <ActiveLink activeClassName="active" href={link.href}>
                  <StyledLink>{link.label}</StyledLink>
                </ActiveLink>
              </dd>
            ))}
          </dl>
        </UsefulLinks>
      </Wrapper>
    </Container>
  );
}

export default ExtrasSection;
