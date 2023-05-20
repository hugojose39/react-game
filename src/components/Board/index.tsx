import Hero from "../Hero";
import { GAME_SIZE } from "../../settings/constants";
import MiniDemon from "../MiniDemon";
import Demon from "../Demon";
import Chest from "../Chest";
import Trap from "../Trap";

const Board = () => {
    return (
        <div>
            <Chest />
            <Demon />
            <MiniDemon />
            <Hero />
            <Trap />
            <img src="./assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/> 
        </div>
    );
}

export default Board