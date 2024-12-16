import { Stack } from "expo-router";

const HomeStackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: "Home Screen", headerShown: false }} />
        </Stack>
    );
};

export default HomeStackLayout;