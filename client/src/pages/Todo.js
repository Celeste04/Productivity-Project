import Task from "../components/Task.js"

export default function Todo () {
    return (
        <div class="bg-green h-screen w-screen">
            <h1 class='text-4xl font-bold text-center text-grey p-10'>To-Do</h1>
            <Task taskName={"Assignment 0"} coinAmount={20}/>
            <button class="p-5 bg-blue text-lg font-bold rounded-2xl text-grey drop-shadow-md">Add Task</button>
        </div>
    );
};