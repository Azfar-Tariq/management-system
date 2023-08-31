import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import React from "react";

function MessageBox() {
	return (
		<TextField
			variant='outlined'
			placeholder='Aa'
			fullWidth
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<Tooltip title='Emoji'>
							<IconButton>
								<EmojiEmotionsIcon />
							</IconButton>
						</Tooltip>
					</InputAdornment>
				),
			}}
		/>
	);
}

export default MessageBox;
