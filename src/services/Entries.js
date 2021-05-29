import {Alert} from 'react-native';
import {getRealm} from './Realm'; //importo assim com chaves quando não é default

export const saveEntry = async () => { //coloco async porque preciso que o getRealm seja executado
    const realm = await getRealm();
    let  data = {};

    try {
         //abre uma transação para escrita
        realm.write(() => {
            data = {
            id: 'ABC', 
            amount: 12.4,
            entryAt: new Date(), //vai retornar um objeto tipo date valido (o Realm valida os tipos)
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


