<script>
    import { onMount } from "svelte";
    var imageNode;
    
    onMount( () => {
        
    });
</script>


<div>
    <img src="/placeholders/rocket.png" alt="Image of an rocket" loading="eager" bind:this={imageNode}/>
    <div class="shadow">

    </div>
</div>


<style>
    div{
        background-color: var(--black);
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .shadow{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    img{
        display: block;
        border-radius: var(--border-radius);
        filter: grayscale(100%);
    }

    @media screen and (min-width: 500px){
        div{
            display: none;
        }
    }
</style>