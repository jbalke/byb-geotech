import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { BORE_COLOR_SCALE } from '../../constants';

const DepthScaleContainer = styled.div`
  background-color: ${Theme.color.white};
  color: ${Theme.color.black};
  display: flex;
  font-size: 0.8rem;
  flex-flow: column nowrap;
  gap: 2px;
  position: absolute;
  right: 20px;
  top: 20px;
  min-height: 100px;
  min-width: 30px;
  opacity: 0.8;
  padding: 3px;
`;

const DepthContainer = styled.div`
  display: grid;
  gap: 2px;
  grid-template-columns: 1fr 1fr;
`;

const DepthTitle = styled.div`
  text-align: center;
`;

type DepthScaleProps = {
  show: boolean;
};

function DepthScale({ show }: DepthScaleProps) {
  if (!show) return null;

  return (
    <DepthScaleContainer>
      <DepthTitle>
        <strong>Depth (m)</strong>
      </DepthTitle>
      {Object.entries(BORE_COLOR_SCALE).map((d, index) => {
        let label = '';

        switch (d[0]) {
          case '0':
            label = '< 10';
            break;
          case '10':
            label = '10-20';
            break;
          case '20':
            label = '20-30';
            break;

          default:
            label = '> 30';
            break;
        }
        return (
          <DepthContainer key={index}>
            <div>{label}</div>
            <div style={{ backgroundColor: d[1] }}></div>
          </DepthContainer>
        );
      })}
    </DepthScaleContainer>
  );
}

export default DepthScale;
