<script lang="ts">
  import type { ListItem } from "./models/item";
  export let name: string;
  export let items: ListItem[];
</script>

<main>
  <h1>Hello {name ?? "Test"}!</h1>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
