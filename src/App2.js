import React from "react";
import './App2.css'

const withDelay = (delay) => (data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
};

// export const LoaderHOC = (WrappedComponent) => {
// return class extends React.Component {
// render() {
//     return <WrappedComponent {...this.props}{...this.state}/>
// }
// }


export const LoaderHOC = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            contacts: [],
            loading: true
        };

        componentDidMount() {
            fetch('https://api.randomuser.me/?nat=us,gb&results=10')
                .then((res) => res.json())
                .then((json) => {
                    let data = [];
                    const {results} = json;
                    results.map((elem) => {
                        const {id, name, picture} = elem;
                        const userId = id.value;
                        const userName = `${name.first} ${name.last}`;
                        const userPicture = picture.thumbnail;
                        data[data.length] = {name: userName, thumbnail: userPicture, id: userId};
                    });
                    return data
                })
                .then((res) => withDelay(2000)(res))
                .then(res => this.setState({contacts: res, loading: false}));
        }

        render() {
            return (this.state.loading)?
                <div className='preloader-cont'>
                    <span className='text'>
                        Loading...
                    </span>
                </div>
                :
                <WrappedComponent {...this.state} {...this.props}/>
        }
    };
};

// const Contact = (props) => {
//     return (
//         <div key={props.id} className='card'>
//             <img src={props.thumbnail}/>
//             <div>
//                 <b>Name:</b> {props.name} <br/> <b>ID:</b> {props.id}
//             </div>
//         </div>
//     )
// };

class ContactsList extends React.Component {
    render() {
        const {contacts} = this.props;
        return (
            <div className="App">
                {contacts.map((contact) => (
                    <div key={contact.id} className='card'>
                        <img src={contact.thumbnail}/>
                        <div>
                            <b>Name:</b> {contact.name} <br/> <b>ID:</b> {contact.id}
                        </div>
                    </div>
                    // <Contact id={contact.id} thumbnail={contact.thumbnail} name={contact.name}/>
                ))}
            </div>
        );
    }
}


export default LoaderHOC(ContactsList)