<script>
    import {topMenuText} from "$lib/scripts/stores";
    import TransparentPlaceHolder from "$lib/components/buttons/TransparentPlaceHolder.svelte";
    /** One div is responsible for mix-blend-mode, another 
     * made for prevent overlapping this style with text*/
</script>

{#if $topMenuText}
    
    <TransparentPlaceHolder --top="var(--position-gap)" 
    --right="var(--position-gap)" 
    --bottom="unset" 
    --left="unset"
    --pad=".75rem"
    --height="3rem"
    --width="236px">
    </TransparentPlaceHolder>    
    
    <div class="toobar-text">
        <span>{$topMenuText}</span>
    </div>
{/if}

<style>
    .toobar-text{
        position: fixed;
        top: calc(var(--position-gap) + .75rem);
        right: var(--position-gap);
        width: 236px;
        font-size: 1.5rem;
        font-family: "Russo One", Rubbik, sans-serif;
        text-align: center;
        text-transform: uppercase;
    }

    span{
        color: var(--white);
    }
</style>