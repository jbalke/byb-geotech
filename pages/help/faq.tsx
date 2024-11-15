import Button from 'components/Button';
import FAQ, { StyledAccordion } from 'components/FAQ/FAQ';
import questions from 'components/FAQ/questions';
import { Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import Banner from '../../components/Banner';

const ToggleButton = styled(Button)`
  align-self: flex-end;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

type Props = {};

function FAQPage(props: Props) {
  const [isExpandAll, setExpandAll] = useState<boolean | undefined>(false);

  const handleOnChange = () => {
    setExpandAll(undefined);
  };

  useEffect(() => {
    if (isExpandAll) {
      questions.forEach((q) => (q.uuid = v4()));
    }
  }, [isExpandAll]);

  return (
    <>
      <Banner
        title="Frequently Asked Questions"
        description="Find answers to all of the frequently asked questions about our bores, what's involved in drilling them, what to know before having a bore drilled, technical specifications and much more!"
      />
      <Wrapper maxWidth="70ch" padding="xl">
        <ToggleButton
          onClick={() => setExpandAll((expanded) => !expanded)}
          variant="outline"
          $borderWidth="1px"
          aria-pressed={isExpandAll}
          aria-controls="faq"
        >
          Open / Close All
        </ToggleButton>
        <StyledAccordion
          allowMultipleExpanded={true}
          allowZeroExpanded={true}
          onChange={handleOnChange}
          id="faq"
        >
          {questions.map((q) => (
            <FAQ
              key={q.uuid}
              uuid={q.uuid}
              question={q.heading}
              id={q.id}
              isOpen={isExpandAll}
            >
              {q.panel}
            </FAQ>
          ))}
        </StyledAccordion>
      </Wrapper>
    </>
  );
}

FAQPage.layout = SiteLayout;
export default FAQPage;
