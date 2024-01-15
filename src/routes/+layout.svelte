<script>
    import Topbar_mobile from "$lib/components/topbar/Topbar_mobile.svelte";
    import normolize from "normalize.css";
</script>

<div class="background">
    <Topbar_mobile/>
    <slot></slot>
</div>

<style>
    .background{
        background-color: #000;
    }
</style>