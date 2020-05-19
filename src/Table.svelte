<script>
  import storbarang from './stor-barang'

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
</script>

<style>
  table {
    width: 100%;
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
      <tr>
        <td>{barang}</td>
        <td>{formatter.format(harga)}</td>
        <td>
          <i class="far fa-trash-alt" />
        </td>
      </tr>
    {/each}
    <tr>
      <td>Jumlah</td>
      <td colspan="2">{formatter.format(kos)}</td>
    </tr>
  </tbody>
</table>
