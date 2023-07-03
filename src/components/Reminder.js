import React,{useState} from 'react'
import './Reminder.css'
function Reminder() {
    const [reminder, setReminder] = useState([])
    const [newReminder, setNewReminder] = useState('')

    const handlebarInputChange=(e)=>{setNewReminder(e.target.value)}
    const handleAddReminder =()=>{
         
        if(newReminder.trim()){
         setReminder([...reminder,newReminder])
         setNewReminder('')
        }
       

    } 
    const taskRemove=(index)=>{
        setReminder(reminder.filter((item,itemIndex)=> itemIndex !=index ))
    }
    
  return (
    <div className='container'>
       <h1>Reminder App</h1>

<div className='inputdiv'>
<input type='text'  value={newReminder} placeholder='Enter the task' onChange={handlebarInputChange} />
<button onClick={handleAddReminder} className='add-btn'>Add Reminder</button>

</div>
{ // no reminder condition 
    reminder.length > 0 ? (
    <ul className='reminderlist'>
{reminder.map((reminder,index)=>(
   <li className='addtask' key={index}>{reminder}
   <button className='deletebtn' onClick={()=>taskRemove(index)}>Delete</button></li> 
))}

</ul>): 
<p>No Reminders Found</p> }
    </div>
  )
}

export default Reminder