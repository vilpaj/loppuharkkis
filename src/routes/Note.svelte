<script>
    // @ts-nocheck
        //export let id;
        export let text;
        export let course;
        export let timestamp;
    
        const {id: courseID, name: courseName} = course
    </script>
    
    <div>
        <p>Course name: {courseName} // ID: {courseID}</p>
        <p>{timestamp}</p>
        {#if text !== undefined}
            <p>{text}</p>
        {:else}
            <p>Ei muistiinpanoja!</p>  
        {/if}
        
    </div>
    
    <style>
        div{
            border: 1px solid black;
            margin-bottom: 1rem;
        }
    </style>