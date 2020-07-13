const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const directoryPath = path.join(__dirname, '../data/');
const data = yaml.safeLoad(fs.readFileSync(directoryPath + 'questions.yaml', 'utf8'));

exports.findQuestionById = function(questionId) {
  let question = {};
  question = data.questions.filter( obj => obj.key === questionId );
  return question[0];
};

exports.question = function(questionId, answerValue) {

  if (!questionId)
    return null;

  let question = this.findQuestionById(questionId);

  if (answerValue !== undefined) {

    question.options.forEach((option) => {

      if (question.type == 'multiple_grouped') {

        option.options.forEach((option) => {
          if (answerValue.indexOf(option.value) !== -1) {
            option.checked = true;
          } else {
            option.checked = false;
          }
        })

      } else {

        if (question.type == 'single') {
          if (option.value == answerValue) {
            option.checked = true;
          } else {
            option.checked = false;
          }
        }

        if (question.type == 'multiple') {
          if (answerValue.indexOf(option.value) !== -1) {
            option.checked = true;
          } else {
            option.checked = false;
          }
        }

      }

    });

  }

  return question;

}
