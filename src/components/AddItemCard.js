import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function AddItemCard({ itemNamesAndPrices }) {
  let [itemName, setItemName] = useState();
  let [itemPrice, setItemPrice] = useState();
  let [itemQty, setItemQty] = useState();
  let [itemTotal, setItemTotal] = useState();

  let onChangeItemName = (value) => {
    setItemName(value);
    //changing the price accordingly
    setItemPrice();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        {/* should be a dropdown */}
        <Text style={styles.contentName}></Text>
        {/* done */}
        <Text style={styles.contentPrice}></Text>
        {/* should be a dropdown */}
        <Text style={styles.contentQty}></Text>
        {/* done */}
        <Text style={styles.contentTotal}></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 5,
  },
  contentName: {},
  contentPrice: {
    marginEnd: 15,
  },
  contentQty: {
    fontSize: 15,
    marginEnd: 15,
  },
  contentTotal: {
    marginEnd: 15,
  },
});
