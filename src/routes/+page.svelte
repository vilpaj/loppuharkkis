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
    .linkCont{
        display: flex;
    }
    .linkDiv{
        border: 3px solid;
        margin-bottom: 1rem;
        margin-right: 20px;
        padding: 1rem;
        background-color:  rgba(193, 183, 183, 0.956);
    }
    a{
        text-decoration: none;
        color: inherit;
    }
</style>