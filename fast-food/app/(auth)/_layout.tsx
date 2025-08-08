import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

const AuthLayout = () => {
  return (
    <SafeAreaView>
      <Text>AuthLayout</Text>
      <Slot/>
    </SafeAreaView>
  )
}

export default AuthLayout