import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Button,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	MenuItem,
	OutlinedInput,
	TextField,
} from "@mui/material";
import React, { useState } from "react";

function FormComponent({ onSubmit }) {
	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const [formData, setFormData] = useState({
		id: "",
		fname: "",
		lname: "",
		email: "",
		mobileNo: "",
		username: "",
		password: "",
		// ... add other form fields here
	});

	const handleFormChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		onSubmit(formData); // Pass the form data to the parent component
	};

	const roles = [
		{
			value: "supervisor",
			label: "Supervisor",
		},
		{
			value: "architect",
			label: "Architect",
		},
		{
			value: "electrician",
			label: "Electrician",
		},
		{
			value: "product_manager",
			label: "Product Manager",
		},
		{
			value: "engineer",
			label: "Engineer",
		},
		{
			value: "surveyor",
			label: "Surveyor",
		},
		{
			value: "estimator",
			label: "Estimator",
		},
	];

	return (
		<form onSubmit={handleFormSubmit}>
			<FormControl sx={{ m: 1 }} variant='outlined'>
				<TextField
					required
					fullWidth
					label='User ID'
					type='number'
					name='id'
					value={formData.id}
					onChange={handleFormChange}
					placeholder='User ID'
				/>
			</FormControl>
			<FormControl sx={{ m: 1 }} variant='outlined'>
				<TextField
					required
					label='First Name'
					type='text'
					name='fname'
					value={formData.fname}
					onChange={handleFormChange}
					placeholder='First Name'
				/>
			</FormControl>
			<FormControl sx={{ m: 1 }} variant='outlined'>
				<TextField
					required
					label='Last Name'
					type='text'
					name='lname'
					value={formData.lname}
					onChange={handleFormChange}
					placeholder='Last Name'
				/>
			</FormControl>
			<FormControl sx={{ m: 1 }} variant='outlined'>
				<TextField
					required
					label='Email'
					type='email'
					name='email'
					value={formData.email}
					onChange={handleFormChange}
					placeholder='Email'
				/>
			</FormControl>
			<FormControl sx={{ m: 1 }} variant='outlined'>
				<TextField
					required
					label='Mobile No'
					type='number'
					name='mobileNo'
					value={formData.mobileNo}
					onChange={handleFormChange}
					placeholder='Mobile No'
				/>
			</FormControl>
			<FormControl sx={{ m: 1, width: 500 }} variant='outlined'>
				<TextField
					required
					id='outlined-select-currency'
					select
					label='Select Role Type'
					name='roleType'
					defaultValue={""}
					onChange={handleFormChange}
				>
					{roles.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</FormControl>
			<FormControl sx={{ m: 1 }} variant='outlined'>
				<TextField
					required
					label='Username'
					type='name'
					name='username'
					defaultValue='engineer  '
					value={formData.username}
					onChange={handleFormChange}
					placeholder='Username'
				/>
			</FormControl>
			<FormControl sx={{ m: 1, width: "25ch" }} variant='outlined'>
				<InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
				<OutlinedInput
					id='outlined-adornment-password'
					type={showPassword ? "text" : "password"}
					endAdornment={
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								edge='end'
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					}
					label='Password'
					name='password'
					required
					value={formData.password}
					onChange={handleFormChange}
				/>
			</FormControl>
			<Button style={{ margin: "15px" }} type='submit'>
				Add
			</Button>
		</form>
	);
}

export default FormComponent;
