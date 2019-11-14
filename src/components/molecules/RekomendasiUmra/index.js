import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import HeaderProduk from './../../../containers/template/HeaderProduk';
import ProdukListing from './../../../containers/template/ProdukListing';

const RekomendasiUmra = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderProduk headertitle={'Rekomendasi Umra'} />
      <HeaderProduk headerket={'Amet id incididunt excepteur consectetur '} />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceVertical
        style={{paddingRight: 16}}>
        <View style={{flexDirection: 'row', paddingLeft: 16}}>
          <ProdukListing
            img={require('./../../../assets/image/produk6.jpg')}
            pax={'20 Pax'}
            imgprofile={require('./../../../assets/image/profile.jpg')}
            logomaskapai={require('./../../../assets/image/logogaruda.png')}
            star={require('./../../../assets/image/start3.png')}
            programhari={'Program 10 Hari'}
            namapaket={'Umrah Exclusive Rombongan September'}
            harga={'23.000.000'}
            jumlahstar={require('./../../../assets/image/start.png')}
            nilaistar={'4.0'}
            jumlakomentar={'150'}
          />
          <ProdukListing
            img={require('./../../../assets/image/produk5.jpg')}
            pax={'20 Pax'}
            imgprofile={require('./../../../assets/image/profile.jpg')}
            logomaskapai={require('./../../../assets/image/logogaruda.png')}
            star={require('./../../../assets/image/start3.png')}
            programhari={'Program 10 Hari'}
            namapaket={'Umrah Exclusive Rombongan September'}
            harga={'23.000.000'}
            jumlahstar={require('./../../../assets/image/start.png')}
            nilaistar={'4.0'}
            jumlakomentar={'150'}
          />
          <ProdukListing
            img={require('./../../../assets/image/produk8.jpg')}
            pax={'20 Pax'}
            imgprofile={require('./../../../assets/image/profile.jpg')}
            logomaskapai={require('./../../../assets/image/logogaruda.png')}
            star={require('./../../../assets/image/start3.png')}
            programhari={'Program 10 Hari'}
            namapaket={'Umrah Exclusive Rombongan September'}
            harga={'23.000.000'}
            jumlahstar={require('./../../../assets/image/start.png')}
            nilaistar={'4.0'}
            jumlakomentar={'150'}
          />
          <ProdukListing
            img={require('./../../../assets/image/produk7.jpg')}
            pax={'20 Pax'}
            imgprofile={require('./../../../assets/image/profile.jpg')}
            logomaskapai={require('./../../../assets/image/logogaruda.png')}
            star={require('./../../../assets/image/start3.png')}
            programhari={'Program 10 Hari'}
            namapaket={'Umrah Exclusive Rombongan September'}
            harga={'23.000.000'}
            jumlahstar={require('./../../../assets/image/start.png')}
            nilaistar={'4.0'}
            jumlakomentar={'150'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default RekomendasiUmra;
