import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const DATA = [
    { id: '1', title: 'Gà nước bột', imageUrl: require('./assets/icon-fb.png') },
    { id: '2', title: 'Gà xào miến tôm', imageUrl: require('./assets/icon-fb.png') },
    { id: '3', title: 'hihi', imageUrl: require('./assets/icon-fb.png') },
    { id: '4', title: 'hihi', imageUrl: require('./assets/icon-fb.png') },
];

const dataLength = DATA.length;

const Item = ({ title, imageUrl }) => (
    <TouchableOpacity style={styles.item}>
        <Image style={styles.image} source={imageUrl} />
        <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
);
const App = () => {
    const renderItem = ({ item }) => <Item title={item.title} imageUrl={item.imageUrl} />;

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', margin: 10, }}>
                <View style={styles.btn_createPost}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Tạo bài viết</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.header}>{`${dataLength} Món Nhập`}</Text>

            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2} // Adjust number of columns here
                key={'two-columns'}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100, // Set image size
        height: 100, // Set image size
    },
    title: {
        fontSize: 16,
        marginTop: 8,
    },
    btn_createPost: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 40,
        backgroundColor: 'orange',
        padding: 5,
        borderRadius: 10,
    }
});

export default App;
