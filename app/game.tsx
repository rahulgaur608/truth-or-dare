import { View, Text, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function GameScreen() {
    const router = useRouter();

    const handleSelection = (type: 'truth' | 'dare') => {
        Alert.alert(
            type.toUpperCase(),
            type === 'truth'
                ? "Reveal your deepest secret!"
                : "Do something unexpected and thrilling!",
            [{ text: "Next Turn", onPress: () => { } }]
        );
    };

    return (
        <View className="flex-1 bg-black">
            <StatusBar style="light" hidden />

            {/* Top Half - DARE */}
            <TouchableOpacity
                className="flex-1"
                activeOpacity={0.9}
                onPress={() => handleSelection('dare')}
            >
                <LinearGradient
                    colors={['#FF6F61', '#FF4D6D']} // Gradient Dare
                    className="flex-1 items-center justify-center p-6"
                >
                    <View className="items-center">
                        <MaterialIcons name="arrow-forward" size={80} color="white" style={{ transform: [{ rotate: '90deg' }], opacity: 0.7 }} />
                        <Animated.Text entering={FadeInDown.delay(200).springify()} className="text-[80px] font-display font-bold leading-none tracking-tight text-white mt-4">DARE</Animated.Text>
                        <Animated.Text entering={FadeInDown.delay(400).springify()} className="text-xl font-normal opacity-90 mt-4 text-center text-white max-w-xs">
                            "Do something unexpected and thrilling right now!"
                        </Animated.Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

            {/* Bottom Half - TRUTH */}
            <TouchableOpacity
                className="flex-1"
                activeOpacity={0.9}
                onPress={() => handleSelection('truth')}
            >
                <LinearGradient
                    colors={['#6C2AEE', '#8A2BE2']} // Gradient Truth
                    className="flex-1 items-center justify-center p-6"
                >
                    <View className="items-center">
                        <MaterialIcons name="arrow-forward" size={80} color="white" style={{ transform: [{ rotate: '-90deg' }], opacity: 0.7 }} />
                        <Animated.Text entering={FadeInDown.delay(600).springify()} className="text-[80px] font-display font-bold leading-none tracking-tight text-white mt-4">TRUTH</Animated.Text>
                        <Animated.Text entering={FadeInDown.delay(800).springify()} className="text-xl font-normal opacity-90 mt-4 text-center text-white max-w-xs">
                            "Reveal your deepest secret or a funny confession!"
                        </Animated.Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>

            {/* Back Button Overlay */}
            <TouchableOpacity
                className="absolute top-12 left-6 w-12 h-12 bg-black/20 rounded-full items-center justify-center"
                onPress={() => router.back()}
            >
                <MaterialIcons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}
