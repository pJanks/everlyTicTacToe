import React from 'react';
import Square from './Square'

const style = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({ squares, onClick }) => (
    <div style={ style }>
        <Square onClick={() => onClick('dummyValue')} value='1' />
        <Square onClick={() => onClick('dummyValue')} value='2' />
        <Square onClick={() => onClick('dummyValue')} value='3' />
        <Square onClick={() => onClick('dummyValue')} value='4' />
        <Square onClick={() => onClick('dummyValue')} value='5' />
        <Square onClick={() => onClick('dummyValue')} value='6' />
        <Square onClick={() => onClick('dummyValue')} value='7' />
        <Square onClick={() => onClick('dummyValue')} value='8' />
        <Square onClick={() => onClick('dummyValue')} value='9' />
    
    </div>
);

export default Board;