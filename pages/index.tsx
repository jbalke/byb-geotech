import Button from 'components/Button';
import SiteLayout from 'layouts/SiteLayout';
import StyledNextLink from '../components/Link/StyledNextLink';
import { Wrapper } from '../components/styled';
import { PHONE } from '../constants';

function Home() {
  return (
    <Wrapper maxWidth='80ch'>
      <section>
        <h1>Our Services</h1>
        <ul>
          <li>
            <strong>Water bore drilling</strong> to industry best practice
            standards
          </li>
          <li>
            <strong>Environmental, Geotech & soil sampling drilling</strong>{' '}
            (NDD, SPT, DCP, Monitoring wells, Geoprobe and push tubes, split
            spoon, etc) - For a full list of our Geotech drilling products
            available, please visit our{' '}
            <StyledNextLink href='#'>
              Geotech & Environmental Drilling
            </StyledNextLink>{' '}
            page
          </li>
          <li>
            <strong>Bore repair / cleanout, sand pumping</strong>, air lifting
            (blowing clean)
          </li>
          <li>
            <strong>Bore test pumping</strong>, water level logging, flow rate
            data logging
          </li>
          <li>
            Simple <strong>water testing</strong> (Salinity-TDS, Iron-TDI & PH
            levels)
          </li>
          <li>
            Drilling using Solid Stem (Continuous Flight) Augers (CFA) and
            Hollow Stem Augers (HSA)
          </li>
          <li>Drilling using rock hammer (DTH or rotary air)</li>
          <li>
            Borehole <strong>camera inspections</strong> and reports
          </li>
          <li>
            <strong>Production bore</strong> drilling/cleaning and large
            diameter well cleanouts
          </li>
          <li>
            Installation of <strong>spears</strong>
          </li>
          <li>
            <strong>Pump supply</strong> and installation
          </li>
          <li>
            Comprehensive <strong>drinking</strong>
            <strong> water testing </strong>available on request
          </li>
          <li>Licensed drillers for hire</li>
        </ul>
        <p>
          If you are looking for water to keep the yard green, top up the pool,
          or reduce the high cost of town water, give us a call on{' '}
          <StyledNextLink href={`${PHONE.MAIN}`}>{PHONE.MAIN}</StyledNextLink>{' '}
          and we can come and drill for water in your backyard (or front yard)
          saving you money. You can water any day of the week without
          restrictions. We use the latest techniques and equipment with the best
          quality products in our bores with factory cut fine slot casing
          (0.4mm) eliminating 98% of the fine sand compared to hand cut slots.
        </p>
        <p>
          We also offer test pumping of bores to{' '}
          <strong>
            Australian Standard AS2368–1990 Test Pumping of Water Wells
          </strong>{' '}
          from 2 hours to 28 days in duration.
        </p>
      </section>
    </Wrapper>
  );
}

Home.layout = SiteLayout;
export default Home;
