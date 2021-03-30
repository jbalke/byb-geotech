import { ExtraLink } from 'data/main-navigation';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px 30px 30px 17px;
  box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.3);

  > div > a {
    color: ${Theme.color.white};
    display: block;
    font-weight: 500;
    padding: 9px 0;
    text-decoration: none;
    white-space: nowrap;
  }

  > div > a:hover {
    color: ${Theme.color.primaryLight};
  }

  > div > hr {
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

type MainNavBoxExtrasProps = {
  links: ExtraLink[];
};

function MainNavBoxExtras({ links }: MainNavBoxExtrasProps) {
  return (
    <Wrapper>
      <div>
        {links.map((linkOrSeparator, index) => {
          if (linkOrSeparator) {
            return (
              <Link key={index} href={linkOrSeparator.to}>
                <a>{linkOrSeparator.label}</a>
              </Link>
            );
          }
          return <hr key={index} />;
        })}
      </div>
    </Wrapper>
  );
}

export default MainNavBoxExtras;
