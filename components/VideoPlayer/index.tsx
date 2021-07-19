import React, {useEffect, useRef,useState} from 'react'
import {View, Text,Button} from 'react-native'
import {Audio, Video} from 'expo-av';
import styles from './styles'
import { unloadAsync } from 'expo-font';
import { Playback } from 'expo-av/build/AV';
interface VideoPlayerProps {

    episode: {
        id: string,
        title: string,
        poster: string,
        duration: string,
        plot: string,
        video: string
    }

}
const VideoPlayer = (props : VideoPlayerProps) => {
    const {episode} = props;
    const video = useRef<Playback>(null)

    

    useEffect(() => {
        if (!video) {
            return;
        }
        (async () => {
            await video?.current?.unloadAsync();
            await video?.current?.loadAsync(
                { uri: episode.video },
                {},
                false
            );
        })();
    }, [episode])


    const [status, setStatus] = useState({});
    // const handleVideoRef = component => { const playbackObject = component;
    // const source ={         uri:episode.video     }     playbackObject.loadAsync
    // (         source     )   }

    return (
        <View>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: episode.video
                }}
                useNativeControls
                resizeMode="contain"
                posterStyle={{
                    resizeMode:'cover'
                }}
                usePoster={true}
                posterSource={{
                    uri:episode.poster
                }}
                onPlaybackStatusUpdate={status => setStatus(() => status)}/>

                <Button 
                  title={status.isPlaying ? 'Pause' : 'Play'}
                  onPress={() =>
                    status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                  }
                />
        </View>
    )
}
export default VideoPlayer
