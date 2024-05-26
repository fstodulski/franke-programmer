<script lang="ts">
  import { cn } from '$lib/utils';
  import { type BentoTitleProps } from '.';

  type $$Props = BentoTitleProps;

  let className: $$Props['class'] = '';
  export { className as class };
</script>

<span class={cn('text-3xl font-bold text-primary-foreground print:text-base', className)}>
  <slot />
</span>
