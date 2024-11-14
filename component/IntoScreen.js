import { View, Text, Image, StyleSheet, SafeAreaView, Dimensions, ImageBackground, TouchableOpacity, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import Onboard1Img from '../Assets/board1.png'
import TextBox from '../Assets/text-img.png'
import NextBtn from '../Assets/next-btn.png'
import Onboarding from 'react-native-onboarding-swiper';

const { width, height } = Dimensions.get("screen")

export default function IntoScreen() {

    function Onboardingtitle() {
        return (
            <ImageBackground source={TextBox} resizeMode='contain' style={styles.quotes_section}>
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
            </ImageBackground>
        )
    }

    const CustomDot = ({ selected }) => {
        return (
            <View
                style={[
                    styles.dot,
                    { backgroundColor: selected ? '#4CAF50' : '#D8D8D8' },
                ]}
            />
        );
    };

    const CustomNextButton = ({ ...props }) => (
        <TouchableOpacity {...props} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>→</Text>
        </TouchableOpacity>
    );
    return (
        <>
            <StatusBar barStyle={"dark-content"} backgroundColor={"#5AC2681A"} />
            <ScrollView style={styles.container}>


                <TouchableOpacity style={styles.firstdiv}>
                    <Text style={styles.text}>skip</Text>
                    <Image source={NextBtn} style={styles.next} />
                </TouchableOpacity>

                <View style={{ flex: 1}}>
                    {/* <Onboarding
                        pages={[
                            {
                                title: <Onboardingtitle />,
                                backgroundColor: '#5AC2681A',
                                image: (
                                    <Image source={Onboard1Img} style={styles.OnboardingImage} />
                                ),
                            },
                            {
                                title: <Onboardingtitle />,
                                backgroundColor: '#5AC2681A',
                                image: (
                                    <Image source={Onboard1Img} />
                                ),
                            }
                        ]}
                    /> */}

                    <Onboarding
                        onSkip={() => navigation.replace("Home")}
                        onDone={() => navigation.replace("Home")}

                        DotComponent={CustomDot}
                        NextButtonComponent={CustomNextButton}
                        DoneButtonComponent={CustomNextButton}
                        pages={[
                            {
                                backgroundColor: '#5AC2681A',
                                image: (
                                    <Image
                                        source={Onboard1Img}
                                        style={{ width: width, height: height/2,resizeMode:'contain',backgroundColor:"green" }}
                                    />
                                ),
                                title: <Onboardingtitle/>
                            },
                            {
                                backgroundColor: '#5AC2681A',
                                image: (
                                    <Image
                                        source={Onboard1Img}
                                        style={{ width: 300, height: 300 }}
                                    />
                                ),
                                title: 'We Deliver Groceries at Your Doorstep',
                                subtitle: 'It is a long established fact that a reader will be distracted by the readable.',
                            },
                            {
                                backgroundColor: '#5AC2681A',
                                image: (
                                    <Image
                                        source={Onboard1Img}
                                        style={{ width: 300, height: 300 }}
                                    />
                                ),
                                title: 'One Store For All Your Grocery Needs',
                                subtitle: 'It is a long established fact that a reader will be distracted by the readable.',
                            },
                        ]}
                    />
                </View>


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
            </ScrollView>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5AC2681A',
        // flex:1,
    },
    firstdiv: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    board1: {
        width: width,
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
        width: width,
        height: height / 2,
        backgroundColor:"red"
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
        bottom: 70,
        right: 0,
        left: 0,
        alignItems: "center"
    },
    nextimg: {
        width: 80,
        height: 80
    },
    OnboardingImage: {
        width: width,
        height: height / 2,
        resizeMode: 'contain',
    }


});