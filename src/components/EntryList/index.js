import React, {useEffect, useState} from 'react'
import { View, Text, Button, FlatList, StyleSheet } from 'react-native'

import EntryListItem from './EntryListItem';
import {getEntries} from '../../services/Entries';

const EntryList = ({navigation}) => {

    [entries, setEntries] = useState([]);

    useEffect(()  =>  {
     async function loadEntries() { //tem que ser async pois preciso que 
        const data = await getEntries(); //aguarde para executar getEntries
        setEntries(data);                 // e dentro de getEntries tbm existe await
     }

     loadEntries();

     console.log('EntryList :: useEffect');
    }, []);



    return (
        <View>
        <Text style={styles.title}>Últimos Lançamentos</Text>
        <FlatList
            data={entries}
            renderItem={({ item }) => (
                <View>
                    <Text>
                    - {item.description} - ${item.amount}
                    </Text>
                    <Button title={item.id} 
                    onPress={() => {
                        navigation.navigate('NewEntry', {entry: item});
                    }}
                    />
                </View>
            )}
        ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       // flex: 1,
    },
    title: {
        fontSize: 22, 
        fontWeight:'bold',
        marginTop: 10,
        marginBottom: 10
    }
});

export default EntryList;
