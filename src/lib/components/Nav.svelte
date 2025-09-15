<script lang="ts">
    import { base } from '$app/paths';

    let status = false;
</script>

<nav>
    <div>
        <a href={base + "/"}>
            <img src={base + "/images/Logo.png"} alt="">
            <span>Notes - CMGT</span>
        </a>
    </div>
    <ul>
        <li><a href={base + "/" + "#courses"}>Courses</a></li>
        <li><a href={base + "/" + "#minigames"}>Mini-games</a></li>
    </ul>
    <div class="HamburgerMenu">
        {#if status === false}
            <button onclick={() => { status = true}} aria-label="Menu open">
                <img src={base + "/images/BurgerMenu.png"} alt="Hamburger Menu Icon"/>
            </button>
        {:else if status}
            <button onclick={() => { status = false}} aria-label="Menu close">
                <img src={base + "/images/Close.png"} alt="Close Menu Icon"/>
            </button>
            <div>
                <ul>
                    <li><a href="#courses" onclick={() => { status = false}}>Courses</a></li>
                    <li><a href="#minigames" onclick={() => { status = false}}>Mini-games</a></li>
                </ul>
            </div>
        {/if}
    </div>
</nav>