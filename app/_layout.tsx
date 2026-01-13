import { Stack } from "expo-router";
import "../global.css";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function RootLayout() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#000' } }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="players" />
                <Stack.Screen name="game" />
            </Stack>
        </View>
    );
}
