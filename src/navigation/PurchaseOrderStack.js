import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { PurchaseOrderScreen } from "../screens/PurchaseOrderScreen";

const Stack = createStackNavigator();

export function PurchaseOrderStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PurchaseOrder"
        component={PurchaseOrderScreen}
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
