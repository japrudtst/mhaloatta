import React from 'react';
import {View, Text, Image} from 'react-native';
import News from './../../../containers/template/News';

const NewsSections = () => {
  return (
    <View>
      <View style={{paddingBottom: 20}}>
        <News
          idea={require('./../../../assets/image/idea.png')}
          titleidea={'Travel Tips'}
          colorbtn={'#20C9B4'}
          newsimg={require('./../../../assets/image/news1.png')}
        />
      </View>
      <View>
        <News
          idea={require('./../../../assets/image/kajianimg.png')}
          titleidea={'Umrah'}
          colorbtn={'#F43662'}
          newsimg={require('./../../../assets/image/news2.png')}
        />
      </View>
    </View>
  );
};
export default NewsSections;
