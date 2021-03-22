import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';
import styled from 'styled-components';
import ActiveLink from '../components/ActiveLink';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
`;

const PrimaryNav = styled.nav`
  background-color: lightgray;
  color: white;

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    padding: 5px;
    list-style-type: none;
    width: 100%;
  }

  li {
  }
`;

const StyledLink = styled.a`
  display: inline-block;
  position: relative;
  text-decoration: none;
  padding: 0.25em;

  &:visited {
    color: inherit;
  }

  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: currentColor;
    bottom: 0;
    left: 0;
    opacity: 0;
    transform: translateY(0.25em);
    transition: transform 150ms ease-out, opacity 150ms ease-out;
  }
  &:hover::after,
  &:active::after,
  &.active::after {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledMain = styled.main`
  flex: 1;
`;

type PageProps = { children: ReactNode; title: string };

const Main = ({ children, title = 'Page Title' }: PageProps) => {
  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <PrimaryNav>
          <ul>
            <li>
              <ActiveLink activeClassName='active' href='/'>
                <StyledLink>Home</StyledLink>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName='active' href='/bore-search'>
                <StyledLink>Search</StyledLink>
              </ActiveLink>
            </li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </PrimaryNav>
      </header>
      <StyledMain>{children}</StyledMain>
      <footer>footer</footer>
    </Wrapper>
  );
};

export default Main;
