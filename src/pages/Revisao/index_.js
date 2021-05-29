import React, {useState, useEffect} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Revisao = () => {
    const [count, setCount] = useState(0)

    const contar = () => {
        setCount(count => count + 1);
    }

    useEffect(() => {
      setInterval(() => {
        contar();
      }, 1000);
    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.label}>{count}</Text>
            <Button title="Contador" onPress={contar}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    label: {
        fontSize: 22,
        alignSelf: 'center',
        padding: 5
    }
});

export default Revisao;

