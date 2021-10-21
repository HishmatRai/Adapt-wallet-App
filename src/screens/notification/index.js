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
import ThemeColors from "./../../theme/colors";
import {
  Ionicons,
  MaterialIcons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
function Notification(props) {
  let NotificationList = [
    {
      newShow: true,
      noteShow: true,
      priceSow: false,
      commentShow: false,
      addressShow: false,
      heading: "Four seasons aircon",
    },
    {
      newShow: true,
      noteShow: false,
      priceSow: false,
      commentShow: true,
      addressShow: true,
      heading: "Cold guy",
    },
    {
      newShow: false,
      noteShow: false,
      priceSow: false,
      commentShow: true,
      addressShow: true,
      heading: "Cold guy",
    },
    {
      newShow: false,
      noteShow: false,
      priceSow: false,
      commentShow: true,
      addressShow: true,
      heading: "Cold guy",
    },
    {
      newShow: false,
      noteShow: false,
      priceSow: false,
      commentShow: true,
      addressShow: true,
      heading: "Cold guy",
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
          <Text style={style._header}>Notification</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="delete-outline" size={24} color="#FE5886" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style._chat_main}>
          <View style={style._tabs}>
            <TouchableOpacity style={style._tabs_btn}>
              <Text style={style._notificaion_Tab}>Notifications</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style._tabs_btn}>
              <Text style={style._inbox}>Inbox</Text>
            </TouchableOpacity>
          </View>
          {NotificationList.map((v, i) => {
            return (
              <View style={style._card_main} key={i}>
                <View style={style._card_1_section}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    {v.newShow ? <Text style={style._new}>NEW</Text> : null}
                    <Text style={style._card_heading}>{v.heading}</Text>
                  </View>
                  {v.noteShow ? (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={style._note}>Note</Text>
                      <TouchableOpacity style={style._Commercial_btn}>
                        <Text style={style._Commercial_btn_Text}>
                          Commercial
                        </Text>
                      </TouchableOpacity>
                    </View>
                  ) : null}
                  {v.priceSow ? (
                    <Text style={style._price}>80,000-90,000P</Text>
                  ) : null}
                  {v.commentShow ? (
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Feather
                          name="message-square"
                          size={20}
                          color="black"
                        />
                        <Text>4</Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          marginLeft: 10,
                          marginVertical: 5,
                        }}
                      >
                        <AntDesign name="hearto" size={20} color="black" />
                        <Text>13</Text>
                      </View>
                    </View>
                  ) : null}
                  {v.addressShow ? (
                    <Text style={style._address}>Simple address</Text>
                  ) : null}
                </View>
                <View style={style._card_2_section}>
                  <Image
                    source={require("./../../img/Profile.jpg")}
                    style={style._profile_Image}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E6E6",
  },
  _header_mani: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#E6E6E6",
  },
  _header: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    color: ThemeColors.textColor,
  },

  _profile_Image: {
    width: 60,
    height: 60,
    borderRadius: 10,
    borderColor: "#FE5886",
    borderWidth: 1,
  },
  _chat_main: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  _card_1_section: {
    width: "75%",
  },
  _card_2_section: {
    width: "20%",
  },
  _price: {
    fontSize: 10,
    color: "#070707",
    fontFamily: "Roboto-Bold",
  },
  _address: {
    fontSize: 12,
    color: "#070707",
    fontFamily: "Roboto-Regular",
  },
  _tabs: {
    flexDirection: "row",
    marginBottom: 30,
  },
  _notificaion_Tab: {
    fontFamily: "Roboto-Bold",
    fontSize: 18,
    color: "#070707",
    borderBottomWidth: 3,
    borderBottomColor: "#070707",
    paddingBottom: 10,
  },
  _inbox: {
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    color: "#070707",
    marginLeft: "40%",
  },
  _tabs_btn: {},
  _new: {
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    color: "#FE5886",
    marginRight: 10,
  },
  _card_heading: {
    fontFamily: "Roboto-Bold",
    fontSize: 14,
    color: "#070707",
  },
  _note: {
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    color: "#707070",
    marginRight: 10,
  },
  _Commercial_btn: {
    backgroundColor: "#FE5886",
    height: 17,
    borderRadius: 50,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  _Commercial_btn_Text: {
    fontFamily: "Roboto-Regular",
    fontSize: 10,
    color: "#fff",
  },
});

export default Notification;
