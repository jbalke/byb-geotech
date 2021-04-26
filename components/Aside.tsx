import React from 'react';
import styled from 'styled-components';
import { BsInfoCircle } from 'react-icons/bs';
import { Theme } from 'styles/theme';

const Container = styled.aside`
  color: ${Theme.color.text};
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

type AsideProps = {
  children: React.ReactNode;
  className?: string;
};

function Aside({ children, className }: AsideProps) {
  return (
    <Container className={className}>
      <IconWrapper>
        <BsInfoCircle />
      </IconWrapper>
      {children}
    </Container>
  );
}

export default Aside;
