export async function load({fetch}){
    //console.log("+layout.js")
    // haetaan molemmat APIt
    const coursesAPI = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/courses");
    const notesAPI = await fetch("https://luentomuistiinpano-api.netlify.app/.netlify/functions/notes");

    // luetaan data & data muutetaan muuttujiin
    const coursesData = await coursesAPI.json();
    const notesData = await notesAPI.json();

    // palautetaan
    return {
        courses: coursesData,
        notes: notesData
    };
}