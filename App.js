import { Button, Alert } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: '#FEF3B4' }}>
      <StatusBar style="auto" backgroundColor="#AD6200" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: '#E37D00' },
            headerTintColor: '#FFFFFF',
          }}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login',
              headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ title: 'Cadastre-se' }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              title: 'Home',
              headerRight: () => (
                <Button
                  onPress={() => {
                    Alert.alert(
                      'Atenção!',
                      'Deseja sair do aplicativo?',
                      [
                        {
                          text: 'Sim',
                          onPress: () => navigation.replace('Login'),
                        },
                        {
                          text: 'Não',
                          onPress: () => console.log('Cancel pressed!'),
                          style: 'cancel',
                        },
                      ],
                      { cancelable: false }
                    );
                  }}
                  title="Sair"
                  style={{ padding: 80 }}
                  color="#D26900"
                />
              ),
              headerTitleStyle: { fontWeight: 'bold', textAlign: 'center' },
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
