/* The ETransfer.js file contains the code for the e-transfer screen. */

/* Import statements. */
import {Pressable, StyleSheet, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {Icon} from "react-native-elements";

/**
 * The ETransfer() function is called when the e-transfer screen is opened.
 * @return The screen to display.
 */
export default function ETransfer() {
	const navigation = useNavigation();
	return (
		<View style = {styles.screen}>
			<Pressable
				style = {styles.button}
				onPress = {() => navigation.goBack()}
			>
				<Icon
					name = "arrow-left"
					type="feather"
					size="25"
				/>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	button: {
		padding: 20,
		borderRadius: 4,
		alignItems: "flex-start"
	},
	screen: {
		marginTop: 10
	}
})