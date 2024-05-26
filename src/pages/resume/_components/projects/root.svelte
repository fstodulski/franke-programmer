<script lang="ts">
  import { PROJECTS } from '.';
  import { Badge } from '$lib/components/badge';
  import { BentoCard, BentoTitle, BentoParagraph } from '$components/bento';
</script>

<BentoCard class="row-span-4 items-start lg:col-span-4">
  <BentoTitle>🖼️ Projects</BentoTitle>

  <ul class="mt-6 grid gap-2 text-primary-foreground print:mt-1">
    {#each PROJECTS as { name, role, links, technologies, description }}
      <li
        class="my-10 grid break-inside-avoid gap-4 first-of-type:my-0 first-of-type:mb-10 last-of-type:mb-0 print:mb-4 print:gap-1"
      >
        <span class="text-2xl font-bold print:text-sm">{name}</span>

        <div class="grid print:flex print:items-center">
          <span class="text-sm text-muted-foreground print:text-xs">Role:</span>
          <BentoParagraph>{role}</BentoParagraph>
        </div>

        <div class="grid gap-2 print:flex print:items-start">
          <span class="text-sm text-muted-foreground">Technologies:</span>
          <div class="flex flex-wrap gap-2">
            {#each technologies as technology}
              <Badge>{technology}</Badge>
            {/each}
          </div>
        </div>

        <div class="grid">
          <span class="text-sm text-muted-foreground print:hidden">Description:</span>
          {#each description as _description}
            <BentoParagraph class="flex gap-1">
              <span>‣</span>{_description}
            </BentoParagraph>
          {/each}
        </div>

        <div class="grid print:flex print:items-center print:gap-2">
          <span class="text-sm text-muted-foreground print:text-xs">
            You can check some of them online
          </span>
          <BentoParagraph class="flex gap-3">
            {#each links as link}
              <a
                href={link.href}
                class="duration-300 hover:text-muted-foreground hover:underline"
                target="_blank">{link.label}</a
              >
            {/each}
          </BentoParagraph>
        </div>
      </li>

      <div class="h-1 w-full bg-background/10 last-of-type:hidden"></div>
    {/each}
  </ul>
</BentoCard>
