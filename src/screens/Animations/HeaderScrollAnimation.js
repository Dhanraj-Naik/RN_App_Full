import React, { useRef } from 'react';
import { Text, View, StyleSheet, ScrollView, Animated } from 'react-native';
import AnimatedHeader from './component/AnimatedHeader';
import DATA from '../../Helpers/data';

const HeaderScrollAnimation = ({
    navigation,
}) => {

    //REFERENCE:
    //https://blog.jscrambler.com/how-to-animate-a-header-view-on-scroll-with-react-native-animated/
    
    const offset = useRef(new Animated.Value(0)).current;
    // console.log('HeaderScrollAnimation offset:', offset.current);

    return (
        <View>
            <AnimatedHeader animatedValue={offset} />
            <ScrollView
                style={{
                    backgroundColor: 'grey'
                }}
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingTop: 220,
                    paddingHorizontal: 20
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                //Mapping gestures like scrolling directly to an animated value can be done by using Animated.Event
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: offset } } }],
                    { useNativeDriver: false }
                )}
                onScrollEndDrag={() => {
                    console.log('HeaderScrollAnimation offset:', offset);
                }}
            >

                {DATA.map(item => (
                    <View
                        key={item.id}
                        style={{
                            marginBottom: 20
                        }}
                    >
                        <Text style={{ color: '#101010', fontSize: 32 }}>
                            {item.title}
                        </Text>
                    </View>
                ))}

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default HeaderScrollAnimation;
