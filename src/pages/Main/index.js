import React from 'react';

//importações especificas dos componentes que vou usar visualmente
import {View, StyleSheet} from 'react-native';


import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

//meu componente tem mesmo nome do diretorio
const Main = () => {
    //função de renderizacao do jsx
    return (
        <View style={styles.container}>
           <BalancePanel/>
           <EntrySummary/>
           <EntryList/>
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
