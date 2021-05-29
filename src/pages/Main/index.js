import React from 'react';

//importações especificas dos componentes que vou usar visualmente
import {View, Button, StyleSheet} from 'react-native';


import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import {saveEntry} from '../../services/Entries';

//meu componente tem mesmo nome do diretorio
const Main = ({navigation}) => {
    //informaçao para ser passada como props para componentes filhos
    const currentBalance = 2064.35;

    //() => navigation.navigate('NewEntry')

    const save = () => {
      saveEntry();
    }

    const entriesGrouped = [
       {key: '1', description: 'Alimentação', amount:201},
       {key: '2', description: 'Combustível', amount:12},
       {key: '3', description: 'Aluguel', amount:120},
       {key: '4', description: 'Lazer', amount:250},
       {key: '5', description: 'Outros', amount:1200},     
    ]

    const entries = [
        {key:'1', description: 'Padaria Asa Branca', amount: 10},
        {key:'2', description: 'Supermercado Isadora', amount:190},
        {key:'3', description: 'Posto Ipiranga', amount: 291},
    ];



   
    //função de renderizacao do jsx
    return (
        <View style={styles.container}>
           <BalancePanel currentBalance={currentBalance}/>
           {/* Uso a props navigation para usar metodo navigate passando Page (rota)  */}
           <Button title='Adicionar' 
           onPress={save}/>
           <EntrySummary entriesGrouped={entriesGrouped}/>
           <EntryList entries={entries} />
       </View>
    );
};

//folhas de estilo
const styles = StyleSheet.create({
   container: {
       flex: 1,
       padding: 10,
   }
});

//exportação
export default Main;
