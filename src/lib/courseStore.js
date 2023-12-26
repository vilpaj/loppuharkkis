import { writable } from "svelte/store";

function createCourses(){

    let og_courses = [
        {name: 'englanti', id: '4'},
        {name: 'frontend', id: '5'}
    ];

    const{ subscribe, set, update } = writable(og_courses);
    return{
        subscribe,
        // @ts-ignore
        add: (course) => update((courses) => [...courses, course]),
        reset: () => set([])
    }
}
export const courses = createCourses();