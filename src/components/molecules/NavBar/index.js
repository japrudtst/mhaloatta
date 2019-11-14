import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import Icon from '../../../containers/utils/Icon';
const NavBar = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <TouchableOpacity onPress={props.onPress} style={{marginBottom: 5}}>
        <Image source={props.img} style={{width: 30, height: 30}} />
      </TouchableOpacity> */}
      {/* <Icon name="Jelajah" fill="#707070" width="30" height="30" /> */}
      <Text style={{fontSize: 8, color: '#484848', fontWeight: 'bold'}}>
        {props.title}
      </Text>
    </View>
  );
};
export default NavBar;
