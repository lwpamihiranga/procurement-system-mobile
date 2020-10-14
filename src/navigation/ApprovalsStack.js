import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { ApprovalsScreen } from "../screens/ApprovalsScreen";

const Stack = createStackNavigator();

export function ApprovalsStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Approvals"
        component={ApprovalsScreen}
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
