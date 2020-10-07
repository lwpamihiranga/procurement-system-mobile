import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import { InquiriesScreen } from "../screens/InquiriesScreen";

const Stack = createStackNavigator();

export function InquiriesStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inquiries"
        component={InquiriesScreen}
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
