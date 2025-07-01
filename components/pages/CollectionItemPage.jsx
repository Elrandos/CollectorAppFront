import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCollectionItemDetail, deleteCollectionItem } from '../actions/collections';
import { connect } from 'react-redux';
import { HOST } from '../actions/allowedhost';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { styles, menuStyles } from '../styles/CollectionItemPageStyles';
const SCREEN_WIDTH = Dimensions.get('window').width;

class CollectionItemPage extends Component {
  state = {
    imageHeight: 240, 
  };
  handleBack = () => {
    const { navigation } = this.props;
    if (navigation) {
      navigation.goBack();
    }
  };
  handleDelete = () => {
    console.log("usuwanielk")
    const { collectionItemDetail, navigation }=this.props
    console.log(collectionItemDetail)

    this.props.deleteCollectionItem(collectionItemDetail)
    navigation.goBack();
  }
  
  handleEdit = () => {
    console.log("ok")
    const { navigation }=this.props
    navigation.navigate("EditCollectionItem");
  }

 componentDidMount() {
    const { id } = this.props.route.params;
    this.props.getCollectionItemDetail(id);

    const { collectionList, collectionDetail } = this.props;
    const collection = collectionList.find(c => c.id === collectionDetail);
    const colectionObject = collection?.items.find(item => item.id === id);

    if (colectionObject?.imageUrl) {
      const fullImageUrl = `${HOST}` + colectionObject.imageUrl;

      Image.getSize(fullImageUrl, (width, height) => {
        const screenWidth = SCREEN_WIDTH - 32; 
        const ratio = height / width;
        const calculatedHeight = screenWidth * ratio;

        this.setState({ imageHeight: calculatedHeight });
      });
    }
  }

  render() {
    const {
      collectionList,
      collectionDetail,
      collectionItemDetail,
    } = this.props;

    const collection = collectionList.find(c => c.id === collectionDetail);
    const colectionObject = collection?.items.find(
      item => item.id === collectionItemDetail
    );

    const showContent = () => {
      if (!colectionObject) return null;
      return (
        <ScrollView contentContainerStyle={styles.scroll}>
          {colectionObject.imageUrl ? (
            <Image
              source={{ uri: `${HOST}${colectionObject.imageUrl}` }}
              style={[styles.mainImage, { height: this.state.imageHeight }]}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.placeholder}>
              <Text style={styles.placeholderText}>
                {colectionObject.name?.charAt(0).toUpperCase()}
              </Text>
            </View>
          )}

          <Text style={styles.title}>{colectionObject.name}</Text>
          <Text style={styles.description}>{colectionObject.description}</Text>
        </ScrollView>
      );
    };
    const showHeaderContent = () => {
      if (!colectionObject) return null;
      return (
        <>
          <Text numberOfLines={1} style={styles.headerTitle}>
            {colectionObject.name}
          </Text>
          <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
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
        </>
      );
    };
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerAction}>
              <TouchableOpacity onPress={this.handleBack}>
                <FeatherIcon color="#000" name="arrow-left" size={24} />
              </TouchableOpacity>
            </View>
            {showHeaderContent()}
          </View>
          {showContent()}
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  collectionDetail: state.collections.collectionDetail,
  collectionItemDetail: state.collections.collectionItemDetail,
  collectionList: state.collections.collectionList,
});

export default connect(mapStateToProps, { getCollectionItemDetail, deleteCollectionItem })(
  CollectionItemPage
);

