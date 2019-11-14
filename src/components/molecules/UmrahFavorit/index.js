import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import ProdukListing from './../../../containers/template/ProdukListing';
import HeaderProduk from './../../../containers/template/HeaderProduk';
import TelusuriButton from './../../../components/atoms/TelusuriButton';

const UmrahFavorit = ({onFavorit}) => {
  return (
    <View>
      <View style={{paddingBottom: 3}}>
        <HeaderProduk headertitle={'Umrah Favorit'} />
        <View>
          <HeaderProduk
            headerket={'Enim velit et sit in deserunt deserunt amet '}
          />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        alwaysBounceVertical
        style={{
          paddingLeft: 16,
          flex: 1,
        }}>
        <View style={{flexDirection: 'row', paddingRight: 20}}>
          {/* Section Paket Umrah Favorit =============================================*/}

          <ProdukListing
            pax={'10 Pax'}
            img={require('./../../../assets/image/produk3.jpg')}
            imgprofile={require('./../../../assets/image/profile.jpg')}
            logomaskapai={require('./../../../assets/image/logogaruda.png')}
            star={require('./../../../assets/image/start4.png')}
            programhari={'Program 9 Hari'}
            namapaket={'Umrah Exclusive Rombongan September'}
            harga={'25.000.000'}
            jumlahstar={require('./../../../assets/image/start.png')}
            nilaistar={'5.0'}
            jumlahkomentar={'100'}
          />
          <ProdukListing
            pax={'30 Pax'}
            img={require('./../../../assets/image/produk4.jpg')}
            imgprofile={require('./../../../assets/image/profile.jpg')}
            logomaskapai={require('./../../../assets/image/logogaruda.png')}
            star={require('./../../../assets/image/start2.png')}
            programhari={'Program 12 Hari'}
            namapaket={'Umrah Exclusive Rombongan Oktober-November'}
            harga={'24.000.000'}
            jumlahstar={require('./../../../assets/image/start.png')}
            nilaistar={'5.0'}
            jumlahkomentar={'100'}
          />
          <ProdukListing
            pax={'30 Pax'}
            img={require('./../../../assets/image/produk5.jpg')}
            imgprofile={require('./../../../assets/image/profile.jpg')}
            logomaskapai={require('./../../../assets/image/lionair.png')}
            star={require('./../../../assets/image/start5.png')}
            programhari={'Program 10 Hari'}
            namapaket={'Umrah Exclusive Rombongan November-Desember'}
            harga={'23.000.000'}
            jumlahstar={require('./../../../assets/image/start.png')}
            nilaistar={'5.0'}
            jumlahkomentar={'100'}
          />
        </View>

        {/* And section Umrah Favorit Paket======================================== */}
      </ScrollView>
      <TouchableOpacity onPress={onFavorit}>
        <TelusuriButton titlebutton={'Telusuri Umrah Favorit'} />
      </TouchableOpacity>
    </View>
  );
};
export default UmrahFavorit;
