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
        //used if(this.props!=prev.prop || etc) for dependancy array which we used in useEffect

        //useEffect in functional componets
    }
    componentWillUnmount(){
        //to cleanup mess like set interval
        //useEffect and within it return acts like componentDisMOunt
    }
    render() {
        const name = this.props.name;
        return (

            <div >
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg shadow transition-colors duration-200" onClick={() => {
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
