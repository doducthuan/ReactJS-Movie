import React from 'react';
import styled from 'styled-components';
const StyledBody = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;
function Card(){
    return (
        <StyledBody>
            <div className="text-3xl font-bold underline">Hello</div>
            <div className="text-3xl font-bold underline">Hi</div>
            <div>Ten</div>
            <div>True</div>
        </StyledBody>
    )
}
export default Card;