import Vue from 'vue';
import Vuex from 'vuex';

import { dataService } from '@/shared/dataService';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACTS,
  UPDATE_CONTACT,
} from './mutation-types';

Vue.use(Vuex);

const state = () => ({
  contacts: [],
});

const mutations = {
  [ADD_CONTACT](state, contact) {
    state.contacts.push(contact);
  },
  [UPDATE_CONTACT](state, contact) {
    const index = state.contacts.findIndex(c => c.id === contact.id);
    state.contacts.splice(index, 1, contact);
    state.contacts = [...state.contacts];
  },
  [GET_CONTACTS](state, contacts) {
    state.contacts = contacts;
  },
  [DELETE_CONTACT](state, contact) {
    state.contacts = [...state.contacts.filter(c => c.id !== contact.id)];
  },
};

const actions = {
  addContact({ commit }, contact) {
    dataService.addContact(contact);
    commit(ADD_CONTACT, contact);
  },
  deleteContact({ commit }, contact) {
    dataService.deleteContact(contact);
    commit(DELETE_CONTACT, contact);
  },
  getContacts({ commit }) {
    const contacts = dataService.getContacts();
    commit(GET_CONTACTS, contacts);
  },
  updateContact({ commit }, contact) {
    dataService.updateContact(contact);
    commit(UPDATE_CONTACT, contact);
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
