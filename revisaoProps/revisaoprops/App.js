import { SafeAreaView, StatusBar } from 'react-native';
import Person from './src/componentes/Person/Person';

export default function App() {
  return (
    <SafeAreaView>
      <Person name='Joao' age='19'/>
      <Person name='Eduardo' age='18'/>
      <Person name='Gustavo' age='18'/>
      <Person name='Gab' age='16'/>

      <StatusBar/>  
    </SafeAreaView>
  );
}


