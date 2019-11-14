import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

const News = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        bottom: 10,
      }}>
      <View
        style={{
          flex: 3,
          paddingRight: 2,
          paddingLeft: 16,
        }}>
        <Text style={{fontSize: 15, color: '#484848', paddingBottom: 5}}>
          Agar Pejalanan Traveling Anda Lebih Berkesan
        </Text>
        <Text style={{fontSize: 10}}>
          Qui sit commodo tempor non reprehenderit ipsum dolore duis deserunt
          minim ad sint duis. Elit aute voluptate nostrud nostrud labore
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <View
            style={{
              backgroundColor: props.colorbtn,
              paddingRight: 10,
              height: 25,
              alignItems: 'center',
              borderRadius: 5,
              flexDirection: 'row',
            }}>
            <Image
              source={props.idea}
              style={{width: 10, height: 12, marginLeft: 5, marginRight: 3}}
            />
            <Text style={{fontSize: 11, color: '#FFF'}}>{props.titleidea}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingRight: 10,
              marginLeft: 5,
            }}>
            <Image source={require('./../../../assets/image/waktuimg2.png')} />
            <Text style={{fontSize: 10}}> 5 Jam Lalu</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 2,
          borderTopLeftRadius: 50,
          marginRight: 16,
          height: 150,
        }}>
        <Image
          source={props.newsimg}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
};
export default News;
