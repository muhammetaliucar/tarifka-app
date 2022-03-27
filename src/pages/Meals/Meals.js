import { SafeAreaView, Text, FlatList } from "react-native";
import styles from "./Meals.style";
import axios from "axios";
import React, { useEffect, useState } from "react";
import MealsCard from "../../components/MealsCard/MealsCard";

const Meals = ({ navigation, route }) => {
  const name = route.params;
  console.log(name);
  const [data1, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
      .then((response) => setData(response.data.meals));
  }, []);

  function handleDetailSelect(ide) {
    navigation.navigate("Detail", ide);
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data1}
          keyExtractor={(item) => item.idMeal}
          renderItem={(item) => (
            <MealsCard
              dataName={item}
              onSelect={() => handleDetailSelect(item.item.idMeal)}
            />
          )}
        />
      </SafeAreaView>
    </>
  );
};

export default Meals;
