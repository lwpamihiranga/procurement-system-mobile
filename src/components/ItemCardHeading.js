import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function ItemCardHeading({ reqItem }) {
  return (
    <View style={styles.card}>
      <Text style={styles.content}>Item Name</Text>
      <Text style={styles.content}>Item Price</Text>
      <Text style={styles.content}>Quantity</Text>
      <Text style={styles.content}>Total Price</Text>
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
});
