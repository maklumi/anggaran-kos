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

if (localStorage.getItem('barangan')) {
  storbarang.set(JSON.parse(localStorage.getItem('barangan')))
}

storbarang.subscribe((stor) => {
  console.log(stor, 'storbarang')
  const ite = JSON.stringify(stor)
  localStorage.setItem('barangan', ite)
})

export default {
  langgan: storbarang.subscribe,
  tambah,
}
