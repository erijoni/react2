import React from 'react'


const Card = ({date,btn,img,name,paragraph,download}) => {

    
    return (
       <div class="wrapper">
            <div class="box">
              <div className="box1">
                  <div className="date">{date}</div>
                  <div className="Date">
                     <div className="btn1">{btn}</div>
                    <img style={{margin:'10px 10px'}} src={img} alt="image" />
                    <h4>{name}</h4>
                  </div>
                  <div className="paragraph"><p>{paragraph}</p></div>
                  <div className="download">{download}</div>
              </div>
            </div>
            </div>
    
      
    )
}


export default Card
