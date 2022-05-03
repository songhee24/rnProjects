import React from 'react'
import type { Node } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { UserSignInScreen } from './screens/auth/UserSignIn.screen'

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <UserSignInScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})

export default App
