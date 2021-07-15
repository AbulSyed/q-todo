import { authService } from "./firebase"
 
export default async ({ app, router, store }) => {
  return new Promise(resolve => {
    const unsubscribe = authService.onAuthStateChanged(() => {
      resolve()
      unsubscribe()
    })
  })
}