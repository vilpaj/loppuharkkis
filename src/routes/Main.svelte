<script>
    const links = [
        {text: 'List notes', href: "/list"},
        {text: 'Add course', href: "/add"},
        {text: 'Create a note', href: "/create"}
    ];
</script>

<div class="linkCont">
    {#each links as link(link.href)}
        <div class="linkDiv">
            <a href={link.href}>{link.text}</a>
        </div>
    {/each}
</div>

<style>
    @import 'Style.css';
    
    .linkCont{
        display: flex;
        padding: 10px;
    }
    .linkDiv{
        border: 3px solid;
        margin-bottom: 1rem;
        margin-right: 20px;
        padding: 1rem;
        background-color:  rgba(193, 183, 183, 0.956);
        border-radius: 5px;
        padding: 10px;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
</style>