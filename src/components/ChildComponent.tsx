import React from 'react';

const ChildComponent = ({ count }: { count: number }) => {
    return (
        <div style={{ padding: '40px', border: '2px solid green ', margin: '20px' }}>
            {count}
        </div>
    );
};

export default ChildComponent;