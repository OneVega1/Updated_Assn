// "use client"

// import { useState } from "react"


// export default function Practice() {
//     const [h1Style, SetH1Style]=useState({backgroundColor:'red'})
//     return (
//         <>

//         <br></br>
       
//         <h1 style={h1Style}>HELLO NEXTTTTTTTTTTT</h1>
//        <br></br>
//        <div className="flex justify-center">
//   <button className="btn btn-primary text-center" onClick={() => SetH1Style({ backgroundColor: "orange" })}>
//     Update Style
//   </button>
// </div>
//         </>
//     )
// }

// export function generateMetadata() {
//   return {
//     title: "Style"
//   };
// }

export default function practice() {
      return(
        <div>
        <br></br>
        <br></br>
        <br></br>
        <h1 style={{color:"purple"}} className="flex justify-center"><b>Welcome To Application</b></h1>
        <br></br>
        <div className="flex justify-center">
           
          <h2>Identify the top 3 customers based on total Sale value across all locations., date: 'Jan 24, 2024'</h2>
        </div>
        </div>
      )
}