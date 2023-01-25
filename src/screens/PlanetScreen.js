import React from "react";
import { SafeAreaView, Dimensions, Text, StyleSheet,
ImageBackground, Image, FlatList, TouchableOpacity } from "react-native";


// Importe la status bar
import { StatusBar } from "expo-status-bar";

// On import axios
import axios from "axios";

//On récupère la largeur de l'écran
const { width } = Dimensions.get('window');
// On déclare les urls de l'api
const url = "https://toctocapi.com/api/themes/planetarium";
const urlImage = "https://toctocapi.com/image-api/";

// On récupère le font dans les assets
const bg = require("../../assets/images/black-sun.jpg");


//
export default function PlanetScreen({ navigation }) {
    return (
        <ImageBackground source={ bg } style={ styles.bg}>
        <StatusBar style="light" />
        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    bg:{
        flex: 1,
        width: width,
    }
})