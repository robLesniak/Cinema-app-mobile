import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import firebase from "../../config/firebase";
import { getTheme } from "react-native-material-kit";
import { withNavigation } from "react-navigation";

class MovieDashboard extends Component {
  constructor() {
    super();
    this.state = {
      movies: null,
      visible: false,
      movieId: null,
      uids: null
    };
  }

  componentDidMount() {
    const markers = [];
    const uids2 = [];
    firebase
      .firestore()
      .collection("films")
      .get()
      .then(querySnapshot => {
        console.log(querySnapshot);
        querySnapshot.docs.forEach(doc => {
          markers.push(doc.data());
        });
        this.setState({ movies: markers });
        this.setState({ uids: uids2 });
      });
  }

  render() {
    const theme = getTheme();

    return (
      <View
        style={{
          alignItems: "center",
          marginTop: 5,
          borderRadius: 20,
          marginLeft: 2,
          marginRight: 2,
          backgroundColor:"#F5F5F5" 
        }}
      >
        <ScrollView style={{ marginBottom: 5 }}>
          {this.state.movies == null ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color:"black"
                  }}
                >
                  {this.state.movies[0].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[0].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                  Genre: <Text style={{fontWeight:"normal"}} >{this.state.movies[0].type}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                Plot: <Text style={{fontWeight:"normal"}} >{this.state.movies[0].plot}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold"}}>
                  Director:<Text style={{fontWeight:"normal"}} >{this.state.movies[0].director}</Text> 
                </Text>
                <Text style={{ textAlign: "center" , color:"black", fontWeight:"bold" }}>
                Actors: <Text style={{fontWeight:"normal"}} >{this.state.movies[0].actors}</Text>
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0051a5",
                    paddingVertical: 15,
                    marginBottom: 5,
                    marginTop: 5,
                    marginLeft: 50,
                    marginRight: 50,
                    borderWidth: 0,
                    borderColor: "transparent",
                    borderRadius: 12,
                    padding: 20
                  }}
                  onPress={() => this.props.navigation.navigate("Movie0Av")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color:"black"
                  }}
                >
                  {this.state.movies[1].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[1].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
            <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                  Genre: <Text style={{fontWeight:"normal"}} >{this.state.movies[1].type}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                Plot: <Text style={{fontWeight:"normal"}} >{this.state.movies[1].plot}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold"}}>
                  Director:<Text style={{fontWeight:"normal"}} >{this.state.movies[1].director}</Text> 
                </Text>
                <Text style={{ textAlign: "center" , color:"black", fontWeight:"bold" }}>
                Actors: <Text style={{fontWeight:"normal"}} >{this.state.movies[1].actors}</Text>
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0051a5",
                    paddingVertical: 15,
                    marginBottom: 5,
                    marginTop: 5,
                    marginLeft: 50,
                    marginRight: 50,
                    borderWidth: 0,
                    borderColor: "transparent",
                    borderRadius: 12,
                    padding: 20
                  }}
                  onPress={() => this.props.navigation.navigate("Movie1Av")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color:"black"
                  }}
                >
                  {this.state.movies[2].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[2].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
      <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                  Genre: <Text style={{fontWeight:"normal"}} >{this.state.movies[2].type}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                Plot: <Text style={{fontWeight:"normal"}} >{this.state.movies[2].plot}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold"}}>
                  Director:<Text style={{fontWeight:"normal"}} >{this.state.movies[2].director}</Text> 
                </Text>
                <Text style={{ textAlign: "center" , color:"black", fontWeight:"bold" }}>
                Actors: <Text style={{fontWeight:"normal"}} >{this.state.movies[2].actors}</Text>
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0051a5",
                    paddingVertical: 15,
                    marginBottom: 5,
                    marginTop: 5,
                    marginLeft: 50,
                    marginRight: 50,
                    borderWidth: 0,
                    borderColor: "transparent",
                    borderRadius: 12,
                    padding: 20
                  }}
                  onPress={() => this.props.navigation.navigate("Movie2Av")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color:"black"
                  }}
                >
                  {this.state.movies[3].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[3].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
      <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                  Genre: <Text style={{fontWeight:"normal"}} >{this.state.movies[3].type}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                Plot: <Text style={{fontWeight:"normal"}} >{this.state.movies[3].plot}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold"}}>
                  Director:<Text style={{fontWeight:"normal"}} >{this.state.movies[3].director}</Text> 
                </Text>
                <Text style={{ textAlign: "center" , color:"black", fontWeight:"bold" }}>
                Actors: <Text style={{fontWeight:"normal"}} >{this.state.movies[3].actors}</Text>
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0051a5",
                    paddingVertical: 15,
                    marginBottom: 5,
                    marginTop: 5,
                    marginLeft: 50,
                    marginRight: 50,
                    borderWidth: 0,
                    borderColor: "transparent",
                    borderRadius: 12,
                    padding: 20
                  }}
                  onPress={() => this.props.navigation.navigate("Movie3Av")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color:"black"
                  }}
                >
                  {this.state.movies[4].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[4].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
      <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                  Genre: <Text style={{fontWeight:"normal"}} >{this.state.movies[4].type}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                Plot: <Text style={{fontWeight:"normal"}} >{this.state.movies[4].plot}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold"}}>
                  Director:<Text style={{fontWeight:"normal"}} >{this.state.movies[4].director}</Text> 
                </Text>
                <Text style={{ textAlign: "center" , color:"black", fontWeight:"bold" }}>
                Actors: <Text style={{fontWeight:"normal"}} >{this.state.movies[4].actors}</Text>
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0051a5",
                    paddingVertical: 15,
                    marginBottom: 5,
                    marginTop: 5,
                    marginLeft: 50,
                    marginRight: 50,
                    borderWidth: 0,
                    borderColor: "transparent",
                    borderRadius: 12,
                    padding: 20
                  }}
                  onPress={() => this.props.navigation.navigate("Movie4Av")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color:"black"
                  }}
                >
                  {this.state.movies[5].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[5].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
      <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                  Genre: <Text style={{fontWeight:"normal"}} >{this.state.movies[5].type}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                Plot: <Text style={{fontWeight:"normal"}} >{this.state.movies[5].plot}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold"}}>
                  Director:<Text style={{fontWeight:"normal"}} >{this.state.movies[5].director}</Text> 
                </Text>
                <Text style={{ textAlign: "center" , color:"black", fontWeight:"bold" }}>
                Actors: <Text style={{fontWeight:"normal"}} >{this.state.movies[5].actors}</Text>
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0051a5",
                    paddingVertical: 15,
                    marginBottom: 5,
                    marginTop: 5,
                    marginLeft: 50,
                    marginRight: 50,
                    borderWidth: 0,
                    borderColor: "transparent",
                    borderRadius: 12,
                    padding: 20
                  }}
                  onPress={() => this.props.navigation.navigate("Movie5Av")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color:"black"
                  }}
                >
                  {this.state.movies[6].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[6].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
      <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                  Genre: <Text style={{fontWeight:"normal"}} >{this.state.movies[6].type}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                Plot: <Text style={{fontWeight:"normal"}} >{this.state.movies[6].plot}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold"}}>
                  Director:<Text style={{fontWeight:"normal"}} >{this.state.movies[6].director}</Text> 
                </Text>
                <Text style={{ textAlign: "center" , color:"black", fontWeight:"bold" }}>
                Actors: <Text style={{fontWeight:"normal"}} >{this.state.movies[6].actors}</Text>
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0051a5",
                    paddingVertical: 15,
                    marginBottom: 5,
                    marginTop: 5,
                    marginLeft: 50,
                    marginRight: 50,
                    borderWidth: 0,
                    borderColor: "transparent",
                    borderRadius: 12,
                    padding: 20
                  }}
                  onPress={() => this.props.navigation.navigate("Movie6Av")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color:"black"
                  }}
                >
                  {this.state.movies[7].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[7].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
      <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                  Genre: <Text style={{fontWeight:"normal"}} >{this.state.movies[7].type}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                Plot: <Text style={{fontWeight:"normal"}} >{this.state.movies[7].plot}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold"}}>
                  Director:<Text style={{fontWeight:"normal"}} >{this.state.movies[7].director}</Text> 
                </Text>
                <Text style={{ textAlign: "center" , color:"black", fontWeight:"bold" }}>
                Actors: <Text style={{fontWeight:"normal"}} >{this.state.movies[7].actors}</Text>
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0051a5",
                    paddingVertical: 15,
                    marginBottom: 5,
                    marginTop: 5,
                    marginLeft: 50,
                    marginRight: 50,
                    borderWidth: 0,
                    borderColor: "transparent",
                    borderRadius: 12,
                    padding: 20
                  }}
                  onPress={() => this.props.navigation.navigate("Movie7Av")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color:"black"
                  }}
                >
                  {this.state.movies[8].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[8].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
      <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                  Genre: <Text style={{fontWeight:"normal"}} >{this.state.movies[8].type}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                Plot: <Text style={{fontWeight:"normal"}} >{this.state.movies[8].plot}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold"}}>
                  Director:<Text style={{fontWeight:"normal"}} >{this.state.movies[8].director}</Text> 
                </Text>
                <Text style={{ textAlign: "center" , color:"black", fontWeight:"bold" }}>
                Actors: <Text style={{fontWeight:"normal"}} >{this.state.movies[8].actors}</Text>
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0051a5",
                    paddingVertical: 15,
                    marginBottom: 5,
                    marginTop: 5,
                    marginLeft: 50,
                    marginRight: 50,
                    borderWidth: 0,
                    borderColor: "transparent",
                    borderRadius: 12,
                    padding: 20
                  }}
                  onPress={() => this.props.navigation.navigate("Movie8Av")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie avaiability
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  alignItems: "center",
                  marginTop: 5,
                  borderStyle: "solid",
                  borderWidth: 2,
                  borderRadius: 20,
                  marginLeft: 2,
                  marginRight: 2,
                  borderColor: "black"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 25,
                    fontWeight: "bold",
                    color:"black"
                  }}
                >
                  {this.state.movies[9].title}
                </Text>
                <Image
                  source={{ uri: this.state.movies[9].image }}
                  style={{
                    width: 200,
                    height: 270,
                    alignContent: "center",
                    justifyContent: "center",
                    marginTop: 2,
                    borderRadius: 10
                  }}
                />
      <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                  Genre: <Text style={{fontWeight:"normal"}} >{this.state.movies[9].type}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold" }}>
                Plot: <Text style={{fontWeight:"normal"}} >{this.state.movies[9].plot}</Text>
                </Text>
                <Text style={{ textAlign: "center", color:"black", fontWeight:"bold"}}>
                  Director:<Text style={{fontWeight:"normal"}} >{this.state.movies[9].director}</Text> 
                </Text>
                <Text style={{ textAlign: "center" , color:"black", fontWeight:"bold" }}>
                Actors: <Text style={{fontWeight:"normal"}} >{this.state.movies[9].actors}</Text>
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#0051a5",
                    paddingVertical: 15,
                    marginBottom: 5,
                    marginTop: 5,
                    marginLeft: 50,
                    marginRight: 50,
                    borderWidth: 0,
                    borderColor: "transparent",
                    borderRadius: 12,
                    padding: 20
                  }}
                  onPress={() => this.props.navigation.navigate("Movie9Av")}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      color: "white"
                    }}
                  >
                    Movie Avaiability
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(MovieDashboard);
