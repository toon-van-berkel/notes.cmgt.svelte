<script lang="ts">
    import { base } from '$app/paths';

    let status = true;
</script>

<nav>
    <div>
        <a href="/">
            <img src="{base}/images/Logo.png" alt="">
            <span>Notes - CMGT</span>
        </a>
    </div>
    <ul>
        <li><a href="#courses">Courses</a></li>
        <li><a href="#minigames">Mini-games</a></li>
    </ul>
    <div class="HamburgerMenu">
        {#if status === false}
            <img src="{base}/images/BurgerMenu.png" alt="Hamburger Menu Icon" onclick={() => { status = true}} />
        {:else if status}
            <img src="{base}/images/Close.png" alt="Close Menu Icon" onclick={() => { status = false}} />
            <div>
                <ul>
                    <li><a href="#courses" onclick={() => { status = false}}>Courses</a></li>
                    <li><a href="#minigames" onclick={() => { status = false}}>Mini-games</a></li>
                </ul>
            </div>
        {/if}
    </div>
</nav>