import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ThemeColors from "./../../theme/colors";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
function PriceChart(props) {
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
});

export default PriceChart;
