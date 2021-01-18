import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalStyle, globalColor} from '../styles/index';
// const data = [
//   'All',
//   'Bbbbbb',
//   'Ccccccccc',
//   'Bbbbbb',
//   'Cccccccccccc',
//   'Bbbbbb',
//   'Ccccccccc',
//   'Bbbbbb',
//   'Cccccccccccc',
// ];
const active = 0;
const SliderMenu = ({data}) => {
  const renderItem = ({item, index}) => {
    return (
      <View style={{marginLeft:5}}>
        <TouchableOpacity
          style={{
            borderWidth: 0.8,
            borderColor: 'grey',
            height: 30,
            justifyContent: 'center',
            borderRadius: 30,
            alignItems: 'center',
            padding: 8,
            backgroundColor: index === active ? globalColor : null,
          }}>
          <Text
            style={{
              textAlign: 'center',
              left:-3,
              color: index === active ? '#FFFFFF' : 'black',alignItems:'center'
            }}>
            {' '}
            {item}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{top:20,left:5}}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </>
  );
};
export default SliderMenu;
