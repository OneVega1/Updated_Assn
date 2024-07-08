
import Image from "next/image"
// import Name from '../../../public/vercel.svg'
export default function page() {
  return (
    <div>
        <br></br>
          <div className="flex justify-center">
{/*        
       <Image src={Name}/> */}
       <Image 
       src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8="
       width={200}
       height={200}/>
     </div>

    </div>
  
  )
}

export function generateMetadata({params}){
  return{
    title:"Image Page"
  }
}