import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { HOST } from '../actions/allowedhost';
import { styles } from '../styles/CollectionItemStyles';

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


export default CollectionItem