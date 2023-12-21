import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../AuthContext'

const AccountScreen = () => {
    const { logout } = useContext(AuthContext);
    const navigation = useNavigation();

    const handleLogout = () => {
        logout();
        navigation.navigate('Login');

    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Button onPress={handleLogout} title='Logout'></Button>
        </View>
    );
};

export default AccountScreen;
