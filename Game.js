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

export default class GameScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImage}
                    source={require('../assets/bg.jpg')}>
                    <Text style={styles.titleText}> Games Home </Text>

                    <View style={{ alignItems: 'center' }}>

                        <View style={{ marginTop: 50 }} >
                            <TouchableOpacity
                                onPress={this.props.navigation.navigate("Trex")}
                            >
                                <Image
                                    style={styles.backgroundImage}
                                    source={require('../assets/trexgame.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    Linking.openURL('https://trex-runner.com/');
                                }}>
                                <Text style={styles.buttonText}>Trex Game!!</Text>
                            </TouchableOpacity>
                        </View>



                        <View style={{ marginTop: 50 }}>
                            <TouchableOpacity onPress={this.props.navigation.navigate("Pacman")}>
                                <Image
                                    style={styles.backgroundImage}
                                    source={require('../assets/pacman.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => {
                                    Linking.openURL('https://www.google.com/search?q=pacman&rlz=1C1CHBF_en-GBGB992GB992&oq=pacman&aqs=chrome.0.0i271j46i67i409i424i433i650j0i67i650l4j46i67i340i419i424i650j0i67i650l2j0i271.1244j0j7&sourceid=chrome&ie=UTF-8#cobssid=s');
                                }}
                            >
                                <Text style={styles.buttonText}>Pacman!</Text>
                            </TouchableOpacity>
                        </View>



                        <View style={{ marginTop: 50 }}>
                            <TouchableOpacity
                                onPress={this.props.navigation.navigate("Snake")}
                            >
                                <Image
                                    style={styles.backgroundImage}
                                    source={require('../assets/snakegame.jpg')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}
                                onPress={() => {
                                    Linking.openURL('https://snake.io/');
                                }}
                            >
                                <Text style={styles.buttonText}>Snake Game!</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={{ marginTop: 50 }} >
                            <TouchableOpacity
                                onPress={this.props.navigation.navigate("EV")}
                            >
                                <Image
                                    style={styles.backgroundImage}
                                    source={require('../assets/ev-io.png')}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    Linking.openURL('https://ev.io/');
                                }}>
                                <Text style={styles.buttonText}>EV.io !!</Text>
                            </TouchableOpacity>
                        </View>


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
});
