import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';

const HeadersFeature = () => {
  return (
    <View style={{height: 267, marginBottom: 19}}>
      <View style={{height: 267, position: 'absolute'}}>
        <Image
          source={require('../../../assets/image/header.png')}
          style={{
            height: 267,
            width: Dimensions.get('window').width,
            resizeMode: 'stretch',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          paddingTop: 35,
        }}>
        <View style={{width: 250}}>
          <Image
            source={require('../../../assets/image/logo.png')}
            style={{height: 32, width: 110}}
          />
        </View>
        <Image
          source={require('../../../assets/icon/cart.png')}
          style={{height: 25, width: 25}}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 30,
        }}>
        <Text
          style={{
            fontSize: 25,
            color: '#FFFFFF',
            fontWeight: 'bold',
            textAlign: 'left',
            textShadowColor: '#000',
            marginHorizontal: 20,
            width: 250,
            marginBottom: 10,
          }}>
          Kembangkan bisnis umrah anda bersama Halo Atta
        </Text>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            height: 30,
            marginHorizontal: 20,
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 120,
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: '#484848',
            }}>
            Daftar
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HeadersFeature;
