import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement } from '../../__data__/actions';

import { State } from './types';

export const Counter: FC = () => {
    const counterValue = useSelector((state: State) => state.counter.value);
    const dispatch = useDispatch();

    const handleIncrement = useCallback(() => {
        dispatch(increment());
    }, [dispatch]);

    const handleDecrement = useCallback(() => {
        dispatch(decrement());
    }, [dispatch]);

    return (
        <section>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <p>{counterValue}</p>
        </section>
    );
};