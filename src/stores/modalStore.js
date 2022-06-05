import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => {
    return {
      useModalPost: false,
      useModalLoader: false,
      useModalLoaderText: '',
      useModalFollows: false,
      useModalLikes: false,
      useModalAlert: false,
      useModalAlertText: '',
      useModalDeletePost: false,
      useModalDeletePostId: ''
    }
  },
  actions: {
    openModalPost() {
      this.useModalPost = true
    },
    closeModalPost() {
      this.useModalPost = false
    },
    openModalLoader(val) {
      this.useModalLoader = true
      this.useModalLoaderText = val || ''
    },
    closeModalLoader() {
      this.useModalLoader = false
      this.useModalLoaderText = ''
    },
    openModalFollows() {
      this.useModalFollows = true
    },
    closeModalFollows() {
      this.useModalFollows = false
    },
    openModalLikes() {
      this.useModalLikes = true
    },
    closeModalLikes() {
      this.useModalLikes = false
    },
    openModalAlert(val) {
      this.useModalAlert = true
      this.useModalAlertText = val || 'Somethings went wrong.<br>Please try again.'
    },
    closeModalAlert() {
      this.useModalAlert = false
      this.useModalAlertText = ''
    },
    openModalDeletePost(id) {
      this.useModalDeletePost = true
      this.useModalDeletePostId = id
    },
    closeModalDeletePost() {
      this.useModalDeletePost = false
      this.useModalDeletePostId = ''
    },
  }
})