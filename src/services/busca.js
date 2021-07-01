import React, {useState,useEffect} from "react";
import { Text,TextInput , FlatList} from "react-native";

import { api } from "./api";
import axios from "axios";

export function Busca(){

const [arquivo, setHoroscopo] = useState('');

const [data, setData] = useState([]);
const [title, setTitle] = useState([]);
const [sign, setSign] = useState([]);
const [description, setDescription] = useState([]);

async function getHoroscopes() {
    const response = await api.get('');
    setData(response.data.result);
    
};
const horoscopes = data.map(item => [...item.horoscopes])
console.log(horoscopes);
useEffect(() => {
    /*fetch('https://apiv2.resolvaclub.com/api/horoscope/test')
    .then((response)=> response.json())
    .then((json)=> {
        setData(json.result);
    })
    .catch((error)=> alert(error));*/
    getHoroscopes()
  }, []);
  const valores = data.map((item)=> item.horoscopes)
  
return(

    <FlatList
        data={horoscopes}
        keyExtractor={({title}) => title}
        renderItem={({item})=>{
    return(
        <>
        <TextInput style={{backgroundColor:'#d9d9d9', width:400}}>{item.description}</TextInput>

        </>
    )}}/>
)}