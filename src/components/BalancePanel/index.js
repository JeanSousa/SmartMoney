import React from 'react'
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import Colors from '../../styles/Colors';

const BalancePanel = ({onNewEntryPress}) => {

    //informaçao para ser passada como props para componentes filhos
    const currentBalance = 2064.35;

    return (
        <View style={styles.container}>
            <LinearGradient 
            colors={[Colors.violet, Colors.blue]}
            style={styles.panel}>
                <BalancePanelLabel 
                currentBalance={currentBalance}/>
                <BalancePanelChart/>
            </LinearGradient>
            <TouchableOpacity 
              style={styles.button}
              onPress={onNewEntryPress}
              >
              <Icon name="add" size={30} color={Colors.white} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    panel: {
        paddingVertical: 10,
    },
    button: {
        backgroundColor: Colors.green,
        borderRadius: 50,
        alignSelf: 'flex-end',
        alignItems: 'center', //alinhando os filhos do touchable opacity no eixo horizontal
        justifyContent: 'center',   //alinhando os filhos do touchable opacity no eixo vertical
        width: 50,
        height: 50,
        shadowColor: Colors.black,
        elevation: 5, //elevação da shadow
        marginTop: -25,
        marginRight: 10
    }
});


export default BalancePanel;
