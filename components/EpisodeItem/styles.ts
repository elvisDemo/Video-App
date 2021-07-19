import {StyleSheet} from "react-native"
const styles = StyleSheet.create({
    Image: {
        height: 80,
        aspectRatio: 16 / 9,
        resizeMode: 'cover',
        borderRadius: 3
    },
    plot: {color:'#757575'},
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:5
    },
    title: {},
    titleContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'center'
    },
    duration: {
        color: '#757575',
        fontSize: 10
    }
})
export default styles