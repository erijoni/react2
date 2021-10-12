import React from 'react'
import Card from './Card'
import card from './data'





const App = () => {
 
  return (

  
     <section className="section">
          {card.map((cards)=>{
            const {date,btn,img,name,paragraph,download}= cards;
            return (
              <>
              <Card date={date} btn={btn} img={img} name={name} paragraph={paragraph} download={download}/>
              
            </>
            
            )
          })}
     </section>
  
  )
    
         
   
  
}





export default App


