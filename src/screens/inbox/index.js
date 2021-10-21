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
import { Ionicons } from "@expo/vector-icons";
function Inbox(props) {
  let ChatList = [
    {
      title: "Lorem Ipsum is simply ………",
      message:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.dummy…",
      receivedMessageTime: "ago",
      unread: 1,
      unreadShow: true,
    },
    {
      title: "Cold guy",
      message: "Paid $1000.00  -  1 Jun",
      receivedMessageTime: "ago",
      unread: 1,
      unreadShow: false,
    },
    {
      title: "Cold guy",
      message: "Additional hills  -  1 Jun",
      receivedMessageTime: "ago",
      unread: 1,
      unreadShow: false,
    },
    {
      title: "Lorem Ipsum is simply ………",
      message:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry.dummy…",
      receivedMessageTime: "ago",
      unread: 1,
      unreadShow: true,
    },
    {
      title: "Cold guy",
      message: "Paid $1000.00  -  1 Jun",
      receivedMessageTime: "ago",
      unread: 1,
      unreadShow: false,
    },
    {
      title: "Cold guy",
      message: "Additional hills  -  1 Jun",
      receivedMessageTime: "ago",
      unread: 1,
      unreadShow: false,
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
          <Text style={style._header}>Inbox</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style._chat_main}>
          {ChatList.map((v, i) => {
            return (
              <View style={style._card_main} key={i}>
                <View style={style._card_1_section}>
                  <Image
                    source={require("./../../img/Profile.jpg")}
                    style={style._profile_Image}
                  />
                </View>
                <View style={style._card_2_section}>
                  <Text style={style._message_title}>{v.title}</Text>
                  <Text style={style._message_detail}>{v.message}</Text>
                </View>
                <View style={style._card_3_section}>
                  {v.unreadShow ? (
                    <>
                      <Text style={style._message_title}>
                        {v.receivedMessageTime}
                      </Text>
                      <View style={style._unread_counter_main}>
                        <Text style={style._unread_counter}>{v.unread}</Text>
                      </View>
                    </>
                  ) : null}
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
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    borderColor: "#FE5886",
    borderWidth: 2,
  },
  _chat_main: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
  _card_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  _card_1_section: {
    width: "23%",
  },
  _card_2_section: {
    width: "57%",
  },
  _card_3_section: {
    width: "20%",
  },
  _message_title: {
    fontSize: 12,
    color: "#060606",
    fontFamily: "Roboto-Regular",
  },
  _message_detail: {
    fontSize: 12,
    color: "#060606",
    fontFamily: "Roboto-Regular",
  },
  _unread_counter_main: {
    backgroundColor: "#FE5886",
    width: 13,
    height: 13,
    borderRadius: 13 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  _unread_counter: {
    color: "white",
    fontFamily: "Roboto-Regular",
    fontSize: 8,
  },
});

export default Inbox;
