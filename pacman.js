import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Alert,
    FlatList,
    Image,
    ImageBackground,
    TouchableOpacity,
    Dimensions,
    Linking,
} from 'react-native';

export default class PacmanScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImage}
                    source={require('../assets/background.png')}>

                    <Text style={styles.titleText}> About Pacman Game </Text>

                    <View>
                        <Text style={styles.para}>
                            While drawing up ideas for a game based around food, Iwatani grabbed a slice of pizza from a box and had an epiphany: The remaining pizza slices formed Pac-Man's shape, and the rest was history (or so the story goes, according to Iwatani). Game designer named Toru Iwatani created "Pac-Man" in 1980.
                        </Text>
                    </View>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    titleText: {
        margin: 24,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        marginTop: 30,
        width: 150,
        height: 60,
        borderRadius: 40,
        backgroundColor: '#FFB6C1',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        fontFamily: 'algerian',
        color: 'black',
        textAlign: 'center',
    },
    para:{
        marginTop: 30,
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    }
});
