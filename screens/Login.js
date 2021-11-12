import * as React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Image , Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
//import HomeScreen from './HomeScreen';
import SignUpScreen from './SignUp';
import ContactsScreen from './Contacts';

function LoginScreen({ navigation }) {
    const Stack = createNativeStackNavigator();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
        
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
        
        <Image 
            source={require('../assets/30reis_b2.jpg')}
            style={{ width: 100, height: 100, marginBottom: 75 }}
            
        />

        <Input
            name='login'
            placeholder=' Email'
            inputContainerStyle={{marginLeft:5, marginRight:10}}
            leftIcon={
                <Icon
                    name='user'
                    size={25}
                    color='#120a8f'
                />
            }/>
        
        <Input
            name='senha'
            placeholder=' Senha'
            inputContainerStyle={{marginLeft:5, marginRight:10}}
            leftIcon={
                <Icon
                    name='lock'
                    size={25}
                    color='#120a8f'
                />
            }/>

        <Button
            title="Login"
            titleStyle={{color:'#120a8f',fontSize:18, fontWeight:'bold'}}
            buttonStyle={{paddingBottom:10, paddingTop:10}}
            type="clear"
            onPress={() => navigation.navigate('Contacts')}
             />
         <Button
            title="Cadastro"
            titleStyle={{color:'#120a8f',fontSize:18, fontWeight:'bold'}}
            type="clear"
            onPress={() => navigation.navigate('SignUp')} />        

      </View>
    );
  }

  export default LoginScreen;