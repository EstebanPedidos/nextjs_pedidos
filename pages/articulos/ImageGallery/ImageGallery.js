import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";


export default  function  MyImageGallery({galeria})  {
  

    const properties = {
      thumbnailPosition: "left",
      useBrowserFullscreen: false,
      showPlayButton: false,
      loading:true,
      items: galeria
    };

    return <ImageGallery {...properties} />;
 
}

