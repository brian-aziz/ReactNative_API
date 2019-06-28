import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import { WebView } from "react-native-webview";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      detail: {}
    };
  }

  async componentDidMount() {
    try {
      const response = await axios.get(
        "http://doc.greatworks.id/api/latihan/news/detail/" +
          this.props.navigation.state.params.NewsID
      );
      console.warn(response);
      this.setState({ detail: response.data.data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.detail.title && (
          <View>
            <Image
              style={styles.banner}
              source={{ uri: this.state.detail.image }}
            />
            <View style={styles.banner_text}>
              <Text style={styles.banner_text_style}>
                {this.state.detail.title}
              </Text>
              <Text style={styles.banner_text_style_posted}>
                {this.state.detail.post_date}
              </Text>
            </View>
            <WebView
              style={{ width: "100%", height: 300 }}
              scalesPageToFit={false}
              source={{
                html: this.state.detail.content
              }}
            />
          </View>
        )}
        {!this.state.detail.title && (
          <ActivityIndicator color="black" size="large" />
        )}
      </ScrollView>
    );
  }
}

Form.navigationOptions = () => ({});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white"
  },
  banner: {
    width: "100%",
    height: 200
  },
  banner_text: {
    position: "absolute",
    top: 100,
    left: 30
  },
  banner_text_style: {
    color: "white",
    fontSize: 25
  },
  banner_text_style_posted: {
    color: "grey",
    fontSize: 12
  }
});
