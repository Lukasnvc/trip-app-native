import { Image, Text, TouchableOpacity, View } from "react-native";

import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ItemCard = ({ imageSrc, title, location, data }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ItemScreen", { param: data })}
      className="rounded-md border border-gray-400 space-y-2 px-3 py-2 my-2 shadow-md bg-white w-[182px]">
      <Image source={{ uri: imageSrc }} className="w-full h-40 rounded-md object-cover" />
      <Text className="text-[#454545] text-[18px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>
      <View className="flex-row items-center space-x-1">
        <EvilIcons name="location" size={20} color="#454545" />
        <Text className="text-[#454545] text-[14px] font-bold">
          {location?.length > 16 ? `${location.slice(0, 16)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
