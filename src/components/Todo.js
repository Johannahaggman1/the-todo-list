import React, {useState, useEffect} from "react";
import axios from "axios";
import ReactPaginate from 'react-paginate';
import { RiCloseCircleLine } from 'react-icons/ri';
import { AiFillCheckCircle } from 'react-icons/ai';

function Todo() {
    const [todos, setTodos] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const todosPerPage = 8;
    const pageVisited = pageNumber * todosPerPage;

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(res => {
            console.log(res)
            setTodos(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    const displayTodos = todos
    .slice(pageVisited, pageVisited + todosPerPage)
    .map((t, index) =>(
        <li 
        key={index}
        className="li-todos"
        >
            {t.title}
            <div>
                <AiFillCheckCircle
                    onClick={() => completeTodo(t.id)}
                    size={24}
                    className={t.completed ? "todo-row-complete" : "todo-row"}
                />
                <RiCloseCircleLine 
                    className="delete-icon"
                    size={24}
                    onClick={() => removeTodo(t.id)}
                /> 
            </div>
        </li>
   ));

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removedArr);
    };

    const pageCount = Math.ceil(todos.length / todosPerPage);     
        const changePage = ({selected}) => {
        setPageNumber(selected);
    };   

    const completeTodo = id => {
        let updatedTodos = todos.map(t => {
            if(t.id === id) {
                t.completed = !t.completed
            }
        return t
        })
        setTodos(updatedTodos);
    };

  return (
    <div className="todos-wrapper" data-testid="todoid">
        <ul className="todos-ul">
            {displayTodos}
        </ul>
            <ReactPaginate
                previousLable={"previous"}
                nextLable={"next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtns"}
                previousLinkClassName={"previousBtns"}
                nextLinkClassName={"nextBttns"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
    </div>
  );
}

export default Todo;