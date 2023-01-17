import React from "react"
import { StyleSheet, Platform, View, Text } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import colors from "../styles/colors"
import { Button } from "../components/Button"
import fonts from "../styles/fonts"
import { useNavigation } from "@react-navigation/core"

export function Confirmation() {
  const navigation = useNavigation()
  function handleMoveOn() {
    navigation.navigate("PlantSelect")
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AntDesign name="smileo" size={48} color={colors.heading} />

        <Text style={styles.title}>Prontinho</Text>

        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </Text>

        <View style={styles.footer}>
          <Button title="Começar" onPress={handleMoveOn} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 30,
  },

  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },

  subtitle: {
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 17,
    paddingVertical: 20,
    color: colors.heading,
  },

  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
})
