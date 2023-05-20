import './index.css'
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';

const MiniDemon = () => {
    return (
        <div
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage: "url(./assets/MINI-DEMON.png)",
                backgroundRepeat: "no-repeat",
                animation: 'mini-demon-animation 1s steps(4) infinite',
                position: 'absolute',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET }px`,
                bottom: TILE_SIZE * 5,
                left: TILE_SIZE * 5,
            }}
        />
    );
}

export default MiniDemon