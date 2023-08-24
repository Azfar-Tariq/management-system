import { IconButton, TextField, Tooltip } from "@mui/material";
import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function MessageBox() {
	return (
		<TextField
			placeholder='Aa'
			variant='filled'
			fullWidth
			InputProps={{
				style: {
					height: "40px",
					padding: "0px",
				},
				inputstyle: {
					textAlign: "center",
				},
				endAdornment: (
					<Tooltip title='Emoji'>
						<IconButton>
							<EmojiEmotionsIcon />
						</IconButton>
					</Tooltip>
				),
			}}
		/>
	);
}

export default MessageBox;
