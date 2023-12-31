import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

import { setOpen } from "../features/productSlice";
import FormComponent from "./Form";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(2),
	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

function BootstrapDialogTitle(props) {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label='close'
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
}

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
	const dispatch = useDispatch();
	const open = useSelector((state) => state.product.open);

	const handleClickOpen = () => {
		dispatch(setOpen(true));
	};
	const handleClose = () => {
		dispatch(setOpen(false));
	};

	const handleFormSubmit = (formData) => {
		alert("Form data submitted: " + JSON.stringify(formData));
		handleClose();
	};

	return (
		<div>
			<Stack direction='row' spacing={2}>
				<Button
					variant='contained'
					endIcon={<AddIcon />}
					onClick={handleClickOpen}
				>
					Add User
				</Button>
			</Stack>
			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}
			>
				<BootstrapDialogTitle
					id='customized-dialog-title'
					onClose={handleClose}
				>
					Add User
				</BootstrapDialogTitle>
				<DialogContent dividers>
					<FormComponent onSubmit={handleFormSubmit} />
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={handleClose}>
						Cancel
					</Button>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}
