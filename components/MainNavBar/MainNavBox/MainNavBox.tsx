import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import StyledNextLink from 'components/StyledNextLink';

const LinkWrapper = styled(StyledNextLink)`
  flex-flow: column nowrap;
`;

const MainNavBoxDescription = styled.div`
  color: ${Theme.color.primaryLight};
  font-size: 0.8rem;
`;

const MainNavBoxImage = styled.img`
  border-radius: 4px;
  width: 100px;
  object-fit: cover;
  object-position: center;
`;

const MainNavBoxTitle = styled.strong`
  color: ${Theme.color.white};
  display: block;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  margin-bottom: 7px;
  margin-top: 15px;
  text-transform: uppercase;
  text-align: center;
`;

const Wrapper = styled.div`
  padding: 30px 17px;
`;

type MainNavigationBoxProps = {
  description: string;
  imageSrc: string;
  title: string;
  url: string;
};

function MainNavBox({
  description,
  imageSrc,
  title,
  url,
}: MainNavigationBoxProps): ReactElement {
  return (
    <Wrapper>
      <LinkWrapper href={url}>
        <MainNavBoxImage src={imageSrc} alt='' />
        <MainNavBoxTitle>{title}</MainNavBoxTitle>
        <MainNavBoxDescription>{description}</MainNavBoxDescription>
      </LinkWrapper>
    </Wrapper>
  );
}

export default MainNavBox;
