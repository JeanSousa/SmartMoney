import React from 'react'
import { View, Picker, Button, StyleSheet } from 'react-native'

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';



const Report = () => {
    return (
        <View style={styles.container}>    
           <BalanceLabel/>
           <View>
             <Picker>
                <Picker.Item label="Todas Categorias"></Picker.Item>
             </Picker>
             <Picker>
                <Picker.Item label="Últimos 7 dias"></Picker.Item>
             </Picker>
           </View>
           <EntrySummary/>
           <EntryList/>
           <View>
            <Button title="Salvar"/>
            <Button title="Fechar"/>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        padding: 10
    }
});

export default Report;
