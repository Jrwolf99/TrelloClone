import { useLocalObservable } from "mobx-react";
import { createContext } from "react";
import uuid from "react-uuid";

export const ProjectStoreContext = createContext();

export const ProjectStoreProvider = ({ children }) => {
  const store = useLocalObservable(() => {
    return {
      projectColumnsList: [
        {
          id: uuid(),
          title: "Help",
          cardsList: [
            { id: uuid(), text: "Drag these notes to wherever you need." },
            { id: uuid(), text: "You can also move the columns around." },
          ],
        },
        {
          id: uuid(),
          title: "To Do",
          cardsList: [{ id: uuid(), text: "Write your notes here!" }],
        },
        {
          id: uuid(),
          title: "In Progress",
          cardsList: [{ id: uuid(), text: "Write your notes here!" }],
        },
        {
          id: uuid(),
          title: "Finished",
          cardsList: [{ id: uuid(), text: "Write your notes here!" }],
        },
      ],
    };
  });

  return (
    <ProjectStoreContext.Provider value={store}>
      {children}
    </ProjectStoreContext.Provider>
  );
};
