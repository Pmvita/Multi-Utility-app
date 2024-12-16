import { Stack } from "expo-router";

const HomeStackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: "Messages", headerShown: true }} />
        </Stack>
    );
};

export default HomeStackLayout;