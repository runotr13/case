import React, { useEffect, useState } from 'react'
import datam from './data.json'
import './Test.css'
const Test = () => {
    
    const [data,setData] = useState()
    const [click,setClick] = useState()
    // const [date,setDate] = useState()
    const handleClick = (e) => {
      
        setClick(!click)
        if(click){   
            if(e.target.className === ''){
                e.target.className = 'orange'
            }else if(e.target.className === 'orange'){
                e.target.className = ''
            }else if(e.target.className === 'blue'){
                e.target.className = 'blue'
            }     
        }
            
    }
    useEffect(() => {
        setData(datam)
        
    },[])
    const dateClick = () => {
        const jsonData = datam.sort((a,b) =>  new Date(b.date) - new Date(a.date));
        setData(jsonData)
    }
    
    console.log(data)

  return (
    <table>
        <tr>
            <th>Name</th>
            <th>Subscription_class</th>
            <th>Company</th>
            <th>Date <br /><button onClick={dateClick}>Tarihe göre sırala</button></th>
        </tr>
        
        {
            data?.map((item) => (    
                       <tr onClick={handleClick}>
                           <td>{item.name}</td>
                           <td
                           className={item.subscription_class > '5' ? 'blue' : ""}
                           >{item.subscription_class}</td>
                           <td>{item.company}</td>
                            <td>{item.date}</td>
                       </tr>
            ))
        }


</table>
  )
}

export default Test