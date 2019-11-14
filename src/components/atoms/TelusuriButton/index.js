import React from 'react';
import {View, Text} from 'react-native';

const TelurusiButton = props => {
  return (
    <View
      style={{
        marginVertical: 10,
        marginHorizontal: 16,
        backgroundColor: '#FFF',
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#BBBBBB',
        borderWidth: 1,
      }}>
      <Text style={{fontSize: 15, color: '#0FACF3'}}>{props.titlebutton}</Text>
    </View>
  );
};
export default TelurusiButton;
