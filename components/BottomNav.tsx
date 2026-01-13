import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Tab = 'home' | 'players' | 'settings';

interface BottomNavProps {
    active: Tab;
}

export default function BottomNav({ active }: BottomNavProps) {
    const router = useRouter();

    const navigate = (route: string) => {
        // Basic navigation logic
        if (route === 'home') router.replace('/');
        else if (route === 'players') router.replace('/players');
        // else if (route === 'settings') router.push('/settings');
    };

    const getColor = (tab: Tab) => active === tab ? "#FF7F00" : "#71717a";

    return (
        <View className="flex-row items-center justify-around py-4 border-t border-white/10 bg-black">
            <TouchableOpacity
                onPress={() => navigate('home')}
                className="items-center gap-1"
                activeOpacity={0.7}
            >
                <MaterialIcons name="home" size={28} color={getColor('home')} />
                <Text className={`text-[10px] uppercase font-bold ${active === 'home' ? 'text-vibrant-orange' : 'text-zinc-500'}`}>
                    Home
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigate('players')}
                className="items-center gap-1"
                activeOpacity={0.7}
            >
                <MaterialIcons name="group" size={28} color={getColor('players')} />
                <Text className={`text-[10px] uppercase font-bold ${active === 'players' ? 'text-vibrant-orange' : 'text-zinc-500'}`}>
                    Players
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="items-center gap-1"
                activeOpacity={0.7}
            >
                <MaterialIcons name="settings" size={28} color={getColor('settings')} />
                <Text className={`text-[10px] uppercase font-bold ${active === 'settings' ? 'text-vibrant-orange' : 'text-zinc-500'}`}>
                    Setup
                </Text>
            </TouchableOpacity>
        </View>
    );
}
