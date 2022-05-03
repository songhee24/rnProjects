import { Text } from 'react-native'

export const AppText = () => {
  return <Text style={styles.root} />
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})
