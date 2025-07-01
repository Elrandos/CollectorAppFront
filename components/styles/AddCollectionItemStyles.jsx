import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  header: {flexDirection: 'row', alignItems: 'center', marginBottom: 12},
  headerBack: {padding: 8, marginLeft: -16},
  title: {fontSize: 31, fontWeight: '700', color: '#1D2A32', marginBottom: 6},
  subtitle: {fontSize: 15, fontWeight: '500', color: '#929292'},
  form: {marginTop: 24, flex: 1},
  input: {marginBottom: 16},
  inputLabel: {fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8},
  inputControl: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C9D3DB',
    fontSize: 15,
    color: '#222',
  },
  imagePicker: {
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#C9D3DB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  imagePickerText: {color: '#6b7280'},
  pickedImage: {width: '100%', height: '100%', borderRadius: 12},
  formAction: {marginTop: 4, marginBottom: 16},
  btn: {
    backgroundColor: '#075eec',
    borderRadius: 30,
    paddingVertical: 10,
    alignItems: 'center',
  },
  btnText: {color: '#fff', fontSize: 18, fontWeight: '600'},
});

