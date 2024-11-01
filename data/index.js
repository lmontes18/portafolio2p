import { getGalleryData } from "./galeria";



//----------------Nav
import navData from "./nav"; 
//--------------- Informacion

import { getinfoData } from "./info";

export const generarContextoDePagina = (page)=>{
    console.log('page', page);
    const contextObject = {
        ...navData,
    };
    let pageObject = {}
    switch(page){
        case '/index.html':
            pageObject = getGalleryData();
            break;
        case '/info':
            pageObject = getinfoData();
            break;
        default:
            pageObject = {};
    }
    return {
        ...contextObject,
        ...pageObject
    }
}