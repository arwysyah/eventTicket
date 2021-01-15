import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Parallax from '../components/parallax';
import {globalStyle, height, HEIGHT, width} from '../styles/index';
import HorizontalArticle from '../components/horizontalArticles';
import newData from '../data/index';
import VerticalArticles from '../components/verticalArticles';
const Home = ({navigation}) => {
  return (
    <ScrollView style={globalStyle.container}>
      <Parallax  navigation={navigation} data={newData}/>
      <View style={{height: HEIGHT * 1.8, width: width}}>
        <HorizontalArticle navigation={navigation} data={newData} />
        <View style={{height: 20}} />
      </View>
      <ScrollView>
        <View>
          <VerticalArticles navigation={navigation} data={newData} />
        </View>
      </ScrollView>
    </ScrollView>
  );
};
export default Home;
