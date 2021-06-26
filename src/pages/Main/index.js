import React from 'react';

//importações especificas dos componentes que vou usar visualmente
import {View, StyleSheet} from 'react-native';


import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';


//meu componente tem mesmo nome do diretorio
const Main = ({navigation}) => {

    //função de renderizacao do jsx
    return (
        <View style={styles.container}>
           <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')}/>
           {/* Uso a props navigation para usar metodo navigate passando Page (rota)  */}
           {/* <Button title='Adicionar' 
           onPress={() => navigation.navigate('NewEntry')}/> */}
           <EntrySummary />
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
