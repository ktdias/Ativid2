import * as React from 'react';
import { View, Alert } from 'react-native';
import { Input, Header, Text, Button } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';

function SignUpScreen({ navigation }) {
    const Stack = createNativeStackNavigator();
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white'  }}>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        
        <Header
          placement="top"
          backgroundColor='#fff'
          leftComponent={{ icon: 'chevron-left', color: '#120a8f', onPress: () => navigation.goBack() }}
        />

        <Text 
          style={{fontSize:20, color:'#120a8f', fontWeight:"bold", paddingTop: 100}}
          >
          Usuários
        </Text>

        <Input
            name='nome'
            placeholder='Nome'
            inputStyle={{paddingTop:75}}
            />
        <Input
            name='cpf'
            placeholder='CPF'
            />
        <Input
            name='email'
            placeholder='Email'
            />
        <Input
            name='senha'
            placeholder='Senha'
            />

        <Button
          title="Salvar"
          titleStyle={{color:'#120a8f',fontSize:18, fontWeight:'bold'}}
          buttonStyle={{paddingBottom:10, paddingTop:10}}
          type="clear"
        onPress={() => Alert.alert ("Usuário adicionado com sucesso!")}
         

        />

      </View>
    );
  }

  export default SignUpScreen;