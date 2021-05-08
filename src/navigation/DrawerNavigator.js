import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  ProfileScreen,
  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  SettingScreen,
} from '../screens';
import CustomDrawer from '../components/CustomDrawer';
import { FeatherIcon } from '../components/Icon';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const dimensions = useWindowDimensions();

  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      // drawerType={width >= 769 ? 'permanent' : 'front'}
      drawerStyle={
        isLargeScreen
          ? null
          : { width: dimensions.width * 0.85, paddingTop: 0, marginTop: 0 }
      }
      // hideStatusBar={true}
      drawerContentOptions={{
        activeBackgroundColor: 'rgba(212, 118, 207, 0.2)',
        activeTintColor: '#53115b',
        contentContainerStyle: {
          marginTop: 16,
          marginHorizontal: 8,
        },
        itemStyle: {
          marginTop: 8,
          marginHorizontal: 8,
          borderRadius: 4,
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{
          title: 'Profile',
          drawerIcon: ({ color }) => (
            <FeatherIcon iconName="user" size={16} color={color} />
          ),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Drawer.Screen
        options={{
          title: 'Message',
          drawerIcon: ({ color }) => (
            <FeatherIcon iconName="message-square" size={16} color={color} />
          ),
        }}
        name="MessageScreen"
        component={MessageScreen}
      />
      <Drawer.Screen
        options={{
          title: 'Activities',
          drawerIcon: ({ color }) => (
            <FeatherIcon iconName="activity" size={16} color={color} />
          ),
        }}
        name="ActivityScreen"
        component={ActivityScreen}
      />
      <Drawer.Screen
        options={{
          title: 'Lists',
          drawerIcon: ({ color }) => (
            <FeatherIcon iconName="list" size={16} color={color} />
          ),
        }}
        name="ListScreen"
        component={ListScreen}
      />
      <Drawer.Screen
        options={{
          title: 'Reports',
          drawerIcon: ({ color }) => (
            <FeatherIcon iconName="bar-chart" size={16} color={color} />
          ),
        }}
        name="ReportScreen"
        component={ReportScreen}
      />
      <Drawer.Screen
        options={{
          title: 'Statistics',
          drawerIcon: ({ color }) => (
            <FeatherIcon iconName="trending-up" size={16} color={color} />
          ),
        }}
        name="StatisticScreen"
        component={StatisticScreen}
      />
      <Drawer.Screen
        options={{
          title: 'Settings',
          drawerIcon: ({ color }) => (
            <FeatherIcon iconName="settings" size={16} color={color} />
          ),
        }}
        name="SettingScreen"
        component={SettingScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
