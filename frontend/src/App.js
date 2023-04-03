import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // viewCompleted: false,
      activeTrip: {
        name: "",
        dest: "",
        leader: "",
        attendees: [],
        start_date: ""
      },
      tripList: [],
      };
  }

    async componentDidMount() {
      try {
        const res1 = await fetch('http://localhost:8000/api/trips/');
        const tripList = await res1.json();
        const res2 = await fetch('http://localhost:8000/api/users/');
        const userList = await res2.json();
        console.log(userList);
        this.setState({
          tripList
        });
      } catch (e) {
        console.log(e);
    }
    }
    
    renderItems = () => {
      // const { viewCompleted } = this.state;
      // const newItems = this.state.userList.filter(
      //   item => item.completed === viewCompleted
      // );
      const newItems = this.state.tripList;
      const users = this.state.userList;
      
      return newItems.map(item => (
        
        <li>
          <p>
            id: {item.id} dest: {item.dest}<br />
            name: {item.name}<br />
            leader_id: {item.leader.id} leader_name: {item.leader.name}<br />
            start date: {item.start_date}<br />
            {/* {item.attendees}<br /> */}
            attendees name:
            {item.attendees.map(user => <div>{user.name}</div>)}
          </p>
        </li>
      ));
    };

    render() {
      return (
        <main className="content">
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
      )
    }
  }
  
export default App;