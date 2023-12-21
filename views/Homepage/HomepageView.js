import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput,Image, Text, TouchableOpacity, ScrollView, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {BellIcon, MagnifyingGlassIcon} from 'react-native-heroicons/outline';
import Categories from '../../components/Categories';
import Recipes from '../../components/Recipes';
import axios from 'axios';



export default function HomepageView() 
{
    
    const [activeCategory, setActiveCategory] = useState('beef');
    const [categories, setCategories] = useState([]);
    const [meals, setMeals] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect( () => {
        getCategories();
        getRecipes();
    },[])

    const getCategories = async () => {
        try {
            const response = await axios.get('https://themealdb.com/api/json/v1/1/categories.php');
            if(response && response.data){
                setCategories(response.data.categories);
            }
           
        } catch (error) {
            console.log('Loi: ', error);
        }
    };  

    const getRecipes = async (category="Beef")=>{
        try{
          const response = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
          if(response && response.data){
            setMeals(response.data.meals);
          }
        }catch(err){
          console.log('error: ',err.message);
        }
      }
    
    const  handleCategories = (category) => {
        getRecipes(category);
        setActiveCategory(category);
        setMeals([]);
    };

    const handleSearch = () => {
        // Lọc danh sách công thức nấu ăn dựa trên nội dung tìm kiếm
        const filteredMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase()));

        if(!filteredMeals){

        }
        setMeals(filteredMeals);
    };

    return (
        <View style={styles.container}>
            <Text></Text>
            <StatusBar style="dark"></StatusBar>
            <ScrollView>
                {/* avatar */}
                <View style={styles.avatar} >
                    <Image style={styles.avatar_image} source={require('../../assets/react-native-icon.png')}></Image>
                    <BellIcon  color="gray" />       
                </View>

                {/* punchline */}
                <View >
                <Text style={styles.greeting}>Hello, Noman!</Text>
                <View>
                    <Text style={styles.punchline} >Make your own food,</Text>
                </View>
                <Text style={styles.punchline} >
                    stay at <Text style={styles.punchline_bold}>home</Text>
                </Text>
                </View>

                {/* search bar */}
                <View style={styles.search_container}>
                    <TextInput
                        placeholder='Search any recipe'
                        placeholderTextColor={'gray'}
                        style={styles.search_bar}
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                        
                    />
                    <TouchableOpacity style={styles.search_icon} onPress={handleSearch}>
                        <MagnifyingGlassIcon  strokeWidth={3} color="gray" />
                    </TouchableOpacity>
                </View>

                
                {/* categories */}
                <View>
                    <Categories categories={categories} 
                    activeCategory={activeCategory} 
                    setActiveCategory={setActiveCategory}
                    handleCategories={handleCategories}/>
                </View>

                {/* recipe */}
                {meals.length > 0 ? (
                    <Recipes categories={categories} meals={meals} />
                ) : (
                    <Text style={{ textAlign: 'center',fontSize: 20, marginTop: 20,}}>Chưa có công thức !!!</Text>
                )}
                
            </ScrollView>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: 'white',
    },
    avatar: {
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    avatar_image: {
        width:60,
        height:60,
        borderRadius: 50,
        margin: 20,
    },
    greeting: {
        fontSize:17,
        fontWeight: '600',
    },
    punchline: {
        fontSize:35,
        fontWeight: '600',
    },
    punchline_bold: {
        color:'orange',
    },

    search_container: {
        display:'flex',
        flexDirection: 'row',
        backgroundColor: 'blue',
        borderRadius: 50,
        borderWidth: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:20,
        padding: 5,
        paddingLeft: 15,
    },
    search_bar:{
        fontSize: 17,
        height: 45,
    },
    search_icon:{
        width:40,
        height:40,
        borderRadius: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
