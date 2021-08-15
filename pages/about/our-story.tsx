import Banner from 'components/Banner';
import { Emphasis, Wrapper } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';

type Props = {};

function OurStory(props: Props) {
  return (
    <>
      <Banner title='Our Story' />
      <Wrapper maxWidth='70ch' main>
        <div>
          <p>
            <Emphasis>
              We are a proudly Australian and family-owned small business
            </Emphasis>
            , Mackay born and raised, with a drilling rig 100% built and
            maintained in a Mackay engineering workshop.
          </p>
          <p>
            Our predecessor started Backyard Bores in 2002 and since taking
            control in 2013, we have continued to grow the business into new
            markets and regions while increasing our capabilities while training
            several drillers and offsiders.
          </p>
          <p>
            We enjoy helping you and give back to the community through
            sponsorship of various activities and sporting clubs (cycling clubs
            and lawn bowls clubs) and have been for many years.
          </p>
          <p>
            We specialise in providing land-owners access to ground water for
            their needs and we can provide accurate, detailed, and easy to
            access local bore and groundwater log data and invaluable experience
            to better inform you before we work. Our senior driller has over 20
            years of experience drilling in and around Mackay on thousands of
            holes and sites and will tell you the honest likely outcome of the
            proposed works.
          </p>
          <p>
            We also have 20 years of providing corporations and governments with
            accurate, precise, timely and cost-effective soil and groundwater
            drilling and monitoring services. Some of the large project
            locations we have worked on include land subdivisions, contaminated
            land register sites, oil and ethanol refineries, coal terminals,
            inside rail corridors, airports, service stations, ACM asbestos
            sites, port operations, bulk fuel storage and more.
          </p>
          <p>
            We have experienced and certified project managers on staff to
            manage your project from start to finish on-spec, on-time and on
            budget. Our close partnerships with local NDD (non-destructive
            drilling) vacuum trucks, concrete cutting and coring and sub-surface
            locators mean we can look after the administration of the whole
            project and submit one invoice upon completion.
          </p>
          <p>
            We have drilled and installed 3 times the number of groundwater
            monitoring wells around Mackay compared to any other drilling
            company.
          </p>
        </div>
      </Wrapper>
    </>
  );
}

OurStory.layout = SiteLayout;
export default OurStory;
