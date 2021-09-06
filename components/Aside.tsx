import React from 'react';
import styled from 'styled-components';
import { BsInfoCircle, BsQuestionCircle } from 'react-icons/bs';
import { Theme } from 'styles/theme';
import { StyledLink } from './Link';
import { IconType } from 'react-icons';

const Container = styled.aside`
  color: ${Theme.color.textAside};
  background-color: ${Theme.color.asideBackground};
  border-left: 3px solid ${Theme.color.primary};
  font-family: 'Rubik', sans-serif;
  margin-top: 1em;
  padding: 1em 2em;
  position: relative;
  transition: ${Theme.color.transition};

  h1,
  h2,
  h3 {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  ${StyledLink} {
    color: ${Theme.color.link};
    box-shadow: 0px 1px 0px ${Theme.color.link};
    transition: box-shadow 300ms;

    @media (hover: hover) {
      & {
        color: ${Theme.color.textAside};
      }
      &:hover {
        box-shadow: 0px 2px 0px ${Theme.color.link};
        transition: box-shadow 100ms;
      }
    }
  }
`;

const IconWrapper = styled.div`
  align-items: center;
  background-color: ${Theme.color.textBackground};
  border-radius: 50%;
  color: ${Theme.color.primary};
  display: flex;
  font-size: 1.7em;
  justify-content: center;
  padding: 0.25em;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  transition: ${Theme.color.transition};
`;

type Icons = { readonly [key: string]: JSX.Element };

const icons: Icons = {
  info: <BsInfoCircle />,
  question: <BsQuestionCircle />,
};

type AsideProps = {
  children: React.ReactNode;
  className?: string;
  type?: keyof typeof icons;
};

function Aside({ children, className, type = 'info' }: AsideProps) {
  return (
    <Container className={className}>
      <IconWrapper>{icons[type]}</IconWrapper>
      {children}
    </Container>
  );
}

export default Aside;
