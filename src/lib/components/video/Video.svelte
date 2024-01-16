<script>
    import PreloadImage from "$lib/components/video/PreloadImage.svelte";
    $:loaded = false;


/**
 * we are going to display photo while video will be loaded, on event "loaded" we will show
 * videobackground
*/
function handleVideoLoad() {
  // Handling the event after the video has fully loaded all data
  console.log('Видео полностью загружено');
};

</script>

{#if !loaded}
    <PreloadImage/>
{/if}

<video class="mobile" class:loaded autoplay muted playsinline preload="auto" on:loadeddata={handleVideoLoad}>
    <source src="/videos/mobile.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>


<style>
    video {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
        z-index: 0;
        visibility: visible;
    }

    video.loaded {
        visibility: visible;
    }

    @media screen and (min-width: 500px){
        .mobile{
            display: none;
        }
    }
</style>