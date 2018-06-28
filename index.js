/**
 * This is the entry point for your Probot App.
 * @param {import('probot').Application} app - Probot's Application class.
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  // For more information on building apps:
  // https://probot.github.io/docs/

  app.on('issue_comment.created', async context => {
    app.log('Added comment')
    const params = context.issue({ body: 'Hello World!' })
    return context.github.issues.createComment(params)
  })
}
