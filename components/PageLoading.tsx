import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Theme } from '../styles/theme';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  display: grid;
  place-items: center;

  background: rgba(0, 0, 0, 0.8);

  svg {
    width: 240px;
    height: 240px;
  }

  svg text {
    font-family: 'Public Sans';
    font-size: 2px;
    font-weight: 800;
    letter-spacing: 0.6em;
  }
`;

function PageLoading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  if (!loading) return null;

  return (
    <Modal aria-live='polite' aria-busy='true' aria-label='loading'>
      <svg
        version='1.1'
        id='dc-spinner'
        xmlns='http://www.w3.org/2000/svg'
        x='0px'
        y='0px'
        width='38'
        height='38'
        viewBox='0 0 38 38'
        preserveAspectRatio='xMinYMin meet'
        aria-label='Loading'
      >
        <text x='12' y='21' fill='grey'>
          LOADING
          <animate
            attributeName='opacity'
            values='0;1;0'
            dur='1.8s'
            repeatCount='indefinite'
          />
        </text>
        <path
          fill='#373a42'
          d='M20,35c-8.271,0-15-6.729-15-15S11.729,5,20,5s15,6.729,15,15S28.271,35,20,35z M20,5.203
    C11.841,5.203,5.203,11.841,5.203,20c0,8.159,6.638,14.797,14.797,14.797S34.797,28.159,34.797,20
    C34.797,11.841,28.159,5.203,20,5.203z'
        ></path>

        <path
          fill='#373a42'
          d='M20,33.125c-7.237,0-13.125-5.888-13.125-13.125S12.763,6.875,20,6.875S33.125,12.763,33.125,20
    S27.237,33.125,20,33.125z M20,7.078C12.875,7.078,7.078,12.875,7.078,20c0,7.125,5.797,12.922,12.922,12.922
    S32.922,27.125,32.922,20C32.922,12.875,27.125,7.078,20,7.078z'
        ></path>

        <path
          fill={Theme.color.primaryLight}
          stroke={Theme.color.primaryLight}
          strokeWidth='0.6027'
          strokeMiterlimit='10'
          d='M5.203,20
			c0-8.159,6.638-14.797,14.797-14.797V5C11.729,5,5,11.729,5,20s6.729,15,15,15v-0.203C11.841,34.797,5.203,28.159,5.203,20z'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 20 20'
            to='360 20 20'
            calcMode='spline'
            keySplines='0.4, 0, 0.2, 1'
            keyTimes='0;1'
            dur='2s'
            repeatCount='indefinite'
          />
        </path>

        <path
          fill={Theme.color.primary}
          stroke={Theme.color.primary}
          strokeWidth='0.2027'
          strokeMiterlimit='10'
          d='M7.078,20
  c0-7.125,5.797-12.922,12.922-12.922V6.875C12.763,6.875,6.875,12.763,6.875,20S12.763,33.125,20,33.125v-0.203
  C12.875,32.922,7.078,27.125,7.078,20z'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            from='0 20 20'
            to='360 20 20'
            dur='1.8s'
            repeatCount='indefinite'
          />
        </path>
      </svg>
    </Modal>
  );
}

export default PageLoading;
