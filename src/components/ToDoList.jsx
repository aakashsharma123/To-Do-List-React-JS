import React from 'react'
import ToDoItems from './ToDoItems'

const ToDoList = (props) => {
  return (
    <>
      {props.ToList.length > 0 && props.ToList ? (
        props.ToList.map((item , index) => {
          return <ToDoItems key={item.id} eachItem={item} handleDelete = {props.onDelete} index = {index} onEdit = {props.onEdit} onCheckBox = {props.onCheckBox}  />
        })
      ) : (<p className=' mt-5 text-center font-bold font-mono text-red-300'>No Data Avalabile</p>)}
    </>
  )
}

export default ToDoList
