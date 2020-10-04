import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => {
            return (
              <Ionicons
                name="md-menu"
                size={30}
                color="black"
                onPress={() => navigation.openDrawer()}
              />
            );
          },
          headerLeftContainerStyle: { paddingLeft: 10 },
        }}
      />
    </Stack.Navigator>
  );
}
