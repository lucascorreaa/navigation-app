import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

import Feed from '../screens/Feed'
import New from '../screens/New'

const Tab = createBottomTabNavigator()

export default function TabRoutes() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen 
        name='feed'
        component={Feed}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
        }}
      />
      <Tab.Screen 
        name='new'
        component={New}
        options={{
          tabBarLabel: 'Novo',
          tabBarIcon: ({ color, size }) => <Feather name='plus' color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}