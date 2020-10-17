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
import DateTimePicker from "@react-native-community/datetimepicker";

import { ItemCard } from "../components/ItemCard";
import { ItemCardHeading } from "../components/ItemCardHeading";
import { AddItemCard } from "../components/AddItemCard";
import { TotalCard } from "../components/TotalCard";

// import { ItemCard } from "../components/ItemCard";
// import { ItemCardHeading } from "../components/ItemCardHeading";
import axios from "axios";
import api from "../api";
import { NoItemsCard } from "../components/NoItemsCard";

export function RequisitionsScreen({ navigation }) {
  //to diable the yellow box warning on the simulator
  console.disableYellowBox = true;

  //done with these
  // let inputBlock;
  // let [itemNo, setItemNo] = useState();
  let [requisiontionNo, setRequisitionNo] = useState();
  let [description, setDescription] = useState();
  let [comment, setComment] = useState();
  let [date, setDate] = useState(new Date(1598051730000));

  let [suppliers, setSuppliers] = useState([]);
  let [selectedSupplier, setSelectedSupplier] = useState("");
  let [itemList, setItemList] = useState([]);
  let [addedItemList, setAddedItemList] = useState([{}]);
  let [totalPrice, setTotalPrice] = useState("Please Items to the Order");
  let url;

  useEffect(() => {
    onChangeRequisitionNo();
    axios
      .get(api.concat(`/api/suppliers`))
      .then((res) => {
        setSuppliers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [api]);

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

  let changeSupplier = (supplierName) => {
    setSelectedSupplier(supplierName);
    suppliers.forEach((supplier) => {
      if (supplierName === supplier.supplierName) {
        setItemList(supplier.itemSuppliers);
      }
    });
  };

  let addToAddedItemList = (item) => {
    setAddedItemList([...addedItemList, item]);
  };

  useEffect(() => {
    getTotalPrice();
  }, [addedItemList]);

  //show the total
  let getTotalPrice = (value) => {
    // setTotalPrice(totalPrice + value);
    // console.log(totalPrice);
  };

  let createRequisitionOrder = () => {
    let reqOrder = {
      requisitionNo: requisiontionNo,
      supplier: {
        supplierName: selectedSupplier,
      },
      deliverBefore: date,
      totalCost: totalPrice,
      status: description,
      comments: comment,
      purchaseRequisitionItems: addedItemList,
    };

    axios
      .post(api.concat("/api/purchaseRequisitions"), {
        SiteManagerId: "EMP1",
        SupplierCode: "SP1",
        SiteCode: "SITE001",
        ShippingAddress: "Malabe",
        TotalCost: 1000.0,
        Status: "Pending",
        Comments: "Immediate request",
        ItemIds: ["IT001", "IT002", "IT003"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    // console.log(currentDate);
  };
  const [show, setShow] = useState(false);
  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topHalf}>
        <TextInput
          style={styles.requisitionNoInput}
          placeholder={requisiontionNo}
          placeholderTextColor="black"
          value={requisiontionNo}
          editable={false}
        />
        <TextInput
          style={styles.descriptionInput}
          placeholder="Description"
          placeholderTextColor="black"
          multiline={true}
          underlineColorAndroid="transparent"
          onChangeText={onChangeDescription}
        />
        <Picker
          style={styles.supplierCompanyDropdown}
          selectedValue={selectedSupplier}
          onValueChange={(itemValue, itemIndex) => changeSupplier(itemValue)}
        >
          <Picker.Item label="Supplier Company" value="-1" />
          {suppliers.map((value, key) => (
            <Picker.Item
              key={key}
              label={value.supplierName}
              value={value.supplierName}
            />
          ))}
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
        {/* <TouchableOpacity style={styles.commentsInput} onPress={showDatePicker}>
          <Text style={styles.dateText}>
            Deliver Before {date.getFullYear().toString()}/
            {date.getMonth().toString()}/{date.getDate().toString()}
          </Text>
          {show && (
            <DateTimePicker
              style={styles.deliverDate}
              testID="dateTimePicker"
              value={date}
              mode="date"
              // is24Hour={true}
              // display="default"
              onChange={onChangeDate}
            />
          )}
        </TouchableOpacity> */}
      </View>

      <ScrollView style={styles.itemContainer}>
        <ItemCardHeading />
        <FlatList
          data={addedItemList}
          renderItem={({ item }) => <ItemCard reqItem={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
        <TotalCard totalPrice={getTotalPrice()} />
      </ScrollView>
      <View style={styles.lowerHalf}>
        {itemList.length > 0 ? (
          <AddItemCard
            itemList={itemList}
            addToAddedItemList={addToAddedItemList}
            getTotalPrice={getTotalPrice}
          />
        ) : (
          <NoItemsCard />
        )}

        <TouchableOpacity
          style={styles.button2}
          onPress={createRequisitionOrder}
        >
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
    backgroundColor: "#E5E5E5",
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
    // paddingVertical: 10,
    backgroundColor: "#FFF",
    marginVertical: 10,
    marginHorizontal: 15,
    marginLeft: "4%",
    width: "92%",
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 1,
    shadowOffset: { width: 3, height: 3 },
  },
  head: { height: 40, backgroundColor: "gray" },
  text: { margin: 6 },
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
