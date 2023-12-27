// @ts-nocheck
import { writable } from "svelte/store";

function createNotes(){

    let og_notes = [
        {id: 4, text: "Array on kivaa", course: {id: 1, name: "java"}, timestamp: "2023-12-18 12:34:56"},
        {id: 5, text: "Tämä on kokeilu", course: {id: 1, name: "java"}, timestamp: "2023-12-18 14:45:30"},
        {id: 6, text: "Nej, jag inte talar svenska", course: {id: 2, name: "ruotsi"}, timestamp: "2023-12-18 14:45:30"},
        {id: 7, text: "English is fun!", course: {id: 4, name: "englanti"}, timestamp: "2023-12-25 12:15:00"}
    ];

    const{ subscribe, set, update } = writable(og_notes);
    return{
        subscribe,
        // @ts-ignore
        add: (note) => update((og_notes) => [...og_notes, note]),
        reset: () => set([])
    }
}
export const notes = createNotes();