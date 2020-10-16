import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { ApprovalsScreen } from "../screens/ApprovalsScreen";
import { RequisitionsScreen } from "../screens/RequisitionsScreen";
import { PurchaseItemScreen } from "../screens/PurchaseItemScreen";

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
      <Stack.Screen
        name="RequisitionsScreen"
        component={RequisitionsScreen}
        options={{
          title: "Purchase a Requisition",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="PurchaseItemScreen"
        component={PurchaseItemScreen}
        options={{
          title: "Add Item to Requisition Order",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
