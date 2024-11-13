import { View, Text, Image, StyleSheet, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import Onboard1Img from '../Assets/board1.png'
import TextBox from '../Assets/text-img.png'
import NextBtn from '../Assets/next-btn.png'
import Onboarding from 'react-native-onboarding-swiper';

const{width,height}=Dimensions.get("screen")

export default function IntoScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#5AC2681A"} />


            <TouchableOpacity style={styles.firstdiv} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.text}>skip</Text>
                <Image source={NextBtn} style={styles.next} />
            </TouchableOpacity>

            <Onboarding
                pages={[
                    {
                        backgroundColor: '#5AC2681A',
                        image: <Image source={Onboard1Img} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />

            {/* <ImageBackground source={TextBox} resizeMode='cover' style={styles.quotes_section}>
                <View>
                    <Text style={styles.txtHead}>
                        Buy Groceries Easily
                    </Text>

                    <Text style={styles.txtHead}>
                        with Us
                    </Text>

                    <Text style={styles.txtHead2}>
                        It is a long established fact that a reader
                        will be distracted by the readable.
                    </Text>
                </View>

                <TouchableOpacity style={styles.nextbtn}>
                    <Image source={NextBtn} style={styles.nextimg} />
                </TouchableOpacity>
            </ImageBackground> */}
            {/* <Image style = {styles.textimg} source={TextBox}/> */}
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#5AC2681A',
        flex:1
    },

    firstdiv: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',

    },

    board1: {
        width:width,
        marginTop: 50,
    },

    next: {
        width: 30,
        height: 30,
        marginTop: 20,
        marginRight: 20,
        marginHorizontal: 10
    },

    text: {
        fontSize: 20,
        color: '#1DAB45',
        fontWeight: '400',
        marginBottom: 5
    },

    textimg: {
        height: Dimensions.get('window').height / 2.5,
        width: Dimensions.get('window').width / 1.1,
        marginLeft: 20,
        // marginBottom: 40
    },
    quotes_section: {
        position: 'absolute',
        bottom: 30,
        flex: 1,
        paddingVertical: 100,
        paddingHorizontal: 30,
        // marginLeft:5
        // resizeMode:"contain"
        // marginHorizontal: 8,
        // justifyContent: "center",
        // marginTop: 30
    },
    txtHead: {
        fontWeight: "700",
        fontSize: 24,
        color: "#000",
        lineHeight: 36,
        textAlign: "center"
    },
    txtHead2: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 21,
        textAlign: "center",
        color: '#101811',
        marginHorizontal: 50,
        marginVertical: 30
    },
    nextbtn: {
        position: "absolute",
        bottom: 20,
        right: 0,
        left: 0,
        alignItems: "center"
    },
    nextimg: {
        width: 80,
        height: 80
    }


});