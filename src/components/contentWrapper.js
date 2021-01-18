import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { globalStyle } from '../styles/index';
import SliderMenu from '../components/sliderMenu';
const { contentSlide } = globalStyle
const ContentWrapper = () => {
    return (
        <View style={contentSlide}>
            {/* <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            // onChangeText={text => onChangeText(text)}
            // value={value}
            /> */}
            <SliderMenu />
        </View>
    );
};
export default ContentWrapper;
