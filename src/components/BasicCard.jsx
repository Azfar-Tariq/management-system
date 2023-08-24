import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function BasicCard() {
	return (
		<Card sx={{ minWidth: 240 }}>
			<CardContent>
				<Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
					Lorem Ipsum
				</Typography>
				<Typography variant='h5' component='div'>
					140
				</Typography>
			</CardContent>
		</Card>
	);
}
