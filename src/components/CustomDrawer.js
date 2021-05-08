import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  //   useIsDrawerOpen,
} from '@react-navigation/drawer';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Linking,
  StatusBar,
  Platform,
} from 'react-native';
import { FeatherIcon, Ionicon } from './Icon';

const CustomDrawer = (props) => {
  //   const isDrawerOpen = useIsDrawerOpen();
  //   console.log(isDrawerOpen);
  return (
    <>
      <DrawerContentScrollView style={{ paddingTop: 0, marginTop: 0 }}>
        <StatusBar
          barStyle="dark-content"
          //   hidden={isDrawerOpen}
          backgroundColor="#fff"
        />
        <ImageBackground
          source={require('../assets/img/bg-7.jpg')}
          style={{
            width: undefined,
            padding: 16,
            paddingTop: Platform.OS === 'android' ? 30 : 48,
            top: Platform.OS === 'android' ? -5 : 0,
          }}>
          <Image
            source={require('../assets/img/avatar-1.png')}
            style={styles.profile}
          />
          <Text style={styles.name}>Mark Wahl</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.followers}>576 Followers</Text>
            <Ionicon
              iconName="md-people"
              size={16}
              color="rgba(255, 255, 255, 0.8)"
            />
          </View>
        </ImageBackground>
        <View style={styles.container}>
          <DrawerItemList {...props} />
          <DrawerItem
            label="Help"
            onPress={() => Linking.openURL('https://google.com')}
            icon={({ color }) => (
              <FeatherIcon iconName="help-circle" size={16} color={color} />
            )}
          />
        </View>
      </DrawerContentScrollView>
      <DrawerItem
        label="SignOut"
        onPress={() => console.log('logout')}
        icon={({ color }) => (
          <FeatherIcon iconName="log-out" size={16} color={color} />
        )}
      />
    </>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: 100,
    height: 100,
    borderRadius: 99999,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '800',
    marginVertical: 8,
  },
  followers: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 13,
    marginRight: 4,
  },
});
