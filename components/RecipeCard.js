import React from "react";
import { View,Text,StyleSheet, Pressable,Image} from "react-native";
import Animated, { FadeInDown } from 'react-native-reanimated';

export default RecipeCard = ({item,index, navigation}) => {
    let isEven = index%2 ==0;
    return(
        <Animated.View entering={FadeInDown.delay(index*100).duration(600).springify().damping(12)}>
            <Pressable 
            onPress={() => {navigation.navigate('RecipeDetail',{...item})}}
            style={{width: '100%', 
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: isEven? 0:8, paddingRight: isEven?8:0}}>
                <Image 
                sharedTransitionTag={item.strMeal}
                source={{uri: item.strMealThumb}}
                style={{width: '100%', height: index%3==0? 250:350, borderRadius: 35}}>
                </Image>
                <Text style={{fontSize:15, fontWeight:'500', margin: 5,}}>
                    {item.strMeal.length>15? item.strMeal.slice(0,15)+'...': item.strMeal}
                </Text>
            </Pressable>
            </Animated.View>
    );
}

