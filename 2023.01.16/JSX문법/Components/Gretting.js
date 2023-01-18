import React from 'react';
import {Text, View} from "react-native";

function Gretting(props) {
    return (
        <View>
            <Text>안녕하세요! {props.name}님</Text>
        </View>
    );
}

Gretting.defaultProps = {
    name : '으니',
}

export default Gretting;
