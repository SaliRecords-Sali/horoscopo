import React, {useState,useEffect,useRef} from "react";
import { Image ,View, Text, SafeAreaView, TouchableOpacity, TextInput} from "react-native";
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

//DB
import { signos } from "../../db";

//Api

import { getAll } from "../../services/horoscope";


export function Home(){

    const [color, setColor] = useState('');
    const [title, setTitle] = useState('');
    const [UriImage, setUriImage] = useState('');
    
    const [subtitle, setSubtitle] = useState(null);

    const [dados, setDados]= useState([]);
    const modalizeRef = useRef<Modalize>(null);

    // Data
    const mes = new Date().getMonth()+1;
    const dia = new Date().getDay()-3;
    const ano = new Date().getFullYear();

    const [mesFormat, setMesFormat] = useState('');
    const [diaFormat, setDiaFormat] = useState('');
    
    const [date, setDate] = useState('');
    const [dateModal, setDateModal] = useState('');


    useEffect(()=>{
        if(mes < 10){
            setMesFormat(`0${mes}`)
        }else{
            setMesFormat(`${mes}`)
        }
        if(dia < 10){
            setDiaFormat(`0${dia}`)
        }else{
            setDiaFormat(`${dia}`)
        }
        consulta();
    },[])
    useEffect(()=>{
        setDate(`${ano}-${mesFormat}-${diaFormat}`);
        setDateModal(`${diaFormat}-${mesFormat}-${ano}`);
    },[diaFormat])
    useEffect(()=>{
        onOpen();
    },[title])

    const consulta = async () => {
        // faz a requisição pra api
        const response = await getAll();
        //crio uma variavel só pra receber os dados
        const data = response.data.result;
        setDados(data)
    }

    const onOpen = () => {
        if(subtitle !== ''){

            // crio uma outra variavel que vai receber os dados do signo
            let details;

            /*
            troquei de map para forEach pois o forEach nao retorna um array
            ele apenas ira percorrer o array
            */

            dados.map(item => {
                
                // verificação da data. Usando o new Date nunca entrava na condição
                if (date === item.dt) {
                    setDate(item.dt)
                    //faço details receber o objeto com as informações de descrição, signo e titulo
                    var details = item.horoscopes.filter(item => {
                        if(item.sign === title){
                            setSubtitle(item.description)
                            modalizeRef.current?.open();
                        } 
                    }).shift()
                }
            });
        }else{
        
        }
    };

    const onClosed = () => {
        //setSubtitle(null);
        modalizeRef.current?.close();
    };

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
                        <Text style={styles.dateModal}>{dateModal}</Text>
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