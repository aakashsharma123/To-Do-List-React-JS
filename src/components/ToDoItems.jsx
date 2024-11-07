import React from 'react';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaSquareCheck } from 'react-icons/fa6';
const ToDoItems = ({ eachItem, handleDelete , onEdit , onCheckBox}) => {
  return (
    <ul className='w-full'>
      <li className='border-4 shadow-lg shadow-slate-400 rounded-full border-none mt-5 flex justify-between gap-5 items-center bg-white-200 p-4 m-5'>
        <input type="checkbox" className='rounded' onClick = {() => onCheckBox(eachItem.id)}  />
        <span style={eachItem.isDone ? {textDecorationLine : 'line-through'} : {}} className='m-1 text-sm font-bold font-mono truncate max-w-xs'>{eachItem.text}</span>
        <div className='flex space-x-2'>
          <div className='flex gap-5'>
            <button 
              className='flex items-center border-2 border-red-400 px-3 bg-red-400 rounded-full font-bold font-mono hover:bg-red-500'
              aria-label="Delete item"
              onClick={() => handleDelete(eachItem.id)}
            >
              <FontAwesomeIcon className='mr-3' icon={faTrash} />
              Delete
            </button>
            <button 
              className='flex items-center border-2 border-blue-400 px-3 bg-blue-400 rounded-full font-bold font-mono hover:bg-blue-500'
              aria-label="Edit item"
              onClick={() => onEdit (eachItem.id)}
            >
              <FontAwesomeIcon className='mr-3' icon={faEdit} />
              Edit
            </button>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default ToDoItems;