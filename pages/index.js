import Button from 'components/Button';
import SiteLayout from 'layouts/SiteLayout';
function Home() {
  return (
    <>
      <h1>Hello World</h1>
      <span>hello</span>
      <Button shadow noBorder>
        Test Button
      </Button>
    </>
  );
}

Home.layout = SiteLayout;

export default Home;
