import React from 'react';
import {Text, View} from 'react-native';

function Exemple1() {
    const stylegreen = {color: 'green'}

    return (
        <View>
            <Text style={{color: 'blue'}}>
                Je suis le composant d'exemple
            </Text>
            <Text style={stylegreen}>
                Je suis le composant d'exemple
            </Text>
        </View>
    )
        ;
};

export default Exemple1;

