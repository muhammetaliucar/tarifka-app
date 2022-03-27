import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./CategoriesCard.style";

const CategoriesCard = ({ catName, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          source={{ uri: catName.strCategoryThumb }}
          style={styles.image}
        />
        <View style={styles.catText}>
          <Text style={{ fontSize: 18 }}>{catName.strCategory}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CategoriesCard;
