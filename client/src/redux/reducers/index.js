import { combineReducers } from "redux";
import posts from './posts.js';
import modal from './modal.js';

export default combineReducers({
    posts,
    modal
})