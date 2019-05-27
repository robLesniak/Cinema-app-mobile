import React, { Component } from "react";
import { Text, View, TextInput, StyleSheet, CheckBox } from "react-native";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    state = {
      username: "",
      email: "",
      password: "",
      repeatpassword: ""
    };
  }
  render() {
    return (
      <View style={StyleSheet.container}>
        <TextInput
          placeholder="username"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="default"
          style={styles.input}
          onSubmitEditing={() => {
            this.emailInput.focus();
          }}
          onChangeText={username => this.setState({ username })}
          blurOnSubmit={false}
        />
        <TextInput
          placeholder="e-mail"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
          keyboardType="email-address"
          style={styles.input}
          ref={input => {
            this.emailInput = input;
          }}
          onSubmitEditing={() => this.passwordInput.focus()}
          onChangeText={email => this.setState({ email })}
          blurOnSubmit={false}
        />
        <TextInput
          placeholder="password"
          autoCapitalize="none"
          secureTextEntry={true}
          returnKeyType="next"
          ref={input => (this.passwordInput = input)}
          style={styles.input}
          onSubmitEditing={() => this.repeatPasswordInput.focus()}
          onChangeText={password => this.setState({ password })}
          blurOnSubmit={false}
        />
        <TextInput
          placeholder="repeat password"
          autoCapitalize="none"
          secureTextEntry={true}
          returnKeyType="go"
          ref={input => (this.repeatPasswordInput = input)}
          style={styles.input}
          onChangeText={repeatpassword => this.setState({ repeatpassword })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 50,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 15,
    color: "black",
    paddingHorizontal: 10
  },
  textIn: {
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(255,255,255,0.2)",
    marginBottom: 15,
    color: "white",
    paddingHorizontal: 10,
    opacity: 0.3
  }
});
