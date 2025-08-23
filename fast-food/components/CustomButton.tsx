import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { CustomButtonProps } from "@/type";
import cn from "clsx";
import { router } from 'expo-router';

const CustomButton = ({
  onPress,
  title = "Click Me",
  style,
  textStyle,
  leftIcon,
  isLoading = false,
  variant = "primary", // "primary" | "black" | "secondary"
  textColor = "text-white", // Tailwind text color
  disabled = false,
  fullWidth = true
}: CustomButtonProps & {
  variant?: "primary" | "black" | "secondary",
  textColor?: string,
  disabled?: boolean,
  fullWidth?: boolean
}) => {
  
  const handlePress = () => {
    if (disabled) return;
    if (onPress) {
      onPress();
    } else {
      router.push("/(tabs)/cart");
    }
  };

  const variantStyles = {
    primary: "bg-primary",
    black: "bg-black",
    secondary: "bg-gray-200",
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      className={cn(
        "rounded-lg py-3 flex-row items-center justify-center",
        variantStyles[variant],
        fullWidth && "w-full",
        disabled && "opacity-50",
        style
      )}
    >
      {leftIcon && <View className="mr-2">{leftIcon}</View>}

      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text className={cn("font-semibold", textColor, textStyle)}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
