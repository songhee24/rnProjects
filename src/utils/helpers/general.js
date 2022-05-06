import { Platform } from 'react-native'
import { PLATFORMS } from '../constants/general'
import { THEME } from '../constants/theme'

const detectOS = Platform.OS.toUpperCase()

export const getPlatformOS = () => {
  if (detectOS === PLATFORMS.ANDROID) {
    return PLATFORMS.ANDROID
  }
  return PLATFORMS.IOS
}

export const isAndroid = () => {
  return Platform.OS === 'android'
}

export const isIOS = () => {
  return Platform.OS === 'ios'
}

export const getTheme = () => THEME[getPlatformOS()]
