/**
 * @format
 */

if(__DEV__) {
    import('./config/ReactotronConfig');
}
 
import {AppRegistry} from 'react-native';
//importando o arquivo App que é a demo do react
import App from './src';
import Main from './src/pages/Main';
import NewEntry from './src/pages/NewEntry';
import Report from './src/pages/Report';
import {name as appName} from './app.json';

//Componente faz o registro de um componente com um app name e uma classe
AppRegistry.registerComponent(appName, () => Report);
