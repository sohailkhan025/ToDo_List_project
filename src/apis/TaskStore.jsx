import React, { createContext, useEffect, useRef, useState } from 'react'
const Tasks = createContext(["No Tasks"])
const TaskStore = (props)=>{

  const myref=useRef();
    const [data, setData] = useState([])
    const [edit, setEdit] = useState(null);
    useEffect(() => {
        console.log(data);
    }, [data])

    const handleCreate = (e) => {
        e.preventDefault()
        let time = new Date()
        time = time.toTimeString().split(" ")[0].split(":")
        if (e.target[0].value.length !== 0)
            setData([...data, { task: e.target[0].value, id: Math.random() * 1000000000, timestamp: ` ${time[0]} hr ${time[1]} min ${time[2]} sec ` }])
        e.target[0].value = "";
    }
    const handleDelete = (id) => {
        if (window.confirm("Do you want to delete this permanently?"))
            setData(data.filter((value) => value.id !== id))
    }


    const handleSave = () => {
        if(myref.current && edit){
            const up=data.map((item)=>
            item.id==edit.id?{...item,task:myref.current.value}:item
            );
            setData(up);
            setEdit(null);
            myref.current.value="";

        }
        
    }

    const handleEdit = (tas) => {
        setEdit(tas);
       if(myref.current){
        myref.current.value=tas.task;
       }


    }

    return (
        <Tasks.Provider value={{ data, handleCreate, handleDelete, handleEdit, setData, edit, handleSave,myref }}>
            {props.children}
        </Tasks.Provider>
    )
}
export default  TaskStore;
export {Tasks};