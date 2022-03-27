import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./Meals.style";
const MealsCard = ({ dataName, onSelect }) => {
  console.log(dataName);
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={{ margin: 10, flex: 1, alignItems: "center" }}>
        <ImageBackground
          source={{ uri: dataName.item.strMealThumb }}
          style={{
            width: Dimensions.get("window").width * 0.9,
            height: Dimensions.get("window").width * 0.6,
            flexDirection: "column-reverse",
          }}
          imageStyle={{ borderRadius: 10 }}
        >
          <View
            style={{
              flex: 0.1,
              alignItems: "flex-end",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              borderBottomLeftRadius: 10,
              borderBottomRightRadius: 10,
              padding: 10,
            }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              {dataName.item.strMeal}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default MealsCard;
