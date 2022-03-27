import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    width: Dimensions.get("window").width * 0.95,
    margin: 10,
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  image: {
    marginLeft: 10,
    height: Dimensions.get("window").width * 0.25,
    width: Dimensions.get("window").height * 0.2,
    borderRadius: 50,
  },
  catText: {
    justifyContent: "center",
    marginLeft: 10,
  },
});
