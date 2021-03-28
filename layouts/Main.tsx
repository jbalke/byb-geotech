import Head from 'next/head';
import { ReactNode } from 'react';
import styled from 'styled-components';
import MainNavBar from 'components/MainNavBar';
import { Wrapper } from 'components/styled';
import SkipToMain from '../components/SkipToMain';

const StyledMain = styled.main`
  flex: 1;
`;

type PageProps = { children: ReactNode; title: string };

const Main = ({ children, title = 'Page Title' }: PageProps) => {
  return (
    <Wrapper maxWidth='initial' main>
      <Head>
        <title>{title}</title>
      </Head>
      <SkipToMain href='#main-content' />
      <MainNavBar />
      <StyledMain id='main-content'>{children}</StyledMain>
      <footer>footer</footer>
    </Wrapper>
  );
};

export default Main;
