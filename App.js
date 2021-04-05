import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Login,
  Signup,
  Home,
  Sell,
  itemDetails,
  Categories,
  Category,
  Chats,
  MyAccount,
  Purchases,
  Favourites,
  Filters,
  CustomizeFeed,
  Profile,
  EditProfile,
  Rate,
  Feedback,
  Report,
  AllReviews,
} from "./screens/";
import {
  bottomMainTabs,
  sellerItemsTabs,
  userItemsTabs,
  searchTabs,
  notificationsTabs,
  // reviewsTabs,
} from "./navigation";
import store from "./store/store";
import { AuthProvider } from "./AuthContext";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            // initialRouteName={"Home"}
            initialRouteName={"Login"}
          >
            {/* HOME */}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={bottomMainTabs} />
            <Stack.Screen name="Sell" component={Sell} />
            <Stack.Screen name="sellerItemsTabs" component={sellerItemsTabs} />
            {/* CATEGORIES */}
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Category" component={Category} />
            {/* CHATS */}
            <Stack.Screen name="Chats" component={Chats} />
            {/* MY ACCOUNT */}
            <Stack.Screen name="MyAccount" component={MyAccount} />
            <Stack.Screen name="userItemsTabs" component={userItemsTabs} />
            <Stack.Screen name="Purchases" component={Purchases} />
            <Stack.Screen name="Favourites" component={Favourites} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            {/* SHARED */}
            <Stack.Screen name="Feedback" component={Feedback} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="itemDetails" component={itemDetails} />
            <Stack.Screen name="Rate" component={Rate} />
            <Stack.Screen name="AllReviews" component={AllReviews} />
            {/* HEARDER NAVIGATE */}
            <Stack.Screen name="searchTabs" component={searchTabs} />
            <Stack.Screen name="Filters" component={Filters} />
            <Stack.Screen name="CustomizeFeed" component={CustomizeFeed} />
            <Stack.Screen name="notificationsTabs" component={notificationsTabs} />
            <Stack.Screen name="Report" component={Report} />
          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}
