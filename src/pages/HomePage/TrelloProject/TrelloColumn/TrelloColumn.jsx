import React, { useContext } from 'react'
import { ProjectStoreContext } from "../ProjectMobxStore/ProjectStoreContext"
import { observer } from 'mobx-react-lite';
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa"
import { TbChevronsUpLeft } from "react-icons/tb"
import { CardsList } from './CardsList';
import { useProjectStoreFunctions } from '../ProjectMobxStore/useProjectStoreFunctions';

const StyledTrelloColumn = styled.div`
    min-width: 263px;
    background-color: #ebecf0;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    margin-bottom: 1rem;
   
    &>button {
        margin: .2rem .5rem .5rem .5rem;
        padding-left: .5em ;
        border-radius: 3px;
        text-align: left;
        transition: all .05s ease-in;
    }
    &>button:hover {
        background-color: #c5c5c5;
    }

`;
const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    &>input, &>button {
        margin: 0.5rem;
        font-size: 1rem;
    }
    &>input {
        background-color: transparent;
        border: none;
        width: 100%;
    }
`;
const StyledDragBar = styled.div`
 font-size: 1.5rem;
 /* background-color: red; */
`;
const StyledCards = styled.div`
    &>*{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .4rem;
    margin: 0.5rem 0;
&>* {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

    }   
`;


export const TrelloColumn = observer(({ columnid }) => {
    const store = useContext(ProjectStoreContext);
    const { storeFunctions } = useProjectStoreFunctions(store);
    return (
        <StyledTrelloColumn>
            <StyledDragBar>
                <TbChevronsUpLeft />
            </StyledDragBar>
            <StyledHeader>
                <input contentEditable
                    placeholder='New Column'
                    onChange={(e) => storeFunctions.setColumnTitle(columnid, e.target.value)}
                    value={storeFunctions.getColumnTitle(columnid)}
                />
                <button>
                    <FaTrashAlt onClick={() => storeFunctions.deleteColumn(columnid)} />
                </button>
            </StyledHeader>
            <StyledCards>
                {store.projectColumnsList.map((column, i) => {
                    if (columnid === column.id) {
                        return <CardsList
                            cards={column.cardsList}
                            columnid={column.id}
                            key={column.id} />
                    }
                    return <span key={i} style={{ display: "none" }}></span>;
                })}
            </StyledCards>
            <button onClick={() => storeFunctions.addCard(columnid)}>+</button>
        </StyledTrelloColumn >
    )
})
