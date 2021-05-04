import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
	root: {
		minWidth: 275,
		width: 400,
	},
	title: {
		fontWeight: 700,
		fontSize: 14,
		lineHeight: 1.6,
		color: "rgb(107, 119, 140)",
		textTransform: "uppercase",
	},
	subtitle: {
		fontWeight: 700,
		fontSize: 24,
		lineHeight: 1.6,
		color: "rgb(23, 43, 77)",
		textTransform: "uppercase",
	},
	iconCircle: {
		width: 60,
		height: 60,
		borderRadius: 100,
		backgroundColor: "red",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	icon: {
		color: "white",
		fontSize: 35,
	},
	infoContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
	},
	titleContainer: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		flexDirection: "column",
	},
	textInfoContainer: {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		flexDirection: "row",
	},
	iconRed: {
		color: "red",
		fontSize: 12,
		marginLeft: 5,
	},
	textRed: {
		color: "red",
		fontSize: 12,
		marginLeft: 5,
	},
	textInfo: {
		color: "grey",
		fontSize: 12,
		marginLeft: 5,
	},
});

export default styles;
