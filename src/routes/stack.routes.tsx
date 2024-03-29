import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { Confirmation } from "../pages/Confirmation"
import { UserIdentification } from "../pages/UserIdentification"
import { Welcome } from "../pages/Welcome"
import { PlantSave } from "../pages/PlantSave"
import colors from "../styles/colors"
import AuthRoutes from "./tab.routes"

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
      headerShown: false,
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
    <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
    <stackRoutes.Screen name="PlantSave" component={PlantSave} />
    <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
  </stackRoutes.Navigator>
)

export default AppRoutes
