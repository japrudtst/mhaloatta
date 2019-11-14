import React from 'react';
import {View, Text, Image} from 'react-native';

const ProdukListing = props => {
  return (
    <View style={{position: 'relative'}}>
      <View
        style={{
          height: 295,
          width: 293,
          marginVertical: 10,
          marginRight: 10,
          borderRadius: 10,
          backgroundColor: '#ffff',
          shadowColor: '#30C1DD',
          shadowRadius: 10,
          shadowOpacity: 0.6,
          elevation: 4,
          shadowOffset: {width: 0, height: 10},
        }}>
        <Image
          source={props.img}
          style={{
            height: 170,
            width: 293,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />

        <View style={{position: 'absolute'}}>
          <Image
            source={require('./../../../assets/image/infopax.png')}
            style={{borderTopLeftRadius: 10, opacity: 0.7}}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            padding: 8,
            alignItems: 'center',
            zIndex: 1,
          }}>
          <Text style={{fontSize: 18, color: '#FFF'}}>Sisa</Text>
          <Text style={{fontSize: 11, color: '#FFF'}}>{props.pax}</Text>
        </View>
        <View style={{flexWrap: 'wrap'}} />
        <View style={{width: '100%', paddingTop: 5}}>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 5,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <View style={{height: 19, width: 19}}>
              <Image
                source={props.imgprofile}
                style={{height: 25, width: 25, borderRadius: 100}}
              />
            </View>
            <View>
              <Image
                source={props.logomaskapai}
                style={{height: 15, width: 30, marginLeft: 15}}
              />
            </View>
            <View style={{flexDirection: 'row', marginLeft: 15}}>
              <Image source={props.star} />
            </View>
            <View style={{paddingLeft: 50}}>
              <Text style={{fontSize: 11, color: '#484848'}}>
                {props.programhari}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginTop: 10,
            }}
          />
        </View>

        <View>
          <Text style={{fontSize: 16, color: '#484848', marginHorizontal: 10}}>
            {props.namapaket}
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: 'red',
            flexDirection: 'row',
            marginTop: 5,
            marginHorizontal: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{paddingBottom: 10}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Rp.{props.harga}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              alignItems: 'center',
              marginRight: 10,
              marginTop: 20,
            }}>
            <View style={{paddingLeft: 2}}>
              <Image source={props.jumlahstar} />
            </View>
            <View style={{paddingRight: 2}}>
              <Text>{props.nilaistar}</Text>
            </View>
            <View style={{marginLeft: 2}}>
              <Image source={require('./../../../assets/image/komentar.png')} />
            </View>
            <View>
              <Text style={{paddingRight: 2, fontSize: 10}}>
                {props.jumlahkomentar}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 10}}>Komentar</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ProdukListing;
