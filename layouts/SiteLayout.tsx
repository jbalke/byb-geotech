import MainNavBar from 'components/MainNavBar';
import { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import ExtrasSection from '../components/ExtrasSection';
import { StyledLink } from '../components/Link';
``;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  position: relative;
  width: 100%;
`;

const StyledMain = styled.main`
  background-color: ${Theme.color.textBackground};
  color: ${Theme.color.text};
  flex: 1;
  transition: ${Theme.color.transition};
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  color: ${Theme.color.darkGrey};
  background-color: ${Theme.color.black};
  transition: ${Theme.color.transition};
  padding: 5px;

  ${StyledLink} {
    --link-color: ${Theme.color.grey};
  }
`;

type PageProps = { children: ReactNode };

const SiteLayout = ({ children }: PageProps) => {
  return (
    <>
      <Container>
        <MainNavBar />
        <StyledMain id="main-content">{children}</StyledMain>
        <ExtrasSection />
        <StyledFooter>
          <small>
            Copyright &copy; {new Date().getFullYear()} Backyard Bores & Geotech
            Drilling Pty Ltd
          </small>
          <small>
            Created by{' '}
            <StyledLink href="https://portfolio.johnbalke.com">
              John Balke
            </StyledLink>
          </small>
        </StyledFooter>
      </Container>
    </>
  );
};

export const getLayout = (page: ReactElement) => (
  <SiteLayout>{page}</SiteLayout>
);
export default SiteLayout;
