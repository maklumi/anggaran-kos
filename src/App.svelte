<script>
  import Table from './Table.svelte'
  import Form from './Form.svelte'

  let id
  let nama
  let harga

  function edit(event) {
    console.log(event.detail)
    ;({ id, nama, harga } = event.detail)
  }
</script>

<style>
  main {
    flex: 1;
    align-content: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
  }
</style>

<main>
  <h1>Anggaran kos projek</h1>
  <Form bind:id bind:nama bind:harga />

  <Table on:sunting={edit} />
</main>
