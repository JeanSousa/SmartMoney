import {Alert} from 'react-native';
import {getRealm} from './Realm'; //importo assim com chaves quando não é default
import {getUUID} from '../services/UUID';


export const getEntries = async () => {
    const realm = await getRealm();

    const entries = realm.objects('Entry');

    console.log('getEntries :: entries', JSON.stringify(entries));

    return entries;
}




export const saveEntry = async (value, entry ={}) => { //coloco async porque preciso que o getRealm seja executado
    const realm = await getRealm();
    let  data = {};

    //aqui eu descontruo o valor, como se fosse value.amount
    //abaixo eu extraio value.amount e salvo dentro da constante amount
   // const {amount} = value;
    
 
    try {
         //abre uma transação para escrita
        realm.write(() => {
            data = {
            id: value.id || entry.id || getUUID(), 
            amount: value.amount || entry.amount,
            entryAt: value.entryAt || entry.entryAt,
            isInit: false, //significa se é um campo de inicialização de saldo
            };
        
            //param1 = nome do schema, param2 = dados, 
            //param3 = se for true -> ele cria ou atualiza se já existir
            realm.create('Entry', data, true);
        
        });

        console.log('saveEntry :: data: ' , JSON.stringify(data));

    } catch(error) {
        console.error('saveEntry :: error on save object: ' ,
        JSON.stringify(data),
        );
        Alert.alert("Erro ao salvar os dados de lançamento.");
    }

    return data;
};

export const deleteEntry = async entry => {
   const realm = await getRealm();

   try {
       realm.write(() => {
         realm.delete(entry);
       });
   } catch (error) {
    console.error('saveEntry :: error on delete object: ' ,
    JSON.stringify(entry),
    );
    Alert.alert("Erro ao excluir este lançamento.");
       
   }
}


