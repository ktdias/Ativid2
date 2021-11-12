import * as React from 'react';
import { Button, View } from 'react-native';
import { Header, Input, Avatar } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from './Contacts';

function EditContactScreen({ navigation }) {
    const Stack = createNativeStackNavigator();

    return (
      <View style={{ flex: 1, alignItems: 'center'}}>
        
        <Stack.Screen name="Contacts" component={ContactsScreen} />

        <Header
          placement="top"
          leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => navigation.navigate('Contacts') }}
          centerComponent={{ text: 'Editar contato', style: { color: '#fff' } }}
        />

        <View style={{marginTop: 50}}>
            <Avatar
                rounded
                size="large"
                icon={{name: 'user', type: 'font-awesome'}}
                overlayContainerStyle={{backgroundColor: 'lightblue'}}
                onPress={() => console.log("Works!")}
                activeOpacity={1.0}
                containerStyle={{flex: 0, marginBottom: 10}}
            />
        </View>
        
        <Text 
          style={{fontSize:20, color:'#120a8f', fontWeight:"bold", paddingTop: 100}}
          >
          Contatos -Karina text todo
        </Text>

        <Input
            name='nome'
            placeholder='Nome'
            inputStyle={{marginTop:50}}
            />
        <Input
            name='email'
            placeholder='Email'
            />
        <Input
            name='telefone'
            placeholder='Telefone'
            />

        <View style={{marginTop: 50}}>
            <Button title="Salvar" onPress={() => navigation.goBack()} />
        </View>

        <Button
          title="Salvar"
          titleStyle={{color:'#120a8f',fontSize:18, fontWeight:'bold'}}
          buttonStyle={{paddingBottom:10, paddingTop:10}}
          type="clear"
          onPress={() => navigation.navigate('Contacts')}
        /> 

      </View>
    );
  }

  export default EditContactScreen;

