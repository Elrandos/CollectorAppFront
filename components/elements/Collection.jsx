import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import { HOST } from '../actions/allowedhost';
export class Collection extends Component {
    constructor(props) {
    super(props);
    
  }

  
  render() {
    const { navigation} = this.props
    const {id, name, description, imageUrl, items} = this.props.item
    console.log(id)
    return (
      
        <TouchableOpacity
            onPress={() => {
            navigation.navigate('CollectionPage', {id});
            }}
            style={styles.card}
            >
            
            {imageUrl ? (
                <Image
                alt=""
                resizeMode="cover"
                source={{uri: `${HOST}${imageUrl}`}}
                style={styles.cardImg}
                />
            ) : (
                <View style={[styles.cardImg, styles.cardAvatar]}>
                <Text style={styles.cardAvatarText}>{name[0]}</Text>
                </View>
            )}

            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardDescription}>
                {description}
                </Text>
                <Text style={styles.cardItemsCount}>
                {items.length} element
                {items.length === 1 ? '' : 'ów'}
                </Text>
            </View>

            <View style={styles.cardAction}>
                <FeatherIcon
                color="#9ca3af"
                name="chevron-right"
                size={22}
                />
            </View>
          
        </TouchableOpacity>
  
    )
  }
}

const styles = StyleSheet.create({
cardWrapper: {
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    // borderColor:"#000fff",
    // borderWidth: 1,
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
    marginBottom: 12,
  },
  cardImg: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
    backgroundColor: '#e5e7eb',
  },
  cardAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardAvatarText: {
    fontSize: 18,
    color: '#374151',
    fontWeight: '600',
  },
  cardBody: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  cardDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 2,
  },
  cardItemsCount: {
    fontSize: 13,
    color: '#9ca3af',
    marginTop: 4,
  },
  cardAction: {
    paddingLeft: 8,
  },
})

export default Collection