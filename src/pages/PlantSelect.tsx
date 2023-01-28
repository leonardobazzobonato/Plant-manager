import { useNavigation } from "@react-navigation/core"
import React, { useEffect, useState } from "react"
import { Text, View, StyleSheet, FlatList } from "react-native"
import { EnvironmentButton } from "../components/EnvironmentButton"
import { Header } from "../components/Header"
import { PlantCardPrimary } from "../components/PlantCardPrimary"
import { PlantProps } from "../libs/storage"
import api from "../services/api"
import colors from "../styles/colors"
import fonts from "../styles/fonts"

interface EnvironmentProps {
  key: string
  title: string
}

export function PlantSelect() {
  const [environment, setEnvironment] = useState<EnvironmentProps[]>([])
  const [plant, setPlant] = useState<PlantProps[]>([])
  const [filteredPlant, setFilteredPlant] = useState<PlantProps[]>([])
  const [environmentSelected, setEnvironmentSelected] = useState("all")

  const navigation = useNavigation()

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment)

    if (environment === "all") {
      return setFilteredPlant(plant)
    }

    const filtered = plant.filter((plant) =>
      plant.environments.includes(environment)
    )

    setFilteredPlant(filtered)
  }

  function handlePlantSelect(plant: PlantProps) {
    navigation.navigate("PlantSave", { plant })
  }

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get(
        "plants_environments?_sort=title&_order=asc"
      )
      setEnvironment([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ])
    }

    fetchEnvironment()
  }, [])

  useEffect(() => {
    async function fetchPlant() {
      const { data } = await api.get("plants?_sort=name&_order=asc")
      setPlant(data)
    }

    fetchPlant()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>Você quer colocar sua planta </Text>
      </View>
      <View>
        <FlatList
          keyExtractor={(item) => String(item.key)}
          data={environment}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          keyExtractor={(item) => String(item.id)}
          data={filteredPlant}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },

  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
  },

  environmentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },

  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
})
