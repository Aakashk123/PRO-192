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

export default class TrexScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.backgroundImage}
                    source={require('../assets/background.png')}>

                    <Text style={styles.titleText}> About Trex Game </Text>

                    <View>
                        <Text style={styles.para}>
                            The game was created by members of the Chrome UX team in 2014, which consisted of Sebastien Gabriel, Alan Bettes, and Edward Jung. Gabriel designed the player character, named the "Lonely T-Rex". During development, the game was given the codename "Project Bolan", in reference to Marc Bolan, the lead singer of the T.
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
