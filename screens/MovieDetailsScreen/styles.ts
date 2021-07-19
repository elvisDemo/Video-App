import {StyleSheet} from "react-native"
const styles = StyleSheet.create({
    Image: {
        width: '100%',
        aspectRatio: 16 / 9,
        resizeMode: 'cover'
    },
    match: {
        color: '#00aa00',
        fontWeight: 'bold',
        marginRight: 5
    },
    year: {
        color: '#757575',
        marginRight: 5
    },
    AgeContainer: {
        backgroundColor: '#e6e229',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,

        paddingHorizontal: 5
    },
    Age: {
        color: 'black',
        fontWeight: 'bold'
    },
    Season: {},
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    playButton: {
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:3,
        marginVertical:5
    },
    playButtontxt: {
        color:'black',
        fontWeight:'bold',
        fontSize:19,
    },
    DownloadButton: {
        backgroundColor:'#757575',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:3,
        marginVertical:5
    },
    DownloadButtontxt: {
        color:'white',
   
        fontSize:19
    }
})
export default styles