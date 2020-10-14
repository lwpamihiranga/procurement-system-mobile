import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { RequisitionsScreen } from "../screens/RequisitionsScreen";

const Stack = createStackNavigator();

export function RequisitionsStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Requisitions"
        component={RequisitionsScreen}
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
