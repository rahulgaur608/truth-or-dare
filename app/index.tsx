import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import BottomNav from "../components/BottomNav";

export default function IntensityScreen() {
    const router = useRouter();

    return (
        <SafeAreaView className="flex-1 bg-[#0c0c0e]">
            {/* Background Pattern - simulated with subtle dots or just dark bg for now */}

            {/* Header */}
            <View className="px-8 pt-4 pb-4">
                <Text className="text-5xl font-display uppercase tracking-tighter leading-none italic">
                    <Text className="text-transparent text-vibrant-orange">Intensity</Text>
                    {"\n"}
                    <Text className="text-white">Selection</Text>
                </Text>
                <Text className="text-zinc-400 font-sans mt-2 uppercase tracking-[0.2em] text-[10px] font-bold">
                    How hot can you handle?
                </Text>
            </View>

            {/* Cards */}
            <View className="flex-1 px-6 justify-center gap-4 py-4">
                {/* Mild */}
                <TouchableOpacity
                    activeOpacity={0.9}
                    className="h-28 rounded-chip overflow-hidden"
                    onPress={() => router.push('/game')}
                >
                    <LinearGradient
                        colors={['#4ade80', '#3b82f6']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className="flex-1 flex-row items-center justify-between px-8"
                    >
                        <View>
                            <Text className="text-4xl font-display uppercase leading-none text-black">Mild</Text>
                            <Text className="font-sans text-[10px] uppercase font-bold opacity-80 mt-1 tracking-wider text-black">The Ice Breaker</Text>
                        </View>
                        <MaterialIcons name="eco" size={36} color="black" style={{ opacity: 0.9 }} />
                    </LinearGradient>
                </TouchableOpacity>

                {/* Spicy */}
                <TouchableOpacity
                    activeOpacity={0.9}
                    className="h-28 rounded-chip overflow-hidden"
                    onPress={() => router.push('/game')}
                >
                    <LinearGradient
                        colors={['#fbbf24', '#f97316']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className="flex-1 flex-row items-center justify-between px-8"
                    >
                        <View>
                            <Text className="text-4xl font-display uppercase leading-none text-black">Spicy</Text>
                            <Text className="font-sans text-[10px] uppercase font-bold opacity-80 mt-1 tracking-wider text-black">Getting Heated</Text>
                        </View>
                        <MaterialIcons name="local-fire-department" size={36} color="black" style={{ opacity: 0.9 }} />
                    </LinearGradient>
                </TouchableOpacity>

                {/* Extreme */}
                <TouchableOpacity
                    activeOpacity={0.9}
                    className="h-28 rounded-chip overflow-hidden shadow-lg shadow-red-500/40"
                    onPress={() => router.push('/game')}
                >
                    <LinearGradient
                        colors={['#ef4444', '#7c3aed']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        className="flex-1 flex-row items-center justify-between px-8"
                    >
                        <View>
                            <Text className="text-4xl font-display uppercase leading-none text-white">EXTREME</Text>
                            <Text className="font-sans text-[10px] uppercase font-bold opacity-90 mt-1 tracking-wider text-white">No Limits</Text>
                        </View>
                        <MaterialIcons name="whatshot" size={36} color="white" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            {/* Start Button & Footer */}
            <View className="px-6 pb-4 gap-6">
                <TouchableOpacity
                    className="w-full bg-white h-16 rounded-full items-center justify-center active:scale-95 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    onPress={() => router.push('/game')}
                >
                    <Text className="text-black text-2xl font-display uppercase tracking-tight">Start Playing</Text>
                </TouchableOpacity>

                <BottomNav active="home" />
            </View>

        </SafeAreaView>
    );
}
