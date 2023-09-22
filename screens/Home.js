import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Button } from '@rneui/themed';

export default function Home({ navigation }) {
    const [number, setNumber] = useState(1)
    const [color, setColor] = useState('secondary')

    const check = () => {
        if (number == 1) {
            console.log('one')
            setColor('warning')
        } else if (number == 2) {
            console.log('two')
            setColor('error')
        } else if (number == 3) {
            navigation.push('About')
        }

        setNumber(number + 1)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
            // onPress={() => check()}
            // style={
            //     number === 1 ? styles.btnBlue :
            //         number === 2 ? styles.btnRed :
            //             styles.btnGreen
            // }
            >
                <Button
                    onPress={() => check()}
                    color={color}>Click Me</Button>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // btnBlue: {
    //     alignItems: 'center',
    //     backgroundColor: '#63c6da',
    //     borderColor: '#63c5da',
    //     borderRadius: 10,
    //     borderWidth: 1,
    //     padding: 10
    // },
    // btnRed: {
    //     alignItems: 'center',
    //     backgroundColor: '#800000',
    //     borderColor: '#800000',
    //     borderRadius: 10,
    //     borderWidth: 1,
    //     padding: 10
    // },
    // btnGreen: {
    //     alignItems: 'center',
    //     backgroundColor: '#00563b',
    //     borderColor: '#00563b',
    //     borderRadius: 10,
    //     borderWidth: 1,
    //     padding: 10
    // },
});
