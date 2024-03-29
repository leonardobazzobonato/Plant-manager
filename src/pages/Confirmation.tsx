import React from "react"
import { StyleSheet, Platform, View, Text } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import colors from "../styles/colors"
import { Button } from "../components/Button"
import fonts from "../styles/fonts"
import { useNavigation, useRoute } from "@react-navigation/core"

interface Params {
  title: string
  subtitle: string
  buttonTitle: string
  icon: "smile" | "hug"
  nextScreen: string
}

const emojis = {
  hug: "hearto",
  smile: "smileo"
}

export function Confirmation() {
  const navigation = useNavigation()
  const routes = useRoute()

  const { title, subtitle, buttonTitle, icon, nextScreen } =
    routes.params as Params

  function handleMoveOn() {
    navigation.navigate(nextScreen)
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <AntDesign name={`${emojis[icon]}`} size={48} color={colors.heading} />

        <Text style={styles.title}>{title}</Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>

        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleMoveOn} />
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
