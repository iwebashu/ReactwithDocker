import { Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
export default function FrmAdvt(){
    const { id } = useParams();

    return(
        <>
            <Typography variant={"h1"}>Add Advertisement{id}</Typography>
        </>
    )
}