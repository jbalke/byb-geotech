// tslint:disable react-a11y-anchors

import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';
import CallLink from '../CallLink';
import { ExternalLink, StyledLink } from '../Link';
import StyledNextLink from '../Link/StyledNextLink';

export type Question = {
  uuid: string;
  heading: string;
  id?: string;
  panel: JSX.Element;
};

const Subtext = styled.p`
  font-family: 'Public Sans';
  font-style: italic;
  font-size: 0.8em;
  line-height: 1.3;
  letter-spacing: 0.04em;
`;

const questions: Question[] = [
  {
    uuid: v4(),
    heading: 'What is a bore?',
    panel: (
      <>
        <p>
          A bore is a means to take water from the underground aquifer
          (groundwater table), and this water is brought to the surface by an
          electric or solar pump or a mechanical windmill.
        </p>
        <p>
          The most common type of modern bore casing is made from PVC and is
          100mm – 150mm diameter with an electric pump attached.
        </p>
        <p>
          There are other types of bores, and they all differ slightly in their
          construction and appearance.
        </p>
        <p>
          A steel or PVC pipe 25 – 40mm diameter coming out of the ground is
          likely to be a spear.
        </p>
        <p>
          A water well with approx. 900mm to 1800mm diameter concrete rings is
          also a means to extract groundwater using a pump or windmill.
        </p>
        <p>
          Water bores can be made from steel or PVC and can vary from 75mm to
          350mm in diameter.
        </p>
        <p>Flow rates can vary from 5L/min to 50 L/s.</p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'So much jargon, what does it all mean?',
    panel: (
      <>
        <p>
          We will briefly explain some of the terms that are specific to bores,
          pumps and water that you may not be familiar with.
        </p>
        <h3>Bore and Casing specific</h3>
        <p>
          <b>Groundwater, water table, aquifer</b>: These all refer to water
          that is below the surface. How it got there and how long it has been
          there is sometimes unknown. Sometimes, groundwater can be 1-2m below
          the surface, other times 300m or more. Water bore drilling aims to
          provide access to this groundwater and allow it to be brought(pumped)
          to the surface.
        </p>
        <p>
          How much groundwater exists under your property is unknown by drillers
          and geotechnical experts. Only with years of experience and accurate
          record keeping can we recommend a likely flow rate tailored to your
          location.
        </p>
        <p>
          <b>Casing</b>: The main aim of casing is to allow water to flow into
          the bore and to prevent other particles (sand, clays, rocks) from
          entering. Bores require a strong walled tube from the water to the
          surface to stop the open hole from collapsing and destroying the bore
          and to allow access to water. The most common type of modern bore
          casing is made from PVC and is 100mm – 150mm in diameter with an
          electric pump attached.
        </p>
        <p>
          Steel is sometimes used as bore casing but usually only for very deep
          bores (&gt;60m) or for production (irrigation) bores (&gt;200mm dia)
        </p>
        <p>
          PVC Casing comes in 2 different parts, slotted and plain. Slotted
          casing has cuts or slots, cut into the casing to let the water in.
          Sometimes these slots need to be very fine width(0.5mm or less) to
          stop fine sand (Andergrove, Bucasia). Other areas can have 5mm to 10mm
          slots to let the water in.
        </p>
        <p>
          Plain casing is used from above the water bearing material to the
          surface to allow access to the water and stop any surface contaminants
          (rocks, soil, sand, leaves, animals, pesticides) from entering the
          groundwater.
        </p>
        <p>
          <b>Screens: </b>An alternative to slotted casing is a screen. Screens
          are wire wound mesh and vary in length and diameter. They also have
          different slot sizes to allow water in and keep sand and rocks out. A
          200mm dia production well, for example would have 3m to 6m of screen
          in the water table and usually a 2 or 3mm aperture.
        </p>
        <p>
          <b>Spears: </b>An example of a smaller screen installation is often
          called a spear. Spears usually have a 600mm long x 50mm dia screen
          screwed to the bottom of a 40 or 50mm dia steel or galvanised steel
          pipe. This pipe is direct buried in the ground is is a permanent
          installation. The pump is attached to the top of the pipe and special
          vacuum bilge pumps are required to prime the pump.
        </p>
        <p>
          For many reasons, spears are much less reliable than PVC bores and are
          more expensive to install due to the cost of the steel pipe and
          screen. Spears will always rust and because they operate as a vacuum,
          the smallest rust hole will render the whole installation inoperable
          and a new bore will need to be drilled as a replacement.
        </p>
        <p>
          <b>Yield: </b>Bores are(should be) tested by the driller to determine
          the flow rate they can sustain while being pumped. Bore yield is
          usually measured in litres per second (L/s), litres per minute (L/min)
          or gallons per hour (gph).
        </p>
        <p>Roughly 800gph = 60L/min = 1L/s</p>
        <p>
          <b>Divining, witching or dowsing: </b>A method some people use to
          &quot;locate&quot; groundwater using wires, branches or twigs. It is
          akin to religion, those who believe in it will swear by it using faith
          and those who do not believe will use the lack of peer reviewed
          scientific papers and studies to debunk it.
        </p>
        <p>
          It doesn&apos;t work for us, but luckily we don&apos;t need to divine
          for water because we have a very extensive database of bores and
          thousands of test holes to confirm our recommendations at your
          location.
        </p>
        <h3>Some Initialisms</h3>
        <p>
          <b>TD: </b>Total Depth or Target Depth. The depth from the surface or
          top of the casing to the very bottom of the hole or cased bore.
        </p>
        <p>
          <b>SWL: </b>Standing Water Level. The depth from the surface or top of
          the casing to the water table when no pumping is occurring.
        </p>
        <p>
          <b>DD: </b>Draw Down. The depth from the surface or top of the casing
          to the water level when the bore is being test pumped. The draw down
          is usually the deepest level the water reached at a specific flow
          rate.
        </p>
        <p>
          <b>DP: </b>Development Permit. A permit issued by DRDMW to allow
          commercial entities to take groundwater for a specific purpose.
        </p>
        <h3>Pumps and water flow specific</h3>
        <p>
          <b>Surface Pump: </b>Any of the multiple varieties of pumps that live
          on the surface as opposed to a submersible that lives underwater.
        </p>
        <p>
          Surface pumps vary greatly in their physical size, motor wattage, flow
          rates and their pressure delivery. the most common brands of surface
          pumps are DAB (green), Davey (yellow) and Onga (blue).
        </p>
        <p>
          <b>Suction Pump (surface): </b>The most common type of pump around
          Mackay is the suction pump. This is a pump that is installed on the
          surface and has a single pipe that goes down inside the bore casing to
          the water table. The pump uses suction (like a straw in a drink) to
          suck water from the SWL(standing water level) and deliver it at
          pressure to the outlets.
        </p>
        <p>
          Suction pumps are no longer useful when the DD(draw down) reaches
          approximately 7.8m. A deep well injector or submersible will be
          required if the drawdown reaches that depth.
        </p>
        <p>
          Suction pumps are usually less than 2200W and deliver a maximum of
          about 90L/min. They range in price from $200 (Bunnings special) to
          $2400 for a 45kg pump that delivers 70L/min at 70psi.
        </p>
        <p>
          <b>Jet Pump (surface): </b>Usually means a Deep Well Injector pump
          (see below) but people have their own ideas. The &quot;Jet&quot; is
          the special venturi injector at the bottom of the bore.
        </p>
        <p>
          <b>Deep Well Injector Pump (surface): </b>Has 2 pipes going down a
          bore casing, and at the bottom is a special venturi injector. Also
          called Jet pumps, these pump installations are usually only for bores
          where the SWL and/or DD are deeper than 7.8m as they are much more
          expensive than a suction pump and use more power for bores where the
          DD is less than 7.8m .
        </p>
        <p>
          The 2 pipes are slightly different sizes, and some of the water
          delivered to the surface gets recycled back down the poly pipes to
          feed the injector. The injector takes high pressure - low flow water
          in from the pump on the smaller poly pipe, and delivers lower pressure
          - higher flow up the larger poly pipe to the outlets.
        </p>
        <p>
          <b>Submersible Pump: </b>Subs come in many different sizes from
          2&quot; (50mm) dia to 8&quot; (200mm) dia and everything in between.
          They live submersed under water and push water up to the surface. It
          takes less energy (watts) to push water compared to sucking it from
          the surface so subs are usually lower wattage and higher flow compared
          to surface pumps.
        </p>
        <p>
          <b>Priming or Prime a Pump: </b> Surface pumps almost always require
          priming. This is a method of filling the entire length of the poly
          pipe(s) from the bottom of the bore to the pump inlet with water so
          the surface pump can suck water, not air. Very few surface pumps are
          self-priming.
        </p>
        <p>
          We have a video showing different methods to prime a surface pump, but
          the most reliable method is the windmill method.
        </p>
        <p>
          <b>Foot Valve or Check Valve: </b> A one-way valve that is at the
          bottom of the poly pipe down a bore casing. It only allows water to
          flow one way, up the pipe towards the pump. When the pump turns off,
          the FV stops the water from draining completely out of the poly pipe.
          If the water drains out of the poly pipe, the pump setup will need to
          be primed again before use.
        </p>
        <p>
          <b>Pressure Switch: </b> A device that automatically turns the pump on
          and off based on the pressure in the pump bowl or outlet poly pipe. It
          is usually mounted on the side of the pump bowl and is connected to
          the pump by a wire. Pressure switches and sandy bores are problematic,
          and many pumps have been damaged by the design flaws inherent to
          standard pressure switches.
        </p>
        <p>
          <b>Pressure Controller: </b> An electronic device (usually with a
          digital display) that automatically turns the pump on and off based on
          the pressure and flow (or lack thereof) of water flowing through the
          controller. Pressure controllers are a much better and more reliable
          solution where sand is an issue.
        </p>
        <p>
          Pressure controllers have 2 very important in-built safety measures:
          zero flow cut off and over current cut off. These measures protect
          your pump from further damage.
        </p>
        <p>
          The main difference between controllers and switches is that water
          usually flows through a controller and it can monitor the pressure and
          detect a lack of flow and monitor the current use of the pump.
          Pressure switches cannot provide either of these benefits, so we
          prefer all new pump installations (surface or submersible) to have
          pressure controllers.
        </p>
        <p>
          <b>Pressure Gauge: </b> A device that shows the pressure in the pump
          bowl or going through a controller. It is either mounted on the pump
          bowl or outlet poly line or is inside the controller and measures the
          water pressure in PSI or Bar.
        </p>

        <p>
          <b>Head: </b> The height of water in metres. Head is the same as
          pressure but measured in metres of water (or Bar) instead of psi.
          Every 10m of head equals 15psi.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'How much does drilling a bore typically cost?',
    panel: (
      <>
        <p>
          Cheaper than you might think! We have perfected a local modification
          using the latest, international best practice methods, standards and
          equipment for a completed and cased PVC bore.
        </p>
        <p>
          Most areas can have a bore drilled and a pump equipped for less than
          $3900. inc GST.
        </p>
        <p>
          <em>Seniors and Carers discount available!*</em>
        </p>
        <p>
          Call us now on <CallLink /> or use our{' '}
          <StyledNextLink href="/request-a-quote">
            online quote form
          </StyledNextLink>{' '}
          for an obligation free quote!
        </p>
        <Subtext>
          *Not valid with any other offer. No other offers allowed; discount
          applies to standard drilling rates not to already discounted rates.
        </Subtext>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Do I need a permit / licence / permission before drilling?',
    panel: (
      <>
        <p>
          <em>No</em>. If you are a homeowner and intend to use the water for
          non-commercial purposes (yards, pool, gardens, lawns), there is{' '}
          <em>no restriction</em> on drilling for water.
        </p>
        <p>
          Some small areas south of the river have been declared sensitive and
          it&apos;s best to contact us to discuss the additional restrictions
          and requirements for these small areas.
        </p>
        <p>
          If you are a commercial enterprise or intend to use the water for a
          commercial purpose,{' '}
          <StyledLink href="/contact">contact us</StyledLink> and we can advise
          the best contact at DRDMW for your Development Permit application.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Why should I use a licensed driller?',
    panel: (
      <>
        <p>
          <strong>Backyard Bores and Geotech Drilling</strong> engage several
          licensed drillers and we work according to relevant government
          requirements.
        </p>
        <p>
          If you are getting a quote from any driller, ask for their licence
          number and to see their current Queensland Driller&apos;s Licence.
          Before you engage them to drill, you can search for their name on the{' '}
          <strong>Qld Registered Drillers List</strong>{' '}
          <ExternalLink
            href="https://www.dnrm.qld.gov.au/__data/assets/pdf_file/0004/99760/drillers-register.pdf"
            target="_blank"
            label="here"
          />{' '}
          . If they are <strong>not listed</strong>, they are{' '}
          <strong>not licensed</strong>. Chances are if they don&apos;t have a
          Driller&apos;s Licence, they won’t construct the bore to ensure the
          best long-term performance as per industry international best
          practices. They probably won&apos;t have{' '}
          <strong>public liability insurance</strong> either. If they damage
          anything on your property, YOU will have to foot the bill.
        </p>
        <p>
          Use a licensed driller who has all relevant insurances; why risk it to
          save a couple of hundred dollars?
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'How long does it typically take to drill a bore?',
    panel: (
      <>
        <p>
          Depending on the material being drilled and the depth, drilling and
          casing can take 4-6 hours .
          <br />
          It&apos;s a five step process:
        </p>
        <ol>
          <li>Drilling</li>
          <li>Installing casing</li>
          <li>
            Cleaning out the inside of the casing to remove damaging sands, silt
            and clay
          </li>
          <li>Flow rate and water quality testing</li>
          <li>Pump installation</li>
        </ol>
      </>
    ),
  },
  {
    uuid: v4(),
    heading:
      'Do I need a driller to come over and look at the site and provide a quote?',
    panel: (
      <>
        <p>
          No, unless the location you are thinking of is in a difficult place to
          access or needs fence sections removed or trees cut back. Please call
          us on <CallLink /> and discuss if you have any concerns.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'What size casing is supplied?',
    panel: (
      <>
        <p>
          100mm inner diameter casing with factory-cut fine slots (0.4 - 0.5mm)
          is used in the majority of bores, some locations require 0.8mm. We can
          install 5”, 125mm casing or 80mm casing as required; surcharges apply.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Where can I put a bore in my yard?',
    panel: (
      <>
        <p>
          When considering a location in your yard for a bore, please take the
          following into account:
        </p>
        <ul>
          <li>
            How easy will it be to get the drilling rig to that location? Please
            see below for rig dimensions.
          </li>
          <li>
            How easy (and costly) will it be to get power to the pump? Please
            keep in mind that the pump does not need to be directly on top of
            the bore; it can be inside a fence, under your house, in a shed,
            etc.
          </li>
          <li>
            How easy will it be to distribute the water from the pump outlet? Do
            you want the pump outlet near the fence so you can run poly around
            your fence line to have taps every 10m or so?
          </li>
        </ul>
      </>
    ),
  },
  {
    uuid: v4(),
    heading:
      'What utilities do I need to search for in preparation for drilling?',
    panel: (
      <>
        <p>
          Please try to locate the underground services on your property; the
          hardest one to find is the pipe from your house to the sewer mains.
        </p>
        <p>
          If you have your house drainage plans (house connection plans), that
          would be fantastic. Also, look for town water, power, stormwater, down
          pipes, phone etc.
        </p>
        <p>
          We will contact 1100 (Dial Before you Dig), but they only provide
          locations of power, major sewer and telephone along the street, not on
          your property.
        </p>
        <p>
          It&apos;s <em>VERY IMPORTANT</em> for you to locate these services as
          it is your responsibility as the landowner or their authorised
          representative.
        </p>
        <p>
          Call us on <CallLink /> if you have concerns; we can apply for the
          plans from council for a $105 fee.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'What does the homeowner need to do to prepare the drilling site?',
    panel: (
      <>
        <p>
          Please clear up the area surrounding the proposed drilling site. We
          need about a 2m radius of cleared area.
        </p>
        <p>
          If there are trees, stumps, branches or shrubs in the immediate area,
          please trim or remove them.
        </p>
        <p>
          We will have to add an hourly surcharge if we need to come in through
          a fence panel, or if we need to trim trees. Please make sure these are
          done before we arrive, if possible.
        </p>
        <p>
          Please call us on <CallLink /> and notify our staff if you have a
          fence that needs removing or the area needs trees and/or branches cut
          down.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Will the drilling rig fit in my yard?',
    id: 'drilling-rig',
    panel: (
      <>
        <p>
          Our small rig is mounted on a light truck and is 2.35m wide (at the
          mirrors), 5.7m long and 2.7m high.
        </p>
        <p>
          Our small tracked rig is 2m wide, 5.7m long and 2.1m high.
        </p>
        <p>
          Our larger rigs are mounted on heavy rigid trucks and are 2.35m wide (at the
          mirrors), 11m long and 2.9m high.
        </p>
        <p>
          We need to reverse the truck/rig over the top of the desired drilling
          location.
        </p>
        <p>
          If you have any concerns, please call us on <CallLink />, and we can
          come to inspect and do some measurements.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Do you use toxic chemicals while drilling?',
    panel: (
      <>
        <p>
          <em>NO.</em>  Unlike mud (polymer) drilling methods, auger and rotary air do not use <em>ANY</em> chemicals in our drilling process.
        </p>
        <p>
          Our rotary air hammer needs lubrication and that can be achieved using vegetable oil (Crisco), just like you cook with.
        </p>
        <p>
          While we have the capability to perform mud drilling on multiple drilling rigs, we chose not to use that polluting, toxic technique to drill.  It always leaves behind trace toxic elements and is the worst possible method to drill a bore where water needs to be extracted, either for monitoring or for productive use.
        </p>
      </>
    ),
  },
  {    uuid: v4(),
    heading: 'How can I see what days/times you are available to drill?',
    panel: (
      <>
        <p>
          Click{' '}
          <ExternalLink
            href="https://backyardbores.youcanbook.me/"
            label="here"
          />{' '}
          to access our online calendar, but we operate 7 days a week.
        </p>
        <p>
          Some weeks we can be fully booked with local or out-of-town projects.
          It&apos;s best to check the calendar to see when we have a free block.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Do you accept credit cards and direct bank transfer?',
    panel: (
      <>
        <p>
          <em>YES!</em> We accept Visa and Mastercard payments or direct bank
          transfers.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading:
      'Can you drill in South Mackay, East Mackay, Ooralea, Bakers Creek, Walkerston, etc.?',
    panel: (
      <>
        <p>
          Please call us on <CallLink /> to discuss your options, but often{' '}
          <em>YES</em> you can.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Do you drill outside of the Mackay area?',
    panel: (
      <>
        <p>
          <em>YES!</em> We can drill all around central Queensland and have
          drilled from Bowen to Marlborough and west to Moranbah.
        </p>
        <p>
          Mobilisation fees may apply, please call us on <CallLink /> to
          enquire.
        </p>
      </>
    ),
  },
  {
    uuid: v4(),
    heading: 'Does Backyard Bores do divining, witching or dowsing for water?',
    panel: (
      <>
        <p>
          No. It doesn&apos;t work for us but{' '}
          <StyledLink href="/contact">contact us</StyledLink>, and we can give
          you the numbers of several local diviners.
        </p>
        <p>
          We do have a good knowledge of the areas around Mackay that have water
          and what depth a usable bore will be.
        </p>
      </>
    ),
  },
];

export default questions;
