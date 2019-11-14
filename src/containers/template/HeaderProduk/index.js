import React from 'react';
import {View, Text, Image} from 'react-native';

const HeaderProduk = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{paddingHorizontal: 16, height: 7}}>
        <Text
          style={{
            color: '#484848',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {props.headertitle}
        </Text>
      </View>
      <View style={{paddingHorizontal: 17}}>
        <Text style={{color: '#484848', fontSize: 11}}>{props.headerket}</Text>
      </View>
    </View>
  );
};
export default HeaderProduk;
