import React from 'react';

//importações especificas dos componentes que vou usar visualmente
import {View, Button, StyleSheet} from 'react-native';


import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

//meu componente tem mesmo nome do diretorio
const Main = ({navigation}) => {


   
    //função de renderizacao do jsx
    return (
        <View style={styles.container}>
           <BalancePanel/>
           {/* Uso a props navigation para usar metodo navigate passando Page (rota)  */}
           <Button title='Adicionar' 
           onPress={() => navigation.navigate('NewEntry')}/>
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
