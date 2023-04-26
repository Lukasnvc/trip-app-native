import * as Animatable from "react-native-animatable";

import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { HeroImage } from "../assets";
import React from "react";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-[#F0F0F0] flex-1 relative">
      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-[#3C486B] rounded-full items-center justify-center">
          <Text className="text-[#F0F0F0] text-3xl font-bold">Go</Text>
        </View>
        <Text className="text-[#454545] text-3xl font-semibold">Travel</Text>
      </View>

      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#F9D949] text-[42px]">Take a trip</Text>
        <Text className="text-[#3C486B] text-[36px] font-bold">Filled good momments</Text>
        <Text className="text-[#454545] text-base">
          Explore new places, find new atractions and have a good time as easy as one click !
        </Text>
      </View>

      <View className="w-[400px] h-[400px] bg-[#F9D949] rounded-full absolute bottom-36 -right-36"></View>
      <View className="w-[300px] h-[300px] bg-[#3C486B] rounded-full absolute -bottom-28 -left-36"></View>

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          source={HeroImage}
          className="w-[390px] h-full object-cover mt-20"
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-12 w-28 h-28 border-l-4 border-r-4 border-[#3C486B] rounded-full items-center justify-center">
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-24 h-24 items-center justify-center rounded-full bg-[#3C486B]">
            <Text className="text-[#F9D949] text-4xl font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
