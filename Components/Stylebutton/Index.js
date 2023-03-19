import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";


const Stylebutton = (props) => {

    // const type=props.type
    // const content=props.content
    // const onpress=props.onpress

    const { type, content, onPress } = props;


    // console.warn(type);

    const backgroundColor = type === "primary" ? 'black' : 'black';
    const textColor = type === "primary" ? 'white' : 'white';
    return (

        <View style={styles.container}>


            <Pressable
                style={[styles.button, { backgroundColor: backgroundColor }]}
                onPress={() => onPress()}>

                <Text style={[styles.text, { color: textColor }]}> {content}</Text>




            </Pressable>
        </View>

    );
};

export default Stylebutton;