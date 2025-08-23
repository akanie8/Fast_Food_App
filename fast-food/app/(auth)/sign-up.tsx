import { View, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import CustomInput from '@/components/CustomInput'
import CustomButton from '@/components/CustomButton'

const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setform] = useState({name: '', email: '', password: ''})

    const submit = async () => {
        if(!form.name || !form.email || !form.password) Alert.alert('Error', 'Please enter a valid email or password')

            setIsSubmitting(true)

            try{
                //Call Appwrite Sign Up Function


                Alert.alert('Success', 'User signed in sucessfully')
            }catch(error: any){
                Alert.alert('Error', error.message)
            }
    }
  return (
    <View className='gap-10 bg-white rounded-lg p-5 mt-5'>

        <CustomInput 
        placeholder="Please Enter your full name" 
        value={form.email} 
        onChangeText={(text) => setform((prev) => ({...prev, name: text}))} 
        label="Full Name" 
        />

        <CustomInput 
        placeholder="Please Enter your email" 
        value={form.email} 
        onChangeText={(text) => setform((prev) => ({...prev, email: text}))} 
        label="Email" 
        keyboardType="email-address"
        />

        <CustomInput 
        placeholder="Please Enter your password" 
        value={form.password} 
        onChangeText={(text) => setform((prev) => ({...prev, password: text}))} 
        label="Password" 
        secureTextEntry={true}
        />
        <CustomButton
        title='Sign Up'
        onPress={submit}
        variant='black'
        textColor='text-white'
        />
        <View className='flex justify-center mt-5 flex-row gap-2'>
            <Text className='base-regular text-gray-100'>Already have an account?</Text>
            <Link href="/sign-in" className='base-bold text-primary'>
                Sign In
            </Link>
        </View> 
    </View>
  )
}

export default SignUp