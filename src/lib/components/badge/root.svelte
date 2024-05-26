<script lang="ts">
  import { cn } from '$lib/utils';
  import { type BadgeProps } from '.';

  type $$Props = BadgeProps;

  let className: $$Props['class'] = '';
  export { className as class };
</script>

<div
  class={cn(
    'cursor-auto rounded-xl bg-background px-2 py-1 text-sm font-bold text-primary duration-300 hover:bg-background/90 print:text-xs print:font-normal',
    className
  )}
>
  <slot />
</div>
