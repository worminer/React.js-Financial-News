import alt from '../alt'

class FormActions {
  constructor () {
    this.generateActions(
      'handleUsernameChange',
      'handlePasswordChange',
      'handleConfirmedPasswordChange',
      'handleFirstNameChange',
      'handleLastNameChange',
      'handleAgeChange',
      'handleGenderChange',
      'usernameValidationFail',
      'passwordValidationFail',
      'unauthorizedAccessAttempt',
      'handleCommentChange',
      'commentValidationFail',
      'handleScoreChange',
      'scoreValidationFail',
      'handleLastPictureChange',
    )
  }
}

export default alt.createActions(FormActions)
