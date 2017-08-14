import Vue from 'vue'
import VueResource from 'vue-resource'
import { Observable } from 'rxJs'

Vue.use(VueResource)

Vue.http.options.root = '/root'
Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'

export const TinyPngModule = {
  state: {
    host: 'api.tinify.com'
  },
  mutations: {
    shrink (data) {
      const xhr = new XMLHttpRequest()
      xhr.withCredentials = true

      const responseObservable = Observable.fromEvent(xhr, 'readystatechange')
      xhr.open('POST', 'https://api.tinify.com/shrink')
      xhr.setRequestHeader('authorization', 'basic YXBpOjRHX1h2eDdocTg4SWhwV0V1ZEhEUjJYN2ZyTHlWdzFn')
      xhr.setRequestHeader('cache-control', 'no-cache')

      xhr.send(data)

      return responseObservable
    }
  },
  actions: {
  },
  getters: {
  }
}
