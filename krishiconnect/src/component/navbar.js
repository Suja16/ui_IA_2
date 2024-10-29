import { Avatar, Box, Button, TextField, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mb={4}
    >
      <Box display="flex" gap={2} alignItems="center">
        <Avatar sx={{ ml: 1 }}>A</Avatar>
        <Typography variant="h5" fontWeight="bold">
          Krishi Connect
        </Typography>
      </Box>
      <Box display="flex" gap={2}>
        <Button color="black" variant="text">
          Home
        </Button>
        <Button color="black" variant="text">
          Forum
        </Button>
        <Button color="black" variant="text">
          Tools
        </Button>
        <TextField size="small" placeholder="Search in site" />
      </Box>
    </Box>
  );
}
