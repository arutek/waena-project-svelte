import {writable} from "svelte/store"

interface notiType {
  message:string,
  type: string,
  timeout:number,
}
const init:notiType[] = []
export const toastData = writable(init)