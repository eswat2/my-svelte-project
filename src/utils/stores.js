import { writable } from "svelte/store"

const pick = writable({ value: "red" })

export { pick }
