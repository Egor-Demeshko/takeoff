<script>
    import Topbar_mobile from "$lib/components/topbar/Topbar_mobile.svelte";
    import Background from "$lib/components/menu/Background.svelte";
    import BottomButton from "$lib/components/buttons/BottomButton.svelte";
    import "normalize.css";
</script>

<svelte:head>
    <style>
        .background {
            background-image: url(/small-background.png);
        }

        @media screen and (min-width: 500px) {
            .background {
                background-image: url(/background.png);
            }
        }
    </style>
</svelte:head>

<div class="background">
    <slot></slot>
    <Background/>
    <Topbar_mobile/>
    <BottomButton/>
</div>

<style>
    .background{
        background-color: var(--white);
        min-height: 100vh;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>