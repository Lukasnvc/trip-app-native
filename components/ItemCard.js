import { Image, Text, TouchableOpacity, View } from "react-native";

import { EvilIcons } from "@expo/vector-icons";
import React from "react";

const ItemCard = ({ imageSrc, title, location }) => {
  return (
    <TouchableOpacity className="rounded-md border border-gray-400 space-y-2 px-3 py-2 my-2 shadow-md bg-white w-[182px]">
      <Image source={{ uri: imageSrc }} className="w-full h-40 rounded-md object-cover" />
      <Text className="text-[#454545] text-[18px] font-bold">
        {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
      </Text>

      <View className="flex-row items-center space-x-1">
        <EvilIcons name="location" size={20} color="#454545" />
        <Text className="text-[#454545] text-[14px] font-bold">
          {location?.length > 18 ? `${location.slice(0, 18)}..` : location}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemCard;
