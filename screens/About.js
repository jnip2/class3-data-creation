import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import { useState } from 'react';
import { bookStore } from '../data/book'
import { Text, Card } from '@rneui/themed'


export default function About({ navigation }) {
    const [data, setData] = useState()

    const addingData = () => {
        setData(bookStore)
    }


    return (
        <View style={styles.container}>
            <Text style={styles.h1} h1>Welcome to the dashboard</Text>
            <Button title='show data' onPress={() => addingData()} />
            {
                data && data.books.map((b, index) => {
                    if (b.category.toLowerCase() == 'java') {
                        return (
                            <View key={index}>
                                <Card>
                                <Text style={styles.h2} h2>{b.title}</Text>
                                {
                                    b.authors && b.authors.map((a, ind) => {
                                        return (
                                            <View key={ind}>
                                                <Text style={styles.h3} h3>{a}</Text>
                                            </View>
                                        )
                                    })
                                }
                                </Card>
                                
                            </View>
                        )
                    }
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    h1: {
        textAlign: 'center'
    },
    h2: {
        color: 'blue'
    },
    h3: {
        color: '#aaaaaa'
    },
    h1Style: {
        fontFamily: 'Nunito-SemiBold',
        fontWeight: '300',
    },
    h2Style: {
        fontFamily: 'Nunito-Regular',
        fontWeight: '100',
    },
    h3Style: {
        fontFamily: 'Nunito-Bold',
        fontWeight: '500',
    },
});
