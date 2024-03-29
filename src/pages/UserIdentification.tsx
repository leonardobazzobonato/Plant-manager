import { Fontisto } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core"
import React, { useState } from "react"
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Button } from "../components/Button"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)
  const [name, setName] = useState<string>()

  const navigation = useNavigation()

  function handleSubmit() {
    if (!name) return Alert.alert("Me diz como chamar você?")

    try {
      AsyncStorage.setItem("@plantmanager:user", name)
      navigation.navigate("Confirmation", {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      })
    } catch {
      Alert.alert("Não foi possível salvar o seu nome")
    }
  }

  function handleInputBlur() {
    setIsFocused(false)
    setIsFilled(!!name)
  }

  function handleInputFocus() {
    setIsFocused(true)
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value)
    setName(value)
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.icon}>
                <Fontisto name="smiley" size={48} color={colors.heading} />
              </Text>

              <Text style={styles.title}>Como podemos {"\n"} chamar você?</Text>

              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green },
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />

              <View style={styles.footer}>
                <Button title="Confirmar" onPress={handleSubmit} />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

  content: {
    flex: 1,
    width: "100%",
  },

  form: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 54,
    alignItems: "center",
  },

  icon: {
    fontSize: 44,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: "100%",
    fontSize: 18,
    marginTop: 25,
    padding: 10,
    textAlign: "center",
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 32,
    marginTop: 35,
  },

  footer: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
})
