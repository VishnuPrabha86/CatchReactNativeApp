import React from 'react';
import {Text, View } from 'react-native';
import {Icon} from 'native-base';
import styles from '../Style/Style';

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerLeft: <Icon name="ios-menu-outline" style={{paddingLeft:10}}
        onPress={() => this.props.navigation.openDrawer()}
        />,
        title: "Catch of the day",
        headerRight: <Icon name= "ios-send-outline" style={{paddingRight:10}} />
    }
    render () {
        return (

            <View style={styles.container}>
            <Text> I am LoginScreen </Text>
            {/* <Text style={styles.linky}
            onPress={() => this.props.navigation.navigate('signupScreen')} >
            Go to Sign Up 
            </Text>
            <Text style={styles.linky}
            onPress={() => this.props.navigation.navigate('forgottenPasswordScreen')}>
            </Text>
            <Text style={styles.linky}
            onPress={() => this.props.navigation.navigate('drawerStack')}>
            Pretend we logged import {  } from "</Text> */}

            </View>
        )
    }
}
