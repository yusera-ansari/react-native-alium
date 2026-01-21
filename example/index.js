import App from './src/App';
import { name as appName } from './app.json';
import { config } from 'react-native-alium';
import { AppRegistry } from 'react-native';
config('');
AppRegistry.registerComponent(appName, () => App);
