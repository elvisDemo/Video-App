import React from 'react'
import styles from '../../components/EpisodeItem/styles'
import {Image,Pressable} from 'react-native'
import {View, Text} from '../Themed'
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons'; 

interface EphisodeItemProps {
    episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string
    }
       onPress: (eppisode: Episode) => {}}

const EpisodeItem = (props : EphisodeItemProps) => {
    const {episode,onPress} = props
    return (
        <Pressable style={{marginVertical:10}} 
        onPress={() => onPress(episode)}>
            <View style={styles.row}>
                <Image
                    style={styles.Image}
                    source={{
                        uri: episode.poster
                    }}/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {episode.title}
                        </Text>
                        <Text style={styles.duration}>
                            {episode.duration}
                        </Text>
                    </View>
                    <AntDesign name="download" size={24} color='white' />

            </View>
            <Text style={styles.plot}>{episode.plot}</Text>
        </Pressable>
    )
}

export default EpisodeItem
