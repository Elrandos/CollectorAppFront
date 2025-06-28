import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {register} from '../actions/auth';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_check: '',
      login: '',
    };
    this.formLogin = createRef();
    this.formEmail = createRef();
    this.formPassword = createRef();
    this.formPasswordCheck = createRef();
  }
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };
  Change = e => {
    this.setState({[e.name]: e.value});
  };
  Register = e => {
    console.log(this.state.email);
    if (this.state.password == this.state.password_check) {
      this.props.register(
        this.state.email,
        this.state.login,
        this.state.password,
      );
      console.log('poszło');
    } else {
      console.log('nieprzeszło');
    }
  };
  componentDidMount() {
    // store.dispatch(loadUser())
  }
  // navigation = useNavigation();
  render() {
    const {email, password, password_check, login} = this.state;
    // const {styles} = this.props;
    const {navigation, isAuthenticated} = this.props;
    console.log(isAuthenticated);
    // if(isAuthenticated){
    //   navigation.replace("Home")
    // }
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.headerBack}>
              {/* <FeatherIcon color="#1D2A32" name="chevron-left" size={30} /> */}
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>No to jazda!</Text>
          <Text style={styles.subtitle}>
            Wypełnij pola, aby utworzyć nowe konto.
          </Text>
          <KeyboardAwareScrollView style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Nazwa urzytkownika</Text>
              <TextInput
                ref={this.formLogin}
                returnKeyType="go"
                onSubmitEditing={() => {
                  this.formEmail.current.focus();
                }}
                clearButtonMode="while-editing"
                onChangeText={login => this.setState({login: login})}
                placeholder="Jan Kowalski"
                value={login}
                style={styles.inputControl}
              />
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Addres e-mail</Text>
              <TextInput
                ref={this.formEmail}
                returnKeyType="go"
                onSubmitEditing={() => {
                  this.formPassword.current.focus();
                }}
                placeholder="jan.kowalski1999@gmail.com"
                name="email"
                value={email}
                onChangeText={email => this.setState({email: email})}
                // onChange = {this.Change}
                style={styles.inputControl}
                clearButtonMode="while-editing"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Hasło</Text>
              <TextInput
                ref={this.formPassword}
                returnKeyType="go"
                onSubmitEditing={() => {
                  this.formPasswordCheck.current.focus();
                }}
                placeholder="*********"
                name="password"
                value={password}
                onChangeText={password => this.setState({password: password})}
                // onChange = {this.Change}
                style={styles.inputControl}
                secureTextEntry
              />
            </View>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Potwierdź hasło</Text>

              <TextInput
                ref={this.formPasswordCheck}
                placeholder="*********"
                name="password_check"
                value={password_check}
                onChangeText={password_check =>
                  this.setState({password_check: password_check})
                }
                // onChange = {this.Change}
                style={styles.inputControl}
                secureTextEntry
              />
            </View>
            <View style={styles.formAction}>
              <TouchableOpacity onPress={this.Register} style={styles.btn}>
                <Text style={styles.btnText}>Załóż konto</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
          {this.props.error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{this.props.error}</Text>
            </View>
          )}
        </View>
        
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}>
          <Text style={styles.formFooter}>
            Posiadasz już konto?{' '}
            <Text style={{textDecorationLine: 'underline', color: 'blue'}}>
              zaloguj się
            </Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerBack: {
    padding: 8,
    paddingTop: 0,
    position: 'relative',
    marginLeft: -16,
  },
  /** Form */
  form: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginTop: 24,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  errorContainer: {
    backgroundColor: '#ffe6e6',
    padding: 12,
    borderRadius: 8,
    borderColor: '#ff4d4d',
    borderWidth: 1,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  errorText: {
    color: '#cc0000',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, {register})(Register);
