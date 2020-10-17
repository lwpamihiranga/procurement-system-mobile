import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-community/picker";
import { Ionicons } from "@expo/vector-icons";

export function AddItemCard({ itemList, addToAddedItemList, getTotalPrice }) {
  let [itemName, setItemName] = useState();
  let [itemPrice, setItemPrice] = useState();
  let [itemQty, setItemQty] = useState();
  let [itemTotal, setItemTotal] = useState();

  let onChangeItemName = (value) => {
    setItemName(value);

    itemList.forEach((item) => {
      if (value === item.item.itemName) {
        setItemPrice(item.item.itemPrice);
      }
    });
  };

  let onContentQtyChange = (value) => {
    setItemQty(value);
  };

  useEffect(() => {
    //set total
    setItemTotal((Number(itemPrice) * Number(itemQty)).toString());
    getTotalPrice(Number(itemPrice) * Number(itemQty));
  }, [itemPrice, itemQty]);

  //doesn't work on press 1 for some reason
  let onPressButton1 = () => {
    if (itemName != null && itemPrice != null && itemQty != null) {
      var item = {
        // itemId: itemId,
        itemName: itemName,
        itemPrice: itemPrice,
        itemCount: itemQty,
        itemTotal: itemTotal,
      };
      addToAddedItemList(item);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Picker
          style={styles.contentName}
          selectedValue={itemName}
          onValueChange={(itemValue, itemIndex) => onChangeItemName(itemValue)}
        >
          <Picker.Item label="Item Name" value="-1" />
          {itemList.map((value, key) => (
            <Picker.Item
              key={key}
              label={value.item.itemName}
              value={value.item.itemName}
            />
          ))}
        </Picker>
        <Ionicons
          name="md-arrow-dropdown"
          size={24}
          color="black"
          style={styles.contentNameDropIcon}
        />
        <Text style={styles.contentPrice}>Price : Rs. {itemPrice}</Text>
        <TextInput
          style={styles.contentQty}
          placeholder="Item Quantity"
          placeholderTextColor="black"
          value={itemQty}
          onChangeText={onContentQtyChange}
        />
        <Text style={styles.contentTotal}>Total : Rs. {itemTotal}</Text>
        <TouchableOpacity style={styles.button1} onPress={onPressButton1}>
          <Text style={styles.buttonText}>Add an Item</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    elevation: 5,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    marginVertical: 10,
    marginHorizontal: 15,
    marginLeft: "2%",
    width: "96%",
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 1,
    shadowOffset: { width: 3, height: 3 },
  },
  contentName: {
    backgroundColor: "#E5E5E5",
    marginHorizontal: 15,
    marginVertical: 10,
    borderWidth: 1,
    textAlign: "justify",
    borderColor: "#E5E5E5",
    fontSize: 15,
    padding: 5,
    paddingHorizontal: 10,
  },
  contentNameDropIcon: {
    position: "absolute",
    marginTop: 33,
    marginStart: 330,
  },
  contentPrice: {
    borderWidth: 1,
    textAlign: "justify",
    borderColor: "#E5E5E5",
    fontSize: 15,
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 15,
  },
  contentQty: {
    borderWidth: 1,
    textAlign: "justify",
    borderColor: "#E5E5E5",
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  contentTotal: {
    borderWidth: 1,
    textAlign: "justify",
    borderColor: "#E5E5E5",
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 5,
    paddingHorizontal: 10,
    fontSize: 15,
  },
  button1: {
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: "#2196F3",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: "#2196F3",
  },
  buttonText: { color: "#FFFFFF", fontSize: 15 },
});
