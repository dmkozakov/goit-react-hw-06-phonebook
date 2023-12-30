import { RootState } from './store';

export const getContacts = (state: RootState) => state.contacts;
export const getFilter = (state: RootState) => state.filter;
