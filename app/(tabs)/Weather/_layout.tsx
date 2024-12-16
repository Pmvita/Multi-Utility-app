import { Stack } from "expo-router";

const WeatherStackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: "Weather Screen", headerShown: false }} />
        </Stack>
    );
};

export default WeatherStackLayout;