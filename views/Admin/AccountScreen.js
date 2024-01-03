import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

// Dummy data array
const usersData = [
    {
        id: '1',
        avatarUrl: require('./assets/icon-fb.png'),
        name: 'Phuc Hoang',
        email: 'phuchoang@gmail.com',
        address: 'FPT Software DI street',
        joinedDate: '2023-10-08',
    },
    {
        id: '2',
        avatarUrl: require('./assets/icon-fb.png'),
        name: 'Admin - Phuc',
        email: 'phuc@hdmin.apple.com',
        address: '619/16 138 street, Tan Phu ward District 6, HCM City',
        joinedDate: '2023-10-27',
    },

    // ... more users
];

const UserItem = ({ user, onDelete }) => (
    <View style={styles.userCard}>
        <Image
            source={user.avatarUrl} // Replace with your local image path
            style={styles.avatar}
        />
        <View style={styles.userInfo}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <Text style={styles.address}>{user.address}</Text>
            <Text style={styles.joinedDate}>Joined: {user.joinedDate}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(user.id)} style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Xóa</Text>
        </TouchableOpacity>

    </View>
);



const UserListScreen = () => {
    const [data, setData] = React.useState(usersData);

    const handleDelete = (userId) => {
        const updatedData = data.filter(item => item.id !== userId);
        setData(updatedData);
    };
    return (

        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search user's information"
            // Implement the search logic
            />
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <UserItem user={item} onDelete={handleDelete} />}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,

    },
    searchBar: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
    },
    userCard: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        // Add a margin to the right to ensure space for the delete button
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    userInfo: {
        marginLeft: 10,
        flexShrink: 1,
    },
    name: {
        fontWeight: 'bold',
    },
    email: {

        color: 'gray',
    },
    address: {
        color: 'gray',
    },
    joinedDate: {
        color: 'gray',
    },
    deleteButton: {
        backgroundColor: 'red', // Or any color you want for the delete button
        padding: 8,
        borderRadius: 4,
        marginLeft: 'auto', // This will push the button to the far right
    },
    deleteButtonText: {
        color: 'white', // Text color for the delete button
        fontSize: 14,
    },
});

export default UserListScreen;
