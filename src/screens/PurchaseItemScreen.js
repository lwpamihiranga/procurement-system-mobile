import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import { Picker } from "@react-native-community/picker";

export function PurchaseItemScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <TextInput
          style={styles.titleInput}
          placeholder="Exam Title"
          placeholderTextColor="black"
        />
        <View style={styles.hoursMins}>
          <Picker style={styles.hoursPicker} mode="dropdown">
            <Picker.Item label="Hours" value="-1" />
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
          </Picker>
          <Ionicons
            name="md-arrow-dropdown"
            size={24}
            color="black"
            style={styles.smallLeftdropIcon}
          />
          <Picker style={styles.minsPicker}>
            <Picker.Item label="Mins" value="-1" />
            <Picker.Item label="00" value="00" />
            <Picker.Item label="05" value="05" />
            <Picker.Item label="10" value="10" />
            <Picker.Item label="15" value="15" />
            <Picker.Item label="20" value="20" />
            <Picker.Item label="25" value="25" />
            <Picker.Item label="30" value="30" />
            <Picker.Item label="35" value="35" />
            <Picker.Item label="40" value="40" />
            <Picker.Item label="45" value="45" />
            <Picker.Item label="50" value="50" />
            <Picker.Item label="55" value="55" />
          </Picker>
          <Ionicons
            name="md-arrow-dropdown"
            size={24}
            color="black"
            style={styles.smallRightdropIcon}
          />
        </View>
        <Picker style={styles.levelsPicker}>
          <Picker.Item label="Exam Level" value="-1" />
          <Picker.Item label="O/L" value="O/L" />
          <Picker.Item label="A/L" value="A/L" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
        <Ionicons
          name="md-arrow-dropdown"
          size={24}
          color="black"
          style={styles.bigTopdropIcon}
        />
        <Picker style={styles.mediumPicker}>
          <Picker.Item label="Medium" value="-1" />
          <Picker.Item label="Sinhala" value="Sinhala" />
          <Picker.Item label="Tamil" value="Tamil" />
          <Picker.Item label="English" value="English" />
        </Picker>
        <Ionicons
          name="md-arrow-dropdown"
          size={24}
          color="black"
          style={styles.bigBottomdropIcon}
        />
      </View>
      <View style={styles.middle}></View>
      <View style={styles.lowerHalf}>
        <TouchableOpacity style={styles.addQuestion}>
          <AntDesign name="pluscircle" size={24} color="black" />
          <Text style={styles.buttonText}>Add a new Question</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveExam}>
          <MaterialCommunityIcons
            name="content-save-settings"
            size={24}
            color="black"
          />
          <Text style={styles.buttonText}>Save Exam</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  topHalf: {
    height: 300,
  },
  titleInput: {
    marginTop: 50,
    borderWidth: 1,
    textAlign: "justify",
    backgroundColor: "#E5E5E5",
    borderColor: "#E5E5E5",
    marginHorizontal: 10,
    padding: 10,
    fontSize: 16,
  },
  hoursMins: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  hoursPicker: {
    flex: 1,
    marginStart: 10,
    backgroundColor: "#E5E5E5",
    position: "relative",
  },
  smallLeftdropIcon: {
    position: "absolute",
    marginStart: 180,
    marginTop: 13,
  },
  minsPicker: {
    flex: 1,
    marginHorizontal: 10,
    backgroundColor: "#E5E5E5",
    position: "relative",
  },
  smallRightdropIcon: {
    position: "absolute",
    marginStart: 380,
    marginTop: 13,
  },
  levelsPicker: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    marginBottom: 10,
    marginHorizontal: 10,
    position: "relative",
  },
  bigTopdropIcon: {
    position: "absolute",
    marginTop: 185,
    marginStart: 377,
  },
  mediumPicker: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    marginBottom: 10,
    marginHorizontal: 10,
    position: "relative",
  },
  bigBottomdropIcon: {
    position: "absolute",
    marginTop: 250,
    marginStart: 377,
  },
  middle: {
    height: "45%",
    marginBottom: 60,
  },
  lowerHalf: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
  },
  addQuestion: {
    width: "45%",
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 10,
    backgroundColor: "#FECC5D",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  saveExam: {
    width: "45%",
    padding: 10,
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#FECC5D",
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-evenly",
  },
  buttonText: { color: "#000", fontSize: 15 },
});
