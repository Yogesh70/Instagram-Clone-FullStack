// imrc
import React, { Component } from 'react';
import InputBox from './component/InputBox';
import TaskList from './component/TaskList';

// cc
class App extends Component {
    state = { 
        tasks: [{ id: 1, name: "Make Tea" },
                { id: 2, name: "Learn Es6" }, {
                id: 3, name: "Learn JSX"
            }]
    }

    removeTask = (id) => {
        let { tasks } = this.state;
        let remainingTasks = tasks.filter((task => task.id !== id));
        this.setState({tasks: remainingTasks})
        }
    
    getDataFromInput = (newTask) => {
        this.setState({ tasks: [{ id: this.state.tasks.length + 1, name: newTask }, ...this.state.tasks] });
    }
    render() { 
        let { tasks } = this.state;
        return (
            <React.Fragment>
                {/* taskList
                <div className="container">
                    {tasks.map((task) => {
                        return (<div key = { task.id }>
                            <p className="d-inline mr-4"> { task.name } </p> 
                            <button className="btn btn-danger"
                                onClick={() => { this.removeTask(task.id) }}
                            >x</button>
                        </div>)
                    })}
                </div> */}
                {/* Class Based Child */}
                <InputBox getDataFromInput={this.getDataFromInput}></InputBox>
                {/* Function Based Child */}
                <TaskList tasksfApp = {tasks} handleTask = {this.removeTask}> </TaskList>
            </React.Fragment>
        )
    }
}

export default App;