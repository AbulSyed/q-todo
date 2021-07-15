import { Dialog } from 'quasar'
import { Loading } from 'quasar'

const showError = (message) => {
  Loading.hide()
  Dialog.create({
    title: 'Error',
    message
  })
}

export { showError }