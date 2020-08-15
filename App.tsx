import "react-native-gesture-handler";
import React from "react";
import { UtilityThemeProvider } from "react-native-design-utility";
import { NavigationContainer } from "@react-navigation/native";

import { theme } from "./src/constants/theme";

const App = () => {
  return (
    <UtilityThemeProvider theme={theme}>
      <NavigationContainer></NavigationContainer>
    </UtilityThemeProvider>
  );
};

export default App;
