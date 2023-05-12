import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import contactsReducer from "./modules/Contacts/ContactSlice";
import HeroReducer from "./modules/Hero/HeroSlice";
import WhoReducer from "./modules/Who/WhoSlice";
import WorksReducer from "./modules/Works/WorksSlice";
import ThemeReducer from "./Components/ThemeSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  hero: HeroReducer,
  who: WhoReducer,
  works: WorksReducer,
  theme: ThemeReducer,
});

export const Store = configureStore(
  {
    reducer: rootReducer,
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
