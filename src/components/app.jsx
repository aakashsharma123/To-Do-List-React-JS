import React from 'react'
import { useState } from 'react'
import Header from './Header';
import ToDoList from './ToDoList';
import '../components/style.css'

const App = () => {

    const [toDoItems, setToDoItems] = useState([]);

    const [text, setText] = useState("");

    const [PEditID, setPEditID] = useState(null);

    const [toggleButton , setToggleButton] = useState (true)

    function handleChange(event) {
        setText(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (PEditID) {
            setToDoItems(toDoItems.map((item) => item.id === PEditID ? { ...item, text } : item))
            setPEditID("")
            setText("")
            setToggleButton(!toggleButton);
        }

        else if (text.trim() !== "") {
            setToDoItems([...toDoItems, { id: new Date().getTime().toString(), text, isDone: false }]);
            setText("");
        }


    };
    
    console.log(toDoItems)
    
    const handleDelete = (id) => {
        let filterData = toDoItems.filter((i) => i.id !== id)
        setToDoItems(filterData)
    }
    
    const handleEdit = (id) => {
        setToggleButton(!toggleButton);
        
        let EditId = toDoItems.find((itemId) => itemId.id === id)
        
        console.log(EditId)
        
        setText(EditId.text)
        
        setPEditID(EditId.id)

        


    }

    const handleCheckBox = (id) => {
        setToDoItems((previousItem) => (
            previousItem.map((item) => (
                item.id === id ? { ...item, isDone: !item.isDone } : item
            ))
        )


        )

    }

    return (

        <>
            <Header />
            <div className='flex-col rounded-2xl justify-start  border-8 bg-white w-2/4  mx-auto  border-none shadow shadow-slate-100 hover : transition-all overflow-auto h-96 '>
                <div className='flex justify-center'>
                    <h1 className='Text-blue-300  Text-3xl font-bold  shadow-teal-300 font-sans'>To-Do-List</h1>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtnK4Omq7m6hNyl3aVCkMj-Z4_WAll-Z41w&s" alt="" width="50px" />
                </div>

                <form onSubmit={handleSubmit} className='flex justify-center items-center '  >
                    <input
                        type="Text"
                        value={text}
                        className='border-4  list-none bg-slate-200 rounded-xl px-2 border-none ml-5 mt-5'
                        onChange={handleChange}
                    />
                    <button className='ml-3 mt-5  bg-red-500 p-1 rounded-3xl font-bold font-mono px-5 border-2 border-red-400 hover:bg-red-800 hover:Text-white hover:font-bold'>{toggleButton ? "Add" : "Edit"}</button>
                </form>

                <ToDoList
                    ToList={toDoItems}
                    canBeChanged={setToDoItems}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                    onCheckBox={handleCheckBox}
                />
            </div>

        </>
    )
}

export default App