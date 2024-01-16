<script>
    import {isMenuOpen} from "$lib/scripts/stores.js";
    import animateElements from "$lib/components/icons/utils/animateElements.js";
    import { onMount } from "svelte";

    /** controll menu lines*/
    let first, second, third, fourth;
    var ariaLabel = "Menu is closed";


    onMount( () => {
        /**respond to isMenuOpen change. on mobile device it's been chenged on BottomButton.svelte*/
        isMenuOpen.subscribe( (value) => {
            animateElements(value, first, second, third, fourth);
        });
    });
    
</script>


<div class="menu_icon" aria-label={ariaLabel} role="button">
    <span class="first" bind:this={first}></span>
    <span class="second" bind:this={second}></span>
    <span class="third" bind:this={third}></span>
    <span class="fourth" bind:this={fourth}></span>
</div>

<style>
    .menu_icon{
        width: 3.875rem;   
        position: relative;
    }

    span{
        display: block;
        background-color: var(--accent);
        height: .5rem;
        width: 100%;
        border-radius: var(--border-radius);
        position: absolute;
        transition: transform .3s ease-in-out, opacity .3s ease-in-out;
        transform-origin: center center;
    }

    .first{
        transform: translateY(calc(-150% - 6px));
    }
    .second{
        transform: rotateZ(0) translateY(-50%);
    }
    .third{
        transform: translateY(150%);
        bottom: -6px;
    }
    .fourth{
        visibility: hidden;
        transform: rotateZ(0) translateY(-50%);
    }
</style>