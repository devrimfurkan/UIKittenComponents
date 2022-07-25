import React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Layout from './components/Layout';
import Text from './components/Text';
import Divider from './components/Divider';
import Icon from './components/Icon';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light} >
      <IconRegistry icons={EvaIconsPack}/>
      <Layout />
      <Text />
      <Divider/>
      <Icon/>
    </ApplicationProvider>
  );
};

