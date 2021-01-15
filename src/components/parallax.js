import React, {memo, useMemo} from 'react';
import {View, Text, Image, Animated, TouchableOpacity} from 'react-native';
import {
  globalStyle,
  width,
  ITEM_HEIGHT,
  ITEM_WIDTH,

} from '../styles/index';

import PropTypes from 'prop-types'

const {cardWrapper, animatedWrapper, parentAnimated, avatarImage} = globalStyle;
const Parallax = ({navigation,data}) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  // const compare=(a, b)=> {
  //   if (a > b) return 1;
  //   if (b > a) return -1;
  
  //   return 0;
  // }
  
  // const newData = useMemo(()=>{
  //   return(
  //     data.sort(compare)
  //   )
  // },[data])
  return (
    <View>
      <Animated.FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}
        renderItem={({item, index}) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width * 0.7, 0, width * 0.7],
          });
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Detail',{item:item})}>
              <View style={cardWrapper}>
                <Text style={{fontWeight: 'bold'}}>{item.author}</Text>
                <View style={animatedWrapper}>
                  <View style={parentAnimated}>
                    <Animated.Image
                      source={{uri: item.image}}
                      style={{
                        width: ITEM_WIDTH,
                        height: ITEM_HEIGHT,
                        borderRadius: 14,
                        transform: [
                          {
                            translateX,
                          },
                        ],
                      }}
                      resizeMode="cover"
                    />
                  </View>
                </View>

                <Image
                  source={{uri: item.image}}
                  style={avatarImage}
                  resizeMode="contain"
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
Parallax.propTypes={
  data:PropTypes.array
}
export default memo(Parallax);
