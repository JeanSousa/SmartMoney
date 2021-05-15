/**
 * @format
 */

if(__DEV__) {
    import('./config/ReactotronConfig');
}
 
import {AppRegistry} from 'react-native';
//importando o arquivo App que é a demo do react
import App from './src';
import {name as appName} from './app.json';

//Componente faz o registro de um componente com um app name e uma classe
AppRegistry.registerComponent(appName, () => App);
