import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Button,
  ScrollView,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export function DeliveryDetailsScreen() {
  const [value, onChangeText] = React.useState("");
  const [valu, onChangeTextord] = React.useState("");
  const [v, onChangeTextdelivery] = React.useState("");
  const [vcost, onChangeTextdeliverycost] = React.useState("");
  const [vsup, onChangeTextsipplier] = React.useState("");
  const [vcode, onChangeTextcode] = React.useState("");
  const [valuepapers, onChangeTextdesc] = React.useState("");

  const [val, onChangeItem] = React.useState("");

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View></View>

      <ScrollView>
        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Delivery ID
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              marginLeft: 10,
              marginRight: 10,
              borderBottomColor: "#000000",
              borderBottomWidth: 1,
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              textAlign: "left",
              paddingLeft: 20,
              borderRadius: 10,
            }}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="Enter Item No......"
          />
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Order ID
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              marginLeft: 10,
              marginRight: 10,
              borderBottomColor: "#000000",
              borderBottomWidth: 1,
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              textAlign: "left",
              paddingLeft: 20,
              borderRadius: 10,
            }}
            onChangeText={(text) => onChangeTextord(text)}
            value={valu}
            placeholder="Enter Item No......"
          />
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Delivery Method
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              marginLeft: 10,
              marginRight: 10,
              borderBottomColor: "#000000",
              borderBottomWidth: 1,
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              textAlign: "left",
              paddingLeft: 20,
              borderRadius: 10,
            }}
            onChangeText={(text) => onChangeTextdelivery(text)}
            value={v}
            placeholder="Enter Item No......"
          />
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Address
          </Text>

          <TextInput
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
              borderBottomColor: "#000000",
              borderBottomWidth: 1,
              height: 100,
              borderColor: "gray",
              borderWidth: 1,
              textAlign: "left",
              paddingLeft: 20,
              borderRadius: 10,
            }}
            onChangeText={(textdesc) => onChangeTextdesc(textdesc)}
            value={valuepapers}
            placeholder="Write notes here......"
            numberOfLines={2}
            multiline={false}
          />
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Delivery Cost
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              marginLeft: 10,
              marginRight: 10,
              borderBottomColor: "#000000",
              borderBottomWidth: 1,
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              textAlign: "left",
              paddingLeft: 20,
              borderRadius: 10,
            }}
            onChangeText={(text) => onChangeTextdeliverycost(text)}
            value={vcost}
            placeholder="Enter Item No......"
          />
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Supplier
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              marginLeft: 10,
              marginRight: 10,
              borderBottomColor: "#000000",
              borderBottomWidth: 1,
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              textAlign: "left",
              paddingLeft: 20,
              borderRadius: 10,
            }}
            onChangeText={(text) => onChangeTextsipplier(text)}
            value={vsup}
            placeholder="Enter Item No......"
          />
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Site Code
          </Text>
          <TextInput
            style={{
              marginTop: 5,
              marginLeft: 10,
              marginRight: 10,
              borderBottomColor: "#000000",
              borderBottomWidth: 1,
              height: 50,
              borderColor: "gray",
              borderWidth: 1,
              textAlign: "left",
              paddingLeft: 20,
              borderRadius: 10,
            }}
            onChangeText={(text) => onChangeTextcode(text)}
            value={vcode}
            placeholder="Enter Item No......"
          />
        </View>

        <View
          style={{
            marginLeft: 10,
            marginRight: 10,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              marginLeft: 20,
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Status
          </Text>

          <DropDownPicker
            items={[
              { label: "Year 6", value: "Year 6" },
              { label: "Year 7", value: "Year 7" },
              { label: "Year 8", value: "Year 8" },
              { label: "Year 9", value: "Year 9" },
              { label: "Year 10", value: "Year 10" },
              { label: "Year 11", value: "Year 11" },
              { label: "Year 12", value: "Year 12" },
              { label: "Year 13", value: "Year 13" },
            ]}
            containerStyle={{ height: 60 }}
            style={{
              backgroundColor: "#fafafa",
              marginLeft: 20,
              marginRight: 20,
              marginTop: 5,
              marginBottom: 10,
            }}
            placeholder={"Select Status"}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            dropDownStyle={{ backgroundColor: "#fafafa" }}
            onChangeItem={(val) =>
              onChangeItem({
                val: val,
              })
            }
          />
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: "#0388fc",
              padding: 15,
              marginLeft: 39,
              marginRight: 39,
              marginTop: 40,
              borderRadius: 5,
              marginBottom: 30,
            }}
            onPress={() => Alert.alert("Successfully submitted")}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {" "}
              Save Details
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
