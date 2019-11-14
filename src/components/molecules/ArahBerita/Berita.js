import React from 'react';
import {View, Text, Image} from 'react-native';

const Berita = props => {
  return (
    <View style={{position: 'relative'}}>
      <View
        style={{
          borderRadius: 5,
          position: 'relative',
          margin: 16,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 10,
        }}>
        <Image
          source={props.imgarahberita}
          style={{height: 200, borderRadius: 5, width: '100%'}}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 110,
          justifyContent: 'center',
          width: 240,
          marginHorizontal: 20,
          paddingLeft: 10,
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FFF'}}>
          Dubai Negara Termewah di Uni Emirat Arab{' '}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 35,
          marginHorizontal: 20,
          paddingLeft: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <View
            style={{
              backgroundColor: '#F6A84E',
              borderRadius: 3,
              flexDirection: 'row',
              height: 25,
              width: 85,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('./../../../assets/image/kajianimg.png')}
              style={{width: 15, height: 15, marginRight: 5}}
            />
            <Text style={{color: '#FFF', fontSize: 11}}>Kajian</Text>
          </View>
        </View>
        <View style={{marginLeft: 100}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('./../../../assets/image/waktuimg.png')}
              style={{marginRight: 5}}
            />
            <Text style={{color: '#FFF', fontSize: 12}}>5 Jam Lalu</Text>
          </View>
        </View>
        <View
          style={{
            marginLeft: 15,

            backgroundColor: 'red',
          }}
        />
      </View>
    </View>
  );
};
export default Berita;
