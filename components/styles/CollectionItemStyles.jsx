import { StyleSheet, Dimensions } from "react-native"

const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_MARGIN = 12;
const IMAGE_WIDTH = SCREEN_WIDTH / 2 - IMAGE_MARGIN * 2;
const IMAGE_HEIGHT = 120;

export const styles = StyleSheet.create({
  card: {
    width: IMAGE_WIDTH,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
  },
  cardAdd: {
    width: IMAGE_WIDTH,
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    resizeMode: 'cover',
  },
  textWrapper: {
    padding: 10,
  },
  textWrapperAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1d2a32',

  },
  nameAdd: {
    fontSize: 14,
    fontWeight: '600',
    color: '#929292',

  },
  desc: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
})
