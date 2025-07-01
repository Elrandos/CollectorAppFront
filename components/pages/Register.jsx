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
import {register} from '../actions/auth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/RegisterStyles';
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
    if (this.state.password == this.state.password_check) {
      this.props.register(
        this.state.email,
        this.state.login,
        this.state.password,
      );
    }
  };
  render() {
    const {email, password, password_check, login} = this.state;

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#e8ecf4'}}>
        <View style={styles.container}>         
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, {register})(Register);
