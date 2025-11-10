import React from "react";
import Drawer from "./Drawer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Footer from "./Footer";
import Date from "../items/Date";
import EventNoteIcon from '@mui/icons-material/EventNote';
import WorkIcon from '@mui/icons-material/Work';
import PersonIcon from '@mui/icons-material/Person';

//------------------------------------------------------

const upcomingEvents = [
  { time: "09:00 AM", event: "Team Meeting", type: "work" },
  { time: "12:00 PM", event: "Lunch with Client", type: "personal" },
  { time: "02:00 PM", event: "Project Discussion", type: "work" },
  { time: "04:00 PM", event: "Daily Wrap-up", type: "work" },
  { time: "05:30 PM", event: "Yoga Session", type: "personal" },
  { time: "07:00 PM", event: "Client Feedback Review", type: "meeting" },
];

const getTagColor = (type) => {
  switch (type) {
    case "work": return "#4caf50";
    case "personal": return "#ff9800";
    case "meeting": return "#2196f3";
    default: return "#9e9e9e";
  }
};

function Calender() {
  return (
    <Box sx={{ backgroundColor: "#f5f7fb", minHeight: "100vh" }}>
      <Drawer />
      <Box height={80} />

      <Box
        sx={{
          textAlign: "center",
          py: 4,
          background: "linear-gradient(135deg, #673ab7, #9575cd)",
          color: "#fff",
          borderRadius: "0 0 20px 20px",
          boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Typography variant="h3" fontWeight={600}>
          Calendar
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
          Dashboard / Calendar
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 4, md: 6 }, mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Paper
              elevation={5}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: "#fff",
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
              }}
            >
              <Typography
                variant="h5"
                fontWeight={600}
                textAlign="center"
                gutterBottom
              >
                📅 Calendar View
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Date />
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              elevation={5}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: "#fff",
                height: { xs: "auto", md: "100%" },
                display: "flex",
                flexDirection: "column",
                gap: 2,
                transition: "0.3s",
                "&:hover": { transform: "scale(1.02)", boxShadow: 6 },
              }}
            >
              <Typography
                variant="h6"
                fontWeight={600}
                textAlign="center"
                gutterBottom
              >
                Upcoming Events
              </Typography>
              <Divider />

              <Box sx={{ mt: 2, flexGrow: 1, overflowY: "auto" }}>
                {upcomingEvents.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      p: 1,
                      borderRadius: 1,
                      mb: 1,
                      backgroundColor: "#f9f9f9",
                      "&:hover": { backgroundColor: "#f0f0f0" },
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      {item.time}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      {item.type === "work" && <WorkIcon sx={{ color: getTagColor(item.type), fontSize: 18 }} />}
                      {item.type === "personal" && <PersonIcon sx={{ color: getTagColor(item.type), fontSize: 18 }} />}
                      <Typography variant="body2">{item.event}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, borderRadius: 3 }}
                startIcon={<EventNoteIcon />}
              >
                + Add Event
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </Box>
  );
}

export default Calender;
