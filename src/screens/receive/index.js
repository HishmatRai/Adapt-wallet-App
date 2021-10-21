import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  AdaptIcon,
  BrowserIcon,
  WalletIcon,
  ContactsIcon,
  ReceiveActiveIcon,
  ProfileIcon,
} from "./../../components/svg";
import ThemeColors from "./../../theme/colors";
import { Ionicons } from "@expo/vector-icons";
function Receive(props) {
  let CardData = [
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
    },
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
    },
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
    },
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
    },
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
    },
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
    },
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
    },
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
    },
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
    },
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
    },
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
    },
    {
      profileImg: require("./../../img/Profile.jpg"),
      name: "Bitcoin",
      date: "24-02-2020",
      time: "10:45pm",
      price: "$30000.00",
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
          <Text style={style._header}>Transaction</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity>
            <Image
              source={require("./../../img/Profile.jpg")}
              style={style._profile_Image}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginHorizontal: 15 }}>
            <Ionicons name="settings-sharp" size={24} color="#002137" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="notifications-sharp" size={24} color="#002137" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: "#E9E9E9", paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={style._title}>Transaction type</Text>
          <TouchableOpacity style={style._all_btn}>
            <Text style={style.all_btn_Text}>All</Text>
            <Ionicons name="caret-down-outline" size={14} color="black" />
          </TouchableOpacity>
        </View>

        <View style={style._month_main}>
          <Text style={style._month}>Month</Text>
          <TouchableOpacity style={style._select_month_btn}>
            <Text style={style._select_month_btn_Text}>Mar</Text>
            <Ionicons name="caret-down-outline" size={14} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {CardData.map((v, i) => {
          return (
            <View key={i} style={style._card_main}>
              <View style={style._card_1_portion}>
                <Image
                  source={v.profileImg}
                  style={style._card_profile_Image}
                />
              </View>
              <View style={style._card_2_portion}>
                <Text style={style._user_name}>{v.name}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={style._mob_num}>{v.date}</Text>
                  <Text style={style._mob_num}>{v.time}</Text>
                </View>
              </View>
              <View style={style._card_3_portion}>
                <Text style={style._price}>{v.price}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <View style={style._tabs}>
        <TouchableOpacity style={style.tab_btn}>
          <WalletIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Wallet
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}>
          <AdaptIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Adapt
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}>
          <BrowserIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Browser
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}>
          <ReceiveActiveIcon />
          <Text
            style={[style.tabs_Text, { color: ThemeColors.activeTabColor }]}
          >
            Receive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}>
          <ContactsIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Contacts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}>
          <ProfileIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
  _text: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#662972",
  },
  _tabs: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 77,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#202020",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  tabs_Text: {
    fontFamily: "Roboto-Bold",
    fontSize: 11,
    letterSpacing: 0.5,
    marginTop: 5,
  },
  tab_btn: {
    alignItems: "center",
  },
  _profile_Image: {
    width: 24,
    height: 24,
    borderRadius: 26 / 2,
  },
  _body: {
    marginHorizontal: 20,
  },
  _title: {
    fontFamily: "Roboto-Bold",
    fontSize: 19,
    color: "#29304D",
    width: "50%",
  },
  all_btn_Text: {
    fontSize: 17,
    color: "#29304D",
    fontFamily: "Roboto-Regular",
    marginRight: 5,
  },
  _all_btn: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
  _month_main: {
    flexDirection: "row",
    alignItems: "center",
  },
  _select_month_btn: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
  },
  _select_month_btn_Text: {
    fontSize: 13,
    color: "#29304D",
    fontFamily: "Roboto-Regular",
  },
  _month: {
    fontSize: 17,
    color: "#29304D",
    fontFamily: "Roboto-Bold",
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    marginBottom: 5,
    backgroundColor: "#E9E9E9",
    paddingHorizontal: 20,
  },
  _card_1_portion: {
    width: "20%",
  },
  _card_2_portion: {
    width: "40%",
  },
  _card_3_portion: {
    width: "40%",
  },
  _user_name: {
    color: "#3A3A3A",
    fontFamily: "Roboto-Bold",
    fontSize: 20,
  },
  _mob_num: {
    color: "#8A959E",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  _invite_btn: {
    height: 34,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  _invite_btn_text: {
    fontSize: 14,
    fontFamily: "Roboto-Bold",
  },
  _card_profile_Image: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  _price: {
    fontFamily: "Roboto-Bold",
    color: "#2E9B6A",
    textAlign: "center",
  },
});

export default Receive;
