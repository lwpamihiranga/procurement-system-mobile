import React from "react";
import { StyleSheet, View, Text } from "react-native";
import ImageSliderz from "react-native-image-slideshow";

export function HomeScreen({ navigation }) {
  //to diable the yellow box warning on the simulator
  // console.disableYellowBox = true;

  return (
    <View>
      <ImageSliderz
        height={500}
        dataSource={[
          {
            url: require("../assets/1.png"),
          },
          {
            url: require("../assets/2.png"),
          },
          {
            url: require("../assets/3.png"),
          },
          {
            url: require("../assets/4.png"),
          },
        ]}
      />
      <Text style={styles.heading}>
        Your main procurement solution provider
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 20,
  },
});
