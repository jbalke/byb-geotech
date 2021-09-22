import Banner from 'components/Banner';
import { Wrapper } from 'components/styled';
import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { BREAKPOINTS } from 'styles/style-constants';
import StyledNextLink from './Link/StyledNextLink';

const ContentLayout = styled.div`
  display: block;
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    & {
      display: grid;
      grid-template-columns: auto 250px;
      gap: 1.5rem;
    }
  }
`;

const PageContent = styled.div`
  display: grid;
  grid-template-columns: 1fr min(65ch, 100%) 1fr;

  h2 {
    font-size: ${Theme.font.fs600};
  }

  h3 {
    font-size: ${Theme.font.fs500};
  }

  @media screen and (min-width: ${BREAKPOINTS.desktop}) {
    h2 {
      font-size: ${Theme.font.fs700};
    }
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

  section + section {
    margin-top: 1em;
  }
`;

const AsideLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    & {
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

const RelatedPages = styled.div`
  width: fit-content;
  margin-inline: auto;
  padding: ${Theme.spacing.l};
  font-size: ${Theme.font.fs300};
  border: 2px solid ${Theme.color.primaryLight};
  color: ${Theme.color.textAside};
  text-transform: capitalize;

  dl {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
  }

  dt {
    color: ${Theme.color.link};
    margin-bottom: 0;
    line-height: unset;
    font-weight: 400;
    font-size: 1.1rem;
  }

  dt::after {
    content: ':';
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

  @media screen and (min-width: ${BREAKPOINTS.tablet}) {
    & {
      width: 100%;
    }

    dl {
      display: block;
    }

    dt {
      font-size: 1.5em;
      margin-bottom: 0.5em;
    }

    dt::after {
      content: '';
    }

    dd::marker {
      color: ${Theme.color.link};
      font-size: 1.2em;
    }

    dd::after {
      content: '';
    }

    dd + dd {
      margin-top: 0.4em;
    }
  }

  @media print {
    & {
      display: none;
    }
  }
`;

export interface RelatedPage {
  label: string;
  href: string;
}

type indexProps = {
  title: string;
  relatedPages: RelatedPage[];
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
            <RelatedPages>
              <dl>
                <dt>Related Pages</dt>
                {relatedPages.map(page => (
                  <dd key={page.label}>
                    <StyledNextLink href={page.href}>
                      {page.label}
                    </StyledNextLink>
                  </dd>
                ))}
              </dl>
            </RelatedPages>
            <AsideContainer>{aside}</AsideContainer>
          </AsideLayout>
        </ContentLayout>
      </Wrapper>
    </>
  );
}

export default ContentPage;
