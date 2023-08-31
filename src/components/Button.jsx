import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function IconLabelButtons() {
	return (
		<Stack direction='row' spacing={2}>
			<Button variant='contained' endIcon={<AddIcon />}>
				Add User
			</Button>
		</Stack>
	);
}
