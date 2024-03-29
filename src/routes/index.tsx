import { NavigationContainer } from '@react-navigation/native'

import TabRoutes from './tab.routes'
import DrawerRoutes from './drawer.routes'

export default function Routes() {
  return (
    <NavigationContainer>
      {/* <TabRoutes/> */}
      <DrawerRoutes />
    </NavigationContainer>
  )
}