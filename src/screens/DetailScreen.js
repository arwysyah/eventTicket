import React from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import {width, globalStyle, HEIGHT} from '../styles';
import PropTypes from 'prop-types';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
const Detail = ({navigation, route}) => {
  const {item} = route.params;
  const {backIconContainer,bigText} = globalStyle;
 const{title,image,hours,author,date,status,location,detail}=item
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={backIconContainer}>
        <MaterialCommunity name="arrow-left" size={25} color="black" />
      </TouchableOpacity>
      <View style={{height: width / 3, width}}>
        <Image
          style={{width, height: width / 2}}
          source={{uri: image}}
          resizeMode="contain"
        />
      </View>
      <View style={{height:HEIGHT/2}}/>
      <View>
  <Text style={bigText}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};
Detail.propTypes = {
  items: PropTypes.object,
};
export default Detail;
