import React from 'react';
import {View, Text,  Image} from 'react-native';
import {globalStyle, height, globalColor} from '../styles/index';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler'
const {

  smallCard,
  image,
  imageContainer,
  styleicons,
  line,
  txt,
  txt_2,
  rowIcon
} = globalStyle;

const CardContent = ({item}) => {
  return (
    <>
    <View style={imageContainer}>
    <Image
      source={item.image}
      resizeMode="cover"
      style={image}
    />
  </View>
  <View
    style={{
      backgroundColor: 'white',
      height: height / 5.2,
      top: -height / 9.8,
    }}>
    <View
      style={[smallCard, {paddingLeft: 20, paddingVertical: 20}]}>
      <Text style={{fontSize: 17, fontWeight: 'bold'}}>
        {item.name}
      </Text>
      <Text style={txt}>{item.time}</Text>
      <Text style={txt_2}>{item.location}</Text>
    </View>
    <View
      style={rowIcon}>
      <View style={styleicons}>
        <TouchableOpacity>
          <Image
            source={require('../assets/heart-solid_3.png')}
            style={{height: 25, width: 25}}
            resizeMode="stretch"
          />
        </TouchableOpacity>
        <Ionicons
          name="md-share-social-outline"
          size={25}
          color="grey"
          style={{left: 30}}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
            color: globalColor,
          }}>
          {' '}
          GET TICKET{' '}
        </Text>
      </View>
    </View>
    <View style={line} />
  </View>
  </>
  );
};
export default CardContent;

