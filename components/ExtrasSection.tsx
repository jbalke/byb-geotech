import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import ActiveLink from './ActiveLink';
import { StyledLink } from './Link';
import { Wrapper } from './styled';
import { usefulLinks } from '../data/useful-links';

const Container = styled.section`
  background-color: #19191e;
  color: ${Theme.color.white};
  padding: 3rem 0;

  font-size: 0.8rem;
`;

const CompanyInfo = styled.div`
  width: 100%;

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
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

  h3 {
    font-size: 1.5rem;
    letter-spacing: 0.1em;
    position: relative;
    text-transform: uppercase;
  }

  h3::after {
    content: '';

    height: 0;
    width: 0;

    border-color: ${Theme.color.primary} transparent transparent;
    border-style: solid;
    border-width: 10px;

    position: absolute;
    bottom: 0;
  }

  ul {
    list-style-type: disc;
    padding-left: 1rem;
  }

  ul li {
    font-size: 1rem;
  }

  ul li::marker {
    color: ${Theme.color.primaryLight};
  }

  ${StyledLink} {
    display: block;
    font-weight: normal;
    padding: 0.3rem 0.5rem 0.8rem 0;
    box-shadow: none;

    &,
    &:visited {
      color: inherit;
    }

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

  @media (min-width: ${(props) => props.theme.bp.tablet}) {
    width: auto;
    min-width: 300px;
  }
`;

type ExtrasSectionsProps = {};

function ExtrasSection(props: ExtrasSectionsProps) {
  return (
    <Container>
      <Wrapper row gap='2rem'>
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
          <h3>Useful Links</h3>
          <ul>
            {usefulLinks.map((link, i) => (
              <li key={i}>
                <ActiveLink activeClassName='active' href={link.href}>
                  <StyledLink>{link.label}</StyledLink>
                </ActiveLink>
              </li>
            ))}
          </ul>
        </UsefulLinks>
      </Wrapper>
    </Container>
  );
}

export default ExtrasSection;
