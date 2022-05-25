/* eslint-disable prettier/prettier */
// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomePage from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import TableroPage from './DrawerScreens/TablerosScreen';
import CreateTablero from './DrawerScreens/CreateTablero';
import CreateCat from './DrawerScreens/CreateCat';
import CreateBoton from './DrawerScreens/CreateBoton';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomePage}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#015693', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const tableroScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="TableroScreen">
      <Stack.Screen
        name="TableroScreen"
        component={TableroPage}
        options={{
          title: 'Tableros', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#015693', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const createTableroStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="CreateTableroScreen">
      <Stack.Screen
        name="CreateTableroScreen"
        component={CreateTablero}
        options={{
          title: 'Crear Tablero', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#015693', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const createcatStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="CreateCatScreen">
      <Stack.Screen
        name="CreateCatScreen"
        component={CreateCat}
        options={{
          title: 'Crear categoria', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#015693', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const createBotonStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="CreateBotonScreen">
      <Stack.Screen
        name="CreateBotonScreen"
        component={CreateBoton}
        options={{
          title: 'Crear botón', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#015693', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#015693', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Ajustes', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#3181BC',
        color: '#3181BC',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#3181BC',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home'}}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="tablerosScreenStack"
        options={{drawerLabel: 'Tableros'}}
        component={tableroScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Ajustes'}}
        component={settingScreenStack}
      />
    <Drawer.Screen
        name="CreateTableroScreenStack"
        options={{drawerItemStyle: { height: 0 }}}
        component={createTableroStack}
      />
    <Drawer.Screen
        name="CreateCatScreenStack"
        options={{drawerItemStyle: { height: 0 }}}
        component={createcatStack}
      />
    <Drawer.Screen
        name="CreateBotonScreenStack"
        options={{drawerItemStyle: { height: 0 }}}
        component={createBotonStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;