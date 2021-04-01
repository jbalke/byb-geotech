import React from 'react';
import styled from 'styled-components';
import { DropdownSection, Heading, Icon, LinkList } from './Components';
import StyledNextLink from 'components/StyledNextLink';

const CompanyDropdownEl = styled.div`
  width: 18.5rem;
`;

type CompanyDropdownProps = {};

function CompanyDropdown(props: CompanyDropdownProps) {
  return (
    <CompanyDropdownEl>
      <DropdownSection data-first-dropdown-section>
        <ul>
          <Heading as='li'>
            <StyledNextLink href='/'>
              <Icon /> About Stripe
            </StyledNextLink>
          </Heading>
          <Heading as='li'>
            <StyledNextLink href='/'>
              <Icon />
              Customers
            </StyledNextLink>
          </Heading>
          <Heading as='li'>
            <StyledNextLink href='/'>
              <Icon />
              Jobs
            </StyledNextLink>
          </Heading>
          <Heading as='li' noMarginBottom>
            <StyledNextLink href='/'>
              <Icon />
              Environment
            </StyledNextLink>
          </Heading>
        </ul>
      </DropdownSection>
      <DropdownSection>
        <div>
          <Heading>
            <Icon />
            From the Blog
          </Heading>
          <LinkList marginLeft='25px'>
            <li>
              <StyledNextLink href='/'>Stripe Atlas &rsaquo;</StyledNextLink>
            </li>
            <li>
              <StyledNextLink href='/'>Stripe Home &rsaquo;</StyledNextLink>
            </li>
            <li>
              <StyledNextLink href='/'>Fraud Detection &rsaquo;</StyledNextLink>
            </li>
          </LinkList>
        </div>
      </DropdownSection>
    </CompanyDropdownEl>
  );
}

export default CompanyDropdown;
