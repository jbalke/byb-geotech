import React from 'react';
import { DropdownSection, Heading, Icon } from './Components';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import StyledNextLink from 'components/StyledNextLink';

const ServicesDropdownEl = styled.div`
  width: 30rem;
`;

const Logo = styled.div<{ color: string }>`
  width: 38px;
  height: 38px;
  margin-right: 16px;
  border-radius: 100%;
  opacity: 0.6;
  background-color: ${({ color }) => `var(--color-${color})`};
`;

const SubServicesList = styled.ul`
  li {
    display: flex;
    margin-bottom: 1rem;
  }
  h3 {
    margin-right: 1rem;
    width: 3.2rem;
    display: block;
  }
  a {
    color: ${Theme.color.darkGrey};
  }
`;

const ServicesSection = styled.ul`
  li {
    display: flex;
  }
`;

const WorksWithStripe = styled.div`
  border-top: 2px solid ${Theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${Theme.spacing.spacer};
  padding-top: ${Theme.spacing.spacer};

  h3 {
    margin-bottom: 0;
  }
`;

type ServicesDropdownProps = {};

function ServicesDropdown(props: ServicesDropdownProps) {
  return (
    <ServicesDropdownEl>
      <DropdownSection>
        <ServicesSection>
          <li>
            <div>
              <Logo color='blue' />
            </div>
            <div>
              <Heading color='blue'>Payments</Heading>
              <p>A complete payments platform</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color='green' />
            </div>
            <div>
              <Heading color='green'>Billing</Heading>
              <p>Build and scale your recurring business model</p>
            </div>
          </li>
          <li>
            <div>
              <Logo color='teal' />
            </div>
            <div>
              <Heading color='teal'>Connect</Heading>
              <p style={{ marginBottom: 0 }}>
                Everything platforms need to get sellers paid
              </p>
            </div>
          </li>
        </ServicesSection>
      </DropdownSection>
      <DropdownSection>
        <SubServicesList>
          <li>
            <Heading noMarginBottom>Sigma</Heading>
            <div>Your business data at your fingertips.</div>
          </li>
          <li>
            <Heading noMarginBottom>Atlas</Heading>
            <div>The best way to start an internet business.</div>
          </li>
          <li>
            <Heading noMarginBottom>Radar</Heading>
            <div>Fight fraud with machine learning.</div>
          </li>
        </SubServicesList>
        <WorksWithStripe>
          <Heading noMarginBottom>
            <StyledNextLink href='/'>
              <Icon /> Works with Stripe
            </StyledNextLink>
          </Heading>
        </WorksWithStripe>
      </DropdownSection>
    </ServicesDropdownEl>
  );
}

export default ServicesDropdown;
