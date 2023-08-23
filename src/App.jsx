import React  from "react";
import TaskStore from "../src/apis/TaskStore";
import TaskGen from "./Component/TaskGen";

const App=()=>{


    return (
        <section>

             <TaskStore>
                <TaskGen></TaskGen>
                </ TaskStore>
        </section>
    )
}
export   default App;