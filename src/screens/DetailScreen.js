import React, {useState,useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {width, globalStyle, HEIGHT, height} from '../styles';
import PropTypes from 'prop-types';
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'; //limit icon and improve performance
import HorizontalArticles from '../components/horizontalArticles';
import newData from '../data';
import HeaderSlide from '../components/HeaderSlide';
import Autolink from 'react-native-autolink';
const Detail = ({navigation, route}) => {
  const {item} = route.params;
  const {
    backIconContainer,
    bigText,
    commonButton,
    directionRows,
    floatingButton,
    flexWrap,
    showHide,
    locText,
    nextButton,
    scheduleStyle,
    smallWrapper,
    titleText,
    avatarImage,
    contentPart,
    container
  } = globalStyle;
  const {
    title,
    image,
    hours,
    author,
    date,
    status,
    location,
    detail,
    price,
    id
  } = item;

  const [heightText, setHightText] = useState(false);
  const NUM_OF_LINES = 2;
  const [textHide, setHideText] = useState(true);
  const [follow, setFollow] = useState(false);
  const [showLoading, setShowLoading] = useState(false)
  useEffect(
    () => {
      let timer1 = setTimeout(() => setShowLoading(null), 300)

      // this will clear Timeout
      return () => {
        clearTimeout(timer1)
      }
    },
    [] //useEffect will run only one time
       //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes
  )

  const onTextLayout = (e) => {
    setHightText(e.nativeEvent.lines.length > NUM_OF_LINES);
  };//this is using arrow function because the function not invoked when press button
  function handleView() {
    // The arrow function returns a new function every time. This causes React to think something has changed in our view, when in fact nothing has.
    setHideText(!textHide);
  }
  const content = [
    {
      icon: 'calendar-month',
      header: date,
    },
    {
      icon: 'play-network-outline',
      header: status,
    },
  ];
  function handleFollow() {
    setFollow(!follow);
    const data = follow == true ? 'Follow' : 'Unfollow';
    Alert.alert(`Kamu berhasil ${data}`);
  }

  function renderFirstItem() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Text style={bigText}>About</Text>
          <View style={{paddingLeft: 10, paddingRight: 10}}>
            <Text
              numberOfLines={textHide === true ? NUM_OF_LINES : null}
              onTextLayout={onTextLayout}>
              <Autolink text={detail} url={false} />
            </Text>
            <TouchableOpacity onPress={handleView}>
              <Text style={showHide}>
                {' '}
                {textHide === true ? 'See More' : 'Hide'}{' '}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  function renderSecondItem() {
    return (
      <View style={smallWrapper}>
        <Text style={titleText}>{author}</Text>
        <Image
          source={require('../assets/profile.png')}
          style={avatarImage}
          resizeMode="contain"
        />
      </View>
    );
  }
  const data = ['About', 'Author'];
  return (
    <SafeAreaView>
      {showLoading === false? 
      <View style={container}><ActivityIndicator size='large' color='red' style={{top:height/2}}/>
      </View>:
      <ScrollView showsVerticalScrollIndicator={false}>
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
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View style={[locText]}>
            <Text>{location}</Text>
          </View>
          <View style={[locText]}>
            <Text>{hours}</Text>
          </View>
         </View>
        </View>
        <View style={{height: HEIGHT / 2}} />
        <View>
          <Text style={bigText}>{title}</Text>
          <View style={directionRows}>
            <TouchableOpacity
              style={[
                commonButton,
                {
                  height: 30,
                  width: width / 1.2,
                  backgroundColor: follow !== true ? '#5790f2' : 'white',
                },
              ]}
              onPress={handleFollow}>
              <Text style={{color: follow !== true ? 'white' : 'black'}}>
                {follow === true ? 'Unfollow' : 'Follow'}{' '}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={contentPart}>
            {content.map((item, idx) => {
              return (
                <View key={idx} style={flexWrap}>
                  <MaterialCommunity
                    name={item.icon}
                    size={32}
                    color="grey"
                    style={{left: idx > 2 ? -2 : null}}
                  />
                  <Text style={scheduleStyle}>{item.header}</Text>
                </View>
              );
            })}
          </View>
          <HeaderSlide
            title={data}
            renderFirstItem={renderFirstItem}
            renderSecondItem={renderSecondItem}
          />
        </View>

        <Text style={{color: 'black', paddingLeft: 15, fontSize: 18}}>
          More Like This
        </Text>
        <HorizontalArticles data={newData} navigation={navigation} indexContent ={id}/>
        <View style={{height: 60}} />
      </ScrollView>
}
      <TouchableOpacity
        style={floatingButton}
        onPress={() => Alert.alert('Next')}>
        <Text style={nextButton}>Next</Text>
      </TouchableOpacity>
     
    </SafeAreaView>
  );
};
Detail.propTypes = {
  renderFirstItem: PropTypes.func,
  renderSecondItem: PropTypes.func,
};
export default Detail;
