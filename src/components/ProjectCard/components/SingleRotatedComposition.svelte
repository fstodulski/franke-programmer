<script lang="ts">
  import type { Asset } from '../../../containeres/Projects/projects';

  export let height: number;
  export let assets: Asset[];
</script>

<div style="height: {height}px" class="relative flex w-full justify-center">
  {#each assets as asset, index}
    <figure class="flex translate-y-2 -rotate-6">
      <img
        height={asset.height}
        width={asset.width}
        alt={asset.alt}
        class="w-full rounded-md shadow-md drop-shadow-2xl {asset.cssClass}"
        src={asset.url}
      />
    </figure>
  {/each}
</div>
