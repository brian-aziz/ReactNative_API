import React, { Component } from "react";
import { ScrollView, View, Text, Image, ActivityIndicator } from "react-native";
import axios from "axios";
import { WebView } from "react-native-webview";

export default class ApiDetail extends Component {
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
      <ScrollView>
        {this.state.detail.title && (
          <View>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: this.state.detail.image }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {this.state.detail.title}
            </Text>
            <Text style={{ fontSize: 12 }}>{this.state.detail.post_date}</Text>
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
