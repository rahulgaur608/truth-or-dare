import { View, Text, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import BottomNav from "../components/BottomNav";
import { useState } from "react";

export default function PlayersScreen() {
    const router = useRouter();
    const [players, setPlayers] = useState([
        { id: 1, name: "Alex", intensity: "mild" },
        { id: 2, name: "Jordan", intensity: "spicy" },
        { id: 3, name: "Taylor", intensity: "extreme" },
    ]);

    const getGradientColors = (intensity: string) => {
        switch (intensity) {
            case 'mild': return ['#4ade80', '#3b82f6'];
            case 'spicy': return ['#fbbf24', '#f97316'];
            case 'extreme': return ['#ef4444', '#7c3aed'];
            default: return ['#333', '#555'];
        }
    };

    const getIcon = (intensity: string) => {
        switch (intensity) {
            case 'mild': return 'face';
            case 'spicy': return 'whatshot'; // face_3 replacement
            case 'extreme': return 'sentiment-satisfied-alt';
            default: return 'person';
        }
    };

    const removePlayer = (id: number) => {
        setPlayers(players.filter(p => p.id !== id));
    };

    return (
        <SafeAreaView className="flex-1 bg-[#0c0c0e]">

            {/* Header */}
            <View className="px-8 pt-4 pb-4">
                <View className="flex-row justify-between items-center mb-4">
                    <Text className="text-xs font-bold text-zinc-500">9:41</Text>
                    {/* Status icons omitted for simplicity */}
                </View>
                <Text className="text-5xl font-display uppercase tracking-tighter leading-none italic">
                    <Text className="text-transparent text-vibrant-orange">Who is</Text>
                    {"\n"}
                    <Text className="text-white">Playing?</Text>
                </Text>
                <Text className="text-zinc-400 font-sans mt-2 uppercase tracking-[0.2em] text-[10px] font-bold">
                    Manage your squad
                </Text>
            </View>

            {/* Player List */}
            <ScrollView className="flex-1 px-6 py-4" contentContainerStyle={{ gap: 12 }}>
                {players.map((player) => (
                    <View key={player.id} className="flex-row items-center justify-between bg-zinc-900/50 p-3 rounded-2xl border border-white/5">
                        <View className="flex-row items-center gap-4">
                            <LinearGradient
                                colors={getGradientColors(player.intensity)}
                                className="w-12 h-12 rounded-full items-center justify-center shadow-lg"
                            >
                                <MaterialIcons name={getIcon(player.intensity) as any} size={24} color="white" />
                            </LinearGradient>
                            <Text className="text-xl text-white font-display uppercase tracking-tight">{player.name}</Text>
                        </View>
                        <TouchableOpacity
                            onPress={() => removePlayer(player.id)}
                            className="w-10 h-10 items-center justify-center"
                        >
                            <MaterialIcons name="close" size={24} color="#71717a" />
                        </TouchableOpacity>
                    </View>
                ))}

                <TouchableOpacity className="h-16 border-2 border-dashed border-zinc-700 rounded-2xl flex-row items-center justify-center gap-2 mt-2 active:bg-white/5">
                    <MaterialIcons name="add-circle-outline" size={24} color="#a1a1aa" />
                    <Text className="text-lg text-zinc-400 font-display uppercase tracking-tight">Add Player</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* Footer Actions */}
            <View className="px-6 pb-4 gap-6">
                <TouchableOpacity
                    className="w-full bg-white h-16 rounded-full items-center justify-center active:scale-95 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    onPress={() => router.push('/game')} // Navigate to game
                >
                    <Text className="text-black text-2xl font-display uppercase tracking-tight">Confirm Players</Text>
                </TouchableOpacity>

                <BottomNav active="players" />
            </View>

        </SafeAreaView>
    );
}
