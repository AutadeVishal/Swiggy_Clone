import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    componentDidMount(){
        //after rednering component
        //used to do api call after dummy render
        //used if(this.rpops!=prev.pop || etc) for dependancy array which we used in useEffect

        //useEffect in functional componets
    }
    componentWillUnmount(){
        //to cleanup mess like set interval
        //useEffect and within it return acts like componentDisMOunt
    }
    render() {
        const name = this.props.name;
        return (

            <div className="user-card">
                <button onClick={() => {
                    //Never Update directly like this.state.count++;
                    this.setState({
                        count: this.state.count+1
                    })
                }
                }
                >Update Count</button>
                <h1>Count : {this.state.count}</h1>
                <h1>Name: {name}</h1>
                <h2>Location: Pohegaon</h2>
                <h3>Contact: heybuddy@gmail.com</h3>
            </div>
        );
    }
}

export default UserClass; 
