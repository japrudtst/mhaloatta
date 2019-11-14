import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Trending from './Trending';
import HeaderProduk from './../../../containers/template/HeaderProduk';

const SedangTrending = () => {
  return (
    <View>
      <View>
        <HeaderProduk headertitle={'Sedang Trending'} />
        <HeaderProduk headerket={'Irure ipsum adipisicing ut labore anim.'} />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceVertical
        style={{paddingLeft: 10}}>
        <View style={{flexDirection: 'row', paddingRight: 20}}>
          <Trending
            imgtrending={require('./../../../assets/image/tranding1.png')}
            judultrending={'Umrah Bareng Artis'}
            subjudultrending={'Ad sint do est aliquip duis esse minim '}
          />

          <Trending
            imgtrending={require('./../../../assets/image/tranding2.png')}
            judultrending={'Umrah Bareng Artis'}
            subjudultrending={'Ad sint do est aliquip duis esse minim '}
          />
          <Trending
            imgtrending={require('./../../../assets/image/tanding3.png')}
            judultrending={'Umrah Bareng Artis'}
            subjudultrending={'Ad sint do est aliquip duis esse minim '}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default SedangTrending;
