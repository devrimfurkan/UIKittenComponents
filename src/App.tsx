import React from 'react';
import { ScrollView } from 'react-native'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Layout from './components/Layout';
import Text from './components/Text';
import Divider from './components/Divider';
import Icon from './components/Icon';
import Card from './components/Card';
import List from './components/List';
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Checkbox from './components/Checkbox';
import Toggle from './components/Toggle';
import Input from './components/Input';
import Select from './components/Select';

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light} >
      <IconRegistry icons={EvaIconsPack} />
      {/* <ScrollView>
        <Layout />
        <Text />
        <Divider />
        <Icon />
        <Card />
        
      </ScrollView> */}
      <List/>
      <Button/>
      <ButtonGroup/>
      <Checkbox/>
      <Toggle/>
      <Input/>
      <Select/>
    </ApplicationProvider>
  );
};

