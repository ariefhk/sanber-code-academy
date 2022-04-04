import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Pages/Login';
import Profile from './src/Pages/Profile';
import Register from './src/Pages/Register'
import SplashScreen from './src/Pages/SplashScreen';
import SanberAcademy from './src/Index'

export default function App() {
  return (
    // <SanberAcademy/>
    // <Login/>
    // <Learn/>
    // <Statistic/>
    // <Profile/>
    // <Register/>
    // <SplashScreen/>
    <SanberAcademy/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30
  },
});
