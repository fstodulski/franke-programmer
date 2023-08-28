<script lang="ts">
  import type { Asset } from '../../../containeres/Projects/projects';

  export let assets: Asset[];
</script>

<div class="relative mt-16 flex w-full items-center justify-center pb-12">
  {#each assets as asset}
    <figure class="flex">
      <img class="mx-auto max-w-[90%] rounded-md drop-shadow-xl" src={asset.url} alt="" />
    </figure>
  {/each}
</div>
