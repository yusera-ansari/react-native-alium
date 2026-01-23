import App from './src/App';
import { name as appName } from './app.json';
import { config } from 'react-native-alium';
import { AppRegistry } from 'react-native';
config('https://dev-assets.alium.co.in/app/cstjn/cstjn_15.json');
AppRegistry.registerComponent(appName, () => App);
