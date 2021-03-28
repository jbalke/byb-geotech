import styled from 'styled-components';
import { SubLinks } from 'data/main-navigation';
import MainNavBox from 'components/MainNavBar/MainNavBox';

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 0 20px 0 13px;
`;

type MainNavBoxesProps = {
  subLinks: SubLinks;
};
function MainNavBoxes({ subLinks }: MainNavBoxesProps) {
  return (
    <Wrapper>
      {subLinks.map((link) => (
        <MainNavBox
          key={link.label}
          description='TBD'
          imageSrc='http://placekitten.com/300'
          title={link.label}
          url={link.url}
        />
      ))}
    </Wrapper>
  );
}

export default MainNavBoxes;
