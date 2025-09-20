import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View, useColorScheme } from "react-native";
import { TextInput } from "react-native-gesture-handler";

function ValidateRegister(usuarios: string, correo: string, password: string) {
   if (usuarios === null || usuarios === '') return Alert.alert("Advertencia", "Debe ingresar un usuario");
   if (correo === null || correo === '') return Alert.alert("Advertencia", "Debe ingresar un correo");
   if (password === null || password === '') return Alert.alert("Advertencia", "Debe ingresar una contraseña");
}

export default function Register() {
    const router = useRouter();
    const theme = useColorScheme();

    const [form, setForm] = useState({
        usuario: "",
        correo: "",
        password: ""
    });
 
    return(
        <ScrollView contentContainerStyle={{backgroundColor: theme === 'dark' ? '#212121' : '#CFD8DC', flex: 1 }}>
            <View style={styles.reactLogo}>
                <Image source={require('@/assets/images/banner.png')} style={styles.reactLogo} />
            </View>
            <View style={styles.containerView}>
                <Text style={{color: theme === 'dark' ? '#fff' : "#000", fontSize: 28, textAlign: "center", marginBottom: 50}}> Bienvenidos</Text>

                <TextInput 
                    placeholder="Nombre de usuario"
                    placeholderTextColor={theme === 'dark' ? '#aaa' : "#555"}
                    style={[
                        styles.input,
                        {color: theme === 'dark' ? "#fff" : "#555"},
                        {borderColor: theme === "dark" ? "#ccc" : "#212121"}
                    ]} 
                    onChangeText={(text) => setForm({...form, usuario: text})} />

                <TextInput 
                    placeholder="Correo electronico"
                    placeholderTextColor={theme === 'dark' ? '#aaa' : "#555"}
                    style={[
                        styles.input,
                        {color: theme === 'dark' ? "#fff" : "#555"},
                        {borderColor: theme === "dark" ? "#ccc" : "#212121"}
                    ]} 
                    onChangeText={(text) => setForm({...form, correo: text})} />

                <TextInput
                    placeholder="Contraseña"
                    placeholderTextColor={theme === 'dark' ? "#aaa" : "#555"}
                    secureTextEntry = {true}
                    textContentType="password"
                    keyboardType="default"
                    style={[
                        styles.input,
                        {color: theme === 'dark' ? "#fff" : "#555"},
                        {borderColor: theme === 'dark' ? "#ccc" : "#212121"}
                    ]} 
                    onChangeText={(text) => setForm({...form, password: text})} />

                <Pressable 
                    style={({pressed}) => [
                        styles.button,
                        { backgroundColor: pressed ? "#3F51B5" : "navy"}
                    ]}
                    onPress={() => ValidateRegister(form.usuario, form.correo, form.password)}
                >
                    <Text style={{color: 'white', fontSize: 18}}>Registrarse</Text>
                </Pressable>
    
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
    },

    containerView: {
        marginLeft: 20,
        marginRight: 20,
    },

    Text: {
        color: '#fff',
        fontSize: 24,
    },

    reactLogo: {
        height: 350,
        width: 500,
        bottom: 0,
        left: 0,
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
        alignItems: "center",
        justifyContent: "center",
    },
});