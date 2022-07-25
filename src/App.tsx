import React from 'react';
import Layout from './components/layout';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

export default function App(){
  return (
   <ApplicationProvider {...eva} theme= {eva.light}>
      <Layout/>
    </ApplicationProvider>
  );
};

