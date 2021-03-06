
export const setArticles = (state, articles) => {
  state.articles = articles
}

export const setActiveTopic = (state, topic) => {
  state.activeTopicData.topic = topic
}

export const setArticle = (state, article) => {
  state.activeArticleData.article = article
}

export const setTopicData = (state) => {
  state.activeTopicData.articles = []
  const topicData = state.articles.filter((obj) => {
    return obj.category.toLowerCase() === state.activeTopicData.topic.toLowerCase()
  })
  state.activeTopicData.articles.push(...topicData)
}
