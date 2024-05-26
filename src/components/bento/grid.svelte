<script lang="ts">
  import { cn } from '$lib/utils';
  import type { BentoGridProps } from '.';

  type $$Props = BentoGridProps;

  let className: $$Props['class'] = '';
  export { className as class };
</script>

<section class={cn('grid grid-cols-6 gap-6', className)}>
  <slot />
</section>
