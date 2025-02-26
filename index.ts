import { registerRootComponent } from 'expo';

import App from './App';
import Login from './app/screen/Login';
import RegistroDHL from './app/screen/RegistroDHL';
import Plantilla from './app/screen/Plantilla';
import CalculadoraPropinas from './app/screen/CalculadoraPropina';
import WeatherAPI from './app/screen/WeatherAPI';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(WeatherAPI);
