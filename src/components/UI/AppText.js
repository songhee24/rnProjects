import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'
import { THEME, THEME_FONTS } from '../../utils/constants/theme'
import { getPlatformOS } from '../../utils/helpers/general'

export const AppText = ({ fontFamily, size, color, style, ...otherProps }) => {
  const fontFamilyStyle = React.useMemo(() => {
    if (fontFamily === 'medium') {
      return { fontFamily: THEME_FONTS.fontFamilyMedium }
    }
    return { fontFamily: THEME_FONTS.fontFamilyLight }
  }, [fontFamily])

  const fontSizeStyle = React.useMemo(() => ({ fontSize: size }), [size])

  return (
    <Text
      {...otherProps}
      style={[styles.root, fontFamilyStyle, fontSizeStyle, { color }, style]}
    />
  )
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

AppText.defaultProps = {
  color: THEME[getPlatformOS()].COLORS.dark.main,
  style: {},
}

AppText.propTypes = {
  fontFamily: PropTypes.oneOf(['medium', 'light']).isRequired,
  size: PropTypes.oneOf([10, 12, 14, 16, 18, 20]).isRequired,
  color: PropTypes.string,
  style: Text.propTypes.style,
}
