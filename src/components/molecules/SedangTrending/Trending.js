import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

const Trending = props => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          paddingLeft: 8,
          paddingBottom: 10,
          marginTop: 10,
        }}>
        <View
          style={{
            borderRadius: 5,
            backgroundColor: '#ffff',
            shadowColor: '#30C1DD',
            shadowRadius: 10,
            shadowOpacity: 0.6,
            elevation: 4,
            shadowOffset: {width: 0, height: 10},
          }}>
          <Image
            source={props.imgtrending}
            style={{
              height: 160,
              width: 160,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
          />
          <View style={{alignItems: 'center', width: 160}}>
            <View style={{flex: 1, paddingTop: 10}}>
              <Text style={{fontSize: 15, color: '#484848'}}>
                {props.judultrending}
              </Text>
            </View>
            <View style={{flex: 1, paddingBottom: 10, marginLeft: 16}}>
              <Text style={{fontSize: 10, flexWrap: 'wrap'}}>
                {props.subjudultrending}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Trending;
