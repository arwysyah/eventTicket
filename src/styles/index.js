import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const spacing = 12;
const SIZE = width * 0.62;
const HEIGHT = SIZE - 90;
const TOP = 24;
const color = '#E0E5EC';
const black = 'black';
const ITEM_WIDTH = (width / 1.4) * 0.76;
const ITEM_HEIGHT = (ITEM_WIDTH / 1.4) * 1.47;
const backgroundColor = '#FBFBFB';
const globalColor = '#9E69D2';
const globalStyle = StyleSheet.create({
  container: {
    backgroundColor,
    flex: 1,
  },
  imageBackground: {width, height: height / 3.2},
  content: {
    marginLeft: 20,
    marginRight: 20,
  },
  title: {fontSize: 23, fontWeight: 'bold', color: globalColor},
  wrapper: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    width,
  },
  txt:{
    color: '#9E9E9E',
  left:-2},

  txt_2:{color: 
    '#9E9E9E',
},
  rowIcon:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  pagingWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: height / 5,
    justifyContent: 'center',
  },
  rotate: {
    transform: [{rotate: '90deg'}],
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
  contentWrapper: {
    borderRadius: 20,
    position: 'absolute',
    top: height * 0.31,
    alignSelf: 'center',
    width,
    backgroundColor: 'white',
    flex: 1,
    height: 600,
  },
  icons: {
    backgroundColor: '#EEE5F5',
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    borderRadius: 8,
    left: 12,
  },
  textInput: {
    width: width * 0.8,
    borderColor: 'gray',
    borderWidth: 0.8,
    borderRadius: 10,
    height: 37,
    paddingLeft: 48,
  },
  smallCard: {
    height: height / 7,
    backgroundColor: '#FFFFFF',
    width: width * 0.9,
    top: -25,
    alignSelf: 'center',
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
    // borderWidth:0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 0.8,
    elevation: 4,
  },
  imageContainer: {
    height: height / 2.5,
    // backgroundColor: 'red',
    width: width * 0.89,
    alignSelf: 'center',
    top: -30,

    borderRadius: 10,
  },
  styleicons: {
    height: 40,
    width: 40,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: 23,
  },
  line: {
    borderWidth: 0.1,
    height: 1,
    backgroundColor: '#F0F0F0',
    width: width * 0.9,
    alignSelf: 'center',
    left: -10,
  },
  image: {
    flex: 1,
    width: width * 0.9,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: -85,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  rowsContainer: {
    borderRadius: 20,
    position: 'absolute',
    top: height * 0.31,
    alignSelf: 'center',
    width,
    height: 400,
    position: 'absolute',
  },
  headerSearch: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    paddingHorizontal: 20,
    left: -12,
  },
  commonText: {color: 'grey', fontSize: 12, top: 45},
  lineControl: {
    backgroundColor: '#c9ccd1',
    top: 145,
    width,
  },
  smallTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: globalColor,
    left: 13,
  },
  floatingButton: {
    width: width * 0.9,
    backgroundColor: globalColor,

    height: 40,
    top: -40,

    bottom: 0,

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonCreate: {
    width: 200,
    backgroundColor: globalColor,

    height: 40,

    bottom: 0,

    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 8,
  },
  headerWrapper: {
    top: -30,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  head: {
    height: height / 3,
    borderRadius: 20,
    top: 20,
  },
  footer: {
    height: height / 3,
    alignItems: 'center',
    top: 160,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: 'grey',
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
  globalColor,
};
