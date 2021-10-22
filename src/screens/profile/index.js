import React, { useState, useEffect } from "react";
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
  WalletIcon,
  ContactsIcon,
  ProfileActiveIcon,
} from "./../../components/svg";
import * as ImagePicker from "expo-image-picker";
import ThemeColors from "./../../theme/colors";
import { Ionicons, FontAwesome, Entypo } from "@expo/vector-icons";
function Profile(props) {
  const [accountNumber, onChangeAccountNumber] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [contactNumber, onChangeContactNumber] = React.useState("");
  const [city, onChangeCity] = React.useState("");
  const [country, onChangeCountry] = React.useState("");
  const [image, setImage] = useState(null);
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
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
          <Text style={style._header}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={style._body}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {image === null ? (
            <Image
              source={require("./../../img/Profile.jpg")}
              style={style._profile_Image}
            />
          ) : (
            <Image source={{ uri: image }} style={style._profile_Image} />
          )}
          <TouchableOpacity style={style._camera_btn} onPress={pickImage}>
            <Entypo name="camera" size={37} color="#2A2A2A" />
          </TouchableOpacity>
          <Text style={style._name}>Adam Smith</Text>
          <Text style={style._title}>Adapt Wallet</Text>
          <View style={style.input_main}>
            <TextInput
              style={style.input}
              onChangeText={onChangeAccountNumber}
              value={accountNumber}
              placeholder="Account Number"
              placeholderTextColor={ThemeColors.textColor}
              color={ThemeColors.textColor}
              autoCapitalize="none"
              keyboardType="numeric"
            />
          </View>
          <View style={style.input_main}>
            <TextInput
              style={style.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder="Email Address"
              placeholderTextColor={ThemeColors.textColor}
              color={ThemeColors.textColor}
              autoCapitalize="none"
            />
          </View>
          <View style={style.input_main}>
            <TextInput
              style={style.input}
              onChangeText={onChangeContactNumber}
              value={contactNumber}
              placeholder="Contact Number"
              placeholderTextColor={ThemeColors.textColor}
              color={ThemeColors.textColor}
              autoCapitalize="none"
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={style.input_main2}>
              <TextInput
                style={style.input}
                onChangeText={onChangeCity}
                value={city}
                placeholder="City"
                placeholderTextColor={ThemeColors.textColor}
                color={ThemeColors.textColor}
                autoCapitalize="none"
              />
              <Ionicons name="location" size={24} color="#575757" />
            </View>
            <View style={style.input_main2}>
              <TextInput
                style={style.input}
                onChangeText={onChangeCountry}
                value={country}
                placeholder="Country"
                placeholderTextColor={ThemeColors.textColor}
                color={ThemeColors.textColor}
                autoCapitalize="none"
              />
            </View>
          </View>
          <View style={{ marginBottom: 200 }}></View>
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
          <ContactsIcon />
          <Text style={[style.tabs_Text, { color: ThemeColors.tabColor }]}>
            Contacts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.tab_btn}  onPress={() => props.navigation.navigate("Profile")}>
          <ProfileActiveIcon />
          <Text
            style={[style.tabs_Text, { color: ThemeColors.activeTabColor }]}
          >
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
    flexDirection: "row",
    justifyContent: "space-between",
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
    width: 170,
    height: 170,
    borderRadius: 170 / 2,
    alignSelf: "center",
    marginTop: 10,
  },
  _camera_btn: {
    alignSelf: "center",
    marginTop: 10,
  },
  _name: {
    fontSize: 20,
    color: "#29304D",
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    marginTop: 10,
  },
  _title: {
    fontSize: 16,
    color: "#29304D",
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    marginTop: 10,
  },
  input_main: {
    borderWidth: 1,
    borderColor: ThemeColors.borderColor,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    height: 53,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: ThemeColors.inputBg,
  },
  input_main2: {
    borderWidth: 1,
    borderColor: ThemeColors.borderColor,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    height: 53,
    paddingHorizontal: 20,
    marginTop: 20,
    backgroundColor: ThemeColors.inputBg,
    width: "45%",
    justifyContent: "space-between",
  },
  input: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  _body: {
    marginHorizontal: 20,
  },
});

export default Profile;
