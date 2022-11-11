import { AuthContext } from './AuC';
import SignIn from './SignIn';
import SignUp from './SignUp';
import FlastList from './FlastList';
import Splash from './Splash';
import Logout from './Logout';
import {AppRegistry} from 'react-native';
import App from '../../App';
import {name as appName} from '../../app.json';

export {SignIn, SignUp, FlastList, AuthContext, Splash, Logout};
//AppRegistry.registerComponent(appName, () => App);