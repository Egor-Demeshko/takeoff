<script>
    import {isMenuOpen} from "$lib/scripts/stores.js";
    import { fade } from "svelte/transition";

</script>

{#if $isMenuOpen}
    <div in:fade out:fade></div>
{/if}

<style>
    div{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to left, var(--light-grey-80) 0%, var(--light-grey-30) 100%);
        opacity: .5;
        transition: opacity .4s ease-in-out;
    }
</style>