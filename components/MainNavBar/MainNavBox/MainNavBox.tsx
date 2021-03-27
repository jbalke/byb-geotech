import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 30px 17px;
  width: 146px;
`;

type MainNavigationBoxProps = {
  imageSrc: string;
};

function MainNavBox({ imageSrc }: MainNavigationBoxProps): ReactElement {
  return (
    <Wrapper>
      <img src={imageSrc} alt='' />
    </Wrapper>
  );
}

export default MainNavBox;
