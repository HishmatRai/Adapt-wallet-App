import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import ThemeColors from "./../../theme/colors";
import { Ionicons } from "@expo/vector-icons";
function Transfer(props) {
  const [activeBtn, setActiveBtn] = useState(0);
  const [tokenNumber, onChangeTokenNumber] = React.useState("");
  let cardPrice = [
    {
      price: "$500",
    },
    {
      price: "$1500",
    },
    {
      price: "$2000",
    },
  ];
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor={ThemeColors.statusBarBgColor}
        translucent={false}
      />
      <View style={style._header_mani}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#29304D" />
          <Text style={style._header}>Transfer</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
            <Image
              source={require("./../../img/Profile.jpg")}
              style={style._profile_Image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15 }} onPress={() => props.navigation.navigate("Setting")}>
            <Ionicons name="settings-sharp" size={24} color="#002137" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Notification")}>
            <Ionicons name="notifications-sharp" size={24} color="#002137" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={style._title}>Set Amount</Text>
        <Text style={style._sub_title}>
          How much you would like to Transfer?
        </Text>
        <View style={style._price_card_man}>
          <Text style={style._price}>$7,000</Text>
          <Text style={style._card_title}>Quick Actions</Text>
          <View style={style._price_btn_main}>
            {cardPrice.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => setActiveBtn(i)}
                  style={
                    activeBtn === i
                      ? {
                          backgroundColor: "#002137",
                          height: 42,
                          margin: 0,
                          alignItems: "center",
                          justifyContent: "center",
                          width: "30%",
                          borderRadius: 5,
                        }
                      : {
                          backgroundColor: "#E9DCFF",
                          height: 42,
                          margin: 0,
                          alignItems: "center",
                          justifyContent: "center",
                          width: "30%",
                          borderRadius: 5,
                        }
                  }
                >
                  <Text
                    style={
                      activeBtn === i
                        ? {
                            color: "white",
                            fontFamily: "Roboto-Bold",
                            fontSize: 13,
                          }
                        : {
                            color: "#292929",
                            fontFamily: "Roboto-Bold",
                            fontSize: 13,
                          }
                    }
                  >
                    {v.price}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        <View style={style.input_main}>
          <TextInput
            style={style.input}
            onChangeText={onChangeTokenNumber}
            value={tokenNumber}
            placeholder="Contact Number"
            placeholderTextColor={ThemeColors.textColor}
            color={ThemeColors.textColor}
            autoCapitalize="none"
            keyboardType="numeric"
          />
        </View>

        <Text style={style._send_title}>To whom you want to send?</Text>
        <View style={style._money_send_card}>
          <Image
            source={require("./../../img/Profile.jpg")}
            style={style._card_profile_Image}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={style._user_name}>Account Name</Text>
            <Text style={style._card_number}>**** **** **** 1425</Text>
          </View>
        </View>

        <View style={style._btns_main}>
          <TouchableOpacity style={style._trasfer_btn} onPress={() => props.navigation.navigate("SuccessMessage")}>
            <Text style={style._trasfer_btn_text}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style._cancel_btn}  onPress={() => props.navigation.goBack()}>
            <Text style={style._cancel_btn_text}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E9E9",
  },
  _header_mani: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E9E9E9",
  },
  _header: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    color: ThemeColors.textColor,
  },

  _profile_Image: {
    width: 24,
    height: 24,
    borderRadius: 26 / 2,
  },
  _title: {
    fontFamily: "Roboto-Bold",
    fontSize: 35,
    color: "#29304D",
    marginHorizontal: 20,
  },
  _sub_title: {
    color: "#393939",
    fontSize: 17,
    fontFamily: "Roboto-Regular",
    marginHorizontal: 20,
  },
  _price_card_man: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 10,
    padding: 20,
    paddingVertical: 30,
  },
  _price: {
    fontSize: 37,
    color: "#8639FF",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
  },
  _card_title: {
    fontSize: 15,
    color: "#29304D",
    fontFamily: "Roboto-Bold",
  },
  _price_btn_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  input_main: {
    borderWidth: 1,
    borderColor: ThemeColors.borderColor,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    height: 53,
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: ThemeColors.inputBg,
    marginHorizontal: 20,
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  _send_title: {
    fontFamily: "Roboto-Regular",
    fontSize: 17,
    color: "#29304D",
    marginHorizontal: 20,
    marginTop: 10,
  },
  _money_send_card: {
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  _card_profile_Image: {
    width: 37,
    height: 37,
    borderRadius: 37 / 2,
  },
  _user_name: {
    fontSize: 17,
    color: "#29304D",
    fontFamily: "Roboto-Bold",
  },
  _card_number: {
    fontSize: 15,
    color: "#707070",
    fontFamily: "Roboto-Regular",
  },
  _btns_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginHorizontal: 20,
  },
  _trasfer_btn: {
    backgroundColor: "#01FFD5",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "47%",
  },
  _trasfer_btn_text: {
    fontSize: 17,
    color: "#000000",
    fontFamily: "Roboto-Bold",
  },
  _cancel_btn: {
    backgroundColor: "white",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: "47%",
  },
  _cancel_btn_text: {
    fontSize: 17,
    color: "#292929",
    fontFamily: "Roboto-Bold",
  },
});

export default Transfer;
