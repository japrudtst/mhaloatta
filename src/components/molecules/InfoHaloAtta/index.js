import React from 'react';
import {View, Text, Image} from 'react-native';

const InfoHaloAtta = () => {
  return (
    <View
      style={{
        marginBottom: 10,
        position: 'relative',
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./../../../assets/image/infohaloatta.png')}
          style={{height: 160, borderRadius: 5}}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 45,
          paddingHorizontal: 30,
          width: 250,
        }}>
        <Text style={{fontSize: 20, color: '#fff', fontWeight: 'bold'}}>
          Memperkenalkan Umrah HaloAtta
        </Text>
        <View
          style={{
            top: 10,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            width: 100,
            borderRadius: 5,
          }}>
          <Text>Pelajari</Text>
        </View>
      </View>
    </View>
  );
};
export default InfoHaloAtta;
