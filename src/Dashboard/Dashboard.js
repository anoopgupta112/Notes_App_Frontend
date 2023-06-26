import React, {useState, useEffect} from 'react'
import './Dashboard.css'
import axios from 'axios'
import {NavBar, BottomNavBar, DashboardNav} from '../navBar/NavBar';
import { useParams  } from 'react-router-dom'

const Dashboard = () => {
    const [Notes, SetNotes] = useState("");
    const [Refresher, SetRefresher] = useState(0);
    const [NoteList, SetNoteList] = useState([]);
const param = useParams()
const data = {
    NotesData: {
        Notes,
        Userid: param.id

    }
}
// get notes 
useEffect(() => {
    try {
        const getDetailData = async () => {
            const data = await axios.get(`http://localhost:2000/${param.id}/Notes`, {
                headers: {
                    "x-access-token": sessionStorage.getItem("x-access-token")
                }
            }).then((res) => {
                SetNoteList([...res.data.Notes]);

            })

        }
        getDetailData();





    } catch (e) {
        console.log(e)
    }
}, [Refresher])


// add notes
    function submitHandler(e) {
  const url = "http://localhost:2000/addNotes"
        e.preventDefault();
        try {
            axios.post(url, data, {
                headers: {
                  "x-access-token": sessionStorage.getItem("x-access-token")
                }
              }).then((val) => {
                if (val.data.rc !== -1) {
                    console.log(val.data)
                    SetRefresher(Refresher+1)
                    alert("note added")

                }
                else {
                    alert("please enter unique email value")
                    console.log(val.data.name)

                }
            }).catch((e) => {

                alert(e)
            })
        }
        catch (e) {
            alert(e)
            console.log(e)
        }

    }

    const isMobile = window.innerWidth <= 600;


  return (
    <div>
        {isMobile ? <NavBar/>: <DashboardNav/>}
        
    <div className= "dashboard-container">

        <div className = "dashboard-left">

            <h1>Add My Note</h1>

            <form onSubmit={submitHandler}>
                   <div className="auth-input">
                <input required
                    type="text"
                    className="form-control"
                    placeholder="Type message here...."
                    value={Notes}
                    onChange={(e) => SetNotes(e.target.value)}
                />
            </div>
       
            <div>
                <button className= "save-note-button" type="submit">
                   Save
                </button>
            </div>
            
        </form>


            </div>




{/* dashboard right part sharts here  */}

<div className= "dashboard-right">
<h1 className="Notes-txt">
All Notes

</h1>
{NoteList.map((val)=>{
    return (
        <>
     <div className= "notes-container">
        {val}
        <div className= "Duration">
10min
</div>
        </div>
       
        </>
    )
})}

            </div>
    </div>
    <div>
    <BottomNavBar/>

        </div>
    </div>
  )
}

export default Dashboard