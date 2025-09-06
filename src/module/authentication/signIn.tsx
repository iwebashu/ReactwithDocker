
import { Box, Grid2, Typography } from "@mui/material";

export default function SignIn() {
    return (
        <>
            <Grid2  sx={{ 
        height: '100vh', 
        maxWidth: 'xl', 
        width:'1333',
        bgcolor: 'gray', 
        display: 'flex', 
        flexDirection: 'column', /* Ensures the content stacks vertically */
        justifyContent: 'center', /* Centers content vertically */
        alignItems: 'center' /* Centers content horizontally */
    }}>
                    
    <Box sx={{ height: 'auto' }}>
        <Typography variant={'h1'}>Sign In Request</Typography>
    </Box>
            </Grid2>
        </>
    )
}