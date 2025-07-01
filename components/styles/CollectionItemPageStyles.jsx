import { StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width;

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
    flex: 1,
    backgroundColor: '#e8ecf4',
  },
  scroll: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    alignItems: 'center',
  },
  mainImage: {
    width: SCREEN_WIDTH - 32,
    borderRadius: 16,
    marginBottom: 20,
    backgroundColor: '#ccc',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1d2a32',
    textAlign: 'center',
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 16,
    color: '#555',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 8,
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
  addCard: {
    width: SCREEN_WIDTH - 32,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 32,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  nameAdd: {
    fontSize: 16,
    fontWeight: '600',
    color: '#929292',
    marginTop: 8,
    textTransform: 'uppercase',
  },
  placeholder: {
    width: '100%',
    height: 200,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#555',
  },
});


