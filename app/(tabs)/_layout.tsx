import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";



export default () => {
    return (
        <Tabs>
            <Tabs.Screen name="Home" options={{ headerShown: false, tabBarIcon : ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
            )}} />

            <Tabs.Screen name="Messages" options={{ headerShown: false, tabBarIcon : ({ color, size }) => (
                <Ionicons name="logo-wechat" color={color} size={size} />
            )}} />

            <Tabs.Screen name="Notes" options={{ headerShown: false, tabBarIcon : ({ color, size }) => (
                <Ionicons name="clipboard" color={color} size={size} />
            )}} />

            <Tabs.Screen name="Weather" options={{ headerShown: false, tabBarIcon : ({ color, size }) => (
                <Ionicons name="thunderstorm-sharp" color={color} size={size} />
            )}} />
        </Tabs>
    );
};

