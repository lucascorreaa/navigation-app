import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'

import TabRoutes from './tab.routes'
import StackRoutes from './stack.routes'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator screenOptions={{
      headerShown: true,
      title: ''
    }}>
      <Drawer.Screen 
        name='home' 
        component={TabRoutes} 
        options={{
          drawerLabel: 'Inicio',
          drawerIcon: ({ color, size }) => <Feather name='home' color={color} size={size} />
        }}
      />
      <Drawer.Screen 
        name='profile' 
        component={StackRoutes} 
        options={{
          drawerLabel: 'Meu Perfil',
          drawerIcon: ({ color, size }) => <Feather name='user' color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  )
}