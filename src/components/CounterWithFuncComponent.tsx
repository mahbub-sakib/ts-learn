import React from 'react';
import ChildComponent from './ChildComponent';

type Tprops = {
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
}

const CounterWithFuncComponent = ({ count, setCount }: Tprops) => {
    console.log('render');
    return (
        <div style={{ padding: '40px', border: '2px solid red ', margin: '20px' }}>
            <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
            <ChildComponent count={count}></ChildComponent>
        </div>
    );
};

export default CounterWithFuncComponent;