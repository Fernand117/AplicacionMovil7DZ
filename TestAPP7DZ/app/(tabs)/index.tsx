import { Image } from "expo-image";
import { Button, StyleSheet, Text, Button } from "react-native";

import { HelloWave } from "@/components/hello-wave";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const router = useRouter();
    return (
        <ParallaxScrollView headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }} headerImage={<Image source={require("@/assets/images/partial-react-logo.png")} style={styles.reactLogo} />}>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Bienvenido xd!</ThemedText>
                <Button title="Da clic aqui xd" />
                <Text>MI PRIMERA APLICACIÓN MÓVIL</Text>
                <Text>ESTA ES UNA PRUEBA DE GIT PERSONAL</Text>
                <Text>Prueba Alejandro Olmos</Text>
                <text>RAMA DE ZAHIR Y BOTON</text>
                <button>Click me soy ZAHIR</button>
                <Button title={"Click me"}></Button>
                <HelloWave />
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText type="subtitle">Da click al botton</ThemedText>

                <Button title="Click aqui para ganar un iphone" color="#dc3bdcff" onPress={() => router.push("/virus")}></Button>
            </ThemedView>

            <Text style={{ color: "#ff0000" }}>Mi primera aplicación con EXPO y git</Text>
            <Text style={{ color: "#ffaa00" }}>Este es mi botón</Text>
            <Button title={"¡Tocame!"} onPress={() => alert("¡Botón presionado!")} />
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: "absolute",
    },
});
