import React from 'react';
import {View, Text, Image} from 'react-native';

const Komponen = props => {
  return (
    <View style={{paddingVertical: 10, paddingHorizontal: 4}}>
      <View>
        <Image
          source={props.imgkomponen}
          style={{
            height: 200,
            width: 150,
            borderRadius: 3,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 30,
            width: 150,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            {props.titlekomponen1}
          </Text>
          <Text style={{color: '#FFF', fontSize: 10}}>
            {props.titlekomponen2}
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Komponen;
