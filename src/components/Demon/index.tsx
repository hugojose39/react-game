import './index.css'
import { DEMON_TILE_SIZE, TILE_SIZE } from '../../settings/constants';

const Demon = () => {
    return (
        <div
            style={{
                width: DEMON_TILE_SIZE,
                height: DEMON_TILE_SIZE,
                backgroundImage: "url(./assets/DEMON.png)",
                backgroundRepeat: "no-repeat",
                animation: 'demon-animation 1s steps(4) infinite',
                position: 'absolute',
                bottom: TILE_SIZE * 10,
                left: TILE_SIZE * 10,
            }}
        />
    );
}

export default Demon