<script lang="ts">
  import type { Asset } from '../../../containeres/Projects/projects';

  export let assets: Asset[];

  const stylesByIndex: Record<number, string> = {
    [0]: 'translate-y-2  translate-x-12 z-10',
    [1]: 'translate-y-16 -translate-x-12  z-10'
  };
</script>

<div class="relative flex w-full px-5">
  {#each assets as asset, index}
    <figure class="flex items-center justify-center overflow-hidden {stylesByIndex[index]}">
      <img
        class="aspect-auto w-full"
        src={asset.url}
        height={asset.height}
        width={asset.width}
        alt={asset.alt}
      />
    </figure>
  {/each}
</div>
