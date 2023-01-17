import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import wateringImg from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie {"\n"} suas plantas {"\n"} de forma fácil
      </Text>

      <Image source={wateringImg} style={styles.image} resizeMode="contain" />

      <Text style={styles.subtitle}>
        Não esqueça mais de regar suas plantas, {"\n"}nós o lembraremos sempre
        que precisar.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleStart}
      >
        <Feather name="chevron-right" style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

  title: {
    fontSize: 32,
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 38,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    color: colors.white,
    fontSize: 26,
  },

  image: {
    height: Dimensions.get("window").width * 0.7,
  },
});
