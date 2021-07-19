import * as React from 'react';
import { FlatList, Image, StyleSheet } from 'react-native';
import styles from './styles'
import {Text} from '../../components/Themed'

interface HomeCatgoryProps {
  category:{
    id:string,
    title:string,
    movies:{
        id:string,
        poster:string
    }[]
  }
}
const HomeCategory = (props:HomeCatgoryProps) => {
    const {category} = props;
  return (
    <>
        <Text style={styles.Title}>{category.title}</Text>
   <FlatList
   data={category.movies}
   renderItem={({item})=>(
    <Image style={styles.Image} source={{uri:item.poster}}/>

   )}
   horizontal
   />
   
    </>
  );
};

export default HomeCategory;


