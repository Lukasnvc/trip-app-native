import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Attractions, Avatar, Hotels, NotFound, Restaurants } from "../assets";
import { useEffect, useLayoutEffect, useState } from "react";

import { API_KEY } from "@env";
import { FontAwesome } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import ItemCard from "../components/ItemCard";
import MenuContainer from "../components/MenuContainer";
import React from "react";
import { getPlacesData } from "./api";
import { useNavigation } from "@react-navigation/native";

const Discover = () => {
  const [type, setType] = useState("attractions");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      setMainData(data);
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  const key = API_KEY;

  return (
    <SafeAreaView className="flex1 bg-[#F0F0F0] relative">
      <View className="flex-row items-center justify-between px-8">
        <View>
          <Text className="text-[40px] text-[#3C486B] font-bold">Discover </Text>
          <Text className="text-[#454545] text-[36px]">Best for your taste</Text>
        </View>

        <View className="w-14 h-14 bg-[#F9D949] rounded-md items-center justify-center shadow-xl">
          <Image source={Avatar} className="w-full h-full rounded-md object-cover" />
        </View>
      </View>

      <View className="flex-row items-center bg-white mx-4 rounded-xl py-1 px-1 mt-4 mb-4">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: key,
            language: "en",
          }}
        />
      </View>
      {isLoading ? (
        <View className="flex-1 h-full items-center justify-center">
          <ActivityIndicator size="large" color="#F9D949" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-4">
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row items-center justify-between px-4 mt-8">
              <Text className="text-[#3C486B] text-[28px] font-bold">Tips</Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-3">
                <Text className="text-[#F9D949] text-[20px] font-bold">Explore</Text>
                <FontAwesome name="arrow-circle-right" size={24} color="#F9D949" />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap pb-36">
              {mainData?.length > 0 ? (
                <>
                  {mainData?.map((data, index) => (
                    <>
                      {data?.photo?.images?.medium?.url && data?.name ? (
                        <ItemCard
                          key={index}
                          imageSrc={data?.photo?.images?.medium?.url}
                          title={data?.name}
                          location={data?.location_string}
                          data={data}
                        />
                      ) : null}
                    </>
                  ))}
                </>
              ) : (
                <>
                  <View className="w-full h-[400px] items-center justify-center">
                    <Image className="w-48 h-48 object-cover" source={NotFound} />
                    <Text className="text-2xl text-[#3C486B] font-bold">
                      {" "}
                      Sorry... No data found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Discover;
