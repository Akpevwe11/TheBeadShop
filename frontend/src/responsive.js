import {css} from "styled-components"
export const mobile = (props) => {
    return css` 
        @media only screen and (max-width: 480px) {
            ${props}
        }
    `
}



       
        // @media (max-width: 480px) {
        //     body {
        //         background-color: red;
        //     }
        // }
          
        // /* Media Query for low resolution  Tablets, Ipads */
        // @media (min-width: 481px) and (max-width: 767px) {
        //     body {
        //         background-color: yellow;
        //     }
        // }
          
        // /* Media Query for Tablets Ipads portrait mode */
        // @media (min-width: 768px) and (max-width: 1024px){
        //     body {
        //         background-color: blue;
        //     }
        // }
          
        // /* Media Query for Laptops and Desktops */
        // @media (min-width: 1025px) and (max-width: 1280px){
        //     body {
        //         background-color: green;
        //     }
        // }
          
        // /* Media Query for Large screens */
        // @media (min-width: 1281px) {
        //     body {
        //         background-color: white;
        //     }
        // }