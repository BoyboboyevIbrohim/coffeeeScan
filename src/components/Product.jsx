import React from "react"
const products =[
    {
        name:"Iphone 11",
        price:"6 519 000 so'm",
        id:1,
        img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRvvj4lXOXJf2OVLnVVw5QNKfBe50IjrTDFVmEzrPc3eHn8KJtzbXAWT1g6wp3Rm_yDgsEgb7-kEVL__DJWYRRvrfE-IgnTRoUn1VgSipS5gbe0lNLBgLkPB26XLuDO4njRJ6O6lKM&usqp=CAc"
       
    },
    {
        name:"Iphone 12",
        price:"4 674 000 сум",
        id:2,
        img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOp_JeZz0gRH4LNtloX2AyBO71NBki6Kil5qPMNxTGbL2mK4huTGoKI_7ksn_dIWIINR36z0uYm-UsJ9huzJYKbsNZtutcgiPOuBwOHJgw_P8DwNkWkSqwpsPlJni-7HN5wjaT6qepoF0&usqp=CAc"
       
    },
    {
        name:"Iphone 13",
        price:"6 027 000 сум",
        id:3,
        img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdlzQnH6zCl6TKsUKhZSlH-HzP2fXFITtmP6HRtrkBF-3w_Dfz86ffwlwNDU3q4ws9h085M5xilDT5vm8MI5i5Q-rPs_ulougizQZcZ8AGWMFr01aylwXsF3P0KtMZ8QIg7-tKRdaqd_c&usqp=CAc"
       
    },
    {
        name:"Iphone 14",
        price:"7 626 000 so'm",
        id:4,
        img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQbz-VbihwCqCQI4rViCVHO-OBSpSdFQ7xwWw9wEcXNxMcgtNGyGju2XSLUlAQFYL7ZWmp39u-A-OmJjrUna0aRgKTr0yKBWgKX5Oiaccbve6WSKgkoudMnXZr-42O4EAqXhzbpJg&usqp=CAc"
       
    },
    {
        name:"Iphone 15",
        price:"9 999 000 сум",
        id:5,
        img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRPZ77tNlcGolIcSA2-NXX2s7TQ_ma9zGa4O9_s1evREuTBLKjy4GBdFQ7dVdhNNA92NHSjp6Tb-_smZQv9clpdRVXiU4XERpvQaTdeXypYfqZAoiegX41SE3o8&usqp=CAc"
       
    },
    {
        name:"Iphone 16",
        price:"17 879 000 so'm",
        id:6,
        img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQVm2Lq3_X84ow1iC4TSUJPGQZ1CYcKPbSVkBqXQQYV2rDIFPEIRy8tEJn7_euBDgT99P_kYqD7mR5oH1d4W7SdhEO43urWePhYBLpZRE142Lsmc1Au9Mz5gHSirg&usqp=CAc"
       
    },
    {
        name:"Iphone 17",
        price:"18 099 000 cум",
        id:7,
        img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSK4TkCmGF1suyIOeYoc6Z2z4u_8UgkyKRC3yjmrkhlEcDjm7-21be196KTGfYPrwrdRW3vRErBZFm3riUlOY0ODpsN6GXZ_Z1ttJF9nKm47rXLQMt4L7Rqjouj&usqp=CAc"
       
    },
]

function Product(){
    return(
        <div className="flex pt-20 flex-wrap  ">
            {products.map((item)=>(
                <div className="w-60 m-5 h-80 text-center rounded-2xl flex-col  justify-between border-2 border-blue-800" key={item.id}  onClick={()=>alert(item.name +"-"+ item.price)}>
                    <img className="" src={item.img} alt={item.title} />
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                    <button className="bg-green-700 mt-2 text-white w-20 rounded-xl ">Buy</button>

                </div>
            ))}

        </div>
    )
}
export default Product