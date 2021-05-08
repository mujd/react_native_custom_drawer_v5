import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome5 } from '../components/Icon';

const Screen = (props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{ alignItems: 'flex-end', margin: 16 }}
          onPress={props.navigation.openDrawer}>
          <FontAwesome5 iconName="bars" size={24} color="#161924" />
        </TouchableOpacity>
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.text}>{props.name} Screen</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: '#161924',
    fontSize: 20,
    fontWeight: '500',
  },
});

export default Screen;
