import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import styled, { keyframes } from 'styled-components';
import { Theme } from '../styles/theme';

const StyledAccordionButton = styled(AccordionItemButton)`
  background-color: ${Theme.color.primary};
  color: ${Theme.color.white};
  cursor: pointer;
  font-family: 'Poppins';
  letter-spacing: 0.1em;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: 1px solid ${Theme.color.textBackground};
  border-radius: 0.3em;
  transition: filter 300ms;

  @supports (font-variation-settings: normal) {
    font-family: 'Rubik';
    font-weight: 600;
  }

  ::before {
    display: inline-block;
    content: '';
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
    transition: transform 300ms;
  }

  :hover {
    filter: brightness(1.2);
  }
`;
const StyledAccordionItem = styled(AccordionItem)``;
export const StyledAccordion = styled(Accordion)`
  ${StyledAccordionItem} + ${StyledAccordionItem} {
    margin-top: 0.5rem;
  }

  ${StyledAccordionButton}[aria-expanded='true']::before,
  ${StyledAccordionButton}[aria-selected='true']::before {
    transform: rotate(45deg);
  }

  [hidden] {
    display: none;
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;
const StyledAccordionPanel = styled(AccordionItemPanel)`
  padding: 1em;
  animation: ${FadeIn} 0.35s ease-in;
`;

type FAQProps = {
  id?: string;
  question: string;
  children: React.ReactNode;
  isOpen?: boolean | undefined;
  uuid?: string;
};

function FAQ({ id, question, children, isOpen = undefined, uuid }: FAQProps) {
  return (
    <StyledAccordionItem id={id} uuid={uuid} dangerouslySetExpanded={isOpen}>
      <AccordionItemHeading aria-level={2}>
        <StyledAccordionButton>{question}</StyledAccordionButton>
      </AccordionItemHeading>
      <StyledAccordionPanel>{children}</StyledAccordionPanel>
    </StyledAccordionItem>
  );
}

export default FAQ;
