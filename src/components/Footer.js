import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

//--------------------------------------------

export default function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: '#babcbf',
                p: 6,
            }}
            component="footer"
        >
            <Container maxWidth="sm">
                <Typography variant="body2" color="text.secondary" align="center">
                    {"Copyright © "}
                    <Link color="inherit" href="https://your-website.com/">
                        Salessa
                    </Link>{" "}
                    {'2024'}
                    {"."}
                </Typography>
            </Container>
        </Box>
    );
}