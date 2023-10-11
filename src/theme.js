import { createTheme } from "@mui/material";

export const theme = createTheme ({
    palette:{
        primary:{
            main: "#0802A3",
        },
        secondary:{
            main: "#FF4B91",
        },
        otherColor:{
            main: "#FFCD4B",
        }
    },

    typography:{
        fontFamily: [
            'Karla',
            'sans-serif'
        ]
    }
})