import React, {useState} from "react";
const Form = ({todoListArray, setTodoListArray}) => {
    const [todoInput, setTodoInput] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();

        setTodoListArray([...todoListArray, {content: todoInput, complete: false}]);
        setTodoInput("");
    } 

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label></label>
                    <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
                </div>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form;