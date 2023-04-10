import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Onboardinng = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          backgroundColor: "#FFFFFF",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "46%",
            position: "absolute",
            left: "0%",
            right: "0%",
            top: "0%",
            bottom: "46.69%",
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1674763671434-22b2671c863b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
            }}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </View>

        {/* for the text section */}
        <View
          style={{
            width: 317,
            height: 112,
            position: "absolute",
            top: "57.76%",
            bottom: "28.45%",
            left: "7.73%",
            right: "7.73%",
          }}
        >
          <Text
            style={{
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: 40,
              lineHeight: 56,
              color: "#1A1B23",
              textAlign: "center",
            }}
          >
            Let's connect with each other
          </Text>
          <Text style={{fontSize : 14 , fontStyle : 'normal' , fontWeight : 400 , lineHeight : 24 , textAlign : 'center' , color : '#919191'}}>A platform for the community of the students which help them to interact with their mates </Text>
        </View>

        <TouchableOpacity
          style={{
            width: 325,
            height: 58,
            position: "absolute",
            left: "6.67%",
            right: "6.67%",
            top: "88.2%",
            bottom: "4.43%",
            background: ' linear-gradient(267.86deg, #28CD56 1.48%, #392A4F 113.84%);'
            
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              fontStyle: "normal",
              fontWeight: 500,
              lineHeight: 21,
            }}
          >
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Onboardinng;

const styles = StyleSheet.create({});
