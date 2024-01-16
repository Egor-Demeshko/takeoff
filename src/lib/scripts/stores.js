import {writable} from "svelte/store";

/** used on mobile devices, to show text clue on top*/
export const topMenuText = writable("");

/** controll open/close menu 
 * @param {boolean} isMenuOpen*/
export const isMenuOpen = writable(false);