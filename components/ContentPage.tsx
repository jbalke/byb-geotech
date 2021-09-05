import Banner from 'components/Banner';
import { Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';

const ContentLayout = styled.div`
  display: block;
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.bp.tablet}) {
    & {
      display: grid;
      grid-template-columns: 4fr 1fr;
      gap: 1.5rem;
    }
  }
`;

const PageContent = styled.section`
  display: grid;
  grid-template-columns: 1fr min(65ch, 100%) 1fr;

  h2 {
    font-size: 2rem;
  }

  ul {
    list-style: disc;
    padding-left: 2.5em;
    margin-top: 1rem;
  }

  li > ul {
    list-style: circle;
    margin: 0.5em 0;
  }

  & > * {
    grid-column: 2;
  }
`;

const RelatedPages = styled.div`
  padding: ${Theme.spacing.l};
  font-size: 14px;
  border: 2px solid ${Theme.color.primaryLight};
  color: ${Theme.color.textAside};

  dt {
    color: ${Theme.color.link};
    margin-bottom: 0;
    font-weight: 200;
    font-family: Rubik;
    font-size: 1.5em;
  }

  dt::after {
    content: ':';
  }

  dl {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
  }

  dd {
    margin-left: 1em;
  }

  dd::after {
    content: ', ';
  }

  dd:last-of-type::after {
    content: '';
  }

  @media screen and (min-width: ${props => props.theme.bp.tablet}) {
    & {
      align-self: start;
      margin-right: auto;
    }

    dt {
      margin-bottom: 0.5em;
    }

    dt::after {
      content: '';
    }

    dl {
      display: block;
      padding-left: 1em;
    }

    dd::marker {
      color: ${Theme.color.link};
      font-size: 1.2em;
    }

    dd::after {
      content: '';
    }
  }
`;

const AsideLayout = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-flow: column nowrap;
  gap: 2rem;

  @media screen and (min-width: ${props => props.theme.bp.tablet}) {
    & {
      align-self: start;
      margin-right: auto;
      position: sticky;
      margin-top: 0;
      top: ${Theme.spacing.l};
    }
  }
`;

const AsideContainer = styled.div`
  align-self: center;
  width: fit-content;
`;

type indexProps = {
  title: string;
  relatedPages: React.ReactNode;
  aside?: React.ReactNode;
  children: React.ReactNode;
};

function ContentPage({ title, relatedPages, aside, children }: indexProps) {
  return (
    <>
      <Banner title={title} />
      <Wrapper main padding="xl">
        <ContentLayout>
          <PageContent>{children}</PageContent>
          <AsideLayout>
            <RelatedPages>{relatedPages}</RelatedPages>
            <AsideContainer>{aside}</AsideContainer>
          </AsideLayout>
        </ContentLayout>
      </Wrapper>
    </>
  );
}

export default ContentPage;
