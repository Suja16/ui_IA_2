"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Grid,
  Chip,
} from "@mui/material";
import { useRouter } from "next/navigation"; // Import useRouter

export default function Register() {
  const router = useRouter(); // Initialize router

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    phoneNumber: "",
    gender: "Male", // Default gender selection
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleGenderSelect = (gender) => {
    setFormData((prevData) => ({ ...prevData, gender }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
    showSnackbar("Registration successful!", "success"); // Show success message
    router.push("/");
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: "",
      phoneNumber: "",
      gender: "Male",
    });
  };

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="space-between"
        mt={8}
        alignItems="center"
      >
        {/* Left Section: Heading */}
        <Box>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            User Registration Form
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Please fill in the following details
          </Typography>
        </Box>

        {/* Right Section: Form */}
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "50%" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter your password"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Gender
              </Typography>
              <Box display="flex" gap={2}>
                <Chip
                  label="Male"
                  clickable
                  onClick={() => handleGenderSelect("Male")}
                  color={formData.gender === "Male" ? "primary" : "default"}
                />
                <Chip
                  label="Female"
                  clickable
                  onClick={() => handleGenderSelect("Female")}
                  color={formData.gender === "Female" ? "primary" : "default"}
                />
                <Chip
                  label="Prefer not to say"
                  clickable
                  onClick={() => handleGenderSelect("Prefer not to say")}
                  color={
                    formData.gender === "Prefer not to say"
                      ? "primary"
                      : "default"
                  }
                />
              </Box>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="space-between">
              <Button
                type="button"
                variant="outlined"
                onClick={handleReset}
                sx={{ width: "48%" }}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "48%", bgcolor: "black", color: "white" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
