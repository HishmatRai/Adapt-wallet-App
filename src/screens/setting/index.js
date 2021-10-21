import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import ThemeColors from "./../../theme/colors";
import {
  Ionicons,
  Entypo,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import ToggleSwitch from "toggle-switch-react-native";
function Setting(props) {
  const [activeBtn, setActiveBtn] = useState(1);
  const [toggle, setToggle] = useState(false);
  let btnData = [
    {
      btnText: "Disable",
    },
    {
      btnText: "Enable",
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
          <Text style={style._header}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("./../../img/Profile.jpg")}
            style={style._profile_Image}
          />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style._card_main}>
          <View style={style._card_1_section}>
            <Fontisto name="world" size={24} color="black" />
            <Text style={style._card_title}>Language</Text>
          </View>
          <View style={style._card_2_section}>
            <Text style={style._language}>English</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
        </View>

        <View style={style._card_main}>
          <View style={style._card_1_section}>
            <MaterialCommunityIcons
              name="database-import"
              size={24}
              color="black"
            />
            <Text style={style._card_title}>Currency</Text>
          </View>
          <View style={style._card_2_section}>
            <Text style={style._language}>Doller</Text>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </View>
        </View>

        <View style={style._card_main}>
          <View style={style._card_1_section}>
            <Ionicons name="notifications-sharp" size={24} color="black" />
            <Text style={style._card_title}>Notification</Text>
          </View>
          <View style={style._card_2_section}>
            <ToggleSwitch
              isOn={toggle}
              onColor="#7A7A7A"
              offColor="#7A7A7A"
              labelStyle={{
                color: "black",
                fontWeight: "900",
                backgroundColor: "#7A7A7A",
              }}
              style={
                {
                  // borderWidth: 2,
                  // borderColor: "black",
                  // borderRadius: 30,
                }
              }
              thumbOffStyle={{
                backgroundColor: "white",
              }}
              thumbOnStyle={{
                backgroundColor: "white",
              }}
              size="medium"
              onToggle={(isOn) => setToggle(!toggle)}
            />
          </View>
        </View>

        <View style={style._card_main}>
          <View style={style._card_1_section}>
            <MaterialIcons name="account-circle" size={24} color="black" />
            <Text style={style._card_title}>Account Setting</Text>
          </View>
          <View style={style._card_2_section}>
            <TouchableOpacity>
              <Text style={style._language}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style._card_main}>
          <View style={style._card_1_section}>
            <Entypo name="circular-graph" size={24} color="black" />
            <Text style={style._card_title}>Delete All records</Text>
          </View>
          <View style={style._card_2_section}>
            <MaterialIcons name="delete-sweep" size={24} color="#434343" />
          </View>
        </View>

        <View style={style._card_main}>
          <View style={style._card_1_section}>
            <MaterialIcons name="lock" size={24} color="black" />
            <Text style={style._card_title}>Privacy & Policy</Text>
          </View>
          <View style={style._card_2_section}></View>
        </View>

        <View style={style._card_main}>
          <View style={style._card_1_section}>
            <AntDesign name="exclamationcircle" size={20} color="black" />
            <Text style={style._card_title}>Transaction Alert </Text>
          </View>
          <View style={style._card_2_section}>
            {btnData.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => setActiveBtn(i)}
                  style={
                    activeBtn === i
                      ? {
                          backgroundColor: "#070707",
                          height: 20,
                          width: "50%",
                          margin: 0,
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {
                          backgroundColor: "#B1B1B1",
                          height: 20,
                          width: "50%",
                          margin: 0,
                          alignItems: "center",
                          justifyContent: "center",
                        }
                  }
                >
                  <Text style={style._btn_Text}>{v.btnText}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={style._card_main}>
          <View style={style._card_1_section}>
            <MaterialIcons
              name="quick-contacts-dialer"
              size={20}
              color="black"
            />
            <Text style={style._card_title}>Contact us </Text>
          </View>
          <View style={style._card_2_section}></View>
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
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  _header: {
    fontFamily: "Roboto-Bold",
    fontSize: 20,
    color: ThemeColors.textColor,
  },
  _profile_Image: {
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  _card_1_section: {
    width: "75%",
    flexDirection: "row",
    alignItems: "center",
  },
  _card_2_section: {
    width: "25%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _card_title: {
    fontFamily: "Roboto-Bold",
    fontSize: 16,
    color: "#070707",
    marginLeft: 10,
  },
  _language: {
    color: "#434343",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  _btn_Text: {
    color: "white",
    fontFamily: "Roboto-Regular",
    fontSize: 10,
  },
});

export default Setting;
