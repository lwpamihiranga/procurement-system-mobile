import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { ApprovedCard } from "../components/ApprovedCard";
import { AntDesign } from "@expo/vector-icons";

export function ApprovalsScreen({ navigation }) {
  const [approvedCards, setApprovedCards] = useState([
    { orderNo: "XXXX-0012", details: "XXXXX", status: "Pending" },
    { orderNo: "XXXX-002", details: "XXXXX", status: "Pending" },
    { orderNo: "XXXX-003", details: "XXXXX", status: "Pending" },
    { orderNo: "XXXX-004", details: "XXXXX", status: "Pending" },
    { orderNo: "XXXX-005", details: "XXXXX", status: "Pending" },
    { orderNo: "XXXX-006", details: "XXXXX", status: "Pending" },
    { orderNo: "XXXX-007", details: "XXXXX", status: "Pending" },
    { orderNo: "XXXX-008", details: "XXXXX", status: "Pending" },
  ]);

  //to diable the yellow box warning on the simulator
  console.disableYellowBox = true;

  return (
    <View style={styles.container}>
      <FlatList
        data={approvedCards}
        renderItem={({ item }) => <ApprovedCard data={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <AntDesign
        name="pluscircle"
        size={50}
        color="black"
        style={styles.floatButton}
        onPress={() => navigation.navigate("RequisitionsScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  floatButton: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
});
