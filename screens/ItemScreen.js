import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";

import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ItemScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#F0F0F0] relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative shadow-lg">
          <Image
            source={{ uri: data?.photo?.images?.large?.url }}
            className="w-full h-72 object-cover rounded-2xl"
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-[#F0F0F0]">
              <Entypo name="back" size={24} color="#3C486B" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#3C486B]">
              <FontAwesome name="heart" size={24} color="#F0F0F0" />
            </TouchableOpacity>
          </View>
          <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
            <View className="flex-row space-x-2 items-center">
              <Text className="text-[12px] font-bold text-gray-100">{data?.price_level}</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
              <Text className="text-[32px] font-bold text-gray-100">{data?.price}</Text>
            </View>
            {data?.open_now_text && (
              <View className="px-2 py-1 rounded-md bg-[#F9D949] items-center justify-center">
                <Text className="text-[#3C486B]">{data?.open_now_text}</Text>
              </View>
            )}
          </View>
        </View>

        <View className="mt-6">
          <Text className="text-[#3C486B] text-[24px] font-bold">{data?.name}</Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <EvilIcons name="location" size={20} color="#454545" />
            <Text className="text-[#454545] text-[20px] font-bold">{data?.location_string}</Text>
          </View>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
          {data?.rating && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-[#F9D949] items-center justify-center shadow-md">
                <MaterialCommunityIcons name="star-circle" size={32} color="#3C486B" />
              </View>
              <View>
                <Text className="text-[#454545]">{data?.rating}</Text>
                <Text className="text-[#454545]">Rating</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-[#F9D949] items-center justify-center shadow-md">
                <FontAwesome5 name="money-bill-wave" size={24} color="#3C486B" />
              </View>
              <View>
                <Text className="text-[#454545]">{data?.price_level}</Text>
                <Text className="text-[#454545]">Price level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View className="flex-row items-center space-x-2">
              <View className="w-12 h-12 rounded-2xl bg-[#F9D949] items-center justify-center shadow-md">
                <MaterialCommunityIcons name="compass" size={32} color="#3C486B" />
              </View>
              <View>
                <Text className="text-[#454545]">{data?.bearing}</Text>
                <Text className="text-[#454545]">Bearing</Text>
              </View>
            </View>
          )}
        </View>

        {data?.description && (
          <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#454545]">
            {data?.description}
          </Text>
        )}

        {data?.cuisine && (
          <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
            {data?.cuisine.map((item) => (
              <TouchableOpacity key={item.key} className="px-2 py-1 rounded-md bg-[#F2B6A0]">
                <Text className="text-[#3C486B]">{item?.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {data?.phone || data?.email || data?.address ? (
          <View className="space-y-2 mt-4 mb-8 bg-gray-200 rounded-2xl px-4 py-6">
            {data?.phone && (
              <View className="items-center flex-row space-x-6">
                <FontAwesome5 name="phone" size={24} color="#3C486B" />
                <Text className="text-lg">{data?.phone}</Text>
              </View>
            )}

            {data?.email && (
              <View className="items-center flex-row space-x-6">
                <Entypo name="email" size={26} color="#3C486B" />
                <Text className="text-lg">{data?.email}</Text>
              </View>
            )}

            {data?.address && (
              <View className="items-center flex-row space-x-6">
                <FontAwesome5 name="map-marked-alt" size={24} color="#3C486B" />
                <Text className="text-lg">{data?.address}</Text>
              </View>
            )}
            {data?.phone && (
              <View className="mt-4 py-4 px-4 rounded-lg bg-[#3C486B] items-center justify-center ">
                <Text className="text-3xl font-bold uppercase tracking-wider text-gray-200">
                  Book Now
                </Text>
              </View>
            )}
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
