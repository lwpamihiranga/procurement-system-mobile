import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-community/picker";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from "react-native-datepicker";
import { Table, Row, Rows } from "react-native-table-component";

export function RequisitionsScreen({ navigation }) {
  let [date, setDate] = useState("2016-05-15");
  let [tableHead, setTableHead] = useState([
    "Item No",
    "Cost",
    "Quantity",
    "Total Cost",
    "Status",
  ]);
  let [tableData, setTableData] = useState([
    ["0000-001", "8000.00", "5", "40,000", "Approved"],
    ["0000-002", "8000.00", "5", "40,000", "Approved"],
    ["0000-003", "8000.00", "5", "40,000", "Approved"],
    ["Total Cost", "290,000"],
  ]);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topHalf}>
        <TextInput
          style={styles.requisitionNoInput}
          placeholder="Requisition No"
          placeholderTextColor="black"
        />
        <TextInput
          style={styles.descriptionInput}
          placeholder="Description"
          placeholderTextColor="black"
          multiline={true}
          underlineColorAndroid="transparent"
        />
        <TextInput
          style={styles.orderReferenceNoInput}
          placeholder="Order Reference No"
          placeholderTextColor="black"
        />
        <Picker style={styles.supplierCompanyDropdown}>
          {/* set the proper values here */}
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

      <ScrollView style={styles.tableContainer}>
        <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          <Rows data={tableData} textStyle={styles.text} />
        </Table>
      </ScrollView>
      <View style={styles.lowerHalf}>
        <TouchableOpacity style={styles.button}>
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
  orderReferenceNoInput: {
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
    marginTop: 213,
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
  tableContainer: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
    height: 300,
  },
  head: { height: 40, backgroundColor: "gray" },
  text: { margin: 6 },
  button: {
    padding: 10,
    margin: 15,
    backgroundColor: "#2196F3",
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderColor: "#2196F3",
  },
  buttonText: { color: "#FFFFFF", fontSize: 15 },
});
