import * as React from 'react';
import { View } from 'react-native';
//import { Header, Text} from 'react-native-elements';
import { Header, Text,Button, Image , Input } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './Contacts';


function HomeScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        
        <Stack.Screen name="Contacts" component={ContactsScreen} />

        <Header
          placement="top"
          backgroundColor='#fff'
        />        
        <Text style={{fontSize:20, color:'#120a8f', fontWeight:"bold", paddingTop: 100}} >
          Lista de Usuários
          
        </Text>

        <Text h3>
          Marcos Andrade
          telefone
        </Text>
        <Text h3>
          Patrícia Tavares
          telefone
        </Text>  
      <  Button
            title="Cadastro"
            titleStyle={{color:'#120a8f',fontSize:18, fontWeight:'bold'}}
            type="clear"
            onPress={() => navigation.navigate('Contacts')} />

                
       </View>

    );
    
  }

  export default HomeScreen;