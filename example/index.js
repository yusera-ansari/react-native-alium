import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { config } from 'react-native-alium';
config('');
AppRegistry.registerComponent(appName, () => App);
