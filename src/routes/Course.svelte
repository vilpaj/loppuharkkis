<script>
    // @ts-nocheck
        export let id;
        export let name;
    
    </script>
    
    
    <div>
        <ul>
            <li>
                <a href={`/course/${id}`}>{name} // ID: {id}</a>
            </li>
        </ul>
    </div>
    
    <style>
        a{
            text-decoration: none;
            color: inherit;
        }
    </style>