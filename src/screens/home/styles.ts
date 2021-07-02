import { StyleSheet } from "react-native";

//Global
import { theme } from "../../global/theme";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
    },
    content:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    textTop:{
        //paddingVertical:20,
        marginTop:10,
        right: 30,
        fontSize: 12,
    },
    box:{
        width: 90,
        height: 90,
        borderRadius:100, 
        justifyContent:'center', 
        alignItems:'center'
    },
    img:{
        width: 50,
        height: 50,
    },
    title:{
        marginTop: 10,
        //marginBottom:10,
        fontSize: 15,
    },

    //Modal

    overlay:{
        flex: 1,
        backgroundColor: theme.colors.overlay,
    },
    containerModal:{
        flex: 1,
        marginTop: 40,
        marginBottom:10,
        marginHorizontal:10,
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor: theme.colors.primary,
        overflow: 'hidden',
    },
    btnclosed:{
        position:'absolute',
        right: 20,
        top: 20,
    },
    imgModal:{
        width: 80,
        height: 80,
        position: 'absolute',
        alignSelf:'center',
        marginTop:'15%',
    },
    titleModal:{
        alignSelf:'center',
        fontSize:25,
        top:180,
    },
    dateModal:{
        alignSelf:'center',
        fontSize:12,
        top:183,
    },
    subtitleModal:{
        textAlign:'center',
        fontSize:15,
        top:200,
        marginHorizontal:40,
    },
    arteModal:{
        position: 'absolute',
        alignSelf:'center',
        width: 200,
        height: 200,
        bottom: -410,
    },
    btn:{
        position: 'absolute',
        alignSelf:'center',
        width: '85%',
        height: 40,
        borderRadius: 20,
        backgroundColor: theme.btn.color.background,
        bottom:-465,
    },
    labelbtn:{
        color: theme.btn.color.label,
        textAlign:'center',
        justifyContent:'center',
        padding: '3%'
    },
})