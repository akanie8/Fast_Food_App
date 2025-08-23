// components/Card.tsx
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CardProps {
  name: string;
  distance: string;
  rating: string;
  image: any;
  checkIn?: boolean;
}

export default function Card({ name, distance, rating, image, checkIn }: CardProps) {
  return (
    <View className="flex-row mb-5">
      {/* Image */}
      <Image source={image} className="w-20 h-20 rounded-xl mr-3" />

      {/* Details */}
      <View className="flex-1">
        <Text className="font-bold text-lg">{name}</Text>

        {/* Distance + Check-in */}
        <View className="flex-row items-center mt-1">
          <Ionicons name="location-outline" size={14} color="black" />
          <Text className="text-sm ml-1">{distance}</Text>
          {checkIn && (
            <View className="bg-green-500 px-2 ml-2 rounded-full">
              <Text className="text-white text-xs">Check-In</Text>
            </View>
          )}
        </View>

        {/* Rating */}
        <View className="flex-row items-center mt-1">
          <Ionicons name="star" size={14} color="black" />
          <Text className="text-sm ml-1">{rating}</Text>
        </View>

        {/* Menu & Gallery */}
        <View className="flex-row items-center mt-1">
          <Ionicons name="images-outline" size={14} color="black" />
          <Text className="text-sm ml-1">Menu & Gallery</Text>
        </View>
      </View>
    </View>
  );
}
