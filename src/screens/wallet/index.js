import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import ThemeColors from "./../../theme/colors";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import {
  WalletActiveIcon,
  AdaptIcon,
  BrowserIcon,
  ReceiveIcon,
  ContactsIcon,
  ProfileIcon,
} from "./../../components/svg";
import ChartSlider from "../../components/chartslider";
function Wallet(props) {
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="white"
        hidden={true}
        backgroundColor={ThemeColors.statusBarBgColor}
        translucent={false}
      />
      <View style={style._header_main}>
        <View style={style._header_section}>
          <Image
            source={require("./../../img/Profile.jpg")}
            style={style._profile_Image}
          />
          <Text style={style._name}>Adam Smith</Text>
        </View>
        <View style={style._header_section}>
          <TouchableOpacity style={{ marginRight: 20 }}>
            <Ionicons
              name="ios-notifications-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="settings" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View>
          <Text style={style._main_title}>Portfolio Balance</Text>
          <View style={style._header_price_main}>
            <Text style={style._price}>$12550.50</Text>
            <TouchableOpacity style={style._persentage_btn}>
              <FontAwesome
                name="sort-down"
                size={20}
                color="#04DC00"
                style={{ marginTop: -5 }}
              />
              <Text style={style._persentage}>10.75%</Text>
            </TouchableOpacity>
          </View>
          <View style={style._portfolio_main}>
            <Text style={style._portfolio}>My Portfolio</Text>
            <TouchableOpacity style={style._month_btn}>
              <Text style={style._month}>Monthly</Text>
              <FontAwesome name="angle-down" size={20} color="#00F4C8" />
            </TouchableOpacity>
          </View>
          {/* <ChartSlider /> */}
        </View>
      </ScrollView>

      <View style={style._tabs}>
        <TouchableOpacity style={style.tab_btn}>
          <WalletActiveIcon />
          <Text
            style={[style.tabs_Text, { color: ThemeColors.activeTabColor }]}
          >
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
          <ReceiveIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
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
    backgroundColor: ThemeColors.screens2ndBgColor,
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
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },

  _profile_Image: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  _header_section: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _name: {
    color: "white",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    marginLeft: 20,
  },
  _main_title: {
    color: "white",
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
  _header_price_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  _price: {
    color: "white",
    fontFamily: "Roboto-Bold",
    fontSize: 34,
  },
  _persentage_btn: {
    backgroundColor: "#012500",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  _persentage: {
    color: "#04DC00",
    fontSize: 11,
    fontFamily: "Roboto-Regular",
    marginLeft: 10,
  },
  _portfolio_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop:20
  },
  _portfolio: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
  _month_btn: {
    flexDirection: "row",
    alignItems: "center",
  },
  _month: {
    color: "#00F4C8",
    marginRight: 5,
    fontFamily: "Roboto-Regular",
    fontSize: 13,
  },
});

export default Wallet;
