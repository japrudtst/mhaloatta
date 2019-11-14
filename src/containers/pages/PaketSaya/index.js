import React from 'react';
import {View, Text, Button} from 'react-native';
import NavbarSection from '../../../containers/organisms/NavBarSection';

const PaketSata = props => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Page Order saya</Text>
        <Button
          title={'Go to Detail Paket Saya'}
          onPress={() => props.navigation.navigate('DetailPaketSaya')}
        />
      </View>
    </View>
  );
};

export default PaketSata;
