import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// ??
import { Picker } from "@react-native-community/picker";

import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";

import { ItemCard } from "../components/ItemCard";
import { ItemCardHeading } from "../components/ItemCardHeading";
import { AddItemCard } from "../components/AddItemCard";

import axios from "axios";
import api from "../api";

export function RequisitionsScreen({ navigation }) {
  //to diable the yellow box warning on the simulator
  console.disableYellowBox = true;

  //done with these
  let [requisiontionNo, setRequisitionNo] = useState();
  let [description, setDescription] = useState();
  let [comment, setComment] = useState();
  let [date, setDate] = useState("2016-05-15");

  let [itemNo, setItemNo] = useState();

  let [suppliers, setSuppliers] = useState([]);

  let [reqItems, setReqItems] = useState([
    {
      itemId: "IT004",
      itemName: "Roofing Sheet",
      itemPrice: 200.2,
      description: "Sheets for roof",
      unitOfMeasuring: "unit",
      itemSuppliers: [],
      purchaseRequisitionItems: null,
      purchaseOrderItems: null,
      supplierCode: null,
    },
    {
      itemId: "IT002",
      itemName: "Roofing Sheet",
      itemPrice: 200.2,
      description: "Sheets for roof",
      unitOfMeasuring: "unit",
      itemSuppliers: [],
      purchaseRequisitionItems: null,
      purchaseOrderItems: null,
      supplierCode: null,
    },
  ]);

  //done with these
  useEffect(() => {
    onChangeRequisitionNo();
    axios
      .get(api.concat(`/api/suppliers`))
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  }, [setItemNo, setSuppliers, setReqItems]);

  let onChangeRequisitionNo = () => {
    setRequisitionNo(
      "R".concat(Math.floor(Math.random() * 10 ** 5).toString())
    );
  };

  let onChangeDescription = (value) => {
    setDescription(value);
  };

  let onChangeComment = (value) => {
    setComment(value);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topHalf}>
        <TextInput
          style={styles.requisitionNoInput}
          placeholder={requisiontionNo}
          placeholderTextColor="black"
          value={requisiontionNo}
        />
        <TextInput
          style={styles.descriptionInput}
          placeholder="Description"
          placeholderTextColor="black"
          multiline={true}
          underlineColorAndroid="transparent"
          onChangeText={onChangeDescription}
        />

        <Picker style={styles.supplierCompanyDropdown}>
          <Picker.Item label="Supplier Company" value="-1" />
          <Picker.Item label="A" value="a" />
          <Picker.Item label="B" value="b" />
          <Picker.Item label="C" value="c" />
        </Picker>
        <Ionicons
          name="md-arrow-dropdown"
          size={24}
          color="black"
          style={styles.supplierCompanyDropIcon}
        />

        <TextInput
          style={styles.commentsInput}
          placeholder="Comments"
          placeholderTextColor="black"
          multiline={true}
          underlineColorAndroid="transparent"
          onChangeText={onChangeComment}
        />
        <View style={styles.deliverDate}>
          <Text style={styles.dateText}>Deliver Before</Text>
          <DatePicker
            style={styles.dateInput}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={setDate}
          />
        </View>
      </View>

      <ScrollView style={styles.itemContainer}>
        <ItemCardHeading />
        <FlatList
          data={reqItems}
          renderItem={({ item }) => <ItemCard reqItem={item} qty={2} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <AddItemCard itemNamesAndPrices="" />
      </ScrollView>
      <View style={styles.lowerHalf}>
        <TouchableOpacity style={styles.button1}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.navigate("PurchaseItemScreen")}
          >
            Add an Item
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText}>Purchase Order</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  requisitionNoInput: {
    marginTop: 20,
    borderWidth: 1,
    textAlign: "justify",
    borderColor: "#E5E5E5",
    marginHorizontal: 15,
    padding: 10,
    fontSize: 16,
  },
  descriptionInput: {
    marginTop: 10,
    borderWidth: 1,
    textAlign: "justify",
    borderColor: "#E5E5E5",
    marginHorizontal: 15,
    padding: 10,
    fontSize: 16,
  },
  supplierCompanyDropdown: {
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 15,
    backgroundColor: "#E5E5E5",
    position: "relative",
  },
  supplierCompanyDropIcon: {
    position: "absolute",
    marginTop: 155,
    marginStart: 370,
  },
  commentsInput: {
    marginTop: 10,
    borderWidth: 1,
    textAlign: "justify",
    borderColor: "#E5E5E5",
    marginHorizontal: 15,
    padding: 10,
    fontSize: 16,
  },
  deliverDate: {
    flexDirection: "row",
    marginTop: 15,
    marginHorizontal: 15,
  },
  dateText: {
    marginStart: 10,
    fontSize: 16,
    textAlignVertical: "center",
  },
  dateInput: {
    flex: 1,
    borderColor: "#E5E5E5",
    alignContent: "flex-end",
    marginStart: 20,
  },
  itemContainer: {
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
  head: { height: 40, backgroundColor: "gray" },
  text: { margin: 6 },
  lowerHalf: {
    marginTop: 70,
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
  button2: {
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
