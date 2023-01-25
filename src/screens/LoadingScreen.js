import React from "react";
import { SafeAreaView, Dimensions, Text, StyleSheet } from "react-native";
// On récupère la largeur de l'écran
const { width } = Dimensions.get("window");

export default function LoadingScreen() {
    <SafeAreaView style={styles.container}>
        <Text style={ styles.text}>Loading...</Text>
    </SafeAreaView>;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        width: width,
    },
    text:{
        color: "#fff",
        fontSize: 30,
    }
});

