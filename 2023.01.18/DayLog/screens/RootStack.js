import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WriteScreen from "./WriteScreen";
import MainTab from "./MainTab";

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown : false}}
      />
      <Stack.screen name="Write" component={WriteScreen} />
    </Stack.Navigator>
  );
}

export default RootStack;
