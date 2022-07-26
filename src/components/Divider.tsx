import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Divider, Text } from '@ui-kitten/components';

export default function DividerSimpleUsageShowCase() {
    return (
        <React.Fragment>
            <View style={styles.details}>
                <Avatar size={'giant'} />
                <Text style={styles.title} category='h6'>UI Kitten</Text>
            </View>
            <Divider />
            <Button style={styles.installButton}>INSTALL</Button>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    details: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 4,
    },
    title: {
      marginHorizontal: 8,
    },
    installButton: {
      marginVertical: 4,
    },
  });