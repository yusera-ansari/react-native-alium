import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { config } from 'react-native-alium';
config('https://assets.aliumsurvey.com/app/cstjn/cstjn_16.json');
console.log('useeffect');
AppRegistry.registerComponent(appName, () => App);
