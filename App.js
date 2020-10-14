import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./src/navigation/HomeStack";
import { RequisitionsStack } from "./src/navigation/RequisitionsStack";
import { ApprovalsStack } from "./src/navigation/ApprovalsStack";
import { InquiriesStack } from "./src/navigation/InquiriesStack";
import { SignOutStack } from "./src/navigation/SignOutStack";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Requisitions" component={RequisitionsStack} />
        <Drawer.Screen name="Approvals" component={ApprovalsStack} />
        <Drawer.Screen name="Inquirie" component={InquiriesStack} />
        <Drawer.Screen name="Sign Out" component={SignOutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
