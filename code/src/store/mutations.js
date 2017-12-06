
export const setArticles = (state, articles) => {
  state.articles = articles
}

export const setActiveTopic = (state, topic) => {
  state.activeTopicData.topic = topic
}

export const setArticle = (state, article) => {
  state.activeArticleData.article = article
}

export const authModal = (state) => {
  state.authModalActive === false ? state.authModalActive = true : state.authModalActive = false
}

export const setTopicData = (state) => {
  state.activeTopicData.articles = []
  const topicData = state.articles.filter((obj) => {
    return obj.category.toLowerCase() === state.activeTopicData.topic.toLowerCase()
  })
  state.activeTopicData.articles.push(...topicData)
}

export const searchArticles = (state, searchQuery) => {
  const searchData = state.articles.filter((obj) => {
    return obj.title.includes(searchQuery)
  })
  state.searchData = searchData
}

export const updateNewPostData = (state, value) => {
  state.newPostData = value
}

export const deleteArticle = (state, id) => {
  const index = state.articles.findIndex((obj) => {
    return obj._id === id
  })
  state.articles.splice(index, 1)
}
