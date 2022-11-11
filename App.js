import * as React from 'react';
import { 
  Button, 
  Text, 
  TextInput, 
  View, 
  StyleSheet 
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from './src/screens/AuC';
import {
  SignIn, 
  SignUp, 
  Splash, 
  Flashlist,
  Logout,
} from './src/screens/Index';

const Tab = createMaterialBottomTabNavigator;

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer >
      <Tab.Navigator>
          {state.isLoading ? (
            <Tab.Screen name="Splash" component={Splash} />
          ) : state.userToken == null ? (
            <>
              <Tab.Screen 
              name="Sign In" 
              component={SignInScreen} options={{
                headerTitle: 'Sign In',
                tabBarOptions: {
                  showIcon: false
                },
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#ff7f50',
                }, 
                headerTitleStyle: {
                  color: 'white',
                },
                tabBarIcon: ({ff7f50, size }) => (
                <MaterialCommunityIcons 
                name="login" 
                color="#ff7f50" 
                size={26} 
                />
                ),

              }} />
              <Tab.Screen name="Sign Up" 
              component={SignUpScreen} 
              options={{
                headerTitle: 'Sign Up',
                tabBarOptions: {
                  showIcon: false
                },
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#ff7f50',
                }, 
                headerTitleStyle: {
                  color: 'white',
                },
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons
                      name="account-multiple-plus"
                      color="#ff7f50"
                      size={26}   
                      />
                    ),
              }} />
            </>
          ) : (
            <>
            <Tab.Screen 
              name="Home" component={HomeScreen} 
              options={{
                tabBarLabel: 'home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={26} />
                ),
              }}
              />
            <Tab.Screen 
              name="Logout" component={LogoutScreen} 
              options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons 
                  name="logout" 
                  color={color} 
                  size={26} />
                ),
              }}
            />
            </>
          )}
        </Tab.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
   
  );
}

// const Tab = createBottomTabNavigator();
// export default function App() {
//   const headerComponent = () => {
//     return <Text style={styles.conten}>User</Text>;
//   };
//   return (
//     // <SafeAreaView style={styles.container}>
//     //   <FlatList
//     //     ListHeaderComponent={headerComponent}
//     //     data={DATA}
//     //     renderItem={oneUser}
//     //     ListEmptyComponent={<Text>Empty list</Text>}
//     //   />
//     // </SafeAreaView>
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={NVG} />
//         {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
//         <Tab.Screen name="Sigin" component={SignIn} />
//         <Tab.Screen name="Signup" component={SignUp} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // userContainer: {
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
  // user: {
  //   borderWidth: 1,
  //   borderColor: '#f0f8ff',
  //   marginTop: 20,
  // },
  text: {
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 5,
    color: '#d6ed05',
  },
  // icon: {
  //   marginLeft: 10,
  //   marginVertical: 2,
  //   color: '#2fed05',
  // },
  button: {
  },
  buttonContainer: {
    width: 120,
    height: 40,
    marginBottom: '10%',
  },
});