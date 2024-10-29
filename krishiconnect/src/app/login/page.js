"use client";
import { useRouter } from "next/navigation";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useSnackbar } from "../../component/snackbar";

export default function Login() {
  const router = useRouter();
  const { showSnackbar } = useSnackbar(); // Use Snackbar context

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "true");
    showSnackbar("Login successful!", "success"); // Show success message
    router.push("/"); // Redirect to home
  };

  return (
    <Container maxWidth="sm">
      <Box mt={8} textAlign="center">
        <Typography variant="h4" mb={2}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            required
          />
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, bgcolor: "black" }}
          >
            Login
          </Button>
        </form>
        <Button
          onClick={() => router.push("/register")}
          sx={{ mt: 2 }}
          variant="text"
        >
          Don’t have an account? Register
        </Button>
      </Box>
    </Container>
  );
}
