import React from 'react';
import {View, Text, Image} from 'react-native';
import Berita from './Berita';

const ArahBerita = () => {
  return (
    <View>
      <Berita
        imgarahberita={require('./../../../assets/image/arahberita.png')}
      />
    </View>
  );
};
export default ArahBerita;
