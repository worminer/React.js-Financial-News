let mongoose = require('mongoose')

let articleSchema = mongoose.Schema({
  title: {type: mongoose.Schema.Types.String, required: true},
  description: {type: mongoose.Schema.Types.String},
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true},
  votes: {type: mongoose.Schema.Types.Number, default: 0},
  dateCreated: {type: mongoose.Schema.Types.Date, default: Date.now},
  creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
})

let indexFields = {
  name: 'text',
  description: 'text',
  genres: 'text'
}

articleSchema.index(indexFields)

let Article = mongoose.model('Article', articleSchema)

module.exports = Article
