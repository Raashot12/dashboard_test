import React from "react"
import Calender from "../Calender/Calender"
import Dot from "../icons/dot"
import { calenderData, profileData } from "../ProfileData"
import ToogleIcon from "../ToogleIcon/ToogleIcon"
import Graphical from "./Chart/Chart"

const Board = () => {
  return (
    <div className="board">
      <h1>Dashboard</h1>
      <div className="board-content-container" >
        <div className="board-flex">
          <div className="box-one">
            <div className="box-content-one">
              <div className="greetings">
                <h4>Good Morning, Eleanor</h4>
                <p className="paragraph-greetings">
                  Welcome to your daily event calendar. Here you can see all the
                  upcoming events, meeting and create new events.
                </p>
                <button>+ Create event</button>
                <img
                  src="https://res.cloudinary.com/rashot/image/upload/v1639822742/Marni_4_lpf5nx.png"
                  className="girl-img"
                  alt=""
                />
                <img
                  src="https://res.cloudinary.com/rashot/image/upload/v1639823077/Layer_1_1_thuqhx.png"
                  className="ball-img"
                  alt=""
                />
              </div>
              <div className="reminder">
                <h4>Reminder</h4>
                <div className="tooggle-reminder-container first-toggle-container">
                  <ToogleIcon isToggle={ true } />
                  <div className="toggle-text">
                    <p>Training session</p>
                    <p>10:00 am</p>
                  </div>
                </div>
                <div className="tooggle-reminder-container">
                  <ToogleIcon />
                  <div className="toggle-text">
                    <p>Team meetings</p>
                    <p> 1:00 pm</p>
                  </div>
                </div>
                <button>+ Add new</button>
              </div>
            </div>
            <div className="contact_graph_container">
              <div className="contacts">
                <div className="contacts_view_all">
                  <h3> Contacts</h3>
                  <button>View all </button>
                </div>
                <div className="profile">
                  { profileData.map( ( people, index ) => {
                    return (
                      <div key={ index } className="profile_row">
                        <div className="person">
                          <img src={ people.img } alt="" />
                          <div>
                            <h4>{ people.name }</h4>
                            <p>{ people.position }</p>
                          </div>
                        </div>
                        <Dot />
                      </div>
                    )
                  } ) }
                </div>
              </div>
              <Graphical />
            </div>
          </div>
          <section className="calender">
            <Calender />
            <div>
              <div className="flex-schedule">
                <h3>Schedule</h3>
                <button>View all</button>
              </div>
            </div>
            <div className="card-calender-flex">
              { calenderData.map( data => {
                return (
                  <div className="card-calender" key={ data.id }>
                    <div className="btn-dot-flex">
                    <button id={data.btncolor}>{ data.btn }</button>
                      <Dot />
                    </div>
                    <h3>{data.title}</h3>
                    <p>{ data.date}</p>
                  </div>
                )
              } ) }
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Board

// function repeater( count ) {
//   return function allTheAs() {
//     return "".padStart(count, "A")
//   }
// }

// var A = repeater( 10 )

// A() // "AAAAAAAAAAAA"
// A() // "AAAAAAAAAAAA"
