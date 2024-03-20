import Image from "next/image"
import Pic from  './Pic 2 .jpg'
import style from'./components/styles.modules.css'

export default function Home() {

  const user = 'efosa'

  return (
    <>
    <div className={style.home}>
      <div className="grid grid-cols-3">


     <Image src='/pic 1.jpg' alt="Pic of a girl" width='100' height='100'/>
     <Image src={Pic} alt="pic of man " width='100' height='100'/>
     <Image src='https://images.unsplash.com/photo-1459802071246-377c0346da93?q=80&w=1609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'alt="water" width='100' height='100'/>


      </div> 

      <section>
    <p>This is the first test by {user} </p>
    <p>This is the second test by {user} </p>
    </section>
    </div>
   </>
  )
}