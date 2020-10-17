import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function NoItemsCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.content}>This supplier has no items</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  content: {},
});
