import React, {Component, createRef} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {login} from '../actions/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/LoginStyles';
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      login: '',
    };
    this.formLogin = createRef();
    this.formPassword = createRef();
  }
  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
  };
  Change = () => {
    this.setState({[e.name]: e.value});
  };
  Login = () => {
    this.props.login(this.state.login, this.state.password);
  };

  render() {
    const {password, login} = this.state;


    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Zaloguj się do <Text style={{color: 'blue'}}>CollectorApp!</Text>
          </Text>
          <Text style={styles.subtitle}>
            Wypełnij pola, aby zdobyć dostęp do twojego konta.
          </Text>
          <KeyboardAwareScrollView style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Nazwa urzytkownika</Text>
              <TextInput
                ref={this.formLogin}
                returnKeyType="go"
                onSubmitEditing={() => {
                  this.formPassword.current.focus();
                }}
                clearButtonMode="while-editing"
                value={login}
                name="login"
                onChangeText={login => this.setState({login: login})}
                placeholder="Jan Kowalski"
                style={styles.inputControl}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Hasło</Text>
              <TextInput
                ref={this.formPassword}
                placeholder="*********"
                name="password"
                value={password}
                onChangeText={password => this.setState({password: password})}
                style={styles.inputControl}
                secureTextEntry
              />
            </View>
            <View style={styles.formAction}>
              <TouchableOpacity onPress={this.Login} style={styles.btn}>
                <Text style={styles.btnText}>Get Started</Text>
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
            this.props.navigation.navigate('Register');
          }}>
          <Text style={styles.formFooter}>
            Nie posiadasz jeszcze konta?{' '}
            <Text style={{textDecorationLine: 'underline', color: 'blue'}}>
              Sign in
            </Text>
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, {login})(Login);
