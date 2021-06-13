import React from 'react';

//importações especificas dos componentes que vou usar visualmente
import {View, StyleSheet} from 'react-native';


import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';


//meu componente tem mesmo nome do diretorio
const Main = ({navigation}) => {


    const entriesGrouped = [
       {key: '1', description: 'Alimentação', amount:201},
       {key: '2', description: 'Combustível', amount:12},
       {key: '3', description: 'Aluguel', amount:120},
       {key: '4', description: 'Lazer', amount:250},
       {key: '5', description: 'Outros', amount:1200},     
    ]


    //função de renderizacao do jsx
    return (
        <View style={styles.container}>
           <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')}/>
           {/* Uso a props navigation para usar metodo navigate passando Page (rota)  */}
           {/* <Button title='Adicionar' 
           onPress={() => navigation.navigate('NewEntry')}/> */}
           <EntrySummary entriesGrouped={entriesGrouped}/>
           <EntryList navigation={navigation} />
       </View>
    );
};

//folhas de estilo
const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: Colors.background,
   }
});

//exportação
export default Main;
