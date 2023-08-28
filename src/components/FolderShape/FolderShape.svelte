<script lang="ts">

let width: number;

</script>


<svelte:window bind:innerWidth={width} ></svelte:window>

<svg {width} height={width * 1.1} viewBox="0 0 {width} {width * 1.1}" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 25C0 11.1929 11.1929 0 25 0H124.601C132.129 0 139.256 3.39243 144.004 9.23519L148.496 14.7648C153.244 20.6076 160.371 24 167.899 24H212.5H257V24C270.807 24 282 35.1929 282 49V244C282 257.807 270.807 269 257 269H25C11.1929 269 0 257.807 0 244V25Z" fill="#F178B6"/>
</svg>
