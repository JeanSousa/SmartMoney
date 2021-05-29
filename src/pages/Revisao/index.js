
import React, {useState, useEffect, Component} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


//componente funcional antes de existir react hooks 
class CounterClass extends Component {
   constructor(props){
       super(props);
       this.state = {
           count: 0
        }
        console.log('constructor - initialization call');
   }

    //metodo ao renderizar o componente
    componentDidMount() {
        console.log('componentDidMount - mouting call');
    }

    //metodo chamado ao desmontar o componenete
    componentWillUnmount() {
        console.log('componentWillUnmount - unmounting call');
    }



   conter(){
       this.setState({
           count: this.state.count + 1
       });
   }

   render(){
       return(
        <View>
            <Text style={styles.label}>{this.state.count}</Text>
            <Button title="Contador" onPress={() => {this.conter()}}/>
        </View>
       );
   }
}



const CounterFunctional = () => {
    const [count, setCount] = useState(0)

    const contar = () => {
        setCount(count => count + 1);
    }

    useEffect(() => {
        setInterval(() => {
          contar();
        }, 1000);
    }, [])

    return (
        <View>
            <Text style={styles.label}>{count}</Text>
            <Button title="Contador" onPress={contar}/>
        </View>
    )

}



const Revisao = () => {
    return (
        <View style={styles.container}>
           <CounterClass/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    label: {
        fontSize: 22,
        alignSelf: 'center',
        padding: 5
    }
});

export default Revisao;

