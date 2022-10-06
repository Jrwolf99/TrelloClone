

import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import styled from 'styled-components'



const StyledDroppable = styled.div`
    display: flex;
    justify-content: flex-start;

`;

export default function DropContainer({ direction, children, droppableId, listType }) {

    return (
        <Droppable
            droppableId={droppableId}
            direction={direction}
            type={listType}>
            {(provided) => (
                <StyledDroppable
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {children}
                    {provided.placeholder}
                </StyledDroppable>
            )}
        </Droppable>
    )
}
