import React, {Component} from 'react';
import {
  StyleSheet,
  
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {launchImageLibrary} from 'react-native-image-picker';
import {connect} from 'react-redux';
import {addItemCollection} from '../actions/collections';
import extractFiles from 'extract-files/extractFiles.mjs';
import {HOST} from '../actions/allowedhost';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/AddCollectionItemStyles';

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
    const {form, image} = this.state;
    const {collectionDetail} = this.props

    const data = new FormData();

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

    const imageForm = (image) => {
      if (image){
        return(
          <TouchableOpacity
            style={styles.imagePicker}
            onPress={this.pickImage}
            >
              <Image source={{uri: image.uri}} style={styles.pickedImage} />
          </TouchableOpacity>
 
        )
      }
      else{
        return(
          <TouchableOpacity
            style={styles.imagePicker}
            onPress={this.pickImage}
              >
            <Text style={styles.imagePickerText}>
              dodaj zdjęcie (opcjonalnie)
            </Text>
          </TouchableOpacity>
        )
      }
    }

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

            {imageForm(image)}

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
