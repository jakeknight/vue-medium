import axios from 'axios'

export const getArticles = ({commit}, articles) => {
  axios.get('http://localhost:8000/articles')
    .then((result) => {
      commit('setArticles', result.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const setActiveArticle = ({commit, state}, id) => {
  axios.get(`http://localhost:8000/article/${id}`)
    .then((result) => {
      commit('setArticle', result.data)
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const searchArticles = ({commit}, searchQuery) => {
  commit('searchArticles', searchQuery)
}

export const setActiveTopic = ({commit}, topic) => {
  commit('setActiveTopic', topic)
}

export const getTopicData = ({commit}) => {
  commit('setTopicData')
}
