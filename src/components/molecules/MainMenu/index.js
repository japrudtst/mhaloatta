import React from 'react';
import {View, Text, Image} from 'react-native';

const MainMenu = props => {
  return (
    <View
      style={{
        height: 64,
        width: 64,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 5,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#30C1DD',
        shadowRadius: 10,
        shadowOpacity: 0.6,
        elevation: 8,
        shadowOffset: {width: 0, height: 4},
        marginBottom: 10,
      }}>
      <View>
        <Image
          source={props.img}
          style={{height: 40, width: 40, paddingBottom: 10}}
        />
      </View>
      <Text style={{fontSize: 9, color: '#484848'}}>{props.title}</Text>
    </View>
  );
};
export default MainMenu;
