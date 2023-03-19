import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Stylebutton from "../../Components/Stylebutton/Index"
import styles from "./styles";

const CarItem = (props) => {

  const { name, tagline, image, taglineCTA } = props.car;

  return (
    <View style={styles.carcontainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}> {name}</Text>
        <Text style={styles.subtitle}> {tagline}
          {/* &nbsp;   */}
          {' '}


          <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>

      </View>

      {/* <<<<<<<<<<<<<<<<<<,,,BUTTON >>>>>>>>>>>>>>>>>>>>>.  */}

      <View style={styles.buttonscontainer}>


        <Stylebutton
          type="primary"
          content={"custom order"}
          onPress={() => {
            console.warn(" Custom button is pressed");
          }} />

        <Stylebutton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => {
            console.warn(" Inventory button is pressed");


          }} />
      </View>
    </View>
  );
};

export default CarItem;
