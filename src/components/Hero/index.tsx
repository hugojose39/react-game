import './index.css'
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants';
import { useEffect, useRef, useState } from 'react';

const initialPosition = {
    x: 8,
    y: 3,
};

const Hero = () => {
    const [positionState, updatePositionState] = useState(initialPosition);
    const [direction, updateDirectionState] = useState('RIGHT');
    const positionStateRef = useRef(positionState);
    const directionStateRef = useRef(direction);

    useEffect(() => {
        positionStateRef.current = positionState;
    }, [positionState]);

    useEffect(() => {
        directionStateRef.current = direction;
    }, [direction]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            const { key } = event;
            const positionState = positionStateRef.current;

            if (key === 'ArrowLeft') {
                updatePositionState({ x: positionState.x - 1, y: positionState.y });
                updateDirectionState('LEFT');
            } else if (key === 'ArrowRight') {
                updatePositionState({ x: positionState.x + 1, y: positionState.y });
                updateDirectionState('RIGHT');
            } else if (key === 'ArrowDown') {
                updatePositionState({ x: positionState.x, y: positionState.y - 1 });
            } else if (key === 'ArrowUp') {
                updatePositionState({ x: positionState.x, y: positionState.y + 1 });
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div
            style={{
                width: TILE_SIZE,
                height: TILE_SIZE + HEAD_OFFSET,
                backgroundImage: "url(./assets/HERO.png)",
                backgroundRepeat: "no-repeat",
                animation: 'hero-animation 1s steps(4) infinite',
                position: 'absolute',
                backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
                bottom: TILE_SIZE * positionState.y,
                left: TILE_SIZE * positionState.x,
                transform: `scaleX(${direction === 'RIGHT' ? 1 : -1})`
            }}
        />
    );
}

export default Hero;
