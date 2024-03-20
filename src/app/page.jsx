import Image from "next/image"


export default function Home() {

  const user = 'efosa'

  return (
    <>
    <div className={Style.home}>
      <div className="flex">
        

      </div> 

    <p>This is the first test by {user} </p>
    <p>This is the second test by {user} </p>
  
    </div>
   </>
  )
}