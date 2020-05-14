import React from 'react';
import {Todo, fetchTodos, deleteTodo} from "../actions";
import {StoreState} from "../reducers";
import {connect} from "react-redux";

interface AppProps {
    todos: Todo[];
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {
    state = {fetching: false};

    onButtonClick = (): void => {
        this.props.fetchTodos();
        this.setState({fetching: true})
    };

    onTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    };

    componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<{}>, snapshot?: any): void {
        if (!prevProps.todos.length && this.props.todos.length) {
            this.setState({fetching: false})
        }
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
                <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>{todo.title}</div>
            )
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.state.fetching ? 'Loading...' : this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state: StoreState): {todos: Todo[]} => {
    return {todos: state.todos};
};

export const App = connect(mapStateToProps, {fetchTodos, deleteTodo})(_App);