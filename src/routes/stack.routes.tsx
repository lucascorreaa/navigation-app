import { createNativeStackNavigator  } from '@react-navigation/native-stack'

import Profile from '../screens/Profile'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen 
        name='home' 
        component={Profile} 
      />
    </Stack.Navigator>
  )
}


