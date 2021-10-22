import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import {
  AdaptIcon,
  BrowserIcon,
  ReceiveIcon,
  ProfileIcon,
  WalletIcon,
  ContactsActiveIcon,
} from "./../../components/svg";

import ThemeColors from "./../../theme/colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";
function Contacts(props) {
  const [search, onSearch] = React.useState("");
  let allContact = [
    {
      name: "Sir James",
      mobNumber: "+0 000 0000",
      btnText: "Invited",
      btnBgColor: "#E9DCFF",
      btnTextColor: "#292929",
    },
    {
      name: "Sir James",
      mobNumber: "+0 000 0000",
      btnText: "Invited",
      btnBgColor: "#E9DCFF",
      btnTextColor: "#292929",
    },
    {
      name: "Jimmy",
      mobNumber: "+0 000 0000",
      btnText: "Invite",
      btnBgColor: "#8639FF",
      btnTextColor: "#FFFFFF",
    },
    {
      name: "Jimmy",
      mobNumber: "+0 000 0000",
    },
    {
      name: "Jimmy",
      mobNumber: "+0 000 0000",
    },
    {
      name: "Jimmy",
      mobNumber: "+0 000 0000",
    },
    {
      name: "Jimmy",
      mobNumber: "+0 000 0000",
    },
    {
      name: "Jimmy",
      mobNumber: "+0 000 0000",
    },
    {
      name: "Jimmy",
      mobNumber: "+0 000 0000",
    },
    {
      name: "Jimmy",
      mobNumber: "+0 000 0000",
    },
    {
      name: "Jimmy",
      mobNumber: "+0 000 0000",
    },
    {
      name: "Jimmy",
      mobNumber: "+0 000 0000",
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
      <View>
        <TouchableOpacity
          style={style._header_mani}
          onPress={() => props.navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#29304D" />
          <Text style={style._header}>Contacts</Text>
        </TouchableOpacity>
      </View>

      <View style={style._body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity>
            <Text style={style._add_new_contact_btn_Text}>
              + Add New Contact
            </Text>
          </TouchableOpacity>
          <View style={style.input_main}>
            <TextInput
              style={style.input}
              onChangeText={onSearch}
              value={search}
              placeholder="Search contacts…"
              placeholderTextColor={ThemeColors.textColor}
              color={ThemeColors.textColor}
              autoCapitalize="none"
            />
            <TouchableOpacity>
              <AntDesign name="search1" size={24} color="black" />
            </TouchableOpacity>
          </View>
          {allContact.map((v, i) => {
            return (
              <View key={i} style={style._card_main}>
                <View style={style._card_1_portion}>
                  <Image
                    source={require("./../../img/Profile.jpg")}
                    style={style._profile_Image}
                  />
                </View>
                <View style={style._card_2_portion}>
                  <Text style={style._user_name}>{v.name}</Text>
                  <Text style={style._mob_num}>{v.mobNumber}</Text>
                </View>
                <View style={style._card_3_portion}>
                  <TouchableOpacity
                    style={[
                      style._invite_btn,
                      { backgroundColor: v.btnBgColor },
                    ]}
                  >
                    <Text
                      style={[
                        style._invite_btn_text,
                        { color: v.btnTextColor },
                      ]}
                    >
                      {v.btnText}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={style._tabs}>
        <TouchableOpacity style={style.tab_btn} onPress={() => props.navigation.navigate("Wallet")}>
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
        <TouchableOpacity style={style.tab_btn} onPress={() => props.navigation.navigate("Receive")}>
          <ReceiveIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Receive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn} onPress={() => props.navigation.navigate("Contacts")}>
          <ContactsActiveIcon />
          <Text
            style={[style.tabs_Text, { color: ThemeColors.activeTabColor }]}
          >
            Contacts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn} onPress={() => props.navigation.navigate("Profile")}>
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
    backgroundColor: ThemeColors.screensBgColor,
  },
  _header_mani: {
    flexDirection: "row",
    alignItems: "center",
    margin: 20,
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
  _body: {
    backgroundColor: "white",
    margin: 20,
    borderRadius: 10,
    padding: 20,
    paddingBottom: 140,
  },
  _add_new_contact_btn_Text: {
    color: ThemeColors.textColor,
    fontSize: 17,
    fontFamily: "Roboto-Bold",
  },
  input_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    height: 38,
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: "#F7F9FC",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    width: "85%",
  },
  _profile_Image: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  _card_1_portion: {
    width: "20%",
  },
  _card_2_portion: {
    width: "50%",
  },
  _card_3_portion: {
    width: "30%",
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
});

export default Contacts;
