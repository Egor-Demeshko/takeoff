<script>
    import Logo from "./Logo.svelte";
    import TopbarText from "./TopbarText.svelte";
</script>

<header>
    <Logo/>
    <TopbarText/>
</header>

<style>
    header{
        --padding: 1.625rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;
        position: fixed;
        top: var(--padding);
        left: 0;
        height: 3rem;
        width: 100%;
        padding: 0 var(--padding);
        z-index: 10;
    }
</style>