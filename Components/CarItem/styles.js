import { StyleSheet, Dimensions } from "react-native";
const styles = StyleSheet.create({

  carcontainer: {
    width: "100%",
    height: Dimensions.get('window').height,
  },

  titles: {
    marginTop: 80,
    width: "100%",
    alignItems: "center"
  },

  title: {
    fontSize: 40,
    fontWeight: "500",

  },

  subtitle: {
    fontSize: 16,
    color: "black"
  },

  subtitleCTA: {
    textDecorationLine: "underline",


  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    position: "absolute",

  },

  buttonscontainer: {

    position: "absolute",
    bottom: 50,
    width: "100%"

  },







});



export default styles;