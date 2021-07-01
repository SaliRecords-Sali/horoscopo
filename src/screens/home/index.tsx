import React, {useState,useEffect,useRef} from "react";
import { Image ,View, Text, SafeAreaView, TouchableOpacity, FlatList} from "react-native";
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';


//Grid
import { FlatGrid } from 'react-native-super-grid';

//Styles
import { styles } from "./styles";

//Global
import { theme } from "../../global/theme";

//Icons
import { EvilIcons } from '@expo/vector-icons'; 

//Componente
import { Header } from "../../componentes/header";
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import { Busca } from "../../services/busca";

//DB
import { signos } from "../../db";

//Api
import { api } from "../../services/api";
import axios from 'axios';


export function Home(){
    
    const [filtro, setFiltro] = useState('');
    


      //console.log(horoscopo);

    const [color, setColor] = useState('');
    const [title, setTitle] = useState('');
    const [UriImage, setUriImage] = useState('');
    const [date, setDate] = useState('08/06/2021');
    const [subtitle, setSubtitle] = useState('Melhore sua capacidade de expressar talentos, habilidades e perceber o que pode ser reciclado ou modificado.');

    const modalizeRef = useRef<Modalize>(null);

    const [openSignoModal, setOpenSignoModal] = useState(false);
    const onOpen = () => {
        modalizeRef.current?.open();
    };
    const onClosed = () => {
        modalizeRef.current?.close();
    };

    function openSigno(){
        if(openSignoModal === false){
            setOpenSignoModal(true);
        }else{
            setOpenSignoModal(false);
        }
    }
    return(
        <SafeAreaView style={styles.container}>
            <Header 
            title="Horóscopo"
            />
            
            <Text style={styles.textTop}>Escolha um signo e descubra o horóscopo do dia!</Text>
            
            
            <FlatGrid
                itemDimension={100}
                data={signos}
                style={{width:'100%'}}
                scrollEnabled={false}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    function abrir(){
                        setColor(item.corBg);
                        setTitle(item.signo);
                        setUriImage(item.uriImg);

                        onOpen();
                        //openSigno();
                      }
                    return(
                        <View style={styles.content}>
                            <TouchableOpacity onPress={()=>{abrir()}} activeOpacity={0.5} style={[styles.box,{backgroundColor: item.corBg}]}>
                                <Image style={styles.img} resizeMode="contain" source={{uri: item.uriImg }}/>
                            </TouchableOpacity>
                            <Text style={styles.title}>{item.signo}</Text>
                        </View>
                    )}}
                showsVerticalScrollIndicator={false}
            />
            
            
            <Portal>
                <Modalize modalStyle={styles.containerModal} ref={modalizeRef} snapPoint={0}>
                        <View style={{position:'absolute',top:-850,right:-250,opacity:0.5,width:1000, height:1000, borderRadius:2000, backgroundColor: color}}/>
                        <View style={{position:'absolute',top:-880,right:-300,opacity:0.5,width:1000, height:1000, borderRadius:2000, backgroundColor: color}}/>
                        <View style={{position:'absolute',top:-950,right:-450,opacity:0.5,width:1000, height:1000, borderRadius:2000, backgroundColor: color}}/>
                        <View style={{position:'absolute',top:-875,right:-150,opacity:0.5,width:1000, height:1000, borderRadius:2000, backgroundColor: color}}/>
                        
                    <TouchableOpacity onPress={()=> onClosed()} activeOpacity={0.3} style={styles.btnclosed}>
                        <EvilIcons name="close" size={24} color="black" />
                    </TouchableOpacity>


                    <View style={{opacity:0.8,marginTop: 10,backgroundColor:theme.btn.color.background, position:'absolute', width:80, height:5, borderRadius:2 ,alignSelf:'center'}}/>
                    
                        <Image style={styles.imgModal} resizeMode={'contain'} source={{uri: UriImage}}/>
                            
                        <Text style={styles.titleModal}>{title}</Text>
                        <Text style={styles.dateModal}>{date}</Text>
                        <Text style={styles.subtitleModal}>{subtitle}</Text>
                        <Image style={styles.arteModal} resizeMode={'contain'} source={require('../../assets/modal/arte.png')}/>
                            
                        <TouchableOpacity onPress={()=> onClosed()} activeOpacity={0.5} style={styles.btn}>
                            <Text style={styles.labelbtn}>Veja o horóscopo de outros signos!</Text>
                        </TouchableOpacity>

                    

                </Modalize> 
            </Portal>

        </SafeAreaView>
    )
}