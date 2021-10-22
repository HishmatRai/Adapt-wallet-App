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
import { EthIcon, OgdIcon, BtcIcon, LtcIcon } from "./../../components/svg";
import ThemeColors from "./../../theme/colors";
import { Ionicons, Entypo } from "@expo/vector-icons";
function Balance(props) {
  let CardData = [
    {
      logo: <EthIcon />,
      title: "0xf1…d09d",
      tag: "Mainnet",
      type: "12.482 ETH",
      price: "$51.97",
    },
    {
      logo: <OgdIcon />,
      title: "0xb5 … 79x2",
      tag: "Ropsten testnet",
      type: "38245.12 OGD",
      price: "$215.25",
    },
    {
      logo: <BtcIcon />,
      title: "0x5о … N7h9",
      tag: "Mainnet",
      type: "326.12 BTC",
      price: "$83.58",
    },
    {
      logo: <LtcIcon />,
      title: "0xb5 … 79x2",
      tag: "Ropsten testnet",
      type: "38245.12 LTC",
      price: "$77.15",
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
      <View style={style._header_main}>
        <View style={style._header}>
          <TouchableOpacity style={style._header_btn}>
            <Text style={style.tenset_btn}>Ropsten testnet</Text>
            <Entypo name="chevron-small-down" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={style._header_btn}>
            <Text style={style._id}>oxDeAd…Beef</Text>
            <Image
              source={require("./../../img/Profile.jpg")}
              style={style._profile_Image}
            />
            <Entypo name="chevron-small-down" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={style._price_header}>
          <View>
            <Text style={style._price_heading}>Total Balance</Text>
            <Text style={style._price}>$426.75</Text>
          </View>
          <TouchableOpacity style={style._add_toker_btn}>
            <Text style={style._add_toker_btn_text}>+ Add token</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <Text style={style._tokens}>Your tokens</Text>
          <Text style={style._changes}>Make changes</Text>
        </View>
      </View>

      <View style={{ marginTop: -30 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {CardData.map((v, i) => {
            return (
              <TouchableOpacity style={style._card_main} key={i}  onPress={() => props.navigation.navigate("Transfer")}>
                <View style={style._card_logo_main}>
                  {v.logo}
                  <View style={{ marginLeft: 10 }}>
                    <Text style={style._btn_title}>{v.title}</Text>
                    <Text style={style._btn_detail}>{v.tag}</Text>
                  </View>
                </View>
                <View style={{ alignSelf: "flex-end", alignItems: "flex-end" }}>
                  <Text style={style._btn_title}>{v.type}</Text>
                  <Text style={style._btn_detail}>{v.price} </Text>
                </View>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity style={style.add_balance_btn}>
            <View style={style._add_icon_main}>
              <Ionicons name="ios-add-outline" size={24} color="#20273D" />
            </View>
            <View>
              <Text style={style._btn_title}>Add token</Text>
              <Text style={style._btn_detail}>Bitcoin, Cashcoin, Monero..</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E9E9",
  },
  _header_main: {
    backgroundColor: "#303030",
    padding: 20,
  },
  _header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  _header_btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tenset_btn: {
    fontSize: 16,
    color: "#F3BD45",
    fontFamily: "Roboto-Regular",
  },
  _id: {
    fontSize: 16,
    color: "#fff",
    fontFamily: "Roboto-Regular",
  },
  _profile_Image: {
    width: 26,
    height: 26,
    borderRadius: 26 / 2,
    marginLeft: 5,
  },
  _price_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "#D8D8D8",
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingTop: 20,
  },
  _price_heading: {
    fontSize: 16,
    color: "#F9F9F9",
    fontFamily: "Roboto-Regular",
  },
  _price: {
    color: "#FFFFFF",
    fontSize: 30,
    fontFamily: "Roboto-Bold",
  },
  _add_toker_btn: {
    height: 30,
    backgroundColor: "#37425C",
    borderRadius: 50,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  _add_toker_btn_text: {
    fontSize: 14,
    color: "#F9F9F9",
    fontFamily: "Roboto-Regular",
  },
  _tokens: {
    fontSize: 18,
    color: "#F7F7F7",
    fontFamily: "Roboto-Regular",
  },
  _changes: {
    fontSize: 15,
    color: "#F7F7F7",
    fontFamily: "Roboto-Regular",
  },
  add_balance_btn: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  _add_icon_main: {
    width: 40,
    height: 40,
    backgroundColor: "#EFF1F5",
    borderRadius: 40 / 2,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  _btn_title: {
    fontSize: 16,
    color: "#151724",
    fontFamily: "Roboto-Regular",
  },
  _btn_detail: {
    fontSize: 16,
    color: "#B8B9BD",
    fontFamily: "Roboto-Regular",
  },
  _card_main: {
    backgroundColor: "white",
    borderRadius: 5,
    paddingVertical: 20,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between",
  },
  _card_logo_main: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Balance;
