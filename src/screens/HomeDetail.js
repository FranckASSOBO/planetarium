import React from "react";
import { SafeAreaView, Dimensions, Text, StyleSheet } from "react-native";
// On importe la video
import { Video } from 'expo-av';
// On importe la status bar
import { StatusBar } from 'expo-status-bar';
// On récupère la largeur de l'écran
const { width } = Dimensions.get("window");

export default function HomeDetail(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={ styles.paragraphe}>Une vidéo de présentation du Système Solaire</Text>
            <Text style={ styles.paragraphe}>Bon visionnage!</Text>
            <Video style={ styles.video } source={ require("../../assets/videos/le-systeme-solaire.mp4") } useNativeControls={true} resizeMode="contain" isLooping={false} usePoster={true} posterSource={require('../../assets/videos/poster.png')} shouldPlay={true}/>
            <StatusBar style="dark" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
    },
    paragraphe:{
        color: "#fff",
        fontSize: 18,
        fontFamily: "openSansLight",
        textAlign: "justify",
        marginVertical: 15,
        paddingHorizontal: 15,
    },
    video:{
        width: width,
        height: width * 720 / 1280,
    }
});
