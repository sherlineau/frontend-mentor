import { useState } from 'react'
import icon_plus from '../assets/images/icon-plus.svg'
import icon_minus from '../assets/images/icon-minus.svg'

const Accordian = (data) => {
    // destructure data
    const {question, answer } = data.data
    const [expanded, setExpanded] = useState(false)

  return (
    <div className='accordian'>
            {
                expanded ? 
                    <div onClick={(e)=> setExpanded(false)} className="row space-between accordian-header">
                        <h4>{question}</h4>
                        <img src={icon_minus} onClick={(e)=> setExpanded(false)}/>
                    </div> 
                    :
                    <div onClick={(e)=> setExpanded(true)} className="row space-between accordian-header"> 
                        <h4>{question}</h4>
                        <img src={icon_plus} onClick={(e)=> setExpanded(false)}/>
                    </div>
            }
        <div className="content" style={expanded ? {display:"block"}:{display:"none"}}>
            <p>{answer}</p>
        </div>
    </div>
  )
}

export default Accordian