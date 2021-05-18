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

const PageContent = styled.article`
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

  & > * {
    grid-column: 2;
  }
`;

const RelatedPages = styled.aside`
  border: 2px solid ${Theme.color.primaryLight};
  color: ${Theme.color.textAside};
  font-size: 14px;
  margin-top: 2rem;
  padding: ${Theme.spacing.l};

  h2 {
    color: ${Theme.color.link};
    font-weight: 200;
    margin-bottom: 0.5em;
  }

  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  li {
    margin-left: 1em;
  }

  li::after {
    content: ', ';
  }

  li:last-of-type::after {
    content: '';
  }

  @media screen and (min-width: ${(props) => props.theme.bp.tablet}) {
    & {
      align-self: start;
      box-shadow: ${Theme.color.boxShadow};
      margin-right: auto;
      position: sticky;
      margin-top: 0;
      top: ${Theme.spacing.l};
    }

    ul {
      display: block;
      list-style: disc;
      padding-left: 1em;
    }

    li::marker {
      color: ${Theme.color.link};
      font-size: 1.2em;
    }

    li::after {
      content: '';
    }
  }
`;

type indexProps = {
  title: string;
  relatedPages: React.ReactNode;
  children: React.ReactNode;
};

function ContentPage({ title, relatedPages, children }: indexProps) {
  return (
    <>
      <Banner title={title} />
      <Wrapper main padding='xl'>
        <ContentLayout>
          <PageContent>{children}</PageContent>
          <RelatedPages>
            <h2>Related Pages</h2>
            {relatedPages}
          </RelatedPages>
        </ContentLayout>
      </Wrapper>
    </>
  );
}

ContentPage.layout = SiteLayout;
export default ContentPage;
