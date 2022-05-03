import React from 'react'
import { Text } from 'react-native'
import { PropTypes } from 'prop-types'
import { THEME_FONTS } from '../../utils/theme'

export const AppText = ({ fontFamily, size, color }) => {
  const fontFamilyStyle = React.useMemo(() => {
    if (fontFamily === 'medium') {
      return { fontFamily: THEME_FONTS.fontFamilyMedium }
    }

    return { fontFamily: THEME_FONTS.fontFamilyRegular }
  }, [fontFamily])

  const fontSizeStyle = React.useMemo(() => ({ fontSize: size }), [size])

  return <Text style={[styles.root, fontFamilyStyle, fontSizeStyle]} />
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

AppText.propTypes = {
  fontFamily: PropTypes.oneOf(['medium, light']).isRequired,
  size: PropTypes.oneOf([10, 12, 14, 16, 18, 20]).isRequired,
  color: PropTypes.string.isRequired,
}
