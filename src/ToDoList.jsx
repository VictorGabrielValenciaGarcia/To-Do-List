import React, { useState } from "react";

function ToDoList() {

    const [task, setTasks] = useState([
        "Lavar la Ropa",
        "Preparar la Cena",
        "Barrer el Patio",
    ]);
    const [inputTask, setInputTask] = useState("");

    function handleInputChange(event) {
        setInputTask(event.target.value);
    }

    function addTask() {

        if(inputTask.trim() !== "") {
            setTasks(t=> [...t, inputTask]);
            setInputTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = task.filter(
            (_, i) => i !== index
        );

        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {

        if(index > 0) { 
            const updatedTasks = [...task];

            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];

            setTasks(updatedTasks);
        }

    }

    function moveTaskDown(index) {

        if(index < task.length - 1) { 
            const updatedTasks = [...task];

            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];

            setTasks(updatedTasks);
        }
    }

    return (
        <div className="flex flex-col items-center justify-start min-h-screen px-5 py-7 bg-stone-100">

            
            <div 
                className="block w-full p-5 my-2 bg-white border border-gray-200 rounded-lg shadow md:w-1/2">

                <h5 
                    className="pb-2 mb-4 text-2xl font-bold tracking-tight text-center text-gray-900 border-b-2">
                    Añadir Pendiente
                </h5>


                <form class="max-w-md mx-auto">   
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" viewBox="0 0 24 24" 
                                stroke-width="1.5" stroke="currentColor" 
                                class="size-6 text-gray-500"
                            >
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>

                        </div>
                        <input 
                            type="text" 
                            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter a Text..."
                            value={inputTask}
                            onChange={handleInputChange}
                        />
                        <button 
                            type="button" 
                            onClick={addTask}
                            class="text-white absolute end-2.5 bottom-2.5 bg-emerald-600 hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm px-3 py-2"
                        >
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 24 24" fill="currentColor"
                                class="size-4"
                            >
                                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                            </svg>


                        </button>
                    </div>
                </form>

            </div>

            <div 
                className="block w-full p-6 my-2 bg-white border border-gray-200 rounded-lg shadow md:w-1/2">

                <h5 
                    className="pb-2 mb-4 text-2xl font-bold tracking-tight text-center text-gray-900 border-b-2">
                    Lista de Pendientes
                </h5>

                <ul className="overflow-auto divide-y divide-gray-200 max-h-56 md:px-3 sm:px-1">
                    
                    {task.map((task,index) => 
                    
                        <li className="px-2 py-2 sm:py-3 hover:bg-gray-50" key={index}>
                            <div className="flex items-center space-x-4 rtl:space-x-reverse">
                                
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-gray-900 truncate text-md">
                                    {task}
                                    </p>
                                </div>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900">

                                    {/* Up Task */}
                                    <button
                                        onClick={() => moveTaskUp(index)}
                                        type="button" 
                                        class="focus:outline-none text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-2 py-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                            <path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm14.47 3.97a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 1 1-1.06 1.06L18 10.81V21a.75.75 0 0 1-1.5 0V10.81l-2.47 2.47a.75.75 0 1 1-1.06-1.06l3.75-3.75ZM2.25 9A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm0 4.5a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                                        </svg>
                                    </button> 

                                    {/* Up Down Task */}
                                    <button
                                        onClick={() => moveTaskDown(index)}
                                        type="button" 
                                        class="mx-2 focus:outline-none text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 font-medium rounded-lg text-sm px-2 py-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                            <path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 0 1 3 3.75h14.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Zm0 4.5A.75.75 0 0 1 3 8.25h9.75a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 9Zm15-.75A.75.75 0 0 1 18 9v10.19l2.47-2.47a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 1 1 1.06-1.06l2.47 2.47V9a.75.75 0 0 1 .75-.75Zm-15 5.25a.75.75 0 0 1 .75-.75h9.75a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                                                        
                                    {/* Delete Task */}
                                    <button
                                        onClick={() => deleteTask(index)}
                                        type="button" 
                                        class="focus:outline-none text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-2 py-2"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-4">
                                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                                        </svg>
                                    </button>

                                </div>
                            </div>
                        </li>
                    
                    )}
                    
                </ul>

            </div>

        </div>
    );
}

export default ToDoList;