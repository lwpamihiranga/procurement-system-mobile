import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function ItemCard({ reqItem, qty }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.contentName}>{reqItem.itemName}</Text>
        <Text style={styles.contentPrice}>{reqItem.itemPrice}</Text>
        <Text style={styles.contentQty}>{qty}</Text>
        <Text style={styles.contentTotal}>{qty * reqItem.itemPrice}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  contentName: {},
  contentPrice: {
    marginEnd: 5,
  },
  contentQty: {
    fontSize: 15,
    marginEnd: 5,
  },
  contentTotal: {
    marginEnd: 5,
  },
});
