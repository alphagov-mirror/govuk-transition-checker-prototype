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
      answers.employment !== undefined) {
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
      answers.employment !== undefined) {
    if (answers.nationality === 'nationality-uk' &&
        answers.employment === 'studying-eu') {
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

  if (answers['do-you-own-a-business'] !== undefined &&
      answers['do-you-own-a-business'] === 'owns-operates-business-organisation') {
    if (answers['employ-eu-citizens'] !== undefined &&
        answers['business-activity'] !== undefined) {
      if (answers['employ-eu-citizens'] === 'employ-eu-citizens' ||
          answers['business-activity'] === 'provide-services-do-business-in-eu') {
        actions.push('T006')
      }
    }

    if (answers['business-activity'] !== undefined) {
      if (answers['business-activity'] === 'provide-services-do-business-in-eu') {
        actions.push('T007')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('aero-space') !== -1 ||
          answers['sector-business-area'].indexOf('air-passenger-freight') !== -1) {
        actions.push('T010')
      }
    }

    if (answers['sector-business-area'] !== undefined &&
        answers['personal-data'] !== undefined &&
        answers['intellectual-property'] !== undefined) {
      if ((answers['sector-business-area'].indexOf('media') !== -1 ||
          answers['sector-business-area'].indexOf('digital') !== -1 ||
          answers['sector-business-area'].indexOf('telecoms') !== -1) &&
          ((answers['personal-data'] === 'personal-eu-org' &&
          answers['personal-data-options'].indexOf('personal-eu-org-provide') !== -1) ||
          (answers['intellectual-property'] === 'ip' &&
          answers['intellectual-property-options'].indexOf('ip-copyright') !== -1))) {
        actions.push('T011')
      }
    }

    if (answers['business-activity'] !== undefined &&
        answers['intellectual-property'] !== undefined) {
      if ((answers['business-activity'].indexOf('export-to-eu') !== -1 ||
          answers['business-activity'].indexOf('haulage-goods-across-eu-borders') !== -1) &&
          (answers['intellectual-property'] === 'ip' &&
          (answers['intellectual-property-options'].indexOf('ip-copyright') !== -1 ||
          answers['intellectual-property-options'].indexOf('ip-trade-marks') !== -1 ||
          answers['intellectual-property-options'].indexOf('ip-designs') !== -1 ||
          answers['intellectual-property-options'].indexOf('ip-patents') !== -1 ||
          answers['intellectual-property-options'].indexOf('ip-exhaustion-rights') !== -1))) {
        actions.push('T012')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('aero-space') !== -1) {
        actions.push('T013')
        actions.push('T014')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('nuclear') !== -1) {
        actions.push('T016')
        actions.push('T017')
        actions.push('T018')
        actions.push('T019')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('nuclear') !== -1 ||
          answers['sector-business-area'].indexOf('mining') !== -1) {
        actions.push('T020')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('aero-space') !== -1 ||
          answers['sector-business-area'].indexOf('air-passenger-freight') !== -1 ||
          answers['sector-business-area'].indexOf('oil-gas-coal') !== -1) {
        actions.push('T021')
      }
    }

    if (answers['personal-data'] !== undefined) {
      if (answers['personal-data'] === 'personal-eu-org' &&
          (answers['personal-data-options'].indexOf('personal-eu-org-process') !== -1 ||
          answers['personal-data-options'].indexOf('personal-eu-org-use') !== -1 ||
          answers['personal-data-options'].indexOf('personal-eu-org-provide') !== -1)) {
        actions.push('T022')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('media') !== -1 ||
          answers['sector-business-area'].indexOf('digital') !== -1) {
        actions.push('T023')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('media') !== -1 ||
          answers['sector-business-area'].indexOf('creative') !== -1 ||
          answers['sector-business-area'].indexOf('sports') !== -1 ||
          answers['sector-business-area'].indexOf('culture') !== -1) {
        actions.push('T025')
      }
    }

    if (answers['sector-business-area'] !== undefined &&
        answers['personal-data'] !== undefined) {
      if (answers['sector-business-area'].indexOf('digital') !== -1 ||
          answers['sector-business-area'].indexOf('telecoms') !== -1 ||
          answers['sector-business-area'].indexOf('sports') !== -1 ||
          answers['sector-business-area'].indexOf('culture') !== -1 ||
          (answers['personal-data'] === 'personal-eu-org' &&
          answers['personal-data-options'].indexOf('personal-eu-org-provide') !== -1)) {
        actions.push('T026')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('air-passenger-freight') !== -1 ||
          answers['sector-business-area'].indexOf('port-airports') !== -1 ||
          answers['sector-business-area'].indexOf('postal-couriers') !== -1 ||
          answers['sector-business-area'].indexOf('fish-inc-wholesale') !== -1) {
        actions.push('T028')
      }
    }

    if (answers['sector-business-area'] !== undefined &&
        answers['business-activity'] !== undefined) {
      if ((answers['sector-business-area'].indexOf('agriculture-farm') !== -1 ||
          answers['sector-business-area'].indexOf('forestry') !== -1) &&
          (answers['business-activity'].indexOf('export-to-eu') !== -1 ||
          answers['business-activity'].indexOf('import-from-eu') !== -1)) {
        actions.push('T032')
      }
    }

    if (answers['sector-business-area'] !== undefined &&
        answers['business-activity'] !== undefined) {
      if ((answers['sector-business-area'].indexOf('agriculture-farm') !== -1 ||
          answers['sector-business-area'].indexOf('food-drink-tobacco') !== -1) &&
          answers['business-activity'].indexOf('export-to-eu') !== -1) {
        actions.push('T033')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('agriculture-farm') !== -1 ||
          answers['sector-business-area'].indexOf('food-drink-tobacco') !== -1) {
        actions.push('T034')
      }
    }

    if (answers['sector-business-area'] !== undefined &&
        answers['business-activity'] !== undefined) {
      if ((answers['sector-business-area'].indexOf('animal-ex-food') !== -1 ||
          answers['sector-business-area'].indexOf('fish-inc-wholesale') !== -1 ||
          answers['sector-business-area'].indexOf('food-drink-tobacco') !== -1 ||
          answers['sector-business-area'].indexOf('agriculture-farm') !== -1) &&
          answers['business-activity'].indexOf('export-to-eu') !== -1) {
        actions.push('T035')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('animal-ex-food') !== -1 ||
          answers['sector-business-area'].indexOf('fish-inc-wholesale') !== -1 ||
          answers['sector-business-area'].indexOf('food-drink-tobacco') !== -1 ||
          answers['sector-business-area'].indexOf('agriculture-farm') !== -1) {
        actions.push('T036')
      }
    }

    if (answers['sector-business-area'] !== undefined &&
        answers['business-activity'] !== undefined) {
      if ((answers['sector-business-area'].indexOf('animal-ex-food') !== -1 ||
          answers['sector-business-area'].indexOf('fish-inc-wholesale') !== -1 ||
          answers['sector-business-area'].indexOf('food-drink-tobacco') !== -1 ||
          answers['sector-business-area'].indexOf('agriculture-farm') !== -1) &&
          answers['business-activity'].indexOf('export-to-eu') !== -1) {
        actions.push('T038')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('agriculture-farm') !== -1 ||
          answers['sector-business-area'].indexOf('food-drink-tobacco') !== -1) {
        actions.push('T044')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('agriculture-farm') !== -1) {
        actions.push('T045')
        actions.push('T046')
        actions.push('T047')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('marine-transport') !== -1 ||
          answers['sector-business-area'].indexOf('fish-inc-wholesale') !== -1) {
        actions.push('T050')
        actions.push('T051')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('chemical') !== -1) {
        actions.push('T052')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('aero-space') !== -1 ||
          answers['sector-business-area'].indexOf('automotive') !== -1 ||
          answers['sector-business-area'].indexOf('electronic-machinery') !== -1 ||
          answers['sector-business-area'].indexOf('rail-manufacture') !== -1 ||
          answers['sector-business-area'].indexOf('agriculture-farm') !== -1 ||
          answers['sector-business-area'].indexOf('animal-ex-food') !== -1 ||
          answers['sector-business-area'].indexOf('legal-service') !== -1 ||
          answers['sector-business-area'].indexOf('defence') !== -1 ||
          answers['sector-business-area'].indexOf('electricity') !== -1 ||
          answers['sector-business-area'].indexOf('nuclear') !== -1 ||
          answers['sector-business-area'].indexOf('oil-gas-coal') !== -1 ||
          answers['sector-business-area'].indexOf('renewables') !== -1 ||
          answers['sector-business-area'].indexOf('finance') !== -1 ||
          answers['sector-business-area'].indexOf('health') !== -1 ||
          answers['sector-business-area'].indexOf('consumer-goods') !== -1 ||
          answers['sector-business-area'].indexOf('chemical') !== -1 ||
          answers['sector-business-area'].indexOf('metal') !== -1 ||
          answers['sector-business-area'].indexOf('non-metal-material') !== -1 ||
          answers['sector-business-area'].indexOf('air-passenger-freight') !== -1 ||
          answers['sector-business-area'].indexOf('digital') !== -1 ||
          answers['sector-business-area'].indexOf('telecoms') !== -1) {
        actions.push('T057')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('forestry') !== -1) {
        actions.push('T059')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('tourism') !== -1 ||
          answers['sector-business-area'].indexOf('road-passenger-freight') !== -1) {
        actions.push('T063')
      }
    }

    if (answers['business-activity'] !== undefined &&
        answers['sector-business-area'] !== undefined) {
      if (answers['business-activity'].indexOf('haulage-goods-across-eu-borders') !== -1 ||
          answers['sector-business-area'].indexOf('road-passenger-freight') !== -1) {
        actions.push('T065')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('road-passenger-freight') !== -1 ||
          answers['sector-business-area'].indexOf('automotive') !== -1 ||
          answers['sector-business-area'].indexOf('motor-trade') !== -1) {
        actions.push('T066')
      }
    }

    if (answers['business-activity'] !== undefined &&
        answers['sector-business-area'] !== undefined) {
      if (answers['business-activity'].indexOf('import-from-eu') !== -1 ||
          answers['business-activity'].indexOf('export-to-eu') !== -1 ||
          answers['business-activity'].indexOf('haulage-goods-across-eu-borders') !== -1 ||
          answers['sector-business-area'].indexOf('road-passenger-freight') !== -1) {
        actions.push('T071')
      }
    }

    if (answers['business-activity'] !== undefined) {
      if (answers['business-activity'].indexOf('export-to-eu') !== -1 ||
          answers['business-activity'].indexOf('haulage-goods-across-eu-borders') !== -1) {
        actions.push('T075')
      }
    }

    if (answers['employ-eu-citizens'] !== undefined) {
      if (answers['employ-eu-citizens'] === 'employ-eu-citizens') {
        actions.push('T077')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('road-passenger-freight') !== -1) {
        actions.push('T078')
      }
    }

    if (answers['intellectual-property'] !== undefined) {
      if (answers['intellectual-property'] === 'ip' &&
          (answers['intellectual-property-options'].indexOf('ip-copyright') !== -1 ||
          answers['intellectual-property-options'].indexOf('ip-designs') !== -1)) {
        actions.push('T080')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('legal-service') !== -1) {
        actions.push('T081')
        actions.push('T082')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('construction') !== -1 ||
          answers['sector-business-area'].indexOf('finance') !== -1 ||
          answers['sector-business-area'].indexOf('legal-service') !== -1) {
        actions.push('T085')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('agriculture-farm') !== -1 ||
          answers['sector-business-area'].indexOf('forestry') !== -1) {
        actions.push('T086')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('agriculture-farm') !== -1 ||
          answers['sector-business-area'].indexOf('forestry') !== -1 ||
          answers['sector-business-area'].indexOf('food-drink-tobacco') !== -1) {
        actions.push('T087')
      }
    }

    if (answers['sector-business-area'] !== undefined &&
        answers['business-activity'] !== undefined) {
      if (answers['sector-business-area'].indexOf('chemical') !== -1 ||
          answers['business-activity'].indexOf('import-from-eu') !== -1) {
        actions.push('T088')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('animal-ex-food') !== -1 ||
          answers['sector-business-area'].indexOf('sports') !== -1) {
        actions.push('T089')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('animal-ex-food') !== -1) {
        actions.push('T090')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('diamond') !== -1) {
        actions.push('T091')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('forestry') !== -1) {
        actions.push('T092')
      }
    }

    if (answers['sector-business-area'] !== undefined &&
        answers['business-activity'] !== undefined) {
      if ((answers['sector-business-area'].indexOf('chemical') !== -1 ||
          answers['sector-business-area'].indexOf('non-metal-material') !== -1 ||
          answers['sector-business-area'].indexOf('pharma') !== -1) &&
          (answers['business-activity'].indexOf('export-to-eu') !== -1 ||
          answers['business-activity'].indexOf('import-from-eu') !== -1)) {
        actions.push('T093')
      }
    }

    if (answers['sector-business-area'] !== undefined &&
        answers['business-activity'] !== undefined) {
      if (answers['sector-business-area'].indexOf('environment') !== -1 &&
          (answers['business-activity'].indexOf('export-to-eu') !== -1 ||
          answers['business-activity'].indexOf('import-from-eu') !== -1)) {
        actions.push('T096')
      }
    }

    if (answers['sector-business-area'] !== undefined &&
        answers['business-activity'] !== undefined) {
      if (answers['sector-business-area'].indexOf('animal-ex-food') !== -1 ||
          answers['sector-business-area'].indexOf('fish-inc-wholesale') !== -1 ||
          answers['sector-business-area'].indexOf('forestry') !== -1 ||
          answers['business-activity'].indexOf('export-to-eu') !== -1 ||
          answers['business-activity'].indexOf('import-from-eu') !== -1) {
        actions.push('T097')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('chemical') !== -1) {
        actions.push('T098')
      }
    }

    if (answers['business-activity'] !== undefined) {
      if (answers['business-activity'].indexOf('export-to-eu') !== -1 ||
          answers['business-activity'].indexOf('import-from-eu') !== -1) {
        actions.push('T099')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('culture') !== -1) {
        actions.push('T100')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('electronic-machinery') !== -1 ||
          answers['sector-business-area'].indexOf('defence') !== -1 ||
          answers['sector-business-area'].indexOf('nuclear') !== -1 ||
          answers['sector-business-area'].indexOf('medical-tech') !== -1 ||
          answers['sector-business-area'].indexOf('consumer-goods') !== -1 ||
          answers['sector-business-area'].indexOf('chemical') !== -1 ||
          answers['sector-business-area'].indexOf('metal') !== -1 ||
          answers['sector-business-area'].indexOf('mining') !== -1 ||
          answers['sector-business-area'].indexOf('non-metal-material') !== -1) {
        actions.push('T101')
      }
    }

    if (answers['business-uk-or-eu'] !== undefined) {
      if (answers['business-uk-or-eu'].indexOf('owns-operates-business-organisation-eu') !== -1 ||
          answers['business-uk-or-eu'].indexOf('owns-operates-business-organisation-uk') !== -1) {
        actions.push('T102')
      }
    }

    if (answers['business-activity'] !== undefined) {
      if (answers['business-activity'].indexOf('import-from-eu') !== -1) {
        actions.push('T103')
      }
    }

    if (answers['sector-business-area'] !== undefined) {
      if (answers['sector-business-area'].indexOf('automotive') !== -1 ||
          answers['sector-business-area'].indexOf('road-passenger-freight') !== -1 ||
          answers['sector-business-area'].indexOf('motor-trade') !== -1) {
        actions.push('T104')
        actions.push('T105')
      }
    }

    if (answers['business-activity'] !== undefined) {
      if (answers['business-activity'].indexOf('export-to-row') !== -1) {
        actions.push('T106')
      }
    }

    if (answers['eu-uk-government-funding'] !== undefined) {
      if (answers['eu-uk-government-funding'] === 'eu-uk-funding') {
        actions.push('T107')
      }
    }

    if (answers['business-activity'] !== undefined) {
      if (answers['business-activity'].indexOf('move-goods-ni') !== -1) {
        actions.push('T108')
      }
    }

    if (answers['business-activity'] !== undefined) {
      if (answers['business-activity'].indexOf('export-to-eu') !== -1) {
        actions.push('T109')
      }
    }

    if (answers['business-activity'] !== undefined) {
      if (answers['business-activity'].indexOf('import-from-eu') !== -1) {
        actions.push('T110')
      }
    }
  }

  return actions
}
