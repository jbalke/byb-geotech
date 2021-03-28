import Button from 'components/Button';
import Layout from 'layouts/Main';

export default function Home() {
  return (
    <Layout>
      <h1>Hello World</h1>
      <span>hello</span>
      <Button shadow noBorder>
        Test Button
      </Button>
    </Layout>
  );
}
