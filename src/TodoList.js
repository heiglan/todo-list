import React, { Component } from 'react';
import check from './assets/check.jpg';

class TodoList extends Component {
    state = {
        userInput: "",
        todoList: []
    }

    onChangeEvent(e) {
       this.setState({ userInput: e })
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    addItem(input) {
        let listArray = this.state.todoList;
        if (input !== "") {
            listArray.push(input);
            this.setState({ todoList: listArray, userInput: "" })
        }
    }

    doneTask = (event) => {
        const li = event.target;
        li.classList.toggle("crossed");
    }

    deleteItem() {
        let listArray = this.state.todoList;
        listArray = [];
        this.setState({ todoList: listArray })
    }

    render() {
        return (
                <div className='list'>
                    <form onSubmit={this.onFormSubmit}>
                        <input
                            type="text"
                            placeholder="What do you want to do?"
                            onChange={(e) => { this.onChangeEvent(e.target.value) } }
                            value={this.state.userInput}/>
                        <button className="btn addItem" onClick={() => this.addItem(this.state.userInput)}>Add</button>  
                        <ul>
                            {this.state.todoList.map((item, index) => (
                                <li onClick={this.doneTask}
                                key={index}>
                                <img src={check} alt="check" width='40px' height='40px' style={{marginRight: '10px'}}/>{' '}    
                                {item}
                                </li>
                            ))}
                        </ul>
                        <div>
                        <button
                            className="btn deleteItem"
                            onClick={() => this.deleteItem()}
                            disabled={this.state.todoList.length === 0}>
                            Delete list
                        </button>

                        </div>
                        
                    </form>
                </div>
           )
    }
}

export default TodoList;