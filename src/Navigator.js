import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screens/Home';
import New from './screens/New';

const AppNavigator = createStackNavigator(
    { 
        Home: Home,
        New: New
    },
    { 
        initialRouteName: 'New' 
    }
  );

export default createAppContainer(AppNavigator);