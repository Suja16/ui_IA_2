"use client";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Grid,
  Container,
  TextField,
  Chip,
  CardMedia,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Carousel from "react-material-ui-carousel";

const carouselItems = [
  {
    text: "The best platform to connect farmers worldwide.",
  },
  {
    text: "Great insights on sustainable farming techniques!",
  },
  {
    text: "A must-join community for every farmer.",
  },
];

export default function HomeContent() {
  const router = useRouter();
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          display="flex"
          alignItems="center"
          gap={4}
          justifyContent="space-between"
        >
          <Avatar
            sx={{ width: 100, height: 100 }}
            src="https://images.unsplash.com/photo-1527847263472-aa5338d178b8?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Box flex={1}>
            <Typography variant="h5" fontWeight="bold">
              Content Hub
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Share your farming journey and learn from others
            </Typography>
            <Chip label="Success Stories" />
          </Box>
          <Button
            variant="contained"
            sx={{ mt: 2, bgcolor: "black" }}
            onClick={() => router.push("/post")}
          >
            Post Story
          </Button>
        </Box>

        <Box mt={8}>
          <Box display="flex" gap={4} sx={{ alignItems: "center" }}>
            <CardMedia
              component="img"
              sx={{ width: 151, height: 151 }}
              image="https://plus.unsplash.com/premium_photo-1682092016074-b136e1acb26e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Placeholder"
            />
            <Box>
              <Typography variant="h4" fontWeight="bold" mb={2}>
                User Stories
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Read inspiring stories from the farming community
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={3} mt={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100, m: 4 }}
                  image="https://images.unsplash.com/photo-1614025000673-edf238aaf5d4?q=80&w=2578&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Placeholder"
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    From Seed to Harvest
                  </Typography>
                  <Typography color="textSecondary">
                    Learn how a small farm grew into a successful business
                  </Typography>
                  <Chip label="Success Stories" />
                  <Box mt={2} display="flex" alignItems="center">
                    <Avatar sx={{ ml: 1 }}>A</Avatar>
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      Anil Kumar
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 100, height: 100, m: 4 }}
                  image="https://plus.unsplash.com/premium_photo-1682092640390-986e05bcbb5d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Placeholder"
                />
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    Overcoming Challenges
                  </Typography>
                  <Typography color="textSecondary">
                    Discover how a farmer tackled pests and boosted yield
                  </Typography>
                  <Chip label="Inspirational" />
                  <Box mt={2} display="flex" alignItems="center">
                    <Avatar sx={{ ml: 1 }}>A</Avatar>
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      Anil Kumar
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box mt={8}>
          <Box display="flex" justifyContent="space-between">
            <Box>
              <Typography variant="h4" fontWeight="bold" mb={4}>
                Community Feedback
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                See what others are saying about Sustained Farming
              </Typography>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151, height: 151 }}
              image="https://plus.unsplash.com/premium_photo-1682092016074-b136e1acb26e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Placeholder"
            />
          </Box>

          <Grid container spacing={3} mt={3}>
            {["Sarah Farmer", "John Green", "Emma Waters"].map(
              (name, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar>{name[0]}</Avatar>
                        <Typography variant="body1">{name}</Typography>
                      </Box>
                      <Typography variant="body2" mt={1}>
                        {index === 0
                          ? "Such a helpful platform for new farmers"
                          : index === 1
                          ? "Love the success stories shared here"
                          : "Great tips on budgeting and meal planning"}
                      </Typography>
                      <Typography variant="body2" mt={1}>
                        👍 👏
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
        </Box>

        <Box mt={8} textAlign="center" py={4} bgcolor="grey.200">
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Join the Sustained Farming community today for sustainable growth
          </Typography>

          <Carousel>
            {carouselItems.map((item, index) => (
              <Box key={index} p={4}>
                <Typography variant="body1">{item.text}</Typography>
              </Box>
            ))}
          </Carousel>
        </Box>

        <Box mt={4} display="flex" justifyContent="center" gap={6}>
          <Typography variant="body2">
            © 2022 Sustained Farming. All rights reserved.
          </Typography>
          <Box display="flex" gap={2}>
            <Typography variant="body2">Privacy Policy</Typography>
            <Typography variant="body2">Contact Us</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
