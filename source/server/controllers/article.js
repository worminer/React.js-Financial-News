const Article = require('../models/Article')
const User = require('../models/User')
const Category = require('../models/Category')

module.exports = {
  add: (req, res) => {
    let articleData = req.body

    let article = {
      title: articleData.title,
      description: articleData.description,
      category: articleData.category,
      creator: articleData.creator,
      image: articleData.image
    }

    Article.create(article).then(article => {
      User.findOne({_id: article.creator}).then(user => {
        user.articles.push(article._id)
        user.save()
        Category.findOne({_id: article.category}).then(category => {
          category.articles.push(article._id)
          category.save().then(() => res.status(200).send({article}))
        })
      })
    })
  }
}
