import { StyleSheet, Dimensions, deviceSize } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    width: Dimensions.get("window").width / 1.1,
    height: Dimensions.get("window").height / 4,
    resizeMode: "cover",
    flexDirection: "column-reverse",
  },

  titleContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  title: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "right",
    paddingRight: 5,
  },
});
