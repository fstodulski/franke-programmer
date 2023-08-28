<script lang="ts">
  import type { Asset } from '../../../containeres/Projects/projects';

  export let assets: Asset[];

  const stylesByIndex: Record<number, string> = {
    [0]: 'absolute -translate-x-1/2 translate-y-2 scale-95 -rotate-6 z-10',
    [1]: 'z-20',
    [2]: 'absolute translate-x-1/2 translate-y-2 scale-95 rotate-6 z-10'
  };
</script>

<div class="relative flex w-full items-center justify-center">
  {#each assets as asset, index}
    <figure class=" flex items-center justify-center overflow-hidden {stylesByIndex[index]}">
      <img
        height={asset.height}
        width={asset.width}
        alt={asset.alt}
        class="aspect-auto max-w-[120px] md:max-w-[180px]"
        src={asset.url}
      />
    </figure>
  {/each}
</div>
