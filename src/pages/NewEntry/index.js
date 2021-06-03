import React, {useState} from 'react'
import { View,  TextInput , Button, StyleSheet} from 'react-native'


import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
  
    const currentBalance = 2065.35;

    const [amount, setAmount] = useState('0.00');

    const save = () => {
      const value = {
          amount: parseFloat(amount),
      };
      
    
      console.log('NewEntry :: save ', value);
      saveEntry(value);
    }


    return (
        <View style={styles.container}>
            <BalanceLabel currentBalance={currentBalance}/>
            <View>
              <TextInput style={styles.input}
               onChangeText={text => setAmount(text)} //coloca o valor do campo no primeiro text e passa para setEntry
               value={amount} //value é o state entry
              />
              <TextInput style={styles.input} />
              <Button title="GPS"/>
              <Button title="CAMERA"/>
            </View>
            <View>
              <Button title="Adicionar" onPress={save}/>
              <Button title="Cancelar"
               onPress={() => navigation.goBack()}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
    }
});


export default NewEntry;
