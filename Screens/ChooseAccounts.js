/* The ChooseAccounts.js file contains the code for choosing an account for internal transfers. */

/* Import statements. */
import {
	useState,
	useEffect
} from "react";
import {
	FlatList,
	StyleSheet,
	TouchableOpacity,
	View
} from "react-native";
import {Text} from "react-native-elements";
import {db} from "../firebase";
import {
	collection,
	getDocs
} from "firebase/firestore";
import {useNavigation} from "@react-navigation/native";

/**
 * The ChooseAccounts() function is called when the account-choosing screen is opened.
 * @returns The screen to display.
 */
export default function ChooseAccounts() {
	const [accounts, setAccounts] = useState([]);
	const navigation = useNavigation();

	/* Get account data from Firebase. */
	useEffect(() => {
		async function fetchData() {
			const querySnapshot = await getDocs(collection(db, "accounts"));
			const docs = []
			querySnapshot.forEach((doc) => {
				docs.push({id: doc.id, ...doc.data()});
			})
			setAccounts(docs);
		}
		fetchData();
	}, [])

	/* Define how the accounts should render. */
	const renderItem = ({item}) => (
		<TouchableOpacity>
			<View style = {styles.container}>
				<Text style = {styles.name}>
					{item.name}
				</Text>
				<Text style = {styles.balance}>
					{item.amount.toLocaleString()}
				</Text>
			</View>
		</TouchableOpacity>
	)

	/* Return the screen. */
	return (
		<View style = {styles.screen}>
			<FlatList
				data = {accounts}
				renderItem = {renderItem}
				keyExtractor = {(item) => item.id}
			/>
		</View>
	)
}

/* The styles used. */
const styles = StyleSheet.create({
	balance: {
		fontWeight: "600",
		fontSize: 16
	},
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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
    name: {
        fontSize: 15,
        fontFamily: "SFcompactRegular",
    },
	screen: {
		marginTop: 10
	}
});