import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Theme } from '../styles/theme';

const Sweep = keyframes`
    from {
      opacity: 0; margin-top: -5px;
    }
    to {
      opacity: 1; margin-top: 0;
    }
`;

const StyledSummary = styled.summary`
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.color.primary};
  border-radius: 0.3em;
  color: ${Theme.color.white};
  cursor: pointer;
  display: flex;
  font-family: 'Rubik', sans-serif;
  font-weight: 600;
  letter-spacing: 0.08em;
  list-style: none;
  margin-bottom: 1em;
  padding: 1em;
  transition: filter 300ms;

  &:hover {
    filter: brightness(1.2);
  }

  &::marker {
    display: none;
  }

  &::after {
    content: '';
    background: url('/chevron-right.svg');
    width: 24px;
    height: 24px;
    transition: 300ms;
  }
`;

const StyledDetails = styled.details`
  &[open] ${StyledSummary} ~ * {
    animation: ${Sweep} 0.25s ease-out;
  }

  &[open] ${StyledSummary}::marker {
    display: none;
  }

  &[open] ${StyledSummary}::after {
    transform: rotate(90deg);
  }
`;

type Question = {
  answer: string;
  children?: never;
};

type FAQProps = { id?: string; question: string; isOpen?: boolean } & (
  | { children: React.ReactNode; answer?: never }
  | Question
);

function FAQ({ id, question, answer, children, isOpen = false }: FAQProps) {
  return (
    <StyledDetails id={id} open={isOpen}>
      <StyledSummary>{question}</StyledSummary>
      {children || answer}
    </StyledDetails>
  );
}

export default FAQ;
