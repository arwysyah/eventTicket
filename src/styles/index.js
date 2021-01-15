import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const spacing = 12;
const SIZE = width * 0.34;
const TOP = 24;
const color = '#E0E5EC';
const black = 'black';
const backgroundColor = '#FFFFFF';
const globalStyle = StyleSheet.create({
  container: {
    backgroundColor,
    flex: 1,
  },
  content: {
    marginLeft: 20,
    marginRight: 20,
  },
  optionalContainer: {
    backgroundColor,
    flex: 1,
  },
  cardContainer: {
    width: width * 0.9,
    height: SIZE,
    backgroundColor: '#FFFFFF',
    borderWidth: 0.3,
    borderColor: 'grey',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    borderRadius: 10,
  },
  image: {
    height: height / 4,
    width: width / 4,
    alignItems: 'center',
    justifyContent: 'center',
    top: -10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#000',
    width: 300,
    bottom: 40,
  },
  commonButton: {
    width: width - 250,
    top: 20,
    height: 45,
    borderRadius: 20,
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
  profilImageBigger: {
    width: width / 3,
    height: width / 3,
    borderRadius: width / 6,
    padding: 10,
    top: 2,
    left: 2,
  },
  imageWrapper: {
    width: width / 2.9,
    height: width / 2.9,
    borderRadius: width / 5.6,
    backgroundColor: '#ffffff',
  },
  textInput: {
    borderBottomWidth: 1.2,
    borderBottomColor: 'grey',
  },
  preview: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageProfile: {
    flex: 1,
    width: width / 6.6,
  },
  capture: {
    // backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },

  textButton: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  profileInfoText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  mapContainer: {
    overflow: 'hidden',
    borderColor: 'red',
    borderRadius: 15,
    shadowOpacity: 0.4,
    elevation: 1.5,
    marginBottom: 5,
    shadowRadius: 1,
    shadowOffset: {height: 2, width: 0},
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 0.5,
    overflow: 'hidden',
    top: 20,
    left: -40,
  },
  closeIconContainer: {
    position: 'absolute',
    top: 8,

    marginLeft: 8,
    zIndex: 999,
    width: 30,
    height: 30,
    borderRadius: 30,
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
    top: -spacing + 15
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
  backgroundColor,
};