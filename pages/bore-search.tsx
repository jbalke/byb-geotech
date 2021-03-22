import React, { useState } from 'react';
import Layout from '../layouts/Main';
import dynamic from 'next/dynamic';

const ClientRenderedMap = dynamic(() => import('../components/Map'), {
  ssr: false,
  loading: () => <p>loading map...</p>,
});

const BoreSearch = () => {
  return (
    <Layout title='Bore Search'>
      <div>
        <h1>Bore Search</h1>
        <ClientRenderedMap />
      </div>
    </Layout>
  );
};

export default BoreSearch;
