import React from 'react';
import Shop from '../body/Shop';

let myProducts = ()=>{
    
 let ProductData =[
    {
        name: 'Size one',
        price: 'GHC 80',
    },
    {
        name: 'Periodt starter pack',
        price: 'GHC 79.99',
    },
    {
        name: 'Periodt Disc',
        price: 'GHC 80.99',
    },
    {
        name: 'Periodt Pack Double Box',
        price: 'GHC 80.00',
    },
    {
        name: 'Green Pack',
        price: 'GHC 85.00',
    },
]

// let productInfo = ProductData.map(data=> <Shop name={data.name}/>) 
 return(
     <div>
        {ProductData}
     </div>
 )
}

export default myProducts;