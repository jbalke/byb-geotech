import React, { useEffect, useState } from 'react';
import FAQ, { StyledAccordion } from 'components/FAQ';
import { Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import { EMAIL } from '../constants';
import styled from 'styled-components';
import Button from 'components/Button';
import questions from 'data/questions';
import { v4 } from 'uuid';

const ToggleButton = styled(Button)`
  align-self: flex-end;
  font-size: 0.8rem;
  margin-bottom: 1rem;
`;

type faqProps = {};

function faq(props: faqProps) {
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
    <Wrapper maxWidth='80ch'>
      <h1>FAQ</h1>
      <ToggleButton
        onClick={() => setExpandAll((expanded) => !expanded)}
        variant='outline'
        borderWidth='1px'
      >
        Open / Close All
      </ToggleButton>
      <StyledAccordion
        allowMultipleExpanded={true}
        allowZeroExpanded={true}
        onChange={handleOnChange}
      >
        {questions.map((q) => (
          <FAQ
            key={q.uuid}
            uuid={q.uuid}
            question={q.heading}
            isOpen={isExpandAll}
          >
            {q.panel}
          </FAQ>
        ))}
      </StyledAccordion>
    </Wrapper>
  );
}

faq.layout = SiteLayout;
export default faq;
