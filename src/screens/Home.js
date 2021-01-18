import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import {globalStyle, width, height, globalColor} from '../styles/index';
import BackgroundImage from '../components/background';
import SliderMenu from '../components/sliderMenu';
import Octicons from 'react-native-vector-icons/Octicons';
import CardContent from '../components/card';
import {ScrollView} from 'react-native-gesture-handler';
import {secondData, eventComing, newData, buttonTitle} from '../data/data';
const {
  container,
  title,
  wrapper,
  icons,
  textInput,
  headerSearch,
  smallTitle,
  line,
  headerWrapper,
  buttonCreate,
  floatingButton,
  head,
  footer,
  footerText,
  lineControl,
  commonText,
  rotate
} = globalStyle;

const Home = () => {
  return (
    <ScrollView style={container}>
      <View>
        <View>
          <View style={wrapper}>
            <View style={{flexDirection: 'row'}}>
              <Text style={title}>Eventories</Text>
              <Text style={[title, {left: width / 3.4}]}>⬤</Text>
            </View>
          </View>
          <BackgroundImage />
        </View>
        <View style={headerWrapper}>
          <View style={head}>
            <View style={headerSearch}>
              <Octicons
                name="search"
                size={19}
                color="grey"
                style={{left: 30}}
              />
              <TextInput style={textInput} placeholder="What are you up to" />

              <View style={icons}>
                <Octicons name="settings" size={29} color={globalColor} style={rotate} />
              </View>
            </View>
            <Text style={smallTitle}>Event Categories</Text>
            <SliderMenu data={buttonTitle} />
          </View>
        </View>
        <View style={{top: -60}}>
          {newData.map((item, index) => {
            return (
              <View key={index}>
                <CardContent item={item} />
              </View>
            );
          })}
          <TouchableOpacity style={floatingButton}>
            <Text style={{color: 'white'}}>Load more events</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: height}}>
        <View style={{top: -90, height: 80}}>
          <Text style={smallTitle}>Upcoming Events</Text>
          <SliderMenu data={eventComing} />
        </View>
        <View>
          {secondData.map((item, index) => {
            return (
              <View key={index}>
                <CardContent item={item} />
              </View>
            );
          })}
          <TouchableOpacity style={floatingButton}>
            <Text style={{color: 'white'}}>Load more events</Text>
          </TouchableOpacity>
        </View>
        <View style={{top: 40}}>
          <View style={{alignItems: 'center', top: -height / 25}}>
            <Image source={require('../assets/project.png')} />
          </View>
          <View style={{top: -height / 12, paddingLeft: 20}}>
            <Text
              style={{
                fontSize: 17,
                fontWeight: 'bold',
                color: 'black',
                top: 34,
              }}>
              You can create events in Mediacartz
            </Text>
            <Text style={commonText}>
              Penjelasan tentang buat event di Mediacartz.
            </Text>
          </View>
          <TouchableOpacity style={[buttonCreate, {top: -5}]}>
            <Text style={{fontSize: 16, color: 'white'}}>Create Event</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[line, lineControl]} />
      <View style={footer}>
        <Text style={footerText}>
          Copyright 2020 Mediacartz. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
};
export default Home;
