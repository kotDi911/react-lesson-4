import React, {Component} from "react";
import {Loader} from "../component/task2/Loader";
import {withDelay} from "../component/task2/withDelay";

const loaderHOC = (WrappedComponent) => {
    return class extends Component {
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
                        data[data.length] = {
                            name: `${name.first} ${name.last}`,
                            thumbnail: picture.thumbnail,
                            id: id.value
                        };
                    });
                    return data
                })
                .then((res) => withDelay(2000)(res))
                .then(res => this.setState({contacts: res, loading: false}));
        }

        render() {
            return (this.state.loading)? <Loader/> : <WrappedComponent {...this.state} {...this.props}/>
        }
    }
};

export default loaderHOC