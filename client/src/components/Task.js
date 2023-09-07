import { Link } from "react-router-dom"

export default function Task({ taskName, coinAmount }) {

    return (
        <div class="bg-cream h-48 w-1/2 grid grid-rows-2 grid-cols-2 p-7 rounded-3xl drop-shadow-lg">
            <div>
                <h1 class="text-2xl font-bold text-grey mb-10">{taskName}</h1>
            </div>
            <div>
                <Link to="/timer">
                    <button class="bg-blue p-2 px-4 rounded-xl font-bold text-grey text-3xl">Go</button>
                </Link>
            </div>
            <div>
                <h1 class="text-xl inline-block rounded-full p-3 px-5 bg-light-grey">+{coinAmount}</h1>
            </div>
        </div> 
    )
}