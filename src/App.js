
import { useState } from "react"
import "./App.css"

function App(){
  
  let [todoInput,updateInput] =  useState()

  let [todoList,updateTodos] =  useState(
    [   {
         id:1,
         task:'Learn React'
  
        },
        {
          id:2,
          task:'Learn DSA'
   
         }
    ]
  )

  let nextId =3

  function addNewTodo(){
   if(todoInput===""){
    alert("Add Some task")
   }else{
      let newTodos = [
             ...todoList,
             {
              id:nextId++ ,
              task:todoInput
       
             }
        ]
        updateTodos(newTodos);
        updateInput("")
   }
  }

  function deleteTodo(id){

    let updatedTodos =  todoList.filter(
       (todo)=>{
          return todo.id !==id
        }
      )
      updateTodos(updatedTodos)
  }

  return(
    <div className="container mt-5 w-50">
      <div className="head1">  
         <h3 className="text-center" >Todo App using React</h3>
   
          <input className="bg-color" type="color" onChange={
           (e)=>{
             document.body.style.background = e.target.value
           }
          }></input>
      </div> 
      <div className="input-group">

        <input className="form-control" placeholder="Add Task" onChange={(e)=>{
          let task = e.target.value;
          updateInput(task)


        }} value={todoInput}  type="text"></input>

        <button  onClick={()=>{
          addNewTodo()
        }} className="btn btn-primary">Add</button>
      </div>

      <ul className="list-group mt-4">
      {
          todoList.map(
            (todo)=>{
              return(
              <li className="list-group-item">
                <p>{todo.task}</p>

                <button onClick={()=>{
                  deleteTodo(todo.id)
                }} className="btn"> ❌</button>

              </li>
      
              )
            }
          )
        }
  
      </ul>
    </div>

  )
}



export default  App