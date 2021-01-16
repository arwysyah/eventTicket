import React, {memo, useMemo, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import {globalStyle} from '../styles/index';
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'; //limit icon and improve performance

const {
  titleText,
  container,
  cardContent,
  cardContainerPerCard,
  footerCard,
  slidePicture,
  dateText,
} = globalStyle; //destructuring technic for not make a reference on object

const HorizontalArticle = ({navigation, data}) => {
  const [array, setArray] = useState([]);
  const handleLike = (index) => {
    if (array.includes(index)) {
      let idxRemoved = array.splice(index, 1);
      setArray(idxRemoved);
    } else {
      let newArray = array.concat(index);
      setArray(newArray);
    }
  };

  const newData = useMemo(() => {
    return data
  }, [newData]); //use memo to memoization and avoid multiple renders cause of parent
  return (
    <SafeAreaView style={container}>
      <FlatList
        data={newData}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          return (
            <View style={cardContent}>
              <View style={cardContainerPerCard}>
                <View>
                  <TouchableWithoutFeedback
                    onPress={() =>
                      navigation.navigate('Detail', {
                        item: item,
                      })
                    }>
                    <Image
                      source={{uri: item.image}}
                      style={slidePicture}
                      resizeMode="cover"
                    />
                  </TouchableWithoutFeedback>

                  <View style={footerCard}>
                    <Text style={dateText}>
                      {item.date} ⬤ <Text>{item.hours}</Text>
                    </Text>
                    <Text style={titleText} numberOfLines={2}>
                      {item.title}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => handleLike(index)}>
                    <MaterialCommunity
                      name="heart-circle"
                      size={22}
                      color={array.includes(index) !== true ? 'grey' : 'red'}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
HorizontalArticle.propTypes = {
  navigation: PropTypes.shape({}),
  data: PropTypes.array,
};
export default memo(HorizontalArticle);
