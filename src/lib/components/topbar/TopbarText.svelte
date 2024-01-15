<script>
    import {topMenuText} from "$lib/scripts/stores";
</script>

{#if $topMenuText}
    <div>
        <span>{$topMenuText}</span>
    </div>
{/if}

<style>
    div{
        padding: .75rem 0;
        width: 100%;
        font-size: 1.5rem;
        font-family: "Russo One", Rubbik, sans-serif;
        text-align: center;
        text-transform: uppercase;
        border-radius: 14px;
        mix-blend-mode: soft-light;
    }
</style>