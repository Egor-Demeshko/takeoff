<script>
    import TransparentPlaceHolder from "$lib/components/buttons/TransparentPlaceHolder.svelte";
    import MenuIcon from "$lib/components/icons/MenuIcon.svelte";
    import {isMenuOpen} from "$lib/scripts/stores.js";
    import {onMount} from "svelte";

    var placeHolderInner;

    function handleMenuClick(){
        console.log("isMenuOpen: " + $isMenuOpen);
        isMenuOpen.set(!$isMenuOpen);
    }

    onMount( () => {

    });
</script>

    <TransparentPlaceHolder
    --top="unset" 
    --right="var(--position-gap)" 
    --bottom="2rem" 
    --left="var(--position-gap)"
    --height="3.75rem">
        <div on:click={ handleMenuClick } style="height: 3.75rem" bind:this={placeHolderInner}>
        </div>
    </TransparentPlaceHolder>

    <div class="menu_wrapper" role="button" aria-label="Open menu" tabindex="0">
        <MenuIcon/>
    </div>

<style>
    .menu_wrapper{
        position: fixed;
        bottom: calc(2rem + (3.75rem / 2));
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>