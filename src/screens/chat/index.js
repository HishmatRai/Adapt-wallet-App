import React from "react";
import { GiftedChat, Bubble, Send, Time } from "react-native-gifted-chat";
import { Text, View, TouchableOpacity } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
class Chat extends React.Component {
  state = {
    messages: [],
  };

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Hello developer",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={24} color="#4F62C0" />
            </TouchableOpacity>
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontSize: 30,
                  color: "#29304D",
                  fontWeight: "bold",
                }}
              >
                Help & Support
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 9,
                    height: 9,
                    backgroundColor: "#85EF5C",
                    borderRadius: 9 / 2,
                  }}
                ></View>
                <Text
                  style={{
                    color: "#565656",
                    fontSize: 14,
                    marginLeft: 5,
                  }}
                >
                  Active now
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="#4F62C0" />
          </TouchableOpacity>
        </View>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1,
          }}
          placeholder="Type message here"
          alwaysShowSend={true}
          renderTime={(props) => {
            return (
              <Time
                {...props}
                timeTextStyle={{
                  left: {
                    color: "white",
                  },
                  right: {
                    color: "#29304D",
                  },
                }}
              />
            );
          }}
          renderBubble={(props) => {
            return (
              <Bubble
                {...props}
                textStyle={{
                  right: {
                    color: "#29304D",
                  },
                  left: {
                    color: "white",
                  },
                }}
                wrapperStyle={{
                  left: {
                    backgroundColor: "#727272",
                    borderBottomLeftRadius: 1,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderBottomRightRadius: 16,
                  },
                  right: {
                    backgroundColor: "white",
                    borderBottomLeftRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    borderBottomRightRadius: 0,
                    paddingHorizontal: 10,
                  },
                }}
              />
            );
          }}
          renderSend={(props) => {
            return (
              <Send
                {...props}
                containerStyle={{
                  width: 60,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "#01FFD5",
                    borderRadius: 30 / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <FontAwesome name="send" size={14} color="black" />
                </View>
              </Send>
            );
          }}
        />
      </View>
    );
  }
}

export default Chat;
