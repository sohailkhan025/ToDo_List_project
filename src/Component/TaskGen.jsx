import React ,{ useContext, useRef, useState }  from "react";
import { Tasks } from '../apis/TaskStore'
import { GrAdd } from "react-icons/gr"
import { MdDeleteForever } from "react-icons/md"
import { BiSolidEdit } from "react-icons/bi"
const TaskGen = ()=>{
    const textref = useRef()

    const { data, handleCreate, handleDelete, handleEdit, edit, handleSave } = useContext(Tasks);


    return (
        <section className='h-[100vh] overflow-hidden bg-black  flex flex-col gap-8 p-8'>
            <article className='flex justify-center items-center flex-col gap-4'>
                <form className='w-[50%] flex flex-col gap-4 ' onSubmit={handleCreate}>
                    <textarea name="" id="" className='h-24 bg-slate-200 resize-none border-2 border-slate-300 outline-none b p-2 font-semibold text-2xl' ref={textref}></textarea>
                    {/* {edit ? "" : <button className='py-2  flex justify-center bg-emerald-400 border-2 border-emerald-400  hover:bg-emerald-500'><GrAdd className='text-3xl' /></button>
                    } */}
                    <button className='py-2  flex justify-center bg-emerald-400 border-2 border-emerald-400  hover:bg-emerald-500'><GrAdd className='text-3xl' /></button>
                </form>
                {edit ? <button className='py-2  flex justify-center bg-emerald-400 border-2 border-emerald-400  hover:bg-emerald-500 text-3xl w-[50%] text-white' onClick={handleSave}>SAVE</button> : ""}
            </article>
            <article className='flex flex-wrap justify-center gap-2 overflow-scroll'>
                {

                    data.length != 0 ? data.map(value => {
                        return <div className='flex flex-col justify-between py-2  px-6 h-52  w-[30vh] md:w-[30%] bg-slate-100 border-2 border-slate-200 card rounded-lg' key={Math.random() * 1000}>
                            <h3 className='text-xl flex flex-wrap h-[9vh]  overflow-scroll'>{value.task}</h3>
                            {/* <h2>{value.id}</h2> */}
                            <div className='flex justify-between  px-6 card-child'>
                                <button className='text-3xl bg-red-500 text-white p-2 rounded-lg hover:bg-red-700' onClick={() => handleDelete(value.id)}><MdDeleteForever /></button>
                                <button className='text-3xl bg-sky-500 hover:bg-sky-700 text-white p-2 rounded-lg' onClick={() => handleEdit(value.id, textref)} ><BiSolidEdit /></button>
                            </div>
                            <div className='card-child text-sm  w-full '>{value.timestamp}</div>
                        </div>
                    }) : <h2 className='text-5xl text-white font-bold'>NO Task Available</h2>


                }
            </article>
        </section >
    )
}
export default TaskGen