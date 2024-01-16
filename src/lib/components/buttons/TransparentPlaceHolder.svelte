<div>
    <slot></slot>
</div>

<style>
    div{
        position: fixed;
        top: var(--top);
        right: var(--right);
        bottom: var(--bottom);
        left: var(--left);
        padding: var(--pad) 0;
        height: var(--height);
        width: var(--width);
        border-radius: var(--border-radius);
        background-color: var(--black);
        mix-blend-mode: soft-light;
    }

    @media screen and (min-width: 500px){
        div{
            display: none;
        }
    }
</style>