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
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import AreaChartExample from "./../../components/chartslider";
function PriceChart(props) {
  let daysBtn = [
    {
      data: "1H",
    },
    {
      data: "1D",
    },
    {
      data: "1W",
    },
    {
      data: "1M",
    },
    {
      data: "1Y",
    },
    {
      data: "All",
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
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="ios-arrow-back-sharp" size={24} color="#00F4C8" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="hearto" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View>
          <View style={style._header_price_main}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("./../../img/Profile.jpg")}
                style={style._profile_Image}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={style._main_title}>Cardano / ADA</Text>
                <Text style={style._price}>$123.77</Text>
              </View>
            </View>
            <TouchableOpacity style={style._persentage_btn}>
              <FontAwesome
                name="sort-down"
                size={20}
                color="#04DC00"
                style={{ marginTop: -5 }}
              />
              <Text style={style._persentage}>11.75%</Text>
            </TouchableOpacity>
          </View>

          <View style={style._list_main}>
            <View style={style.list_data_main}>
              <Text style={style._list_heading}>Popularity</Text>
              <Text style={style.list_data}>#61</Text>
            </View>
            <View style={style.list_data_main}>
              <Text style={style._list_heading}>Market Cap</Text>
              <Text style={style.list_data}>$32.4 b</Text>
            </View>
            <View style={style.list_data_main}>
              <Text style={style._list_heading}>Volume</Text>
              <Text style={style.list_data}>$20.6 b</Text>
            </View>
          </View>
          <View style={style._days_btn_main}>
            {daysBtn.map((v, i) => {
              return (
                <TouchableOpacity key={i}>
                  <Text style={style.days_btn_Text}>{v.data}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={style._chart_main}>
            <AreaChartExample />
          </View>
          <View style={style._min_and_max_main}>
            <Text style={style._min_and_max}>Min $86.21</Text>
            <Text style={style._min_and_max}>max $137.88</Text>
          </View>

          <TouchableOpacity style={style._Transfer_btn}  onPress={() => props.navigation.navigate("Transfer")}>
            <Text style={style._Transfer_btn_text}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ThemeColors.screens2ndBgColor,
  },
  _header_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
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
  _profile_Image: {
    width: 58,
    height: 58,
    borderRadius: 58 / 2,
  },
  _list_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    borderTopColor: "#646464",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#646464",
    paddingVertical: 10,
  },
  list_data_main: {
    alignItems: "center",
  },
  _list_heading: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "Roboto-Bold",
  },
  list_data: {
    color: "#FFFFFF",
    fontSize: 20,
    fontFamily: "Roboto-Bold",
    marginTop: 10,
  },
  _days_btn_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#707070",
    borderRadius: 50,
    height: 32,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  days_btn_Text: {
    color: "#FFFFFF",
    fontSize: 13,
    fontFamily: "Roboto-Bold",
  },
  _min_and_max_main: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  _min_and_max: {
    color: "#FFFFFF",
    fontSize: 10,
    fontFamily: "Roboto-Bold",
  },
  _Transfer_btn: {
    height: 52,
    backgroundColor: "#00F4C8",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  _Transfer_btn_text: {
    color: "#000000",
    fontSize: 16,
    fontFamily: "Roboto-Bold",
  },
  _chart_main:{
    marginTop:30
  }
});

export default PriceChart;
