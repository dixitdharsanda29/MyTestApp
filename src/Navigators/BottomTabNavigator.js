import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { routes } from '@constants/routes';
import Home from '@screens/Home';
import Listing from '@screens/Listing';
import Settings from '@screens/Settings';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import { useTheme } from '@context/ThemeContext';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === routes.HOME) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === routes.LISTING) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === routes.SETTINGS) {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          height: moderateScale(60) + insets.bottom,
          paddingBottom: insets.bottom || moderateScale(10),
          borderTopWidth: 0.75,
          borderTopColor: colors.border,
          elevation: 0,
          shadowOpacity: 0,
          paddingTop: moderateScale(5),
          backgroundColor: colors.card,
        },
        tabBarButton: props => (
          <TouchableOpacity {...props} activeOpacity={1} />
        ),
      })}
    >
      <Tab.Screen name={routes.HOME} component={Home} />
      <Tab.Screen name={routes.LISTING} component={Listing} />
      <Tab.Screen name={routes.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
