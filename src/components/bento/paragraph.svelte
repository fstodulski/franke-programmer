<script lang="ts">
  import { cn } from '$lib/utils';
  import { type BentoParagaphProps } from '.';

  type $$Props = BentoParagaphProps;

  let className: $$Props['class'] = '';
  export { className as class };
</script>

<p class={cn('text-primary-foreground text-base print:text-sm', className)}>
  <slot />
</p>
