import { Stack } from "expo-router";

const NotesStackLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerTitle: "Notes" }} />
        </Stack>
    );
};

export default NotesStackLayout;