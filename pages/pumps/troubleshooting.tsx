import CallLink from 'components/CallLink';
import ContentPage, { RelatedPage } from 'components/ContentPage';
import { ExternalLink, StyledLink } from 'components/Link';
import { VideoContainer } from 'components/styled';
import SiteLayout from 'layouts/SiteLayout';
import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from 'styles/theme';

const PageSection = styled.section``;

const relatedPages: RelatedPage[] = [
  { label: 'Water Bore Drilling', href: '/bores' },
  { label: 'New Bore & Pump Tips', href: '/help/new-install-tips' },
  { label: 'Drilling FAQ', href: '/help/faq' },
  { label: 'Request a Quote', href: '/request-a-quote' },
];

type Props = {};

function index(props: Props) {
  return (
    <ContentPage
      title="Pump Troubleshooting"
      description="What to do if your pump has issues"
      relatedPages={relatedPages}
    >
      <PageSection>
        <p>
          What to do if your existing bore has lost water, or your pump has lost
          water pressure, or is running but no water is coming out, or it&apos;s
          pumping a lot of sand?
        </p>
        <ol
          css={css`
            list-style: decimal;

            & > li {
              margin-top: 1.5rem;
            }

            h2 {
              font-size: ${Theme.font.fs500};
            }
          `}
        >
          <li>
            <h2>
              If your pump is running and no water is coming out, but the taps
              are open, and it sounds normal.
            </h2>
            <strong>TURN OFF THE POWER!</strong>
            <p>
              You may need to prime your pump (especially if you haven&apos;t
              used your pump for more than a week); please see our priming video
              for instructions:
            </p>
            <VideoContainer>
              <iframe
                src="https://www.youtube-nocookie.com/embed/DWHvp_fWmXM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </VideoContainer>
            <p>
              If you have primed your pump 3 times and all it does is spit out
              the water in the bowl of the pump (about 2L) but then stops, turn
              it off at the power point, then call us (tel:1800193194); it needs
              more love. We offer a free appraisal of your pump and bore&apos;s
              condition; this can often be done over the phone. It&apos;s{' '}
              <em>FREE!</em>
            </p>
          </li>
          <li>
            <h2>
              {' '}
              Is your pump making excessive noise, new noises (squealing), or
              does the motor feel really hot to touch?
            </h2>
            <p>
              It could be that your pump has seen better days; please call us on{' '}
              <CallLink /> or Don Phimister on{' '}
              <StyledLink href={`tel:0439949679`}>0439 949 679</StyledLink>, or
              R&T Pumps on{' '}
              <StyledLink href={`tel:0749533700`}>07 4953 3700</StyledLink> for
              your pump inspection and repair needs.
            </p>
          </li>
          <li>
            <h2>
              Does your water flow rate start off good but gradually (seconds,
              minutes or hours) reduces back to a dribble? Then might come back
              good briefly, then drop off again?
            </h2>
            <p>
              It could be that the aquifer has been depleted, run dry, moved or
              shifted, or the bore casing is choked with fine sand. All or any
              of these are possible. Please call us on <CallLink /> for a free
              appraisal.
            </p>
          </li>
          <li>
            <h2>
              You can hear gurgling coming from the bore right before the flow
              rate drops!
            </h2>
            <p>
              Like #3 above, the usual cause is that the pump is removes more
              water than the bore can replenish. If the bore has been
              established for a few years, the likely cause is that the
              groundwater level has dropped. The aquifer levels drop every dry
              season in Mackay, and some bores drilled before 2013 were too
              shallow. The water levels in town bores can drop by 1 to 3 metres
              (3 - 10 feet) every July - December. Sometimes there is a quick
              fix to clean the bore out with our vacuum pump to get more depth.
              Sometimes, the only solution is to drill a new deeper bore close
              to the existing one.
            </p>
            <p>
              Call us on <CallLink /> for a free appraisal.
            </p>
          </li>
          <li>
            <h2>
              My bore pump is top-dressing my lawn with fine sand; is that bad?
            </h2>
            <p>Yes, and no.</p>
            The leading causes of this are:
            <p></p>
            <ul>
              <li>
                Shifting sands in the aquifer (often in the months following a
                flood).
              </li>
              <li>Aquifer water levels dropping or rising.</li>
              <li>Bore casing failure.</li>
              <li>
                The slots for the water to come into the casing were cut too big
                (wide) to begin with.
              </li>
              <li>
                The bore installers used fly screen, shade cloth, or stockings
                and it has since disintegrated and now lets in sand up to 5mm
                (or larger).
              </li>
            </ul>
            <p>
              Some of these things are repairable. Otherwise, it will require a
              new bore to be drilled to the appropriate depth for today&apos;s
              dryer conditions, with better quality PVC bore casing with factory
              cut fine slots and using our industry best practice drilling
              methods that give us the option to put a sand filter around the
              casing to keep the natural fine sand out.
            </p>
            <p>
              Call us on <CallLink /> for your free evaluation.
            </p>
          </li>
          <li>
            <h2>
              My bore water is causing brown/orange stains on my
              pump/fence/house/driveway?
            </h2>
            <p>
              The main cause of this is iron bacteria; please see this{' '}
              <ExternalLink
                href="/resources/Iron%20Bacteria%20in%20Water%20Bores.pdf"
                label={'document'}
              />{' '}
              from the Dept. Natural Resources and Water (DRDMW this week) for
              more information. We can apply a non-toxic treatment to the bore,
              which will dissolve the brown/orange sludge and temporarily fix
              the problem. This is not an expensive treatment and can last for
              many months.
            </p>
            <p>
              We can also supply cleaning products to clean both porous
              (concrete), and non-porous (steel or glass) surfaces around your
              property.
            </p>
            <p>
              We can provide an excellent long term solution using a patented
              ultrasonic device to keep the bacteria from growing. This cutting
              edge technology is available now.
            </p>
            <p>
              Call us on <CallLink />, and we can come and test your bore water
              for total dissolved iron (TDI) and give you an appraisal on what
              cleaning product(s) are best suited for your bore and your
              property.
            </p>
          </li>
          <li>
            <h2>
              After the recent floods/earthquakes/cyclones, my bore/pump has
              stopped working. What is the cause and can I claim it on household
              insurance?
            </h2>
            <p>
              Natural disasters can cause pumps and even bores to cease working.
              Please make use of our free appraisal service for your pump. We
              are happy to provide your insurer with whatever documentation they
              require to evaluate your claim.
            </p>
          </li>
          <li>
            <h2>
              My pump is humming, the motor is not turning, and no water is
              coming out.
            </h2>
            <p>
              <strong>TURN IT OFF IMMEDIATELY!</strong> We cannot stress this
              enough.
            </p>
            <p>
              Please call us on <CallLink /> for advice; it could be a simple
              $100 fix.
            </p>
          </li>
          <li>
            <h2>
              My pump is still running after I have turned the taps off. Is that
              bad?
            </h2>
            <p>
              It is normal for the pump to continue running for up to 30 seconds
              after you have turned the taps off as it builds pressure before
              the pressure switch cuts the power.
            </p>
            <p>
              If your pump continues to run and no water is coming out, please
              turn it off at the power and call us on <CallLink /> or Don
              Phimister on{' '}
              <StyledLink href={`tel:0439949679`}>0439 949 679</StyledLink> or
              R&T Pumps on{' '}
              <StyledLink href={`tel:0749533700`}>07 4953 3700</StyledLink> for
              your pump inspection and repair needs.
            </p>
          </li>
        </ol>
      </PageSection>
    </ContentPage>
  );
}

index.layout = SiteLayout;
export default index;
