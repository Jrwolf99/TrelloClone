import uuid from 'react-uuid';
import { useAuthContext } from '../../../../context/authentication/useAuthContext';
import { useAccessDatabase } from '../../../../hooks/useAccessDatabase';

export const useProjectStoreFunctions = (store) => {

    const { user } = useAuthContext();
    const { refreshFireContent } = useAccessDatabase(user);

    const storeFunctions = {
        addColumn: () => {
            store.projectColumnsList.push({
                id: uuid(),
                title: "",
                cardsList: [{ id: uuid(), text: "" }],
            });
            refreshFireContent(store.projectColumnsList);
        },

        deleteColumn: (columnid) => {
            store.projectColumnsList.forEach((column, index) => {
                if (columnid === column.id) {
                    store.projectColumnsList.splice(index, 1);
                }
            });
            refreshFireContent(store.projectColumnsList);
        },

        setColumnTitle: (columnid, newTitle) => {
            store.projectColumnsList.forEach((column) => {
                if (columnid === column.id) {
                    column.title = newTitle;
                }
            });
            refreshFireContent(store.projectColumnsList);
        },

        getColumnTitle: (columnid) => {
            let result;
            store.projectColumnsList.forEach((column) => {
                if (columnid === column.id) {
                    result = column.title;
                }
            });
            return result;
        },

        addCard: (columnid) => {
            store.projectColumnsList.forEach((column, index) => {
                if (columnid === column.id) {
                    store.projectColumnsList[index].cardsList.push({
                        id: uuid(),
                        text: "",
                    });
                }
            });
            refreshFireContent(store.projectColumnsList);
        },

        deleteCard: (cardid) => {
            store.projectColumnsList.forEach((column, colIndex) => {
                column.cardsList.forEach((card, cardIndex) => {
                    if (cardid === card.id) {
                        store.projectColumnsList[colIndex].cardsList.splice(cardIndex, 1);
                    }
                });
            });
            refreshFireContent(store.projectColumnsList);
        },

        setCardText: (cardid, newText) => {
            store.projectColumnsList.forEach((column) => {
                column.cardsList.forEach((card) => {
                    if (cardid === card.id) {
                        card.text = newText;
                    }
                });
            });
            refreshFireContent(store.projectColumnsList);
        },

        getCardText: (cardid) => {
            let result;
            store.projectColumnsList.forEach((column) => {
                column.cardsList.forEach((card) => {
                    if (cardid === card.id) {
                        result = card.text;
                    }
                });
            });
            return result;
        },

        moveCardInColumn: (columnid, sourceIndex, destIndex) => {
            store.projectColumnsList.forEach((column, colIndex) => {
                if (columnid === column.id) {
                    let myCard = column.cardsList[sourceIndex];
                    store.projectColumnsList[colIndex].cardsList.splice(sourceIndex, 1);
                    store.projectColumnsList[colIndex].cardsList.splice(
                        destIndex,
                        0,
                        myCard
                    );
                }
            });
            refreshFireContent(store.projectColumnsList);
        },

        moveWholeColumn: (sourceIndex, destIndex) => {
            let myCol = store.projectColumnsList[sourceIndex];
            store.projectColumnsList.splice(sourceIndex, 1);
            store.projectColumnsList.splice(destIndex, 0, myCol);
            refreshFireContent(store.projectColumnsList);
        },

        moveCardToDiffColumn: (
            sourceColumnid,
            sourceIndex,
            destColumnid,
            destIndex
        ) => {
            let myCard;
            store.projectColumnsList.forEach((column, colIndex) => {
                if (sourceColumnid === column.id) {
                    myCard = column.cardsList[sourceIndex];
                    store.projectColumnsList[colIndex].cardsList.splice(sourceIndex, 1);
                }
            });

            store.projectColumnsList.forEach((column, colIndex) => {
                if (destColumnid === column.id) {
                    store.projectColumnsList[colIndex].cardsList.splice(
                        destIndex,
                        0,
                        myCard
                    );
                }
            });
            refreshFireContent(store.projectColumnsList);
        },


    }
    return { storeFunctions };
};
