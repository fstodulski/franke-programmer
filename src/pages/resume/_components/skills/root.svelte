<script lang="ts">
  import { DAILY, FRAMEWORKS } from '.';
  import { Badge } from '$lib/components/badge';
  import { BentoTitle, BentoCard, BentoParagraph } from '$components/bento';
</script>

<BentoCard class="col-span-6 justify-start md:row-span-2 lg:col-span-2">
  <BentoTitle>💪 Skills</BentoTitle>

  <BentoParagraph>
    For past few years I'have been expanding my experience. Now I can build any app from A to Z -
    including implementing UI for the Frontend part, but also implementing REST API.
  </BentoParagraph>

  <BentoParagraph class="py-2 print:py-0">In my daily work, I use:</BentoParagraph>

  <ul class="flex flex-wrap gap-2">
    {#each DAILY as content}
      <li>
        <Badge>{content}</Badge>
      </li>
    {/each}
  </ul>

  <BentoParagraph class="py-2 print:py-0">for sure using many modern frameworks</BentoParagraph>

  <ul class="flex flex-wrap gap-2">
    {#each FRAMEWORKS as content}
      <li>
        <Badge>{content}</Badge>
      </li>
    {/each}
  </ul>

  <BentoParagraph class="py-2 print:py-0">helps me build top-notch applications.</BentoParagraph>
</BentoCard>
