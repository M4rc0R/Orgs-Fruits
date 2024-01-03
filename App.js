import {StatusBar, SafeAreaView, View } from 'react-native';
import AppLoading from 'expo-app-loading';

import { useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold} from '@expo-google-fonts/montserrat';

  import mock from './src/mocks/cesta';
  import Cesta from './src/pages/cesta';

export default function App() {

  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fontCarregada){
    return <AppLoading/>
  }


  return (
    <SafeAreaView style={{flex:1}}>
      <Cesta {...mock}/>
      <StatusBar/>
    </SafeAreaView>
  );
}