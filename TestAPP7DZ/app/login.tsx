import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View, useColorScheme } from "react-native";

function ValidateLogin(usuarios: string, password: string, router: any) {
    if (usuarios === null || usuarios === "") return Alert.alert("Error", "El campo usuario es obligatorio");
    if (password === null || password === "") return Alert.alert("Error", "El campo contraseña es obligatorio");

    // Validacion
    if (usuarios === "admin" && password === "123456") {
        Alert.alert("¡Exito!", "Inicio de sesion exitoso", [{ text: "OK", onPress: () => router.replace("/(tabs)") }]);
    } else {
        Alert.alert("Error", "Credenciales incorrectas. Prueba con:\nUsuario: admin\nContraseña: 123456");
    }
}

export default function Login() {
    const route = useRouter();
    const theme = useColorScheme();
    const [form, setForm] = useState({
        usuario: "",
        password: "",
    });

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: theme === "dark" ? "#000" : "#fff", flex: 1 }}>
            <View>
                <Image source={require("../assets/images/klipartz.com.png")} style={styles.reactLogo} />
            </View>

            <View style={styles.containerView}>
                <Text style={[styles.Text, { textAlign: "center", marginVertical: 20, color: theme === "dark" ? "#fff" : "#000" }]}>Bienvenido</Text>
                <TextInput placeholder="Nombre de usuario" placeholderTextColor={theme === "dark" ? "#aaa" : "#555"} style={[styles.input, { color: theme === "dark" ? "#fff" : "#000" }, { borderColor: theme === "dark" ? "#ccc" : "#212121" }]} onChangeText={(text) => setForm({ ...form, usuario: text })} />

                <TextInput placeholder="Contraseña" placeholderTextColor={theme === "dark" ? "#aaa" : "#555"} secureTextEntry={true} textContentType="password" keyboardType="default" style={[styles.input, { color: theme === "dark" ? "#fff" : "#000" }, { borderColor: theme === "dark" ? "#ccc" : "#212121" }]} onChangeText={(text) => setForm({ ...form, password: text })} />

                <Pressable style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "#844302ff" : "#ea7d10ff" }]} onPress={() => ValidateLogin(form.usuario, form.password, route)}>
                    <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>Iniciar Sesion</Text>
                </Pressable>

                <Text style={{ textAlign: "center", marginVertical: 20, color: theme === "dark" ? "#fff" : "#000" }}>
                    ¿Olvidaste tu contraseña?{" "}
                    <Text style={{ color: "#ea7d10ff", fontWeight: "bold" }} onPress={() => route.push("/login")}>
                        Recuperar contraseña
                    </Text>
                </Text>

                <Pressable style={({ pressed }) => [styles.button, { backgroundColor: pressed ? "#a05947ff" : "#f59c85ff" }]}>
                    <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>Crear una cuenta</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerView: {
        marginLeft: 25,
        marginRight: 25,
    },

    Text: {
        color: "#fff",
        fontSize: 24,
    },

    reactLogo: {
        marginTop: 50,
        marginBottom: 10,
        width: "auto",
        height: 250,
        resizeMode: "contain",
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 12,
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginVertical: 8,
    },
});
