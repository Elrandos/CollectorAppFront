import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import { HOST } from '../actions/allowedhost';

const SCREEN_WIDTH = Dimensions.get('window').width;
const IMAGE_MARGIN = 12;
const IMAGE_WIDTH = SCREEN_WIDTH / 2 - IMAGE_MARGIN * 2;
const IMAGE_HEIGHT = 120;

class CollectionItem extends Component {
    constructor(props) {
    super(props);
    
  }

  
  render() {
    const { navigation} = this.props
    const {id, name, description, imageUrl} = this.props.item
    // console.log(name)
    return (
      <TouchableOpacity style={styles.card}
        onPress={()=>navigation.navigate('CollectionItemPage', {id})}
      >
        <Image source={{uri: `${HOST}${imageUrl}`}} style={styles.image} />
        <View style={styles.textWrapper}>
          <Text
            style={styles.name}
            numberOfLines={1}
            ellipsizeMode="tail">
            {name}
          </Text>
          <Text
            style={styles.desc}
            numberOfLines={1}
            ellipsizeMode="tail">
            {description}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
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
    // textTransform: 'lowercase',
  },
  nameAdd: {
    fontSize: 14,
    fontWeight: '600',
    color: '#929292',
    // textTransform: 'lowercase',
  },
  desc: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
    // textTransform: 'lowercase',
  },
})

export default CollectionItem