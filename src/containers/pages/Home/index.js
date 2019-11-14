import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';

import HeadersFeature from '../../../components/molecules/HeadersFeature';
import MainMenuSection from '../../organisms/MainMenuSection';
// import NavBarSection from './../../organisms/NavBarSection';
import UmrahFavorit from './../../../components/molecules/UmrahFavorit';
import TelusuriButton from './../../../components/atoms/TelusuriButton';
import KomponenUmrah from './../../../components/molecules/KomponenUmrah';
import InfoHaloAtta from './../../../components/molecules/InfoHaloAtta';
import RekomendasiUmra from './../../../components/molecules/RekomendasiUmra';
import SedangTrending from './../../../components/molecules/SedangTrending';
import ArahBerita from './../../../components/molecules/ArahBerita';
import NewsSections from './../../../components/molecules/NewsSections';

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceHorizontal={true}
          style={{flex: 1, position: 'relative'}}>
          <HeadersFeature />

          {/* Main Menu section */}
          <View>
            <MainMenuSection />
          </View>
          <View style={{flex: 1}}>
            <View style={{position: 'relative'}}>
              <UmrahFavorit
                onFavorit={() =>
                  this.props.navigation.navigate('UmrahFavoritAll')
                }
              />
            </View>
          </View>

          <View>
            <KomponenUmrah />
          </View>
          <View>
            <InfoHaloAtta />
          </View>
          <View>
            <RekomendasiUmra />
          </View>
          <View>
            <TelusuriButton titlebutton={'Telusuri Recomendasi Umrah'} />
          </View>
          <View>
            <SedangTrending />
          </View>
          <View>
            <TelusuriButton titlebutton={'Telusuri Sedang Trending'} />
          </View>
          <View>
            <ArahBerita />
          </View>
          <View>
            <NewsSections />
          </View>
        </ScrollView>
        {/* this section navbar */}
        {/* <View>
          <NavBarSection />
        </View> */}
      </View>
    );
  }
}
export default Home;
