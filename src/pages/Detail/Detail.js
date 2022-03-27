import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import styles from "./Detail.style";
import axios from "axios";

const Detail = ({ route }) => {
  const id = route.params;
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => setData(response.data.meals[0]));
    console.log(data.strMealThumb);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: data.strMealThumb }}
        style={{ height: Dimensions.get("screen").height * 0.5 }}
      />
      <View style={{ borderBottomWidth: 1, borderColor: "gray" }}>
        <Text style={{ color: "#b14b4b", fontSize: 22, marginTop: 5 }}>
          {data.strMeal}
        </Text>
        <Text style={{ color: "#b14b4b", fontSize: 16, marginTop: 2 }}>
          {data.strArea}
        </Text>
      </View>
      <View style={{ margin: 7 }}>
        <Text>{data.strInstructions}</Text>
      </View>
      <TouchableOpacity onPress={() => Linking.openURL(data.strYoutube)}>
        <View
          style={{
            height: Dimensions.get("window").height * 0.07,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "red",
            margin: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white" }}>Watch On Youtube</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Detail;
