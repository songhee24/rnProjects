import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AppText } from '../../components/UI/AppText'

export const UserSignInScreen = () => {
  return (
    <View>
      <AppText size={20} fontFamily="medium" style={styles.text}>
        Введите номер телефона
      </AppText>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
})
