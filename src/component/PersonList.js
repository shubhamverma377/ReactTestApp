import React from 'react'
import Person from './Person'

   
//    function PersonList(){
//        const names=['Bruce','Lee','leio']
//      return (
//        <div>
//          {
//          names.map(name => <h2>{name}</h2>)
//          }
//          </div>
//          )
//         }

//function PersonList(){
//        const names=['Bruce','Lee','leio']
//        const nameList = names.map(name => <h2>{name}</h2>)
//        return nameList
//        
// }

function PersonList(){
        const persons=[
            {
                id:1,
                name:'shubh',
                age:24,
                skill:'react'
                 },
               {
                id:2,
                name:'shubh',
                age:24,
                skill:'react'
                 },
               {
                id:3,
                name:'shubh',
                age:24,
                skill:'react'
                 }
        ]
        const nameList = persons.map(person => <Person key={person.id} person={person}/>)
        return <div>{nameList}</div>
        
 }


 
export default PersonList