import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Layout, Spinner } from '@ui-kitten/components';

const StarIcon = (props:any) => (
  <Icon {...props} name='star'/>
);

const LoadingIndicator = (props:any) => (
  <View style={[props.style, styles.indicator]}>
    <Spinner size='small'/>
  </View>
);

export default function ButtonThemingShowcase (){

    return(
        <Layout style={styles.container} level='1'>

    <Button style={styles.button} status='primary' accessoryLeft={StarIcon}>
      PRIMARY
    </Button>

    <Button style={styles.button} status='success' accessoryRight={StarIcon}>
      SUCCESS
    </Button>

    <Button style={styles.button} status='danger' accessoryLeft={StarIcon}/>

    <Button style={styles.button} disabled={true} appearance='ghost' status='danger' accessoryLeft={StarIcon}/>

    <Button style={styles.button} appearance='outline' accessoryLeft={LoadingIndicator}>
      LOADING
    </Button>

  </Layout>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    margin: 2,
  },
  indicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});