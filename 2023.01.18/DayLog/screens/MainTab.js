import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedsScreen from "./MainTab/FeedsScreen";
import CalendarScreen from "./MainTab/CalendarScreen";
import SearchScreen from "./MainTab/SearchScreen";

const Tab = createBottomTabNavigator();

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feeds" component={FeedsScreen} />
      <Tab.Screen name="Calendar" component={CalendarScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;
