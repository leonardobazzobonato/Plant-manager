import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";

import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import { Button } from "../components/Button"

export function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerencie {'\n'} suas plantas {'\n'} de forma fácil</Text>
      <Image source={wateringImg} style={styles.image}/>
      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas, {'\n'}nós o lembraremos sempre que
        precisar.
      </Text>
      <Button title='>' />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: Platform.OS === 'android' ? 25 : 0
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },

    subtitle: {
        textAlign: 'center',
        fontSize: 16,
        paddingHorizontal: 20,
        color: colors.heading
    },

    image: {
        width: 290,
        height: 275,
    },
});
