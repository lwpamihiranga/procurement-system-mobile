import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import api from "../api";

export function InquiriesScreen({ navigation }) {
  useEffect(() => {
    //sample api call to retrive sites
    axios
      .get(api.concat(`/api/sites`))
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <View style={styles.container}>
      <Text>This is InquiriesScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
