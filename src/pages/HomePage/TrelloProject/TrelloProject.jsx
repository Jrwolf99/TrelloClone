import React from 'react'
import { observer } from 'mobx-react-lite';
import styled from "styled-components";
import DragItem from '../../../components/Drag/DragItem';
import DropContainer from '../../../components/Drag/DropContainer';
import { useContext } from 'react';
import { ProjectStoreContext } from './ProjectMobxStore/ProjectStoreContext';
import { TrelloColumn } from './TrelloColumn/TrelloColumn';
import { DragDropContext } from 'react-beautiful-dnd';

const StyledWorkspace = styled.div`
    display: flex;
    align-items: flex-start;
   
    overflow: auto;
    padding-right: 2em;
    padding-top: 1em;
    &>button {
        font-size: 2rem;
        font-weight: 100;
        color: white;
        background-color: #ffffff45;
        border-radius: 3px;
        margin: 1rem;
        padding: .2em .7em;
    }
    &>button:hover{
        background-color: #d4d4d445;
    }

`;
export const TrelloProject = observer(() => {
    const store = useContext(ProjectStoreContext);
    return (
        <StyledWorkspace>
            <DragDropContext
                onDragEnd={({ destination, source }) => {
                    console.log("---------------")
                    if (!destination) {
                        return;
                    }
                    if (destination.droppableId === 'project') {
                        console.log("moving whole columns!");
                        store.moveWholeColumn(source.index, destination.index);
                    }
                    else if (destination.droppableId === source.droppableId) {
                        console.log("in same column!");
                        store.moveCardInColumn(source.droppableId, source.index, destination.index);
                    }
                    else {
                        console.log("moving card to different column!");
                        store.moveCardToDiffColumn(
                            source.droppableId,
                            source.index,
                            destination.droppableId,
                            destination.index
                        );
                    }
                    console.log("destination", destination);
                    console.log("source", source);

                }}>
                <DropContainer
                    key="project"
                    droppableId="project"
                    direction="horizontal"
                    listType="ColumnWise"
                >
                    {store.projectColumnsList && store.projectColumnsList.map((column, columnindex) => {
                        return (
                            <DragItem
                                key={column.id}
                                id={column.id}
                                index={columnindex}>
                                <TrelloColumn columnid={column.id} />
                            </DragItem>
                        );
                    })
                    }
                </DropContainer>
            </DragDropContext>
            <button onClick={store.addColumn}>+</button>
        </StyledWorkspace >
    )
});
