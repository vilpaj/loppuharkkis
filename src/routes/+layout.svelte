<header><a href="/">NoteApp</a></header>

<slot />

<footer><span>VP // NTK22SP</span></footer>

<style>
    header a{
        text-decoration: none;
        color: inherit;
        font-size: 2rem;
        font-weight: bold;
        background-color: rgba(148, 126, 93, 0.811);
        border-radius: 5px;
        padding: 10px;
    }
    header{
        margin-bottom: 10px;
        padding: 10px;
    }
    footer span{
        padding: 10px;
        font-size: 14px;
        background-color: rgba(167, 146, 113, 0.811);
        border-radius: 5px;
        padding: 10px;
        margin-left: 10px;
    }
</style>