import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_MARGIN = 12;
const IMAGE_WIDTH = SCREEN_WIDTH / 2 - IMAGE_MARGIN * 2;
const IMAGE_HEIGHT = 120;

export const menuStyles = {
  optionsContainer: {
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 5,
  },
  optionText: {
    fontSize: 16,
    color: '#1d2a32',
    padding: 8,
  },
  optionWrapper: {
    paddingHorizontal: 12,
  },
};

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: '#e8ecf4',
  },
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    flexGrow: 1,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1d2a32',
    marginBottom: 6,
    textTransform: 'lowercase',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    marginBottom: 12,
    textTransform: 'lowercase',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
    paddingHorizontal: 24,
  },
  headerAction: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1d2a32',
    textTransform: 'lowercase',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
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
    textTransform: 'lowercase',
  },
  nameAdd: {
    fontSize: 14,
    fontWeight: '600',
    color: '#929292',
    textTransform: 'lowercase',
  },
  desc: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
    textTransform: 'lowercase',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 16,
    zIndex: 1000,
  },

  modalContainer: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },

  modalText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1d2a32',
  },

  deleteText: {
    color: '#d63031',
  },

  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginHorizontal: 8,
  },
});
