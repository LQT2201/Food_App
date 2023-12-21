import { View, Text, ScrollView, TouchableOpacity,StyleSheet,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import Loading from '../../components/Load';
import { ChevronLeftIcon, ClockIcon, FireIcon } from 'react-native-heroicons/outline';
import {  HeartIcon, Square3Stack3DIcon, UsersIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';


import Animated, { FadeInDown, FadeIn } from 'react-native-reanimated';



export default function RecipeDetailScreen(props) {
    let item = props.route.params;
    const [isFavourite, setIsFavourite] = useState(false);
    const [favourites,setFavourite] = useState([]);
    const navigation = useNavigation();
    const [loading, setLoading] = useState(true);
    const [meal,setMeal] =useState();
    

    useEffect(()=>{
        getMealData(item.idMeal);
    },[favourites])

    const getMealData = async (id)=>{
        try{
          const response = await axios.get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
          if(response && response.data){
            setMeal(response.data.meals[0]);
            setLoading(false);
          }
        }catch(err){
          console.log('error: ',err.message);
        }
    }

    const ingredientsIndexes = (meal)=>{
        if(!meal) return [];
        let indexes = [];
        for(let i = 1; i<=20; i++){
            if(meal['strIngredient'+i]){
                indexes.push(i);
            }
        }

        return indexes;
    }

    const handleFavorite = (mealId) => {

        const isMealInFavorites = favourites.some(fav => fav.idMeal === mealId);
        console.log
        if (isMealInFavorites) {
            // Nếu món ăn đã có trong favorites, xóa nó ra khỏi danh sách
            const updatedFavorites = favourites.filter(fav => fav.idMeal !== mealId);
            setFavourite(updatedFavorites);
            
        } else {
            // Nếu món ăn chưa có trong favorites, thêm nó vào danh sách
            const updatedFavorites = [...favourites, { idMeal: mealId, mealName: meal?.strMeal }];
            setFavourite(updatedFavorites);
            
            
        }
        console.log(favourites);
        
        // Cập nhật trạng thái isFavourite
        setIsFavourite(!isFavourite);
    };

  return (
    <View>
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingTop: 10, paddingBottom:30}}
        >

        {/* recipe image */}
        <View style={styles.recipe_container}>
            <Image
                source ={{uri: item.strMealThumb }}
                sharedTransitionTag={item.strMeal}
                style={styles.recipe_image}

            />
        </View>

        {/* back button */}
        <Animated.View entering={FadeIn.delay(200).duration(1000)} style={styles.back_container}>
            <TouchableOpacity style={styles.back_btn} onPress={()=> navigation.goBack()}>
                <ChevronLeftIcon size={20} strokeWidth={5} color="#fbbf24" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.favourite_btn} onPress={() => handleFavorite(item.idMeal)}>
                <HeartIcon size={20} strokeWidth={5}   color={isFavourite? "red": "gray"} />
            </TouchableOpacity>
        </Animated.View>

         {/* meal description */}{
            loading? (
                <Loading size="large" className="mt-16" />
            ):(
                <View style={styles.description_container}>
                    {/* name and area */}
                    <Animated.View entering={FadeInDown.duration(700).springify().damping(12)} style={styles.name_container}>
                        <Text style={styles.meal_name}>
                            {meal?.strMeal}
                        </Text>
                        <Text style={styles.meal_area}>
                            {meal?.strArea}
                        </Text>
                    </Animated.View>

                    {/* misc */}
                    <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)} style={styles.misc_container}>
                        <View style={styles.clock_container}>
                            <View 
                                style={styles.clock_icon}
                            >
                                <ClockIcon size={40} strokeWidth={2.5} color="#525252" />
                            </View>
                            <View style={styles.minute}>
                                <Text style={{fontSize:20, fontWeight:'700',}} >
                                    35
                                </Text>
                                <Text style={{fontSize:13, fontWeight:'700',}}>
                                    Phút
                                </Text>
                            </View>
                        </View>
                        
                        <View style={styles.clock_container}>
                            <View 
                                style={styles.clock_icon}
                            >
                                <UsersIcon size={40} strokeWidth={2.5} color="#525252" />
                            </View>
                            <View style={styles.minute}>
                                <Text style={{fontSize:20, fontWeight:'700',}} >
                                    04
                                </Text>
                                <Text style={{fontSize:13, fontWeight:'700',}}>
                                    Người
                                </Text>
                            </View>
                        </View>

                        <View style={styles.clock_container}>
                            <View 
                                style={styles.clock_icon}
                            >
                                <FireIcon size={40} strokeWidth={2.5} color="#525252" />
                            </View>
                            <View style={styles.minute}>
                                <Text style={{fontSize:20, fontWeight:'700',}} >
                                    103
                                </Text>
                                <Text style={{fontSize:13, fontWeight:'700',}}>
                                    Nhiệt độ
                                </Text>
                            </View>
                        </View>

                        <View style={styles.clock_container}>
                            <View 
                                style={styles.clock_icon}
                            >
                                <Square3Stack3DIcon size={40} strokeWidth={2.5} color="#525252" />
                            </View>
                            <View style={styles.minute}>
                                <Text style={{fontSize:20, fontWeight:'700',}} >
                                    Level   
                                </Text>
                                <Text style={{fontSize:13, fontWeight:'700',}}>
                                    Medium
                                </Text>
                            </View>
                        </View>
                        
                      
                    </Animated.View>

                    {/* ingredients */}
                    <Animated.View entering={FadeInDown.delay(200).duration(700).springify().damping(12)}>
                        <Text style={{fontSize: 25, fontWeight: 700, marginVertical: 20,}}>
                            Nguyên liệu
                        </Text>
                        <View >
                            {
                                ingredientsIndexes(meal).map(i=>{
                                    return (
                                        <View key={i} style={{flexDirection:'row', marginLeft: 10, alignItems: 'center' }}>
                                            <View style={{height: 13, width: 13, backgroundColor: 'orange', borderRadius: 50, }}
                                                 />
                                            <View style ={{flexDirection: 'row', marginLeft: 20,}} >
                                                    <Text style={{fontSize: 17, fontWeight:'700'}} >{meal['strMeasure'+i]}</Text>
                                                    <Text style={{fontSize: 17, fontWeight:'400', marginLeft: 20,}} >{meal['strIngredient'+i]}</Text>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </Animated.View>

                    {/* instructions */}
                    <Animated.View entering={FadeInDown.delay(300).duration(700).springify().damping(12)} 
                    style ={{marginTop: 10}}>
                        <Text style={{fontSize: 25, flex: 1, fontWeight:'700', marginVertical: 20,}}>
                            Instructions
                        </Text>
                        <Text style={{fontSize: 15}} className="text-neutral-700">
                            {
                                meal?.strInstructions
                            }
                        </Text>
                    </Animated.View>

                    {/* recipe video */}

                    {
                        meal.strYoutube && (
                            <Animated.View entering={FadeInDown.delay(400).duration(700).springify().damping(12)} className="space-y-4">
                                <Text style={{fontSize: (2.5)}} className="font-bold flex-1 text-neutral-700">
                                    Recipe Video
                                </Text>
                                <View>

                                    <TouchableOpacity className="mb-5" onPress={()=> handleOpenLink(meal.strYoutube)}>
                                        <Text className="text-blue-600" style={{fontSize: (2)}}>{meal.strYoutube}</Text>
                                    </TouchableOpacity>

                                </View>
                            </Animated.View>
                        )
                    }


                </View>
            )
        }
        </ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
    recipe_container: {
        display: 'flex',
        padding:5,
        justifyContent: 'center',
        
        
    },
    recipe_image: {
        width: '100%',
        height: 350,
        borderRadius: 40,
        borderBottomRightRadius: 35,
        borderBottomLeftRadius: 35,
    },
    back_container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    back_btn: {
        marginLeft: 15,
        backgroundColor: 'white',
        borderRadius:50,
        padding:8,
    },
    favourite_btn: {
        marginRight: 15,
        backgroundColor: 'white',
        borderRadius:50,
        padding:8,
    },
    description_container:{
        display: 'flex',
        justifyContent: 'space-between',
        margin: 15,
    },
    name_container:{
        marginTop:5 ,
        marginBottom: 20,
    },
    meal_name: {
        fontSize:27,
        fontWeight: '700',
        flex: 1,
    },
    meal_area: {
        fontSize:20,
        fontWeight: '400',
        flex: 1,
    },
    misc_container: {
        flexDirection:'row',
        justifyContent: 'space-around',
    },
    clock_container: {
        display: 'flex',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 50,
    },
    clock_icon: {
        backgroundColor:'white',
        display: 'flex',
        
        borderRadius: 50,
        padding:10,
    }
});