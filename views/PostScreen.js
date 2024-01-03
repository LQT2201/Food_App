import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function PostScreen() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.user_infor}>
                <Image source={require('./assets/icon-fb.png')} style={{ height: 60, width: 60 }} />
                <View style={styles.infor_user_account}>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>Lương Quốc Toàn</Text>
                    <Text style={{ color: 'gray', marginBottom: 10, }}>@lqt_deadmeme</Text>
                    <TouchableOpacity style={styles.btn_check_account}>
                        <Text style={{ textAlign: 'center' }}>Xem trang bếp</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.user_infor_details}>
                <View style={styles.user_title}>
                    <Text style={styles.title_name}>Tên</Text>
                    <TextInput value='Lương Quốc Toàn'></TextInput>
                </View>
                <View style={styles.user_title}>
                    <Text style={styles.title_name}>ID Cookpad</Text>
                    <TextInput value='@lqt_deadmeme'></TextInput>
                </View>
                <View style={styles.user_title}>
                    <Text style={styles.title_name}>Email</Text>
                    <TextInput value='luongquoctoan.ks@gmail.com'></TextInput>
                </View>
                <View style={styles.user_title}>
                    <TextInput placeholder='Đến từ...'></TextInput>
                </View>
                <View style={styles.user_title}>
                    <TextInput placeholder='Vài dòng về bạn và đam mê nấu nướng'></TextInput>
                </View>
            </View>
            <TouchableOpacity style={styles.view_apply_account}>
                <View style={styles.btn_apply_account}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}>Xác nhận</Text>
                </View>

            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    user_infor: {
        display: 'flex',
        flexDirection: 'row'
    },
    infor_user_account: {
        marginLeft: 20,
    },
    btn_check_account: {
        borderWidth: 1,
        padding: 5,
        borderBlockColor: 'gray',
        borderRadius: 5,
    },
    user_title: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        margin: 10,
    },
    title_name: {
        color: 'gray',
        fontSize: 13,
    },
    view_apply_account: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
    },
    btn_apply_account: {
        backgroundColor: 'orange',
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 10,
    }

})