import React, {Component} from 'react';
import {
  StyleSheet,
  
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';
import {addItemCollection} from '../actions/collections';
import extractFiles from 'extract-files/extractFiles.mjs';
import {HOST} from '../actions/allowedhost';
import { SafeAreaView } from 'react-native-safe-area-context';
// import isExtractableFile from 'extract-files/isExtractableFile.mjs';
// import ReactNativeFile from 'extract-files/public/ReactNativeFile.js';
// import extractFiles, {ReactNativeFile} from 'extract-files';
class AddCollectionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {name: '', description: ''},
      image: null,
    };
  }

  pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, resp => {
      if (resp.assets && resp.assets.length > 0) {
        const asset = resp.assets[0];
        this.setState({image: asset});
      }
    });
  };

  handleSubmit = async () => {
    // this.setState({uploading: true});
    const {form, image} = this.state;
    const {collectionDetail} = this.props
    // const file = new ReactNativeFile(image);
    const data = new FormData();
    // console.log(collectionDetail)
    data.append("CollectionId", collectionDetail);
    data.append('Name', form.name);
    data.append('Description', form.description);
    console.log("11")

    if (image) {
      let xhr = new XMLHttpRequest();
      xhr.open('POST', HOST + '/inapp/public/uploads');
      data.append('Image', {
        ...image,
        name: image.fileName,
        type: image.type,
      });
      xhr.send(data);
    }
    console.log("12")

    this.props.addItemCollection(data);
    this.props.navigation.goBack();
  };

  render() {
    const {navigation, collectionDetail} = this.props;
    const {form, image} = this.state;

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerBack}>
              <FeatherIcon color="#1D2A32" name="chevron-left" size={30} />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Dodaj do kolekcji {collectionDetail.name}</Text>
          <Text style={styles.subtitle}>
            Wpisz nazwę i opis oraz opcjonalnie dodaj zdjęcie
          </Text>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>nazwa</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={name => this.setState({form: {...form, name}})}
                placeholder="np. moje kolekcje"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.name}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>opis</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={description =>
                  this.setState({form: {...form, description}})
                }
                placeholder="opis kolekcji"
                placeholderTextColor="#6b7280"
                style={[styles.inputControl, {height: 100}]}
                multiline
                value={form.description}
              />
            </View>

            <TouchableOpacity
              style={styles.imagePicker}
              onPress={this.pickImage}>
              {image ? (
                <Image source={{uri: image.uri}} style={styles.pickedImage} />
              ) : (
                <Text style={styles.imagePickerText}>
                  dodaj zdjęcie (opcjonalnie)
                </Text>
              )}
            </TouchableOpacity>

            <View style={styles.formAction}>
              <TouchableOpacity onPress={this.handleSubmit}>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>dodaj</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  collectionDetail: state.collections.collectionDetail,
});

export default connect(mapStateToProps, {addItemCollection})(AddCollectionItem);

const styles = StyleSheet.create({
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
