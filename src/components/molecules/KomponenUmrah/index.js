import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Komponen from './Komponen';

const KomponenUmrah = () => {
  return (
    <ScrollView
      style={{paddingHorizontal: 13}}
      horizontal
      showsHorizontalScrollIndicator={false}
      alwaysBounceVertical>
      <View
        style={{
          flex: 1,
          paddingRight: 25,
          flexDirection: 'row',
        }}>
        <Komponen
          imgkomponen={require('./../../../assets/image/komponen1.png')}
          titlekomponen1={'Tiket Group'}
          titlekomponen2={'Elit ad aliqua sit magna.'}
        />
        <Komponen
          imgkomponen={require('./../../../assets/image/komponen2.png')}
          titlekomponen1={'LA Akomodasi'}
          titlekomponen2={'Elit ad aliqua sit magna.'}
        />
        <Komponen
          imgkomponen={require('./../../../assets/image/komponen3.png')}
          titlekomponen1={'Visa'}
          titlekomponen2={'Elit ad aliqua sit magna.'}
        />
      </View>
    </ScrollView>
  );
};
export default KomponenUmrah;
