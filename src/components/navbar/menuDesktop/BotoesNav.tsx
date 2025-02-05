import BotaoDarkMode from "./BotaoDarkMode";


export default function BotoesNav() {

    return (
        <div className="hidden md:flex cursor-pointer  gap-2">
            <button className="button-color-1 p-2 w-10 rounded-md text-md font-medium light:bg-blue-500 cursor-pointer">PT</button>
            {/* <button 
            className="button-color-1 p-2 w-10 rounded-md  text-md font-medium cursor-pointer"
            >
              <Sun />
            </button> */}
            <BotaoDarkMode />
          </div>
    )
}