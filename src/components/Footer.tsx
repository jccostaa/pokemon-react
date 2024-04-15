import CopyrightIcon from '@mui/icons-material/Copyright';
import { Grid } from '@mui/material';

export function Footer() {

    return (
        <Grid container item xs={12} style={{display:"flex", alignItems:"center", justifyContent:"center", padding: "16px", marginTop: "auto", backgroundColor: "#222224", color: "white" }}>
            <Grid item >
                <p> Jean Costa - 2024.<CopyrightIcon fontSize='small' /></p>
            </Grid>
        </Grid>
    )
}