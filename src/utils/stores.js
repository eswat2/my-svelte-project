import { writable } from "svelte/store"

const clicks = writable(0)
const pick = writable({ value: "bada55" })
const sample = writable({ values: [] })

export { clicks, pick, sample }
