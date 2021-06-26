import React, {useState} from 'react'
import { View,  TextInput , Button, StyleSheet} from 'react-native'


import BalanceLabel from '../../components/BalanceLabel';

import {saveEntry} from '../../services/Entries';
import {deleteEntry} from '../../services/Entries';

const NewEntry = ({navigation}) => {
  
    const currentBalance = 2065.35;


    //recupera o valor que veio pela navegação, caso seja nulo pega segundo parametro objeto
    const entry = navigation.getParam('entry', {
       id: null,
       amount: '0.00',
       entryAt: new Date(), 
    });


    const [amount, setAmount] = useState(`${entry.amount}`);

    //função de validação 
    const isValid = () => {
      if (parseFloat(amount) !== 0) {
        return true;                
      } 

      return false;
    };

    const onSave = () => {
      const data = {
          amount: parseFloat(amount),
      };
      
      console.log('NewEntry :: save ', data);
      saveEntry(data, entry);
      onClose();
    };

    const onDelete = () => {
      deleteEntry(entry); //esse entry vem da navegação
      onClose();
    };

    const onClose = () => {
        navigation.goBack();
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
              <Button title="Adicionar" 
                onPress={() => {
                  isValid() && onSave(); //ambos precisam ser true
                }}/>
              <Button title="Excluir" onPress={onDelete}/>
              <Button title="Cancelar"onPress={onClose}/>
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
