import React from 'react';
import styled from 'styled-components';
import { Icon, DropdownSection, Heading, LinkList } from './Components';
import StyledNextLink from 'components/StyledNextLink';

const DevelopersDropdownEl = styled.div`
  width: 25rem;
`;

const Flex = styled.div`
  display: flex;

  > div:first-of-type {
    margin-right: 48px;
  }
`;

const DevelopersDropdown = () => {
  return (
    <DevelopersDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <div>
          <Heading>Documentation</Heading>
          <p>Start integrating Stripe&rsquo;s products and tools</p>
          <Flex>
            <div>
              <h4>Get Started</h4>
              <LinkList>
                <li>
                  <StyledNextLink href='/'>Elements</StyledNextLink>
                </li>
                <li>
                  <StyledNextLink href='/'>Checkout</StyledNextLink>
                </li>
                <li>
                  <StyledNextLink href='/'>Mobile apps</StyledNextLink>
                </li>
              </LinkList>
            </div>
            <div>
              <h4>Popular Topics</h4>
              <LinkList>
                <li>
                  <StyledNextLink href='/'>Apple Pay</StyledNextLink>
                </li>
                <li>
                  <StyledNextLink href='/'>Testing</StyledNextLink>
                </li>
                <li>
                  <StyledNextLink href='/'>Launch Checklist</StyledNextLink>
                </li>
              </LinkList>
            </div>
          </Flex>
        </div>
      </DropdownSection>
      <DropdownSection>
        <ul>
          <Heading as='li'>
            <StyledNextLink href='/'>
              <Icon /> Full API Reference
            </StyledNextLink>
          </Heading>
          <Heading as='li'>
            <StyledNextLink href='/'>
              <Icon /> API Status
            </StyledNextLink>
          </Heading>
          <Heading noMarginBottom as='li'>
            <StyledNextLink href='/'>
              <Icon /> Open Source
            </StyledNextLink>
          </Heading>
        </ul>
      </DropdownSection>
    </DevelopersDropdownEl>
  );
};

export default DevelopersDropdown;
