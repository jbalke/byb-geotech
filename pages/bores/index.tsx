import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/Banner';
import StyledNextLink from '../../components/Link/StyledNextLink';
import { Wrapper } from '../../components/styled';
import SiteLayout from '../../layouts/SiteLayout';
import { Theme } from '../../styles/theme';

const ContentLayout = styled.div`
  display: block;
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.bp.tablet}) {
    & {
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 1.5rem;
    }
  }
`;

const PageContent = styled.article`
  display: grid;
  grid-template-columns: 1fr min(65ch, 100%) 1fr;

  & > * {
    grid-column: 2;
  }
`;

const RelatedPages = styled.aside`
  border: 2px solid ${Theme.color.primaryLight};
  color: ${Theme.color.textAside};
  font-size: 12px;
  margin-top: 2rem;
  padding: ${Theme.spacing.l};

  h2 {
    color: ${Theme.color.link};
    font-weight: 200;
    margin-bottom: 0.5em;
  }

  ul {
    display: flex;
    justify-content: center;
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

type indexProps = {};

function index(props: indexProps) {
  return (
    <>
      <Banner title='Bores' />
      <Wrapper main>
        <ContentLayout>
          <PageContent>
            <h2>Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              ullam amet asperiores libero corrupti sapiente, recusandae eos,
              neque fugiat assumenda nostrum id repellat, nobis dolor officia
              accusamus quidem placeat temporibus! Quisquam harum consequatur
              corrupti? Quas, velit porro? Veniam possimus quibusdam sapiente
              enim ut esse blanditiis hic eaque eveniet distinctio consectetur,
              ducimus nostrum asperiores? Harum magni distinctio, cum
              perferendis molestiae accusantium. Tenetur fugiat fugit et error
              quae consequuntur natus sequi ullam aliquid corrupti accusamus
              expedita ut ratione sit non officia, mollitia obcaecati velit
              voluptates distinctio aliquam vero? Quam enim obcaecati modi.
              Quidem cupiditate fugit, officiis mollitia quia impedit animi
              porro neque, quaerat repellat architecto blanditiis, perferendis
              minima. Maxime ipsum nihil exercitationem iste dolorum expedita,
              culpa quaerat enim tempora accusantium aspernatur aliquid?
              Voluptate, ratione. Nam, tempore repellat. Assumenda doloribus
              obcaecati officiis, sunt cum enim modi totam, itaque vitae,
              eligendi fugiat commodi. Eveniet ratione consequatur quos
              exercitationem expedita quam explicabo unde sint necessitatibus.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              tempora repudiandae quis alias ipsam natus eos, animi sequi dicta
              quos quasi vel est velit. Dolorum aliquam iste sit debitis
              blanditiis? Voluptate autem beatae ad aut delectus, esse, officiis
              fuga similique aspernatur quia quos assumenda magnam cum.
              Voluptate minus, aspernatur perspiciatis porro ab accusantium
              possimus atque praesentium? Voluptatibus laudantium iusto
              cupiditate.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              tempora repudiandae quis alias ipsam natus eos, animi sequi dicta
              quos quasi vel est velit. Dolorum aliquam iste sit debitis
              blanditiis? Voluptate autem beatae ad aut delectus, esse, officiis
              fuga similique aspernatur quia quos assumenda magnam cum.
              Voluptate minus, aspernatur perspiciatis porro ab accusantium
              possimus atque praesentium? Voluptatibus laudantium iusto
              cupiditate.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
              tempora repudiandae quis alias ipsam natus eos, animi sequi dicta
              quos quasi vel est velit. Dolorum aliquam iste sit debitis
              blanditiis? Voluptate autem beatae ad aut delectus, esse, officiis
              fuga similique aspernatur quia quos assumenda magnam cum.
              Voluptate minus, aspernatur perspiciatis porro ab accusantium
              possimus atque praesentium? Voluptatibus laudantium iusto
              cupiditate.
            </p>
          </PageContent>
          <RelatedPages>
            <h2>Related Pages</h2>
            <ul>
              <li>
                <StyledNextLink href='/'>Page</StyledNextLink>
              </li>
              <li>
                <StyledNextLink href='/'>Page</StyledNextLink>
              </li>
              <li>
                <StyledNextLink href='/'>Page</StyledNextLink>
              </li>
              <li>
                <StyledNextLink href='/'>Page</StyledNextLink>
              </li>
            </ul>
          </RelatedPages>
        </ContentLayout>
      </Wrapper>
    </>
  );
}

index.layout = SiteLayout;
export default index;
