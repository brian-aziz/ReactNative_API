import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity
} from "react-native";
import axios from "axios";

export default class ApiList extends Component {
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
    console.warn(this.state.news);
    return (
      <ScrollView>
        {this.state.news.length > 0 && (
          <View>
            {/* <Text>{JSON.stringify(this.state.news)}</Text> */}
            {this.state.news.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  this.props.navigation.navigate("ApiDetail", {
                    NewsID: item.id
                  })
                }
                style={{ backgroundColor: "#ccc", marginBottom: 10 }}
              >
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{ uri: item.image }}
                />
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 12 }}>{item.post_date}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        {this.state.news.length <= 0 && (
          <ActivityIndicator color="black" size="large" />
        )}
      </ScrollView>
    );
  }
}

ApiList.navigationOptions = () => ({
  header: null
});
