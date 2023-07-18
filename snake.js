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

export default class SnakeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImage}
                    source={require('../assets/background.png')}>

                    <Text style={styles.titleText}> About Snake Game </Text>

                    <View>
                        <Text style={styles.para}>
                            It originated in the 1976 two-player arcade video game Blockade from Gremlin Industries where the goal is to survive longer than the other player. The concept evolved into a single-player variant where a snake gets longer with each piece of food eaten—often apples or eggs.
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
    para: {
        marginTop: 30,
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
    }
});
