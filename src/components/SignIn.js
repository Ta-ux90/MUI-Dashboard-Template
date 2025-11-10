import React from "react";
import {
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  Typography,
  Container,
  Divider,
} from "@mui/material";
import Drawer from "./Drawer";
import Footer from "./Footer";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

//--------------------------------------------------------

function SignIn() {
  return (
    <>
      <Drawer />

      <Container component="main" maxWidth="lg" sx={{ mt: 15, mb: 10 }}>
        <CssBaseline />
        <Grid
          container
          sx={{
            minHeight: "70vh",
            boxShadow: 3,
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={7}
            sx={{
              position: "relative",
              backgroundImage:
                "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(2px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                flexDirection: "column",
                textAlign: "center",
                px: 3,
              }}
            >
              <Typography variant="h4" sx={{ mb: 2, fontWeight: "bold" }}>
                Welcome Back!
              </Typography>
              <Typography variant="body1">
                Enter your credentials to access your dashboard
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              px: 4,
              py: 6,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
                Sign In
              </Typography>

              <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  sx={{ mb: 2 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  sx={{ mb: 2 }}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    py: 1.5,
                    backgroundColor: "#162640",
                    "&:hover": { backgroundColor: "#0f1d36", transform: "scale(1.02)" },
                  }}
                >
                  Sign In
                </Button>

                <Box sx={{ textAlign: "center", mt: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ cursor: "pointer", color: "#1976d2" }}
                  >
                    Forgot password?
                  </Typography>
                </Box>

                <Divider sx={{ my: 3 }}>OR</Divider>

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<GoogleIcon />}
                      sx={{
                        textTransform: "none",
                        color: "#db4437",
                        borderColor: "#db4437",
                        "&:hover": { backgroundColor: "#fce8e6" },
                      }}
                    >
                      Google
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<FacebookIcon />}
                      sx={{
                        textTransform: "none",
                        color: "#1877f2",
                        borderColor: "#1877f2",
                        "&:hover": { backgroundColor: "#e7f0fd" },
                      }}
                    >
                      Facebook
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}

export default SignIn;
