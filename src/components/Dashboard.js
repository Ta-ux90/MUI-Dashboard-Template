import React from "react";
import Drawer from "./Drawer";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import LineChart from "../items/LineChart";
import PieChart from "../items/PieChart";
import Footer from "./Footer";

//---------------------------------------------------------

function Dashboard() {
  return (
    <Box sx={{ backgroundColor: "#f5f7fb", minHeight: "100vh" }}>
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
          Dashboard
        </Typography>
        <Typography variant="subtitle1" sx={{ opacity: 0.9 }}>
          Dashboard / Crypto Current
        </Typography>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, sm: 4, md: 6 } }}>
        <Toolbar />

        <Grid container spacing={4} justifyContent="center">
          {[
            { icon: <CreditCardIcon fontSize="large" />, value: "$35,000", label: "Revenue", color: "#8b8de0" },
            { icon: <BorderColorIcon fontSize="large" />, value: "35,000", label: "Orders", color: "#33b5cc" },
            { icon: <TrendingUpIcon fontSize="large" />, value: "$50,000", label: "Leads", color: "#569156" },
            { icon: <AutoFixHighIcon fontSize="large" />, value: "50%", label: "Lead Conversion Rate", color: "#2d71ba" },
          ].map((card, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: card.color,
                  color: "#fff",
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  {card.icon}
                  <Typography variant="h5" fontWeight={600} sx={{ mt: 1 }}>
                    {card.value}
                  </Typography>
                  <Typography variant="body2">{card.label}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, height: { xs: "400px", md: "60vh" } }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Revenue Trends
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <LineChart />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3, height: { xs: "400px", md: "60vh" } }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom textAlign="center">
                  % of Income Budget
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <PieChart />
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Recent Activities
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <List>
                    {[
                      "User John Doe signed in",
                      "Order #1234 completed",
                      "New lead added: ACME Corp",
                      "Payment received: $2,500",
                    ].map((item, idx) => (
                      <ListItem key={idx} divider>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Top Clients
                  </Typography>
                  <Grid container spacing={2}>
                    {[
                      { name: "ACME Corp", revenue: "$15,000" },
                      { name: "Globex Inc", revenue: "$12,500" },
                      { name: "Initech", revenue: "$10,000" },
                    ].map((client, idx) => (
                      <Grid item xs={12} key={idx}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            p: 1,
                            borderRadius: 1,
                            backgroundColor: "#f0f4ff",
                          }}
                        >
                          <Typography>{client.name}</Typography>
                          <Typography fontWeight={600}>{client.revenue}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 6 }}>
          <Typography variant="h5" fontWeight={600} gutterBottom>
            Recent Sales
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <List>
                    {[
                      "Order #101 - $2,500",
                      "Order #102 - $3,200",
                      "Order #103 - $1,800",
                      "Order #104 - $4,000",
                    ].map((item, idx) => (
                      <ListItem key={idx} divider>
                        <ListItemText primary={item} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Notifications
                  </Typography>
                  <List>
                    {[
                      "Server CPU usage high",
                      "New user registration: Jane Doe",
                      "Payment failed for Order #105",
                    ].map((notif, idx) => (
                      <ListItem key={idx} divider>
                        <ListItemText primary={notif} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default Dashboard;
