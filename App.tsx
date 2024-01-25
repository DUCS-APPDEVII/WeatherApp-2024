/*
File: App.tsx          Date: 1/25/2024
   This file provides navigation for the MyWeather app.  See the README.md file
   for the application specifications

   Modification Log
   1/28/2024 Adapted the 2023 starter code to use Typescipt.  S. Sigman
*/
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import CurrentWeather from './screens/CurrentWeather';
import Location from './screens/Location';

const Tab = createBottomTabNavigator();

const App =() => {
    return (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarIcon: ({focused, color, size}) => {
                let iconName : keyof typeof Ionicons.glyphMap = 'home'
                if (route.name ==='CurrentWeather') {
                  iconName = focused 
                    ? 'home'
                    : 'home-outline';
                } else if (route.name==='Location') {
                  iconName = focused ? 'list' : 'list-outline';
                }
                return <Ionicons name={iconName} size={size} color={color} />
              },
              tabBarActiveTintColor: '#03DAC6',
              tabBarInactiveTintColor: '#018786',
              tabBarActiveBackgroundColor: '#6200EE',
              tabBarInactiveBackgroundColor: '#3700B3'
            })}
          >
            <Tab.Screen
              name="CurrentWeather"
              component={CurrentWeather}
              options={ {
                title: 'MyWeather', 
                headerStyle: {
                  backgroundColor: '#6200EE',
                },
                headerTitleStyle: {
                  color: '#fff',
                },
              }}
            />
            <Tab.Screen 
              name ='Location'
              component={Location}
              options={ {
                title: 'Locations',
                headerStyle: {
                  backgroundColor: '#6200EE',
                },
                headerTitleStyle: {
                  color: '#fff',
                },
              }} 
            />
          </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;