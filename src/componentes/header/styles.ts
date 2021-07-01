import { StyleSheet } from "react-native";

// Global
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    efeitoHeader:{
        width:200,
        height:200, 
        borderRadius:1000,
        position:'absolute', 
        opacity: 0.5,
    },
    container:{
        flexDirection: 'row',
        position: 'relative',
        top: 0,
        width: '100%',
        height: '12%',
        alignItems: 'center',
        backgroundColor: theme.header.colors.background,
        justifyContent: 'space-between',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius:30,
        overflow: 'hidden',
    },
    content:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 20,
    },
    title:{
        justifyContent:'center',
        right: 115,
        marginTop: 2,
    }
})