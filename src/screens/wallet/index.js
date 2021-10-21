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
import { Ionicons } from "@expo/vector-icons";
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
        <View>
          <Text>$12550.50</Text>
        </View>
          <ChartSlider />
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
});

export default Wallet;
