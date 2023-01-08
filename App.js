import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './Components/Footer';
import Accounts from './Screens/Accounts';
import More from './Screens/More';
import MoveMoney from './Screens/MoveMoney';
import Login from './Screens/Login';

const AuthContext = React.createContext();

function HomeScreen() {
  const { signOut } = React.useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Accounts"
            component={Accounts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Move Money"
            component={MoveMoney}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="More"
            component={More}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Accounts"
            component={Accounts}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Move Money"
            component={MoveMoney}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="More"
            component={More}
            options={{ headerShown: false }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
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
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
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
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore` or any other encrypted storage
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  );

}
