// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   SafeAreaView,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Image,
//   ActivityIndicator,
// } from 'react-native';
// import FeatherIcon from 'react-native-vector-icons/Feather';
// import {launchImageLibrary} from 'react-native-image-picker';
// import {connect} from 'react-redux';
// import {addCollection} from '../actions/collections';
// import extractFiles from 'extract-files/extractFiles.mjs';
// import {HOST} from '../actions/allowedhost';
// // import isExtractableFile from 'extract-files/isExtractableFile.mjs';
// // import ReactNativeFile from 'extract-files/public/ReactNativeFile.js';
// // import extractFiles, {ReactNativeFile} from 'extract-files';
// class CollectionPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       form: {name: '', description: ''},
//       image: null,
//     };
//   }

//   pickImage = () => {
//     launchImageLibrary({mediaType: 'photo'}, resp => {
//       if (resp.assets && resp.assets.length > 0) {
//         const asset = resp.assets[0];
//         this.setState({image: asset});
//       }
//     });
//   };

//   handleSubmit = async () => {
//     this.setState({uploading: true});
//     const {form, image} = this.state;
//     // const file = new ReactNativeFile(image);
//     const data = new FormData();
//     data.append('Name', form.name);
//     data.append('Description', form.description);

//     console.log(image.uri);
//     console.log(image);
//     console.log(image.type);
//     console.log(image.fileName);

//     if (image) {
//       // const imag = extractFiles();
//       let xhr = new XMLHttpRequest();

//       xhr.open('POST', HOST + '/inapp/public/uploads');

//       data.append('Image', {
//         ...image,
//         name: image.fileName,
//         type: image.type,
//       });
//       console.log(xhr);

//       xhr.send(data);
//       console.log(xhr);

//       // const file1 = new File([image.uri], image.fileName, {type: image.type});
//       // data.append('Image', file1);
//     }
//     // console.log(data.getAll());
//     this.props.addCollection(data);
//   };

//   render() {
//     const {navigation} = this.props;
//     const {form, image} = this.state;

//     return (
//       <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
//         <View style={styles.container}>
//           <View style={styles.header}>
//             <TouchableOpacity
//               onPress={() => navigation.goBack()}
//               style={styles.headerBack}>
//               <FeatherIcon color="#1D2A32" name="chevron-left" size={30} />
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.title}>dodaj nową kolekcję</Text>
//           <Text style={styles.subtitle}>
//             wpisz nazwę i opis oraz opcjonalnie dodaj zdjęcie
//           </Text>

//           <View style={styles.form}>
//             <View style={styles.input}>
//               <Text style={styles.inputLabel}>nazwa</Text>
//               <TextInput
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 onChangeText={name => this.setState({form: {...form, name}})}
//                 placeholder="np. moje kolekcje"
//                 placeholderTextColor="#6b7280"
//                 style={styles.inputControl}
//                 value={form.name}
//               />
//             </View>

//             <View style={styles.input}>
//               <Text style={styles.inputLabel}>opis</Text>
//               <TextInput
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 onChangeText={description =>
//                   this.setState({form: {...form, description}})
//                 }
//                 placeholder="opis kolekcji"
//                 placeholderTextColor="#6b7280"
//                 style={[styles.inputControl, {height: 100}]}
//                 multiline
//                 value={form.description}
//               />
//             </View>

//             <TouchableOpacity
//               style={styles.imagePicker}
//               onPress={this.pickImage}>
//               {image ? (
//                 <Image source={{uri: image.uri}} style={styles.pickedImage} />
//               ) : (
//                 <Text style={styles.imagePickerText}>
//                   dodaj zdjęcie (opcjonalnie)
//                 </Text>
//               )}
//             </TouchableOpacity>

//             <View style={styles.formAction}>
//               <TouchableOpacity onPress={this.handleSubmit}>
//                 <View style={styles.btn}>
//                   <Text style={styles.btnText}>dodaj</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// // const mapStateToProps = state => ({
// //   collectionList: state.collections.collectionList,
// // });

// export default connect(null, {addCollection})(CollectionPage);

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     paddingHorizontal: 24,
//     paddingBottom: 16,
//   },
//   header: {flexDirection: 'row', alignItems: 'center', marginBottom: 12},
//   headerBack: {padding: 8, marginLeft: -16},
//   title: {fontSize: 31, fontWeight: '700', color: '#1D2A32', marginBottom: 6},
//   subtitle: {fontSize: 15, fontWeight: '500', color: '#929292'},
//   form: {marginTop: 24, flex: 1},
//   input: {marginBottom: 16},
//   inputLabel: {fontSize: 17, fontWeight: '600', color: '#222', marginBottom: 8},
//   inputControl: {
//     backgroundColor: '#fff',
//     paddingHorizontal: 16,
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#C9D3DB',
//     fontSize: 15,
//     color: '#222',
//   },
//   imagePicker: {
//     height: 150,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#C9D3DB',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 24,
//   },
//   imagePickerText: {color: '#6b7280'},
//   pickedImage: {width: '100%', height: '100%', borderRadius: 12},
//   formAction: {marginTop: 4, marginBottom: 16},
//   btn: {
//     backgroundColor: '#075eec',
//     borderRadius: 30,
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   btnText: {color: '#fff', fontSize: 18, fontWeight: '600'},
// });

import React, {Component} from 'react';
import {
  StyleSheet,

  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCollectionDetail, getCollectionItemDetail, deleteCollection } from '../actions/collections';
import {connect} from 'react-redux';
import CollectionItem from '../elements/CollectionItem';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';


const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_MARGIN = 12;
const IMAGE_WIDTH = SCREEN_WIDTH / 2 - IMAGE_MARGIN * 2;
const IMAGE_HEIGHT = 120;

class CollectionPage extends Component {
  state = {
    imageHeight: 240,
    showOptions: false, // 👈 sterowanie widocznością okienka
  };
  handleBack = () => {
    const {navigation} = this.props;
    if (navigation) {
      navigation.goBack();
    }
  };
  handleDelete = () => {
    console.log("usuwanielk")
    const { collectionDetail, navigation }=this.props
    console.log(collectionDetail)

    this.props.deleteCollection(collectionDetail)
    navigation.goBack();
  }

  handleEdit = () => {
    const { navigation }=this.props
    navigation.navigate("EditCollections");
  }
  toggleOptions = () => {
    this.setState(prev => ({ showOptions: !prev.showOptions }));
  };

  componentDidMount(){
    const { id } = this.props.route.params;
    // console.log(id)
    this.props.getCollectionDetail(id)
  }

  render() {
    const { collectionList, collectionDetail, id }=this.props
    const colectionObject = collectionList.find(element => element.id == collectionDetail)
    const {navigation} = this.props;
    console.log(colectionObject)
    const showContent = () => {
      if (collectionDetail){
        return( 
          <ScrollView contentContainerStyle={styles.scroll}>
            <Text style={styles.title}>{colectionObject.name}</Text>
            <Text style={styles.subtitle}>
              {colectionObject.description}
            </Text>
            
            <View style={styles.grid}>
              <TouchableOpacity style={styles.cardAdd}
                onPress={()=>this.props.navigation.navigate('AddCollectionItem')}
              >
                <View style={styles.textWrapperAdd}>
                  <FeatherIcon color="#929292" name="plus" size={74} />
                  <Text
                    style={styles.nameAdd}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    DODAJ DO KOLEKCJI
                  </Text>
                </View>
              </TouchableOpacity>
              
              {colectionObject.items.map(item => (
                <CollectionItem key={item.id} item={item} navigation={navigation} />
              ))}
            </View>
          </ScrollView>
        )
      }
    }

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity onPress={this.handleBack}>
                <FeatherIcon color="#000" name="arrow-left" size={24} />
              </TouchableOpacity>
            </View>
            <Text numberOfLines={1} style={styles.headerTitle}>
              kolekcja
            </Text>
            <View style={[styles.headerAction, {alignItems: 'flex-end'}]}>
              
              <Menu>
                <MenuTrigger>
                  <FeatherIcon name="more-vertical" size={24} />
                </MenuTrigger>
                <MenuOptions customStyles={menuStyles}>
                  <MenuOption onSelect={this.handleEdit} text="Edytuj" />
                  <MenuOption onSelect={this.handleDelete} text="Usuń" />
                </MenuOptions>
              </Menu>
            </View>
          </View>
          {showContent()}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  collectionDetail: state.collections.collectionDetail,
  collectionList: state.collections.collectionList,
});


export default connect(mapStateToProps, {getCollectionDetail, getCollectionItemDetail, deleteCollection})(CollectionPage)

const menuStyles = {
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

const styles = StyleSheet.create({
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
    backgroundColor: 'rgba(0,0,0,0.2)', // lekko przyciemnione tło
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
