import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
