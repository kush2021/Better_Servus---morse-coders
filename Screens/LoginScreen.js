import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Icon, Image, Text } from 'react-native-elements';
import { auth } from "../firebase";

export default function LoginScreen() {
    const [isLogin, setIsLogin] = useState(true);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    useEffect(() => {
        // if already logged in, go to accounts
        const loggedIn = onAuthStateChanged(auth, (user) => {
            if (user) {
                // navigation.navigate("Accounts");
            }
        });
        return loggedIn;
    }, []);

    const login = async () => {
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate("Accounts");
        })
        .catch((error) => {
            console.log(error);
        });
    }

    const signup = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigation.navigate("Accounts");
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/servus-logo.png")}/>
            <View style={styles.inputContainer}>
                <View style={styles.singleInput}>
                    <Icon
                        type="feather"
                        color="#8e8e93"
                        name="user"
                    />
                    <TextInput style={styles.input} autoCapitalize="none" textContentType="emailAddress" keyboardType="email-address" placeholder="email" onChangeText={newText => setEmail(newText)} clearButtonMode="always" value={email}/>
                </View>
                <View style={styles.singleInput}>
                    <Icon
                        type="feather"
                        color="#8e8e93"
                        name="lock"
                        />
                    <TextInput style={styles.input} placeholder="password" secureTextEntry onChangeText={newText => setPassword(newText)} clearButtonMode="always" value={password}/>
                </View>
            </View>
            {isLogin && <Text style={styles.forgotPass}>Forgot Password?</Text>}

            <Pressable style={styles.button} onPress={() => {
                if(isLogin){
                    login();
                } else {
                    signup();
                }
                setEmail("");
                setPassword("");
            }}>
                <Text style={styles.buttonText}>{isLogin ? "Sign In" : "Sign Up"}</Text>
            </Pressable>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        {isLogin ? "Need an account?" : "Have an account?"}
                    </Text>
                    <Pressable onPress={() => setIsLogin(!isLogin)}>
                        <Text style={styles.footerBold}>
                            {isLogin ? "Sign Up Here" : "Sign In Here"}
                        </Text>
                    </Pressable>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: "center",
        flex: 1,
    },
    image: {
        marginTop: 100,
        marginBottom: 20,
        width: 268,
        height: 75
    },
    input: {
        height: 45,
        width: 300,
        paddingLeft: 8,
    },
    inputContainer: {
        marginTop: 20,
    },
    singleInput: {
        marginTop: 20,
        borderWidth: "0.5",
        borderRadius: 10,
        paddingHorizontal: 10,
        borderColor: "#8e8e93",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 3,
    },
    forgotPass: {
        color: "#3070B6",
        fontWeight: "500",
        marginTop: 10,
        alignSelf: "flex-end",
        marginRight: 35,
        fontFamily: "SFcompactSemibold",
    },
    button: {
        marginTop: 20,
        width: 345,
        height: 50,
        fontWeight: "500",
        backgroundColor: "#3070B6",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "600",
        fontFamily: "SFcompactSemibold",
    }, 
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "auto",
        marginBottom: 40
    },
    footerBold: {
        paddingLeft: 5,
        fontWeight: "600",
        color: "#3070B6",
        fontFamily: "SFcompactSemibold",
    },
    footerText: {
        color: "#8e8e93",
        fontFamily: "SFcompactRegular",
    }
})