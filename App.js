import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import Router from './src/config/router';
import HeadersFeature from './src/components/molecules/HeadersFeature';
import MainMenu from './src/containers/organisms/MainMenuSection';
import NavBar from './src/containers/organisms/NavBarSection';
import UmrahFavorit from './src/components/molecules/UmrahFavorit';
import TelusuriButton from './src/components/atoms/TelusuriButton';
import KomponenUmrah from './src/components/molecules/KomponenUmrah';
import InfoHaloAtta from './src/components/molecules/InfoHaloAtta';
import RekomendasiUmra from './src/components/molecules/RekomendasiUmra';
import SedangTrending from './src/components/molecules/SedangTrending';
import ArahBerita from './src/components/molecules/ArahBerita';
import NewsSections from './src/components/molecules/NewsSections';

class App extends Component {
  render() {
    return <Router />;
  }
}
export default App;
