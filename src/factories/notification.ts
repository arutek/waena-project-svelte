import {toastData} from "@/store"

export default {
  notifError (errMsg:string) {
    const payload = {
      message: errMsg,
      type: "notifError",
      timeout: 2500,
    }
    toastData.update(store => [...store, payload])
  },
  notifWarn (errMsg:string) {
    const payload = {
      message: errMsg,
      type: "notifWarn",
      timeout: 2500,
    }
    toastData.update(store => [...store, payload])
  },
  notifSuccess (errMsg:string) {
    const payload = {
      message: errMsg,
      type: "notifSuccess",
      timeout: 2500,
    }
    toastData.update(store => [...store, payload])
  },
}