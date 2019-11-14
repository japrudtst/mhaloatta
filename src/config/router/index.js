import React from 'react';
import {Text, View} from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  TabNavigator,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from '../../containers/utils/Icon';
import {
  Home,
  UmrahFavoritAll,
  PaketSaya,
  DetailPaketSaya,
} from '../../containers/pages';

const HomeStack = createStackNavigator(
  {
    Home,
    UmrahFavoritAll,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);
const PaketSayaStack = createStackNavigator(
  {
    PaketSaya,
    DetailPaketSaya,
  },
  {
    headerMode: 'none',
    initialRouteName: 'PaketSaya',
  },
);

const TabNavigator1 = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'HOME',
        tabBarIcon: ({tintColor}) => (
          <Icon name="Jelajah" fill={tintColor} height={30} width={30} />
        ),
      },
    },
    PaketSaya: {
      screen: PaketSayaStack,
      navigationOptions: {
        tabBarLabel: 'PAKET SAYA',
        tabBarIcon: ({tintColor}) => (
          <Icon name="Paketsaya" fill={tintColor} height={30} width={30} />
        ),
      },
    },
    Buatpaket: {
      screen: PaketSayaStack,
      navigationOptions: {
        tabBarLabel: 'BUAT PAKET',
        tabBarIcon: ({tintColor}) => (
          <Icon name="Buatpaket" fill={tintColor} height={30} width={30} />
        ),
      },
    },
    Pesan: {
      screen: PaketSayaStack,
      navigationOptions: {
        tabBarLabel: 'PESAN',
        tabBarIcon: ({tintColor}) => (
          <Icon name="Pesan" fill={tintColor} height={30} width={30} />
        ),
      },
    },
    Profile: {
      screen: PaketSayaStack,
      navigationOptions: {
        tabBarLabel: 'PROFILE',
        tabBarIcon: ({tintColor}) => (
          <Icon name="Profile" fill={tintColor} height={30} width={30} />
        ),
      },
    },
  },

  {
    initialRouteName: 'Home',
  },
);
export default createAppContainer(TabNavigator1);
