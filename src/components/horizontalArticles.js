import React, {memo,useMemo, useCallback} from 'react';
import {View, Text, SafeAreaView, FlatList, Image} from 'react-native';
import {globalStyle} from '../styles/index';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

const {
  titleText,
  container,
  cardContent,
  cardContainerPerCard,
  footerCard,
  slidePicture,
  dateText,
} = globalStyle; //destructuring technic for not make a reference on object

const HorizontalArticle=({navigation, data}) =>{
    const newData =useMemo(()=>{
       return(
           data.reverse()
       )
    },[data]) //use memo to memoization and avoid multiple renders cause of parent 
  return (
    <SafeAreaView style={container}>
      <FlatList
        data={newData}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{alignItems: 'center'}}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={cardContent}>
              <View style={cardContainerPerCard}>
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate('Detail', {
                      item: item,
                    }
                    )
                  }
                >
                  <View>
                    <Image
                      source={{uri: item.image}}
                      style={slidePicture}
                      resizeMode="cover"
                    />

                    <View style={footerCard}>
                      <Text style={dateText}>
                        {item.date} ⬤ <Text>{item.hours}</Text>
                      </Text>
                      <Text style={titleText} numberOfLines={2}>
                        {item.title}
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
HorizontalArticle.propTypes = {
    navigation: PropTypes.shape({}),
    data: PropTypes.array,
  };
export default memo(HorizontalArticle)