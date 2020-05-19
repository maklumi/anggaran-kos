import { writable } from 'svelte/store'

const storbarang = writable([])

const tambah = (barang, harga) => {
  storbarang.update((items) => {
    const objek = {
      barang,
      harga,
      id: new Date().getTime(),
    }

    return [objek, ...items]
  })
}

const edit = (id, barang, harga) => {
  storbarang.update((items) => {
    const index = items.findIndex((i) => i.id === id)

    items[index].barang = barang
    items[index].harga = harga

    return items
  })
}

if (localStorage.getItem('barangan')) {
  storbarang.set(JSON.parse(localStorage.getItem('barangan')))
}

storbarang.subscribe((stor) => {
  const ite = JSON.stringify(stor)
  localStorage.setItem('barangan', ite)
})

export default {
  langgan: storbarang.subscribe,
  tambah,
  edit,
}
