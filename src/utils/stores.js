import { writable } from "svelte/store"

const pick = writable({ value: "red" })
const sample = writable({ values: [] })

export { pick, sample }
