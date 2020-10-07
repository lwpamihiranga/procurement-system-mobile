import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { SignOutScreen } from "../screens/SignOutScreen";

const Stack = createStackNavigator();

export function SignOutStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sign Out"
        component={SignOutScreen}
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
