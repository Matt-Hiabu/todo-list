import React from 'react';
import './Display.css';

const Display = (props) => {
    const {todoListArray, setTodoListArray} = props;

    const handleChange = (item) => {
        item.complete = !item.complete;
        setTodoListArray([...todoListArray]); 
    }


    const handleTodoDelete = (delIdx) => {
        const filteredTodos = todoListArray.filter((todoInput, index) => {
            return index !== delIdx;
        })
        console.log('work')
        setTodoListArray(...[filteredTodos]);
    }

    return (
        <div>
            {
                todoListArray.map((item, index) => { 
                
                    if (item.complete === true) {
                        
                    }
                    return (
                    <div key={index} >
                        <label className = {(item.complete) ? "complete" : null}>{item.content}</label>
                        <input type='checkbox' onChange={e=> handleChange(item)}/>
                        
                        <button onClick={(event) => {handleTodoDelete(index)}}>Delete</button>
                    </div>
                )})
            }
        </div>
    )
}

export default Display;