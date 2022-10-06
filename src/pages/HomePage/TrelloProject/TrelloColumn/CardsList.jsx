import React from 'react'
import { TrelloCard } from '../TrelloCard/TrelloCard';
import { observer } from 'mobx-react-lite';
import DropContainer from '../../../../components/Drag/DropContainer';
import DragItem from '../../../../components/Drag/DragItem';

export const CardsList = observer(({ cards, columnid }) => {
    return (
        <>
            <DropContainer
                droppableId={columnid}
                direction='vertical'
                listType="CardWise"
                handleOnDragEnd={() => { }}>
                {
                    cards.map((card, cardindex) => {
                        return (
                            <DragItem
                                key={card.id}
                                id={card.id}
                                index={cardindex}
                            >
                                <TrelloCard
                                    key={card.id}
                                    cardid={card.id} />
                            </DragItem>);
                    })
                }
            </DropContainer>
        </>
    );
})

