import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

import NewsItem from "../components/NewsItem.js";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: []
    };
  }
  async componentDidMount() {
    try {
      const response = await axios.get(
        "http://doc.greatworks.id/api/latihan/news/list"
      );
      this.setState({ news: response.data.data });
    } catch (error) {
      console.error("Aplikasi error");
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.box}>
          <View style={styles.judul}>
            <Text style={styles.judul_text}>Your EveryDay</Text>
            <Text style={styles.judul_text}>Inspiration</Text>
          </View>
          <Image
            style={styles.banner}
            source={require("../../assets/img/jacek-dylag-PMxT0XtQ--A-unsplash.png")}
          />
          <View style={styles.banner_text}>
            <Text style={styles.banner_text_style}>People doesn't know </Text>
            <Text style={styles.banner_text_style}>about Us </Text>
            <Text style={styles.banner_text_style_posted}>
              Posted by 26 June 2019
            </Text>
          </View>
          {this.state.news.length > 0 && (
            <View style={styles.news_list}>
              {this.state.news.map((item, index) => (
                <NewsItem
                  key={index}
                  label={item.title}
                  posted={item.post_date}
                  icon={{ uri: item.image }}
                  onPress={() =>
                    this.props.navigation.navigate("Detail", {
                      NewsID: item.id
                    })
                  }
                />
              ))}
            </View>
          )}
          {this.state.news.length <= 0 && (
            <ActivityIndicator color="black" size="large" />
          )}
        </View>
      </ScrollView>
    );
  }
}

Form.navigationOptions = () => ({
  header: null
});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "white"
  },
  box: {
    padding: 30
  },
  judul: {
    top: 10,
    height: 100
  },
  judul_text: {
    fontSize: 20,
    color: "black"
  },
  banner: {
    width: "100%",
    height: 200
  },
  banner_text: {
    position: "absolute",
    top: 230,
    left: 45
  },
  banner_text_style: {
    color: "white",
    fontSize: 25
  },
  banner_text_style_posted: {
    color: "grey",
    fontSize: 12
  },
  news_list: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
    justifyContent: "center",
    marginHorizontal: "-6%"
  }
});
