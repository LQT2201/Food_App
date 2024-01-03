import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const FavouriteScreen = () => {
    const [favourites, setFavourites] = useState([]);
    useFocusEffect(
        useCallback(() => {
            loadFavourites();
        }, [])
    );
    const loadFavourites = async () => {
        const storedFavourites = await AsyncStorage.getItem('favourites');
        if (storedFavourites) {
            setFavourites(JSON.parse(storedFavourites));
        }
    };

    const renderFavouriteItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={require('../assets/favicon.png')} style={styles.avatar} />
            <View style={styles.itemTextContainer}>
                <Text style={styles.userName}>Lương quốc toàn</Text>
                <Text style={styles.foodName}>{item.mealName}</Text>
            </View>
            <Image source={{ uri: item.mealThumb }} style={styles.foodImage} />
        </View>
    );



    return (
        <View style={styles.container}>
            {favourites.length > 0 ? (
                <View>
                    <Text style={styles.FavouritesText}>Danh sách yêu thích</Text>
                    <TextInput
                        placeholder="Tìm trong 4 món"
                        style={styles.searchInput}
                    />
                    <FlatList
                        data={favourites}
                        keyExtractor={item => item.idMeal.toString()}
                        renderItem={renderFavouriteItem}
                    />
                </View>
            ) : (
                <Text style={styles.FavouritesText}>Chưa có món ăn yêu thích nào!!!</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: 'white',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        paddingVertical: 10,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    itemText: {
        fontSize: 18,
    },
    FavouritesText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        color: 'red',

    },
    container: {
        flex: 1,
        marginTop: 20,
    },
    searchInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    itemTextContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    userName: {
        fontWeight: 'bold',
    },
    foodName: {
        color: 'gray',
    },
    foodImage: {
        width: 100,
        height: 100,
    },
    likeButton: {
        padding: 10,
        alignItems: 'center',
    },
});

export default FavouriteScreen;