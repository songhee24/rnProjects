import React from 'react'
import { View } from 'react-native'
import { AppText } from '../../components/UI/AppText'

export const UserSignInScreen = () => {
  return (
    <View>
      <AppText size={20} fontFamily="medium">
        Введите номер телефона
      </AppText>
    </View>
  )
}
