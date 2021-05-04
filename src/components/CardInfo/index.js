import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { AccessAlarm, ArrowDownward } from "@material-ui/icons";
import styles from "./styles";

const CardInfo = ({ title, subtitle }) => {
	const classes = styles();

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Box className={classes.infoContainer}>
					<Box className={classes.titleContainer}>
						<Typography component="h6" className={classes.title}>
							{title}
						</Typography>
						<Typography component="h5" className={classes.subtitle}>
							{subtitle}
						</Typography>
					</Box>
					<Box className={classes.iconCircle}>
						<AccessAlarm className={classes.icon} />
					</Box>
				</Box>
				<Box className={classes.textInfoContainer}>
					<ArrowDownward className={classes.iconRed} />
					<Typography className={classes.textRed}>12%</Typography>
					<Typography className={classes.textInfo}>
						Since last month
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default CardInfo;
