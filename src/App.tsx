import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import Layout from './components/Layout';
import Text from './components/Text';

export default function App(){
  return (
   <ApplicationProvider {...eva} theme= {eva.light}>
      <Layout/>
      <Text/>
    </ApplicationProvider>
  );
};

