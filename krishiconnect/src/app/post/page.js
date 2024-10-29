"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Chip,
  Container,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useSnackbar } from "../../component/snackbar";

export default function Post() {
  const [category, setCategory] = useState("Success Story");
  const { showSnackbar } = useSnackbar(); // Use the Snackbar context
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    showSnackbar("Story submitted successfully!", "success"); // Show success message
    router.push("/");
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <Container maxWidth="lg">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={8}
        mb={4}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Share Your Story
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Tell us your farming journey
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} sx={{ width: "50%" }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                placeholder="Enter your story title"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Content"
                placeholder="Share your journey here"
                multiline
                rows={4}
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Category
              </Typography>
              <Box display="flex" gap={2}>
                <Chip
                  label="Success Story"
                  onClick={() => handleCategoryChange("Success Story")}
                  color={category === "Success Story" ? "success" : "default"}
                  sx={{
                    bgcolor:
                      category === "Success Story"
                        ? "success.light"
                        : "grey.300",
                    color: category === "Success Story" ? "black" : "inherit",
                  }}
                />
                <Chip
                  label="Challenges Faced"
                  onClick={() => handleCategoryChange("Challenges Faced")}
                  color={category === "Challenges Faced" ? "error" : "default"}
                  sx={{
                    bgcolor:
                      category === "Challenges Faced"
                        ? "error.light"
                        : "grey.300",
                    color:
                      category === "Challenges Faced" ? "black" : "inherit",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                sx={{ bgcolor: "black", color: "white", width: "100%" }}
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
