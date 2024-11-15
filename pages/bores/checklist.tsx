import ContentPage from 'components/ContentPage';
import StyledNextLink from 'components/Link/StyledNextLink';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled from 'styled-components';
import { Theme } from 'styles/theme';
import { BsCheck2Square } from 'react-icons/bs';
import CallLink from 'components/CallLink';

const PageSection = styled.section``;

const CheckList = styled.section`
  display: grid;
  row-gap: 0.75rem;

  p:first-child {
    margin: 0;
  }
`;

const CheckItemHeading = styled.h2`
  margin: 0;
  border-bottom: 2px solid ${Theme.color.primary};
`;

const StyledCheckItem = styled.div`
  display: grid;
  grid-template-columns: 3fr auto;
  column-gap: 1.25rem;

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
    margin-top: 0.5em;
  }
`;

const CheckItem = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => (
  <StyledCheckItem>
    <div>
      <h3>{title}</h3>
      {children ? children : null}
    </div>
    <div
      css={`
        align-self: start;
        font-size: ${Theme.font.fs700};
        line-height: 0;
        color: ${Theme.color.primaryLightest};
      `}
    >
      <BsCheck2Square display="inline-block" />
    </div>
  </StyledCheckItem>
);

type Props = {};

function index(props: Props) {
  return (
    <ContentPage
      title="New bore checklist"
      description="A handy checklist for getting ready for a new bore to be drilled."
      relatedPages={[
        { label: 'Water Bore Drilling', href: '/bores' },
        { label: 'Drilling FAQ', href: '/help/faq' },
      ]}
    >
      <PageSection>
        <CheckList>
          <CheckItemHeading>Choose the bore location</CheckItemHeading>
          <CheckItem title="Easy to access?">
            <ul>
              <li>
                Is the location accessible by our light truck? See our{' '}
                <StyledNextLink href="/help/faq">FAQ</StyledNextLink> for
                dimensions.
              </li>
              <li>
                Are there trees, branches or other obstacles (such as fence
                panels) that need removing in advance?
              </li>
            </ul>
            <p>
              Please clear up the area surrounding the proposed drilling site.
              We need about a 2m radius of cleared area.
            </p>
            <p>
              Call us on <CallLink /> if there are any obstacles we may need to
              navigate/remove when we arrive to drill.
            </p>
          </CheckItem>
          <CheckItem title="Convenient to use?">
            <p>
              How easy will it be to distribute the water from the pump outlet?
              Do you want the pump outlet near the fence so you can run poly
              around your fence line to have taps every 10m or so?
            </p>
          </CheckItem>
          <CheckItem title="Power?">
            <p>
              How easy (and costly) will it be to get power to the pump? You do
              NOT need to hardwire an external powerpoint right next to the
              bore/pump/pump shed. They can run off an extension lead from a
              shed or house indefinitely.
            </p>
          </CheckItem>
          <CheckItem title="Pump location?">
            <p>
              The pump does not need to be directly on top of the bore; it can
              be on the other side of a fence, under your house, in a shed, etc.
            </p>
          </CheckItem>
        </CheckList>
        <CheckList>
          <CheckItemHeading>Locate Utilities</CheckItemHeading>
          <div>
            <p>
              Please try to locate the underground services on your property;
              the hardest one to find is the waste water pipe from your house to
              the sewer mains.
            </p>
            <p>
              Call us if you have concerns, and we can apply for the plans from
              council for a $105 fee.
            </p>
          </div>
          <CheckItem title="Sewer mains" />
          <CheckItem title="House drainage" />
          <CheckItem title="Town/storm water" />
          <CheckItem title="Downpipes" />
          <CheckItem title="Phone" />
          <CheckItem title="Power" />
        </CheckList>
      </PageSection>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
