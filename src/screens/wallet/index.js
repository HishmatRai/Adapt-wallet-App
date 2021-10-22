import React, { useState } from "react";
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
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import WaveChart from "../../components/wavechart";
import {
  WalletActiveIcon,
  AdaptIcon,
  BrowserIcon,
  ReceiveIcon,
  ContactsIcon,
  ProfileIcon,
  BtcIcon,
  CardanoIcon,
  Uniswap,
  Tether,
} from "./../../components/svg";
import ChartSlider from "../../components/chartslider";
function Wallet(props) {
  const [activeBtn, setActiveBtn] = useState(0);
  let ChartSlider = [
    {
      title: "Bitcoin",
      subTitle: "BTC",
    },
    {
      title: "Ethereum",
      subTitle: "BTC",
    },
  ];

  let MarketFilterBtn = [
    {
      btnValue: "24 hrs",
    },
    {
      btnValue: "Hot",
    },
    {
      btnValue: "Profit",
    },
    {
      btnValue: "Rising",
    },
    {
      btnValue: "Loss",
    },
    {
      btnValue: "Top Gain",
    },
    {
      btnValue: "Top Gain",
    },
  ];

  let MarketCard = [
    {
      icon: <CardanoIcon />,
      name: "Cardano",
      title: "ADA",
      price: "$123.77",
      per: "11.75%",
      color: "#04DC00",
    },
    {
      icon: <Uniswap />,
      name: "Uniswap",
      title: "LTC",
      price: "$16.96",
      per: "11.75%",
      color: "#D91F05",
    },
    {
      icon: <Tether />,
      name: "Tether",
      title: "USDT",
      price: "$16.96",
      per: "11.75%",
      color: "#D91F05",
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
        <View style={style._header_section}>
          <TouchableOpacity onPress={() => props.navigation.navigate("Profile")}>
          <Image
            source={require("./../../img/Profile.jpg")}
            style={style._profile_Image}
          />
          </TouchableOpacity>
          <Text style={style._name}>Adam Smith</Text>
        </View>
        <View style={style._header_section}>
          <TouchableOpacity style={{ marginRight: 20 }} onPress={() => props.navigation.navigate("Notification")}>
            <Ionicons
              name="ios-notifications-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Setting")}>
            <Ionicons name="settings" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
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
        </View>
        <View>
          <View style={{ marginLeft: 10, marginTop: 30 }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {ChartSlider.map((v, i) => {
                return (
                  <TouchableOpacity style={style._slider_btn}  onPress={() => props.navigation.navigate("PriceChart")}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <BtcIcon />
                      <View style={{ marginLeft: 10 }}>
                        <Text style={style._portfolio}>{v.title}</Text>
                        <Text style={style._main_title}>{v.subTitle}</Text>
                      </View>
                    </View>
                    <View style={style.wave_Chart}>
                      <WaveChart />
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 10,
                      }}
                    >
                      <Text style={style._portfolio}>$6780</Text>
                      <View style={style._month_btn}>
                        <FontAwesome
                          name="sort-down"
                          size={20}
                          color="#04DC00"
                          style={{ marginTop: -5 }}
                        />
                        <Text style={style._persentage}>10.75%</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
        <View style={style._alert_main}>
          <View style={style._alert_card}>
            <TouchableOpacity style={style._close_btn}>
              <AntDesign name="close" size={20} color="black" />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text style={style._alert_title}>Refer Rewards</Text>
                <Text style={style._alert_des}>
                  Earn 5$ rewards on every {"\n"}successfull refers
                </Text>
              </View>
              <Image
                source={require("./../../img/hand_2.png")}
                style={style.hand_2}
              />
            </View>
          </View>
        </View>

        <Text style={style._market_heading}>Market Statistics</Text>
        <View style={style._market_btn_main}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {MarketFilterBtn.map((v, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => setActiveBtn(i)}
                  style={
                    activeBtn === i
                      ? {
                          backgroundColor: "#4B4B4B",
                          height: 22,
                          alignItems: "center",
                          justifyContent: "center",
                          paddingHorizontal: 10,
                          borderRadius: 5,
                          marginRight: 10,
                        }
                      : {
                          backgroundColor: "#282828",
                          height: 22,
                          alignItems: "center",
                          justifyContent: "center",
                          paddingHorizontal: 10,
                          borderRadius: 5,
                          marginRight: 10,
                        }
                  }
                >
                  <Text style={style._btn_Text}>{v.btnValue}</Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={style._market_Card_main}>
          {MarketCard.map((v, i) => {
            return (
              <View style={style._market_card} key={i}>
                <View style={style._market_card_1}>
                  {v.icon}
                  <View style={{ marginLeft: 10 }}>
                    <Text style={style._Card_heading}>{v.name}</Text>
                    <Text style={style._Card_sub_heading}>{v.title}</Text>
                  </View>
                </View>
                <View style={style._market_card_2}>
                  <WaveChart />
                </View>
                <View style={style._market_card_3}>
                  <Text style={style._card_price}>{v.price}</Text>
                  <View style={style._month_btn}>
                    <FontAwesome
                      name="sort-down"
                      size={10}
                      color={v.color}
                      // style={{ marginTop: -5 }}
                    />
                    <Text style={[style._persentage, { color: v.color }]}>
                      {v.per}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
        <View style={{ marginBottom: 100 }}></View>
      </ScrollView>

      <View style={style._tabs}>
        <TouchableOpacity style={style.tab_btn} onPress={() => props.navigation.navigate("Wallet")}>
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
        <TouchableOpacity style={style.tab_btn} onPress={() => props.navigation.navigate("Receive")}>
          <ReceiveIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Receive
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}  onPress={() => props.navigation.navigate("Contacts")}>
          <ContactsIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
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
    marginTop: 20,
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
  _alert_main: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
  },
  _alert_card: {
    backgroundColor: "#00F4C8",
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  _close_btn: {
    alignSelf: "flex-end",
  },
  hand_2: {
    width: 67,
    height: 80,
  },
  _alert_title: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
  },
  _alert_des: {
    color: "#000",
    fontFamily: "Roboto-Regular",
    fontSize: 20,
  },
  _slider_btn: {
    backgroundColor: "#4D474E",
    width: 250,
    height: 150,
    borderRadius: 10,
    padding: 10,
    marginRight: 20,
  },
  wave_Chart: {
    marginTop: 20,
  },
  _market_heading: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
  },
  _market_btn_main: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 20,
  },
  _btn_Text: {
    color: "#fff",
    fontFamily: "Roboto-Regular",
    fontSize: 11,
  },
  _market_Card_main: {
    marginTop: 30,
    marginHorizontal: 20,
  },
  _market_card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical:10
  },
  _market_card_1: {
    width: "35%",
    flexDirection: "row",
    alignItems: "center",
  },
  _market_card_2: {
    width: "40%",
  },
  _market_card_3: {
    width: "25%",
    alignItems: "flex-end",
  },
  _Card_heading: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  _Card_sub_heading: {
    color: "white",
    fontSize: 12,
    fontFamily: "Roboto-Regular",
  },
  _card_price: {
    color: "white",
    fontSize: 16,
    fontFamily: "Roboto-Bold",
  },
});

export default Wallet;
