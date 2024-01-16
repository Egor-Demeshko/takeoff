<script>
    import Topbar_mobile from "$lib/components/topbar/Topbar_mobile.svelte";
    import Background from "$lib/components/menu/Background.svelte";
    import BottomButton from "$lib/components/buttons/BottomButton.svelte";
    import "normalize.css";
</script>

<div class="background" style="background-image: url(/background.png);">
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