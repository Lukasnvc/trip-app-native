import { Image, Text, View } from "react-native";

import React from "react";
import { TouchableOpacity } from "react-native";

const MenuContainer = ({ title, imageSrc, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
      <View
        className={`w-24 h-24 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-[#F9D949]" : ""
        }`}>
        <Image className="w-full h-full object-contain" source={imageSrc} />
      </View>
      <Text className="text-[#454545] text-xl font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuContainer;
