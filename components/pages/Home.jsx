import React, {Component} from 'react';
import {
  StyleSheet,
  
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {getCollection} from '../actions/collections';
import { Logout } from '../actions/auth';
import {connect} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SafeAreaView } from 'react-native-safe-area-context';
import Collection from '../elements/Collection';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  filteredRows() {
    const {input} = this.state;
    const query = input.toLowerCase();

    const rows = this.props.collectionList
      .map(user => {
        const index = user.name.toLowerCase().indexOf(query);
        if (index !== -1) {
          return {...user, index};
        }
        return null;
      })
      .filter(Boolean)
      .sort((a, b) => a.index - b.index);

    return rows;
  }
  componentDidMount() {
    this.props.getCollection();
  }
  handleLogout() {
    this.props.Logout();
  }
  render() {
    const {navigation} = this.props;
    const {input} = this.state;
    const filteredRows = this.filteredRows();

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <Text style={styles.title}>Twoje Kolekcje</Text>
          <View style={styles.header}>
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
                onChangeText={(text) => this.setState({ input: text })}
                value={this.state.input}
                style={styles.searchControl}
              />
            </View>
            <View style={[styles.headerAction, {alignItems: 'flex-end'}]}>
              <TouchableOpacity>
                <Menu>
                  <MenuTrigger>
                    <FeatherIcon name="more-vertical" size={24} />
                  </MenuTrigger>
                  <MenuOptions customStyles={menuStyles}>
                    <MenuOption onSelect={() => this.handleLogout()} text="Wyloguj" />
                  </MenuOptions>
                </Menu>
              </TouchableOpacity>
            </View>
          </View>

          <ScrollView
            contentContainerStyle={styles.scrollContent}
          >
            {filteredRows.length ? (
              filteredRows.map((item) => (
                <Collection
                  key={item.id}
                  navigation={navigation}
                  item={item}

                />
              ))
            ) : (
              <Text style={styles.emptyText}>brak kolekcji</Text>
            )}
            <View style={{height: 150}} />
          </ScrollView>
          <View style={styles.buttonContainerX}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddCollections')}
              style={styles.buttonX}>
              <AntDesign name="adduser" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

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
    // paddingBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#222',
    // marginTop: 24,
    // marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
    padding: 2,
  },
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
  scrollContent: {
    padding: 16,
  },
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
    shadowOffset: {width: 0, height: 2},
    elevation: 2,
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
  emptyText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#9ca3af',
    marginTop: 24,
  },
  //button
  buttonContainerX: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    right: 10,
    elevation: 14,
  },
  buttonContainerX2: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 100,
    right: 10,
  },
  buttonContainerX3: {
    flex: 1,
    justifyContent: 'center', // Centrowanie w pionie
    alignItems: 'center',
    bottom: 20,
  },
  buttonX: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#185aca',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 65,
    height: 65,

    borderRadius: 100,
  },
  buttonTextX: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => ({
  collectionList: state.collections.collectionList,
});

export default connect(mapStateToProps, {getCollection, Logout})(Home);
