import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from './app/styles/colors';
import profile_pic from './assets/profile_pic.jpg';


{/** Get window dims */}
import { useWindowDimensions } from 'react-native';

{/** All the Screen imports here! */}
import { LandingPageScreen } from './app/LandingPageScreen.native';
import { EducationScreen } from './app/EducationScreen.native';
import { ExperienceScreen } from './app/ExperienceScreen.native';

{/** For easy to use screen and scene tranistions (easier than javafx!) */}
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

{/** Sticking with a solid theme set here, so I'll use Material! */}
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { ContactScreen } from './app/ContactScreen.native';


export default function App() {

  const Tab = createMaterialBottomTabNavigator();
  const dimensions = useWindowDimensions();

  {/** Any global changes for theme will go to Navi Container */}
  const PortfolioTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    }
  };

  return (
    <NavigationContainer
      theme={PortfolioTheme}
      
    >
      
      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle:styles.headerStyle,
        }}
        shifting={true}
      >
        <Tab.Screen 
          name="Home"
          component={LandingPageScreen}
          backgroundColor="red"
          options={{
            tabBarLabel: '',
            tabBarColor: colors.darkBlue,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="account-tie" color={focused ? colors.purple : colors.white} size={30} style={styles.aboutMe}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Education"
          component={EducationScreen}
          options={{
            tabBarLabel: '',
            tabBarColor: colors.pastelblue,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="school" color={focused ? colors.black : colors.white} size={30} style={styles.aboutMe}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Experience"
          component={ExperienceScreen}
          options={{
            tabBarLabel: '',
            tabBarColor: colors.lightpurple,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="xml" color={focused ? colors.black : colors.white} size={30} style={styles.aboutMe}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Contact"
          component={ContactScreen}
          options={{
            tabBarLabel: '',
            tabBarColor: colors.bluepurple,
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="send" color={focused ? colors.black : colors.white} size={30} style={styles.aboutMe}/>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  profileImage: {
    width:200,
    height: 200,
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
  },
  drawerHeaderTextConatiner: {
    textAlign: 'left',
  },
  innerDrawerHeaderTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:20,
    paddingRight:5,
    textAlign: 'left',
  },
  drawerHeaderTextName: {
    fontSize: 20,
    fontWeight: '600',
  },
  drawerHeaderTextJobTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  drawerHeaderContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
  },
  aboutMe:{
  },

});
