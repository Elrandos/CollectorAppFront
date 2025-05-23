import React, {useState, useMemo} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const users = [
  {
    img: '',
    name: 'Bell Burgess',
    phone: '+1 (887) 478-2693',
  },
  {
    img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Bernard Baker',
    phone: '+1 (862) 581-3022',
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Elma Chapman',
    phone: '+1 (913) 497-2020',
  },
  {
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Knapp Berry',
    phone: '+1 (951) 472-2967',
  },
  {
    img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Larson Ashbee',
    phone: '+1 (972) 566-2684',
  },
  {
    img: '',
    name: 'Lorraine Abbott',
    phone: '+1 (959) 422-3635',
  },
  {
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Rosie Arterton',
    phone: '+1 (845) 456-2237',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Shelby Ballard',
    phone: '+1 (824) 467-3579',
  },
];

export default function Search() {
  const [input, setInput] = useState('');
  const filteredRows = useMemo(() => {
    const rows = [];
    const query = input.toLowerCase();

    for (const item of users) {
      const nameIndex = item.name.toLowerCase().search(query);

      if (nameIndex !== -1) {
        rows.push({
          ...item,
          index: nameIndex,
        });
      }
    }

    return rows.sort((a, b) => a.index - b.index);
  }, [input]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <View style={styles.headerAction}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <FeatherIcon name="chevron-left" size={24} />
            </TouchableOpacity>
          </View> */}
          <View style={styles.search}>
            <View style={styles.searchIcon}>
              <FeatherIcon color="#778599" name="search" size={17} />
            </View>
            <TextInput
              autoCapitalize="words"
              autoComplete="name"
              placeholder="Search..."
              returnKeyType="search"
              placeholderTextColor="#778599"
              style={styles.searchControl}
            />
          </View>
          <View style={[styles.headerAction, {alignItems: 'flex-end'}]}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <FeatherIcon name="more-vertical" size={24} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.searchContent}>
          {filteredRows.length ? (
            filteredRows.map(({img, name, phone}, index) => {
              return (
                <View key={index} style={styles.cardWrapper}>
                  <TouchableOpacity
                    onPress={() => {
                      // handle onPress
                    }}>
                    <View style={styles.card}>
                      {img ? (
                        <Image
                          alt=""
                          resizeMode="cover"
                          source={{uri: img}}
                          style={styles.cardImg}
                        />
                      ) : (
                        <View style={[styles.cardImg, styles.cardAvatar]}>
                          <Text style={styles.cardAvatarText}>{name[0]}</Text>
                        </View>
                      )}

                      <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>{name}</Text>

                        <Text style={styles.cardPhone}>{phone}</Text>
                      </View>

                      <View style={styles.cardAction}>
                        <FeatherIcon
                          color="#9ca3af"
                          name="chevron-right"
                          size={22}
                        />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })
          ) : (
            <Text style={styles.searchEmpty}>No results</Text>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  //   HEADER
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
  headerAction: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  /** Search */
  search: {
    position: 'relative',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: '#F0F0F0',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchIcon: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 34,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  searchControl: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    paddingLeft: 34,
    width: '100%',
    fontSize: 16,
    fontWeight: '500',
  },
  /** Search */

  searchContent: {
    paddingLeft: 24,
  },
  searchEmpty: {
    textAlign: 'center',
    paddingTop: 16,
    fontWeight: '500',
    fontSize: 15,
    color: '#9ca1ac',
  },
  /** Card */
  card: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  cardWrapper: {
    borderBottomWidth: 1,
    borderColor: '#d6d6d6',
  },
  cardImg: {
    width: 42,
    height: 42,
    borderRadius: 12,
  },
  cardAvatar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9ca1ac',
  },
  cardAvatarText: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardBody: {
    marginRight: 'auto',
    marginLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  cardPhone: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '500',
    color: '#616d79',
    marginTop: 3,
  },
  cardAction: {
    paddingRight: 16,
  },
});
