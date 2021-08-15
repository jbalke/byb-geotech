import { Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import Banner from 'components/Banner';
import styled from 'styled-components';
import ContentPage from 'components/ContentPage';
import StyledNextLink from '../../components/Link/StyledNextLink';
import { StyledLink } from '../../components/Link';

const PageSection = styled.section``;

type Props = {};

function OurStory(props: Props) {
  return (
    <ContentPage
      title='Careers'
      relatedPages={
        <ul>
          <li>
            <StyledNextLink href='/contact'>Contact Us</StyledNextLink>
          </li>
          <li>
            <StyledNextLink href='/about/our-story'>Our Story</StyledNextLink>
          </li>
        </ul>
      }
    >
      <PageSection>
        <h2>Thinking about a career in drilling?</h2>
        <p>
          Please contact us if you are keen to get into the drilling industry as
          we have vacancies for trainee drillers and competent offsiders.
        </p>
        <p>
          The roles would be casual and ad-hoc, sometimes it&apos;s 3 months
          between jobs, sometimes it&apos;s a 100 hour week.
        </p>
        <p>
          <strong>Necessary Requirements:</strong>
          <ul>
            <li>
              Mechanically minded, used hydraulic equipment and can be gentle
              with controls
            </li>
            <li>Can learn systems and processes easily</li>
            <li>
              Can use a PC and smartphone / tablet to record details and search
              databases
            </li>
            <li>Available for weekend work</li>
            <li>
              Willing to submit to a police check and random drug test screening
              if required
            </li>
            <li>LR truck licence (&lt;8t)</li>
            <li>First aid certificate</li>
            <li>
              To live and work in a low risk and productive manner at all times
            </li>
            <li>Can function as a team player and lend a hand</li>
            <li>Enjoy an outdoor lifestyle</li>
            <li>
              You need to be fit and healthy as the job can be physically and
              mentally demanding with long hours
            </li>
            <li>Have a good work ethic and capable of hard work.</li>
          </ul>
        </p>
        <p>
          <strong>Task Descriptions</strong>
          <ul>
            <li>
              A trainee driller or offsider&apos;s duties include but not
              limited to:
            </li>
            <ul>
              <li>
                Loading casing, drilling stems and equipment on trucks, utes and
                trailers
              </li>
              <li>Driving trucks (LR) or utes with or without a trailer</li>
              <li>
                Discussing options/locations/issues and proposed solutions with
                clients
              </li>
              <li>
                Setting up and packing down the drilling rig and equipment
              </li>
              <li>
                Working together with the driller or offsider to share the
                workload
              </li>
              <li>
                Perform pre-starts and minor servicing and emergency repairs of
                equipment and vehicles.
              </li>
            </ul>
            <li>At all times work in a low risk and professional manner</li>
            <li>
              Adhere to company WH&R policies and guidelines, Environmental
              policies, et al.
            </li>
          </ul>
        </p>
        <p>
          Working in a drilling team is interesting, different every day,
          challenging and rewarding but not suited to everyone. You must enjoy
          working outdoors, using your initiative, have determination and a
          resilience not required in most jobs.
        </p>
        <h2>Interested?</h2>
        <p>
          Send us an email (four paragraphs or less, please) telling us why this
          type of ad hoc casual role would suit your circumstances and why you
          would excel in this role to{' '}
          <StyledLink href='mailto:careers@backyardbores.com'>
            careers@backyardbores.com
          </StyledLink>
          . Our admin staff will evaluate your response and may ask to learn
          more about your skills and abilities via a CV and cover letter.
        </p>
        <p>
          If you are successful, we will contact you for a trial drilling day.
        </p>
        <p>
          We will personally respond to every email, unlike job agencies and 90%
          of jobs people apply for these days, because that is the respectful
          thing to do.
        </p>
      </PageSection>
    </ContentPage>
  );
}

OurStory.layout = SiteLayout;
export default OurStory;
