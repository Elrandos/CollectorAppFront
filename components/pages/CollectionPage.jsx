import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
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
import { styles, menuStyles } from '../styles/CollectionPageStyles';


class CollectionPage extends Component {
  state = {
    imageHeight: 240,
    showOptions: false,
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

