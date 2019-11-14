import React from 'react';
import {View, Text, Image} from 'react-native';
import MainMenu from './../../../components/molecules/MainMenu';

const MainMenuSection = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
        <View style={{flexDirection: 'row'}}>
          <MainMenu
            title="Paket Umrah"
            img={require('./../../../assets/icon/paket-umrah.png')}
          />
          <MainMenu
            title="Tiket Group"
            img={require('./../../../assets/icon/tiket-group.png')}
          />
          <MainMenu
            title="LA-Akomodasi"
            img={require('./../../../assets/icon/la-akomodasi.png')}
          />
          <MainMenu
            title="Visa Perjalanan"
            img={require('./../../../assets/icon/visa-perjalanan.png')}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <MainMenu
            title="Asuransi"
            img={require('./../../../assets/icon/asuransi.png')}
          />
          <MainMenu
            title="Handling"
            img={require('./../../../assets/icon/handling.png')}
          />
          <MainMenu
            title="Manasik"
            img={require('./../../../assets/icon/manasik.png')}
          />
          <MainMenu
            title="Lainnya"
            img={require('./../../../assets/icon/lainnya.png')}
          />
        </View>
      </View>
    </View>
  );
};
export default MainMenuSection;
