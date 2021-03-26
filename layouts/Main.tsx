import Head from 'next/head';
import { ReactNode } from 'react';
import styled from 'styled-components';
import ActiveLink from '../components/ActiveLink';
import NavBar from '../components/NavBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
      <NavBar />
      <StyledMain>{children}</StyledMain>
      <footer>footer</footer>
    </Wrapper>
  );
};

export default Main;
