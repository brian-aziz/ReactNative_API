import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";

export default class NewsItem extends Component {
  render() {
    return (
      <TouchableOpacity
        //efek klik
        // activeOpacity={1}
        onPress={this.props.onPress}
        style={styles.news}
      >
        <Image style={styles.news_images} source={this.props.icon} />
        <Text style={styles.news_text}>{this.props.label}</Text>
        <Text style={styles.news_text_posted}>{this.props.posted}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  news_images: {
    width: "100%",
    height: 100
  },
  news: {
    width: "46%",
    backgroundColor: "white",
    padding: 5,
    margin: "2%",
    elevation: 4,
    borderRadius: 10
  },
  news_text: {
    color: "#1E5985",
    fontSize: 9,
    fontWeight: "bold",
    marginTop: 7,
    marginLeft: 10
  },
  news_text_posted: {
    color: "#1E5985",
    fontSize: 7,
    fontWeight: "bold",
    marginTop: 2,
    marginLeft: 10
  }
});
