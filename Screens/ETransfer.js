/* The ETransfer.js file contains the code for the e-transfer screen. */

/* Import statements. */
import {
	Pressable,
	StyleSheet,
	TouchableOpacity,
	View
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {
	Icon,
	Text
} from "react-native-elements";
import {TextInput} from "react-native-gesture-handler";

/**
 * The ETransfer() function is called when the e-transfer screen is opened.
 * @return The screen to display.
 */
export default function ETransfer() {
	const navigation = useNavigation();
	return (
        <View style={styles.screen}>
            <Pressable
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Icon name="arrow-left" type="feather" size="25" />
            </Pressable>
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.text}>Select A Contact</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.text}>Select The Account</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.container}>
                <TextInput
                    style={styles.text}
                    placeholder="Select The Amount"
                    keyboardType="decimal-pad"
                ></TextInput>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.text}
                    placeholder="Security Question"
                ></TextInput>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.text}
                    placeholder="Security Answer"
                ></TextInput>
            </View>
            <TouchableOpacity>
                <View style={styles.confirmButton}>
                    <Text style={styles.bigText}>CONFIRM</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        padding: 20,
        borderRadius: 4,
        alignItems: "flex-start",
    },
    bigText: {
        fontSize: 22,
        fontWeight: "semi-bold",
        color: "#fff"
    },
    confirmButton: {
        backgroundColor: "#3070B6",
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        padding: 10,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        height: 65,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        marginHorizontal: 15,
        marginVertical: 5,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    text: {
        fontSize: 22,
        fontFamily: "SFcompactRegular",
        color: "#D3D3D3",
    },
    screen: {
        marginTop: 10,
    },
});