import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import styles from "./Categories.style";

import axios from "axios";

const Categories = ({ navigation }) => {
  const [catNames, setCatNames] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => setCatNames(response.data.categories));
    setLoading(false);
  }, []);

  function handleMealSelect(ideCategory) {
    navigation.navigate("Meals", ideCategory);
  }

  if (loading === true) {
    return <Text>bekleyiniz..</Text>;
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <FlatList
            keyExtractor={(item) => item.idCategory}
            data={catNames}
            renderItem={({ item }) => (
              <CategoriesCard
                catName={item}
                onSelect={() => handleMealSelect(item.strCategory)}
                navigation={navigation}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
};

export default Categories;
