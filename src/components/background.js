import React, {memo, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {globalStyle, height, globalColor} from '../styles/index';
import Icon from 'react-native-vector-icons/MaterialIcons'; //limit icon and improve performance
const {imageBackground,paggingWrapper} = globalStyle;
const paggingNumber = [1,2,3,4,5]
const BackgroundImage = () => {
  const [active, setActive] = useState(1);
  return (
    <View>
      <ImageBackground
        source={require('../assets/iu.png')}
        style={imageBackground}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            top: height / 8,
          }}>
          <TouchableOpacity>
            <Icon name="keyboard-arrow-left" size={29} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="keyboard-arrow-right" size={29} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            alignSelf: 'center',
            marginTop: height / 3.7,
            justifyContent: 'center',
           
          }}>
          {paggingNumber.map((_, j) => {
            return (
              <View
              key={j}
                style={{flexDirection: 'row',marginHorizontal:2}}>
                <Text  style={{color: j===active?globalColor:'#FFFFFF', fontSize: 10}}>
                  ⬤
                </Text>
              </View>
            );
          })}
        </View>
 
      </ImageBackground>
    </View>
  );
};
export default memo(BackgroundImage);
