import React, {memo, useMemo} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {globalStyle, width} from '../styles/index';
import PropTypes from 'prop-types';
const {
  smallImage,
  cardContainer,
  titleText,
  directionRows,
  container,
  dateText,
  commonText,
} = globalStyle;

const VerticalArticles = ({navigation, data}) => {
  const newData = useMemo(() => {
    return data;
  }, [data]);
  return (
    <SafeAreaView style={container}>
      <FlatList
        data={newData}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        bounces={false}
        scrollEventThrottle={60}
        decelerationRate={0}
        renderItem={({item, index}) => {
          return (
            // <View>
            <View style={cardContainer}>
              <TouchableOpacity
                style={directionRows}
                onPress={() =>
                  navigation.navigate('Detail', {
                    item: item,
                  })
                }>
                <View style={{justifyContent: 'center'}}>
                  <Image
                    source={{uri: item.image}}
                    style={smallImage}
                    resizeMode="stretch"
                  />
                </View>

                <View
                  style={{
                    width: width * 0.6,
                  }}>
                  <Text
                    style={[titleText, {left: 15, top: 50}]}
                    numberOfLines={2}>
                    {item.title}
                  </Text>
                  <Text style={[commonText, {left: width / 3, top: 80}]}>
                    {item.author}
                  </Text>
                </View>
              </TouchableOpacity>
              <View>
                <Text style={[dateText, {left: -width / 4, top: 4}]}>
                  {item.date}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};
VerticalArticles.propTypes = {
  route: PropTypes.string,
  navigation: PropTypes.shape({}),
  data: PropTypes.array,
};
export default memo(VerticalArticles);
