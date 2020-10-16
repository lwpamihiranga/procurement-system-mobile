import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export function ItemCard({ reqItem }) {
  const [quantity, setQuantity] = useState(0);

  let onChangeQuantity = (value) => {
    setQuantity(value);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.content}>{reqItem.itemName}</Text>
        <Text style={styles.content}>{reqItem.itemPrice}</Text>
        <TextInput
          style={styles.content}
          placeholder={quantity}
          placeholderTextColor="black"
          onChangeText={onChangeQuantity}
        />
        <Text style={styles.content}>{quantity * reqItem.itemPrice}</Text>
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
  content: {
    marginHorizontal: 10,
  },
  status: {
    fontSize: 16,
  },
});
