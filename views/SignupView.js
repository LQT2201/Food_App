
import React from 'react';
import { View, Text, SafeAreaView, Button, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// 21522461 -- Nguyễn Văn Phong

const SignupView = ({ navigation }) => {
    const gotoLogin = () => {
        navigation.replace('Login');
    }
    return (
        <ImageBackground
            source={require('../assets/background.png')}
            style={styles.signup_view}>
            <SafeAreaView>

                <View>
                    <View style={styles.signup_infor}>
                        <Ionicons name="person-outline" style={{ fontSize: 18 }}></Ionicons>
                        <TextInput placeholder='Enter username' style={{ marginLeft: 10 }} ></TextInput>
                    </View>
                    <View style={styles.signup_infor}>
                        <Ionicons name="mail-outline" style={{ fontSize: 18 }}></Ionicons>
                        <TextInput placeholder='Enter email' style={{ marginLeft: 10 }} ></TextInput>
                    </View>
                    <View style={styles.signup_infor}>
                        <Ionicons name="lock-closed-outline" style={{ fontSize: 18 }}></Ionicons>
                        <TextInput placeholder='Enter password' secureTextEntry={true} style={{ marginLeft: 10 }} ></TextInput>
                    </View>
                    <View style={styles.signup_infor}>
                        <Ionicons name="lock-closed-outline" style={{ fontSize: 18 }}></Ionicons>
                        <TextInput placeholder='Confirm password' secureTextEntry={true} style={{ marginLeft: 10 }} ></TextInput>
                    </View>
                </View>
                <View style={styles.button_display}>
                    <TouchableOpacity style={styles.button_option}>
                        <Text style={styles.button_option_content}
                        >Create</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button_option, { backgroundColor: 'red' }]} onPress={gotoLogin}>
                        <Text style={styles.button_option_content}
                        >LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    signup_view: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon_logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    signup_infor: {
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    button_option: {
        padding: 10,
        margin: 10,
        backgroundColor: 'green',
        color: 'white',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'transparent',
        width: 100

    },
    button_option_content: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button_display: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default SignupView;