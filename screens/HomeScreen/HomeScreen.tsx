import * as React from 'react';
import { FlatList, Image, StyleSheet ,Pressable} from 'react-native';
import styles from './styles'
import {Text,View} from '../../components/Themed'
import categories from '../../assets/data/categories';
import HomeCategory from '../../components/HomeCategory';
import { useNavigation } from '@react-navigation/native';
const firstCategories = categories.items[1]
const HomeScreen = () => {
  
  const navigation = useNavigation()
  const onMoviePress = (movie)=>{
    navigation.navigate('MovieDetailsScreen',{id:movie.id})
  }
  return (
    <View style={styles.container}>
   {/* List Of categories */}
 
   <FlatList
   data={categories.items}
   renderItem={({item})=>
   <Pressable
   onPress={()=>{
     onMoviePress(item)
   }}
   >
     <HomeCategory category={item}/>
   </Pressable>
}
   />
    </View>
  );
};

export default HomeScreen;


