import * as React from 'react';
import { View } from 'react-native';
import { Header, ListItem, Avatar } from 'react-native-elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import EditContactScreen from './EditContact';

function ContactsScreen({ navigation }) {
    const Stack = createNativeStackNavigator();
    const list = [
      {
        name: 'Karina Dias',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '81 988553428'
      },
      {
        name: 'Marcos Andrade',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: '81 988553424'
      },
      {
        name: 'Patrícia Tavares',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '81 998765332'
      },
      {
        name: 'Rodrigo Antunes',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: '81 998765332'
      }
    ];

    return (
      <View>
        <Stack.Screen name="AddContact" component={HomeScreen} />       
        <Stack.Screen name="EditContact" component={EditContactScreen} /> 
        <Header
          placement="top"
          leftComponent={{ icon: 'chevron-left', color: '#fff', onPress: () => navigation.goBack() }}
          centerComponent={{ text: 'Lista de contatos', style: { color: '#fff' } }}
          rightComponent={{ icon: 'add', color: '#fff', onPress: () => navigation.navigate('SignUp') }}
        />

        <View>
          {list.map((l, i) => (
              <ListItem 
                key={i} bottomDivider
                onPress={()=>navigation.navigate('EditContact')}>
                <Avatar source={{uri: 'https://e7.pngegg.com/pngimages/84/165/png-clipart-united-states-avatar-organization-information-user-avatar-service-computer-wallpaper.png'}} />
                <ListItem.Content>
                  <ListItem.Title>{l.name}</ListItem.Title>
                  <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                </ListItem.Content>
                <ListItem.Chevron/>
              </ListItem>
            ))
          }
        </View>
        


      </View>
    );
  };

export default ContactsScreen;