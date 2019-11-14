import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
// import NavBar from '../../../components/molecules/NavBar';

import Icon from '../../utils/Icon';

const NavBarSection = props => {
  return (
    <View
      style={{
        height: 58,
        backgroundColor: '#FCFCFC',
        width: '100%',
        flexDirection: 'row',
        shadowColor: '#010101',
        borderTopColor: '#010101',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        elevation: 8,
        shadowOffset: {width: 0, height: 410},
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={{
            alignItems: 'center',
            marginTop: 5,
            flex: 1,
          }}>
          <Icon name="Jelajah" fill="#707070" width="30" height="30" />
          <Text
            style={{fontSize: 8, color: '#484848', fontWeight: 'bold', top: 4}}>
            JELAJAH
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('PaketSaya')}
          style={{
            alignItems: 'center',
            marginTop: 5,
            flex: 1,
          }}>
          <Icon name="Paketsaya" fill="#707070" width="30" height="30" />
          <Text
            style={{fontSize: 8, color: '#484848', fontWeight: 'bold', top: 4}}>
            PAKET SAYA
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: 5,
            flex: 1,
          }}>
          <Icon name="Buatpaket" fill="#707070" width="30" height="30" />
          <Text
            style={{fontSize: 8, color: '#484848', fontWeight: 'bold', top: 4}}>
            BUAT PAKET
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            marginTop: 5,
            flex: 1,
          }}>
          <Icon name="Pesan" fill="#707070" width="30" height="30" />
          <Text
            style={{fontSize: 8, color: '#484848', fontWeight: 'bold', top: 4}}>
            PESAN
          </Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            marginTop: 5,
            flex: 1,
          }}>
          <Icon name="Profile" fill="#707070" width="30" height="30" />
          <Text
            style={{fontSize: 8, color: '#484848', fontWeight: 'bold', top: 4}}>
            PROFILE
          </Text>
        </View>
      </View>
    </View>
  );
};
export default withNavigation(NavBarSection);
