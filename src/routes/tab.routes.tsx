import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import colors from "../styles/colors"
import { PlantSelect } from "../pages/PlantSelect"
import { MaterialIcons } from "@expo/vector-icons"
import { MyPlants } from "../pages/MyPlants"

const AppTab = createBottomTabNavigator()

const AuthRoutes = () => {
  return (
    <AppTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.heading,
        tabBarStyle: {
            alignSelf: 'center',
            alignItems: 'center',
            minHeight: 75,
            paddingTop: 5,
            paddingBottom: 5,
          },
          tabBarLabelStyle: {
            fontSize: 13,
            marginTop: 4,
            marginBottom: 4,
            lineHeight: 15,
          },
          tabBarLabelPosition: 'beside-icon'
      }}
    >
      <AppTab.Screen
        name="Nova Planta"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <AppTab.Screen
        name="Minhas Plantas"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  )
}

export default AuthRoutes
