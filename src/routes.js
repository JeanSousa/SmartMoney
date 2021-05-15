import {createAppContainer, 
createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';

const Routes = createAppContainer(
  createSwitchNavigator( //aqui coloco as paginas de navegação
    {
        // posso passar assim tambem Main:MainScreen Main = nome da tela e MainScreen nome
        // da classe, só que no meu caso o nome da classe é igual da tela
        Main, 
        NewEntry, 
        Report
    }, 
    {
        initialRouteName: 'Main', //irá começar na main
        backBehavior: 'order' //comportamento de volta é a pagina anterior
    },
  )
);

export default Routes;
