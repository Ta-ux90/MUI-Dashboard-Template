import React from "react";
import Drawer from "./Drawer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import Accordion from "../items/Accordian";

//--------------------------------------------------------

const appsData = [
  { title: "Slack", image: "https://i.pinimg.com/1200x/5a/48/b9/5a48b9cc96d7b2ac274f628b25a7f000.jpg", description: "Team collaboration tool" },
  { title: "Trello", image: "https://i.pinimg.com/1200x/29/e9/2d/29e92d0ec046a32f353d246c09287b7e.jpg", description: "Project management app" },
  { title: "Zoom", image: "https://i.pinimg.com/1200x/bb/aa/84/bbaa84374d58162b9dfac9b7a2d0668b.jpg", description: "Video conferencing app" },
  { title: "Asana", image: "https://i.pinimg.com/1200x/4b/d8/99/4bd89951843a6cfd6ae4c0348fc46aa4.jpg", description: "Task management software" },
  { title: "Figma", image: "https://i.pinimg.com/1200x/7c/5a/c9/7c5ac9a364126552cbb9db4d18c6f60f.jpg", description: "Design & prototyping tool" },
  { title: "GitHub", image: "https://i.pinimg.com/1200x/12/74/a6/1274a68df7cd8ff73de8c5cbb9454014.jpg", description: "Version control & collaboration" },
];

function Apps() {
  return (
    <Box sx={{ backgroundColor: "#f7f9fc", minHeight: "100vh" }}>
      <Drawer />
      <Box height={80} />

      <Box
        sx={{
          textAlign: "center",
          py: 4,
          background: "linear-gradient(135deg, #1976d2, #42a5f5)",
          color: "#fff",
          borderRadius: "0 0 20px 20px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Typography variant="h3" fontWeight={600}>
          Apps
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
          Dashboard / Apps
        </Typography>
      </Box>

      <Box sx={{ p: { xs: 2, sm: 4, md: 6 }, mt: 6 }}>
        <Typography variant="h4" fontWeight={600} gutterBottom textAlign="center">
          Our Apps
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {appsData.map((app, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  borderRadius: 3,
                  textAlign: "center",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    height: "200px",
                    overflow: "hidden",
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                >
                  <img
                    src={app.image}
                    alt={app.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </Box>

                <Box sx={{ p: 3, flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {app.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {app.description}
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ borderRadius: 3 }}>
                    Learn More
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ p: { xs: 2, sm: 4, md: 6 }, mt: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: "#fff",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
              }}
            >
              <Typography variant="h5" fontWeight={600} gutterBottom>
                FAQ
              </Typography>
              <Accordion />
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: "#fff",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
              }}
            >
              <Typography variant="h5" fontWeight={600} gutterBottom>
                FAQ Square
              </Typography>
              <Accordion />
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}

export default Apps;
