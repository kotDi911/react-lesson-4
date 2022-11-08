
// Задача #1 - Работа с HOC
  // 1. Создать компонент App.
  // 1. В компоненте подготовить JSX для отрисовки данных о пользователях.
  // 2. Создать контекст
  // 1. Получить данные о пользователях - [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
  // 2. Сохранить пользователей в state
  // с. Внизу контекста создать HOC с названием withUsers.
  // 1. Возвращаем из HOC обернутый компонент и снабжаем его данными об пользователях
  // d. Компонент App снабжаем данными через HOC  ⇒ withUsers(App)
  // 1. Получаем значения через props и отрисовываем users в виде JSX

import './App.css';
import React, {useState, useEffect, useContext} from "react";
const url = "https://jsonplaceholder.typicode.com/users";

// const Data = React.createContext();

// export const DataProvider = (props) => {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch(url)
//             .then((res) => res.json())
//             .then((json) => setData(json));
//     }, []);
//     return <Data.Provider value={data}>
//         {props.children}
//     </Data.Provider>
// };


export const withUsers = (WrappedComponent) => {
    return class extends React.Component {
        state = {users: []};

        componentDidMount() {
            fetch(url)
                .then((res) => res.json())
                .then((json) => this.setState({users: json}));
        }

        render() {
            return <WrappedComponent {...this.props}{...this.state}/>
        }
    }
};

class App extends React.Component {
    render() {
        const {users} = this.props;
        return (
            <div className="App">
                {users.map((user) =>
                    (<div key={user.id} className='text-area'>
                        <b>ID:</b> {user.id} <br/> <b>Name:</b> {user.name}  <br/> <b>Email:</b> {user.email}
                    </div>)
                )}
            </div>
        );
    }
}

export default withUsers(App);
