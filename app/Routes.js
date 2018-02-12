import { StackNavigator } from 'react-navigation'

import Login from './Screens/Login/Login'
import Home from './Screens/Home/Home'

export default StackNavigator({
	Login: {
		screen: Login
	},
  	Home: {
		screen: Home
	}
	},
	{
		initialRouteName: 'Login'
	}
)