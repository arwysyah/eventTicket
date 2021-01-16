import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Parallax from '../components/parallax';
import {globalStyle, width} from '../styles/index';
import HorizontalArticle from '../components/horizontalArticles';
import newData from '../data/index';
import VerticalArticles from '../components/verticalArticles';
const {container,bigText}=globalStyle
const Home = ({navigation}) => {
  return (
    <ScrollView style={container}>
      <View style={{top:40,alignItems:'center'}}>
        <Text style={bigText}>Top Trending Events</Text>
      </View>
      <Parallax navigation={navigation} data={newData} />
      <View style={width}>
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
