import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

export function ApprovedCard({ data }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.left}>
          <FontAwesome
            name="circle"
            size={75}
            size={75}
            color="gray"
            style={styles.circle}
          />
        </View>
        <View style={styles.right}>
          <Text style={styles.orderNo}>Order {data.orderNo}</Text>
          <Text style={styles.details}>{data.details}</Text>
          <Text style={styles.status}>{data.status}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 5,
    marginLeft: "2%",
    width: "96%",
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 1,
    shadowOffset: { width: 3, height: 3 },
    elevation: 5,
    padding: 10,
    flexDirection: "row",
  },
  circle: {
    marginStart: 20,
    marginEnd: 40,
  },
  orderNo: {
    fontSize: 20,
  },
  details: {
    fontSize: 17,
  },
  status: {
    fontSize: 16,
  },
});
