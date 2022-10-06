import uuid from 'react-uuid';

export const useProjectStoreFunctions = (store) => {

    console.log("STORE: ", store);
    const storeFunctions = {
        addColumn: () => {
            store.projectColumnsList.push({
                id: uuid(),
                title: "",
                cardsList: [{ id: uuid(), text: "hi!" }],
            });
        },

        deleteColumn: (columnid) => {
            store.projectColumnsList.forEach((column, index) => {
                if (columnid === column.id) {
                    store.projectColumnsList.splice(index, 1);
                }
            });
        },

        setColumnTitle: (columnid, newTitle) => {
            store.projectColumnsList.forEach((column) => {
                if (columnid === column.id) {
                    column.title = newTitle;
                }
            });
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
        },

        deleteCard: (cardid) => {
            console.log("deletingcard...");
            store.projectColumnsList.forEach((column, colIndex) => {
                column.cardsList.forEach((card, cardIndex) => {
                    if (cardid === card.id) {
                        store.projectColumnsList[colIndex].cardsList.splice(cardIndex, 1);
                    }
                });
            });
        },

        setCardText: (cardid, newText) => {
            store.projectColumnsList.forEach((column) => {
                column.cardsList.forEach((card) => {
                    if (cardid === card.id) {
                        card.text = newText;
                    }
                });
            });
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
        },

        moveWholeColumn: (sourceIndex, destIndex) => {
            let myCol = store.projectColumnsList[sourceIndex];
            store.projectColumnsList.splice(sourceIndex, 1);
            store.projectColumnsList.splice(destIndex, 0, myCol);
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
                    console.log("deleting card from old column");
                    myCard = column.cardsList[sourceIndex];
                    store.projectColumnsList[colIndex].cardsList.splice(sourceIndex, 1);
                }
            });

            store.projectColumnsList.forEach((column, colIndex) => {
                if (destColumnid === column.id) {
                    console.log("adding card to new col");
                    store.projectColumnsList[colIndex].cardsList.splice(
                        destIndex,
                        0,
                        myCard
                    );
                }
            });
        },




    }
    return { storeFunctions };
};
