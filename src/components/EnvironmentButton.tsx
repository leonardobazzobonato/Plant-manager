import React from "react"
import { StyleSheet, Text, Image, View } from "react-native"
import { RectButton, RectButtonProps } from "react-native-gesture-handler"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

interface EnvironmentButtonProps extends RectButtonProps {
  title: string
  active?: boolean
}

export function EnvironmentButton({
  title,
  active = false,
  ...rest
}: EnvironmentButtonProps) {
  return (
    <RectButton
      style={[styles.container, active && styles.containerActive]}
      {...rest}
    >
      <Text style={[styles.text, active && styles.textActive]}>{title}</Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginHorizontal: 5,
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },

  text: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  textActive: {
    fontSize: 17,
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
})
