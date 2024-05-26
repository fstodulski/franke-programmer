<script lang="ts">
  import { cn } from '$lib/utils';
  import type { BentoCardProps } from '.';

  type $$Props = BentoCardProps;

  let className: $$Props['class'] = '';
  export { className as class };
</script>

<div
  class={cn(
    'col-span-6 flex h-full w-full flex-col justify-start gap-6 rounded-xl bg-slate-(lighten)-slate-900 p-4 md:items-start md:items-center md:p-8 print:p-0',
    className
  )}
>
  <article class="grid w-full gap-2">
    <slot />
  </article>
</div>
