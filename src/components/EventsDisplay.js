import React from 'react';
import Card from './Card';

function EventsDisplay({events}) {
 

  return (
    <>
    
    <div className='row col-12 border border-primary border-start-1 m-2 bg-dark mb-5'>
        
        {
            events.map((event)=>{
              return(
                <Card key={event.id} event={event} id={event.id} seats={event.seats}/>
              )
            })
        }
    

    </div>
    </>
  )
}

export default EventsDisplay;