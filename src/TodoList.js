import React, { Component } from 'react';


class TodoList extends Component {
    render() {
        return (
            <div>
                <div className='list'>
                    <form onSubmit={this.onFormSubmit}>
                        <input
                            type="text"
                            placeholder="What do you want to do?"
                        />
                        <button type="submit">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoList;