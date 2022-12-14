import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import MenuClass from "./components/MenuClass";
import MenuFonction from "./components/MenuFonction";
import Exemple1 from "./components/Exemple1";
import Exemple2 from "./components/Exemple2";

export default function App() {
    return (
        <View style={styles.container}>
            <Exemple2/>
            <Text style={styles.text}>Live 2 - Studi React Native</Text>
            <MenuClass/>
            <MenuFonction/>
            <Exemple1/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        marginTop: 100,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "red",
        fontSize: 20,
    }
});
