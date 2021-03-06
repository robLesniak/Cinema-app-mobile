import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { withNavigation } from "react-navigation";
import firebase from "../config/firebase";

class SignUpForm extends Component {
  constructor() {
    super();
    state = {
      email: "",
      password: ""
    };
  }

  SignUp = (email, password) => {
    try {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {});
    } catch (error) {
      console.log(error);
    }
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <View style={StyleSheet.container}>
      <Image
          style={{ marginLeft: 10, marginBottom:10}}
          source={require("../images/cinema1.png")}
        />
        {/* <TextInput
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
        /> */}
        <TextInput
          placeholder="email"
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
        {/* <TextInput
          placeholder="repeat password"
          autoCapitalize="none"
          secureTextEntry={true}
          returnKeyType="go"
          ref={input => (this.repeatPasswordInput = input)}
          style={styles.input}
          onChangeText={repeatpassword => this.setState({ repeatpassword })}
        /> */}
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.SignUp(this.state.email, this.state.password)}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor : "#7FDBFF"
  },
  input: {
    height: 50,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "rgba(192,192,192,0.5)",
    marginBottom: 15,
    marginLeft : 50,
    marginRight : 50,
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
  },
  buttonContainer: {
    backgroundColor: "#0051a5",
    paddingVertical: 15,
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    borderWidth: 0,
    borderColor: "transparent",
    borderRadius: 12,
    padding: 90
  },
  buttonText: {
    textAlign: "center",
    color: "black",
    fontSize: 20
  }
});

export default withNavigation(SignUpForm);
