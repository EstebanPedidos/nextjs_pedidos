import React from "react";
import { Box } from '@mui/material';;
import "react-image-gallery/styles/css/image-gallery.css";

import ImageGallery from "./ImageGallery";

export default  function Gallery({galeria}) {  
    return (
        <Box item xs={12}>
          <ImageGallery galeria={galeria}/>
        </Box>
    )
}

