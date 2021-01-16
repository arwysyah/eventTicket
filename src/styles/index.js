import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;
const TOP = 24;
const color = '#E0E5EC';
const black = 'black';
const ITEM_WIDTH = (width / 1.4) * 0.76;
const ITEM_HEIGHT = (ITEM_WIDTH / 1.4) * 1.47;
const backgroundColor = '#f0f5f2';
const globalStyle = StyleSheet.create({
  container: {
    backgroundColor,
    flex: 1,
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
  },
  cardWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 1.8,
    // backgroundColor: '#f0f5f2',
  },
  parentAnimated: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    overflow: 'hidden',
    alignItems: 'center',
    // backgroundColor: '#FFFFFF',
  },
  animatedWrapper: {
    borderRadius: 18,
    borderWidth: 7,
    shadowColor: '#000',
    shadowRadius: 30,
    shadowOpacity: 1,

    backgroundColor: '#f0f5f2',
    borderColor: '#FFFFFF',
  },
  titleText: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    top: 5,
  },
  dateText: {
    color: '#fc9803',
    fontSize: 14,
  },
  cardContent: {
    height: HEIGHT * 1.8,
    width: width / 1.2,
    paddingLeft: 20,
  },
  footerCard: {
    height: 65,
    width: '100%',
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: HEIGHT,
    // borderRadius: 8,
    borderWidth: 0.3,
    borderColor: '#cfcfcf',
    // borderRadius: 30,
    backgroundColor: 'white',
    // borderRadius: 10,
    shadowColor: '#000',
  },
  smallImage: {
    height: 120,
    width: 120,
    borderRadius: 6,
  },
  locText: { backgroundColor: '#FFFDDA', width: width / 4, alignItems: "center", top: -19 },
  directionRows: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 30,
  },scheduleStyle:{fontSize: 18, textAlign: 'center', left: 30},
  smallWrapper:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,

  },
  contentPart:{
    justifyContent: 'center',
    alignItems: 'center',
    height: width/2,
  },
  commonButton: {
    width: width - 250,
    top: 20,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#5790f2',


    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },
  nextButton:{color: '#FFFFFF', fontWeight: 'bold'},
  floatingButton: {
    width: 200,
    backgroundColor: 'red',
    position: 'absolute',
    height: 40,

    bottom: 0,
    width: width,

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#5790f2',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },
  flexWrap: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    left: -height / 6,
  },
  commonText: {
    fontSize: 10,
    color: 'black',
  },
  cardContainerPerCard: {
    backgroundColor: '#FFFFFF',
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: HEIGHT * 2,
    borderRadius: 8,
    borderRadius: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },
  showHide: { textAlign: 'center', fontSize: 17, color: '#3262a8' },
  parentHeader: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    height: 36,
    position: 'relative',
    backgroundColor: 'white',
  },
  cardPart: {
    backgroundColor: '#ffffff',
    opacity: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT / 2,
    borderRadius: 8,
    // width:width/1.2,
    padding: spacing * 2,
  },
  slidePicture: {
    height: HEIGHT * 1.2,
    width: width / 1.3,
    borderRadius: 10,
    left: 3,
  },
  avatarImage: {
    width: 60,
    height: 60,
    // bottom,
    borderRadius: 60,
    position: 'absolute',
    bottom: HEIGHT - 90,
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFFFFF',
  },
  bigText: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  backIconContainer: {
    position: 'absolute',

    left: 15,
    zIndex: 999,
    width: 35,
    height: 35,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    top: -spacing + 15,
  },
});

export {
  globalStyle,
  color,
  black,
  SIZE,
  spacing,
  width,
  height,
  TOP,
  HEIGHT,
  backgroundColor,
  ITEM_WIDTH,
  ITEM_HEIGHT,
};
