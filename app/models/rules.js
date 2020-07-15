exports.find = (answers) => {
  if (!answers) {
    return null
  }

  const actions = []

  // --------------------------------------------------
  // TEMPLATE
  // --------------------------------------------------
  //
  // if (answers['QUESTION'] !== undefined) {
  //
  //   if (answers['QUESTION'] == 'ANSWER') {
  //     actions.push('ACTION_ID')
  //   }
  //
  // }

  // --------------------------------------------------
  // CITIZEN RULES
  // --------------------------------------------------

  if (answers.nationality !== undefined &&
      answers.living !== undefined) {
    if (answers.nationality === 'nationality-eu' &&
        answers.living === 'living-uk') {
      actions.push('S001')
    }
  }

  if (answers.nationality !== undefined &&
      answers.living !== undefined &&
      answers['join-family-uk'] !== undefined) {
    if (answers.nationality === 'nationality-row' &&
        (answers.living === 'living-eu' ||
        answers.living === 'living-row') &&
        answers['join-family-uk'] === 'join-family-uk-yes') {
      actions.push('S003')
    }
  }

  if (answers.nationality !== undefined &&
      answers.visiting !== undefined) {
    if (answers.nationality === 'nationality-row' &&
        answers.visiting === 'visiting-uk') {
      actions.push('S004')
    }
  }

  if (answers.nationality !== undefined &&
      answers.employment !== undefined) {
    if ((answers.nationality === 'nationality-eu' ||
        answers.nationality === 'nationality-ie' ||
        answers.nationality === 'nationality-row') &&
        answers.employment === 'studying-uk') {
      actions.push('S005')
    }
  }

  if (answers.nationality !== undefined &&
      answers.studying !== undefined) {
    if (answers.nationality === 'nationality-uk' &&
        (answers.employment === 'studying-eu' ||
        answers.employment === 'studying-ie')) {
      actions.push('S007')
    }
  }

  if (answers.nationality !== undefined &&
      answers.visiting !== undefined) {
    if (answers.nationality === 'nationality-uk' &&
        answers.visiting === 'visiting-eu') {
      actions.push('S008')
    }
  }

  if (answers.living !== undefined &&
      answers.visiting !== undefined &&
      answers.activities !== undefined &&
      answers['travelling-business'] !== undefined) {
    if (answers.living === 'living-uk' &&
        (answers.visiting === 'visiting-eu' ||
        answers.visiting === 'visiting-ie' ||
        answers['travelling-business'] === 'travel-eu-business') &&
        answers.activities === 'visiting-bring-pet') {
      actions.push('S009')
    }
  }

  if (answers.living !== undefined &&
      answers.visiting !== undefined &&
      answers['travelling-business'] !== undefined) {
    if (answers.living === 'living-uk' &&
        (answers.visiting === 'visiting-eu' ||
        answers.visiting === 'visiting-ie') &&
        answers['travelling-business'] === 'travel-eu-business') {
      actions.push('S010')
    }
  }

  if (answers.nationality !== undefined &&
      answers.visiting !== undefined &&
      answers['travelling-business'] !== undefined) {
    if (answers.nationality === 'nationality-uk' &&
        (answers.visiting === 'visiting-eu' ||
        answers['travelling-business'] === 'travel-eu-business')) {
      actions.push('S011')
      actions.push('S013')
    }
  }

  if (answers.nationality !== undefined &&
      answers.returning !== undefined) {
    if (answers.nationality === 'nationality-uk' &&
        answers.returning === 'return-to-uk') {
      actions.push('S014')
      actions.push('S015')
    }
  }

  if (answers.living !== undefined &&
      answers.visiting !== undefined &&
      answers['travelling-business'] !== undefined &&
      answers.activities !== undefined) {
    if (answers.living === 'living-uk' &&
        (answers.visiting === 'visiting-eu' ||
        answers['travelling-business'] === 'travel-eu-business') &&
        answers.activities === 'visiting-driving') {
      actions.push('S022')
      actions.push('S024')
    }
  }

  if (answers.nationality !== undefined &&
      answers.visiting !== undefined &&
      answers['travelling-business'] !== undefined) {
    if (((answers.nationality === 'nationality-uk' &&
        answers.visiting === 'visiting-eu') ||
        (answers.nationality === 'nationality-eu' &&
        answers.visiting === 'visiting-uk')) &&
        answers['travelling-business'] === 'travel-eu-business') {
      actions.push('S025')
    }
  }

  if (answers.nationality !== undefined &&
      answers.studying !== undefined) {
    if (answers.nationality === 'nationality-uk' &&
        answers.studying === 'studying-eu') {
      actions.push('S026')
    }
  }

  if (answers.nationality !== undefined &&
      answers.returning !== undefined) {
    if (answers.nationality === 'nationality-uk' &&
        answers.returning === 'return-to-uk') {
      actions.push('S028')
    }
  }

  if (answers.nationality !== undefined &&
      answers.living !== undefined) {
    if (answers.nationality === 'nationality-uk' &&
        answers.living === 'living-eu') {
      actions.push('S029')
    }
  }

  if (answers.nationality !== undefined &&
      answers.living !== undefined) {
    if (answers.nationality === 'nationality-uk' &&
        (answers.living === 'living-eu' ||
        answers.living === 'living-ie')) {
      actions.push('S030')
      actions.push('S031')
    }
  }

  if (answers.living !== undefined &&
      answers.visiting !== undefined &&
      answers.activities !== undefined) {
    if ((answers.living === 'living-eu' ||
        answers.living === 'living-ie') &&
        answers.visiting === 'visiting-uk' &&
        answers.activities === 'visiting-bring-pet') {
      actions.push('S032')
    }
  }

  if (answers['travelling-business'] !== undefined) {
    if (answers['travelling-business'] === 'travel-eu-business') {
      actions.push('S034')
    }
  }

  if (answers.visiting !== undefined &&
      answers.activities !== undefined) {
    if (answers.visiting === 'visiting-uk' &&
        answers.activities === 'visiting-driving') {
      actions.push('S036')
    }
  }

  if (answers.nationality !== undefined &&
      answers.living !== undefined) {
    if (answers.nationality === 'nationality-uk' &&
        answers.living === 'living-eu') {
      actions.push('S038')
    }
  }

  if (answers.nationality !== undefined) {
    if (answers.nationality === 'nationality-uk' ||
        answers.nationality === 'nationality-eu') {
      actions.push('S039')
    }
  }

  if (answers['move-eu'] !== undefined) {
    if (answers['move-eu'] === 'move-to-eu') {
      actions.push('S040')
    }
  }

  if (answers.nationality !== undefined &&
      answers.living !== undefined &&
      answers.employment !== undefined) {
    if (answers.nationality === 'nationality-uk' &&
        (answers.living === 'living-eu' ||
        answers.employment === 'studying-eu' ||
        answers.employment === 'working-eu')) {
      actions.push('S041')
    }
  }

  // --------------------------------------------------
  // BUSINESS RULES
  // --------------------------------------------------

  return actions
}
