<script>
  import { createEventDispatcher } from 'svelte'
  import storbarang from './stor-barang'

  const dispatch = createEventDispatcher()

  let barangan = []

  $: kos = barangan.reduce((prev, curr) => {
    prev += curr.harga
    return prev
  }, 0)

  storbarang.langgan((items) => {
    barangan = items
  })

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'MYR',
  })

  function edit(id, nama, harga) {
    dispatch('sunting', { id, nama, harga })
  }

  function remove(id) {
    storbarang.remove(id)
  }
</script>

<style>
  table {
    width: 100%;
  }
  tr {
    cursor: pointer;
  }
  tr:last-of-type {
    cursor: inherit;
  }
</style>

<table class="primary">
  <thead>
    <tr>
      <th>Barang</th>
      <th>Harga</th>
      <th />
    </tr>
  </thead>
  <tbody>
    {#each barangan as { barang, harga, id } (id)}
      <tr on:click={edit(id, barang, harga)}>
        <td>{barang}</td>
        <td>{formatter.format(harga)}</td>
        <td>
          <i class="far fa-trash-alt" on:click|stopPropagation={remove(id)} />
        </td>
      </tr>
    {/each}
    <tr>
      <td>Jumlah</td>
      <td colspan="2">{formatter.format(kos)}</td>
    </tr>
  </tbody>
</table>
