import { IconButton, InputAdornment, TextField, Tooltip } from "@mui/material";
import React from "react";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

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
