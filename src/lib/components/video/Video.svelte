<script>
    import PreloadImage from "$lib/components/video/PreloadImage.svelte";
    import {onMount} from "svelte";
    $:showVideo = false;
    $:loaded = false;


/**
 * we are going to display photo while video will be loaded, on event "loaded" we will show
 * videobackground
*/
onMount(() => {
    // Load the video after styles have been loaded
    const loadVideo = async () => {
      await new Promise((resolve) => {
        const styleSheets = document.styleSheets;
        let loadedStylesheets = 0;

        // Count the number of loaded styles
        const countLoadedStylesheets = () => {
            loadedStylesheets++;
            
            // If all styles are loaded, load the video
            if (loadedStylesheets === styleSheets.length) {
                resolve();
            }
        };

        // Проверяем каждый стиль на загрузку
        for (const styleSheet of styleSheets) {
            if (styleSheet.href) {
                if (styleSheet.cssRules && styleSheet.cssRules.length) {
                countLoadedStylesheets();
                } else {
                styleSheet.addEventListener('load', countLoadedStylesheets);
                }
            } else {
                // Если стиль не имеет ссылки, считаем его загруженным
                countLoadedStylesheets();
            }
            }
        });

        // Load the video
        setTimeout(() => loaded = true, 10);
    };

    loadVideo();
});


function ensureVideoLoaded(e){
    // A promise that resolves when the video is loaded
    const videoLoadedPromise = new Promise((resolve) => {
        e.target.addEventListener('canplaythrough', resolve, { once: true });
    });

    // Wait for the video to load and then show it
    videoLoadedPromise.then(() => {
        showVideo = true;
    });
}


function restartVideo({target}){
    target.style.opacity = "0";
    setTimeout(() => {
        target.currentTime = 0;
        target.play().then( () => target.style.opacity = "1");
    }, 400)
}


</script>

{#if !showVideo}
    <PreloadImage/>
{/if}

{#if loaded}
    <video class="mobile" class:showVideo autoplay muted playsinline on:loadeddata={ensureVideoLoaded} on:ended={restartVideo}>
        <source src="/videos/mobile.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
{/if}

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
        opacity: 0;
        transition: opacity .4s ease-in-out;
    }

    video.showVideo {
        opacity: 1;
    }

    @media screen and (min-width: 500px){
        .mobile{
            display: none;
        }
    }
</style>