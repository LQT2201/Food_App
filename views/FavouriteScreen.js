import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
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
            <Image source={{ uri: item.mealThumb }} style={styles.image} />
            <Text style={styles.itemText}>{item.mealName}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            {favourites.length > 0 ? (
                <FlatList
                    data={favourites}
                    keyExtractor={item => item.idMeal.toString()}
                    renderItem={renderFavouriteItem}
                />
            ) : (
                <Text style={styles.noFavouritesText}>Chưa có món ăn yêu thích nào.</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
    noFavouritesText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default FavouriteScreen;