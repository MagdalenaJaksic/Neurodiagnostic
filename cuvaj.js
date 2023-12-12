
var decisionTree = {
  'S1': {
    'yes': 'S2',
    'no': 'S2no'
  },
  'S2no': {
    'yes': 'S3',
    'no': 'S3no'
  },
  'S2': {
    'yes': 'S3',
    'no': 'S3no'
  },
  'S3no': {
    'yes': 'S4',
    'no': 'S4no'
  },
  'S3': {
    'yes': 'S4',
    'no': 'S4no'
  },
  'S4no': {
    'yes': 'S12',
    'no': 'S12no'
  },
  'S4': {
    'yes': 'S12',
    'no': 'S12no'
  },
  'S12no': {
    'yes': 'S15',
    'no': 'S5'
  },
  'S12': {
    'yes': 'S15',
    'no': 'S5'
  },
  'S15': {
    'yes': 'S16',
    'no': 'S19'
  },
  'S16': {
    'yes': 'S17',
    'no': 'S19'
  },
  'S17': {
    'yes': 'S18',
    'no': 'S19'
  },
  'S18': {
    'yes': 'T4',
    'no': 'S19'
  },
  'S19': {
    'yes': 'S20',
    'no': 'S24'
  },
  'S20': {
    'yes': 'S21',
    'no': 'S24'
  },
  'S21': {
    'yes': 'T2',
    'no': 'S24'
  },
  'S24': {
    'yes': 'S25',
    'no': 'S22'
  },
  'S25': {
    'yes': 'S29',
    'no': 'S22'
  },
  'S29': {
    'yes': 'S30',
    'no': 'S22'
  },
  'S30': {
    'yes': 'T3',
    'no': 'S22'
  },
  'S22': {
    'yes': 'T7',
    'no': 'S23'
  },
  'S23': {
    'yes': 'T8',
    'no': 'S13'
  },
  'S13': {
    'yes': 'S14',
    'no': 'S5'
  },
  'S14': {
    'yes': 'T5',
    'no': 'S5'
  },
  'S5': {
    'yes': 'S6',
    'no': 'S26'
  },
  'S6': {
    'yes': 'S7',
    'no': 'S26'
  },
  'S7': {
    'yes': 'S8',
    'no': 'S26'
  },
  'S8': {
    'yes': 'S9',
    'no': 'S26'
  },
  'S9': {
    'yes': 'S10',
    'no': 'S26'
  },
  'S10': {
      'yes': 'S11',
      'no': 'S26'
    },
  'S11': {
    'yes': 'T6',
    'no': 'S26'
  },
  'S26': {
    'yes': 'S27',
    'no':'T1'
    },
  'S27': {
    'yes': 'S28',
    'no': 'T1'
  },
  'S28': {
    'yes': 'T9',
    'no': 'T1'
  }
};

var currentQuestion = 'S1';
var startButton = document.getElementById('start-button');
startButton.addEventListener('click', startQuestions);
function startQuestions() {
  document.getElementById('mains').style.display='none';
  document.getElementById('questionContainer').style.display = 'block';
  document.getElementById('current-question').innerHTML = 'брига око догађаја или активности која није сразмерна ситуацији';
}
var yesAnswers = 0;
function answerQuestion(answer) {
  if (answer === 'yes') {
  yesAnswers++;
}
  currentQuestion = decisionTree[currentQuestion][answer];

  if (currentQuestion.startsWith('S')) {
    if (currentQuestion === 'S2') {
      document.getElementById('current-question').innerHTML = ' s2 немогућност контролисања константне бриге';
    } else if (currentQuestion === 'S3') {
      document.getElementById('current-question').innerHTML = 's3 потешкоће у функционисању услед симптома';
    } else if (currentQuestion === 'S4') {
      document.getElementById('current-question').innerHTML = 's4  рисутно три или више симптома: умор, узрујаност, проблеми са концентрацијом, болови у мишићима или други необјашњиви болови, проблеми са спавањем';
    } else if (currentQuestion === 'S2no') {
          document.getElementById('current-question').innerHTML = ' s2 немогућност контролисања константне бриге';
    } else if (currentQuestion === 'S3no') {
          document.getElementById('current-question').innerHTML = 's3 потешкоће у функционисању услед симптома';
    } else if (currentQuestion === 'S4no') {
      document.getElementById('current-question').innerHTML = 's4  рисутно три или више симптома: умор, узрујаност, проблеми са концентрацијом, болови у мишићима или други необјашњиви болови, проблеми са спавањем';
    }else if (currentQuestion === 'S5') {
      document.getElementById('current-question').innerHTML = 's5 страх и узрујаност услед социјалних ситуација и активности';
    } else if (currentQuestion === 'S6') {
      document.getElementById('current-question').innerHTML = 's6 осећај као да сви посматрају сваки ваш покрет';
    } else if (currentQuestion === 'S7') {
      document.getElementById('current-question').innerHTML = 's7 избегавање људи и интеракција услед страха, изолација';
    } else if (currentQuestion === 'S8') {
      document.getElementById('current-question').innerHTML = 's8 страх од физичких симптома који могу изазвати неугодност ( црвенило, знојење, дрхтање руку или дрхтавглас)';
    } else if (currentQuestion === 'S9') {
      document.getElementById('current-question').innerHTML = 's9 избегавање догађаја или разговора са људима због осећаја страха и срамоте';
    } else if (currentQuestion === 'S10') {
      document.getElementById('current-question').innerHTML = 's10 анализизирање и налажење недостатака у интеракцијама након друштвене ситуације';
    } else if (currentQuestion === 'S11') {
      document.getElementById('current-question').innerHTML = ' s11 очекивање најгорер могућег искуства током друштвене ситуације';
    } else if (currentQuestion === 'S12') {
      document.getElementById('current-question').innerHTML = 's12 изненадан осећај страха праћен дрхтањем, осећајем дезоријентисаности, мучнином, убрзаним радомсрца, недостатком даха, знојењем и вртоглавицом ( напад панике)';
    }else if (currentQuestion === 'S12no') {
      document.getElementById('current-question').innerHTML = 's12 изненадан осећај страха праћен дрхтањем, осећајем дезоријентисаности, мучнином, убрзаним радомсрца, недостатком даха, знојењем и вртоглавицом ( напад панике)';
    }else if (currentQuestion === 'S13') {
      document.getElementById('current-question').innerHTML = 's13 напади страха и панике се појављују изненадно';
    }else if (currentQuestion === 'S14') {
      document.getElementById('current-question').innerHTML = 's14 напади панике су редовни и неочекивани и прати их најмање месец дана непрекидне бриге због даљих напада';
    }else if (currentQuestion === 'S15') {
      document.getElementById('current-question').innerHTML = 's15 несразмеран страх који се понавља, од исте ситуације или нечега што не представља претњу';
    }else if (currentQuestion === 'S16') {
      document.getElementById('current-question').innerHTML = 's16 осећај интензивног страха, анксиозности и панике приликом изложености или размишљању о извору стра';
    }else if (currentQuestion === 'S17') {
      document.getElementById('current-question').innerHTML = 's17 свест да су страхови неразумни или преувеличани, али осећање немоћности да се контролишу';
    }else if (currentQuestion === 'S18') {
      document.getElementById('current-question').innerHTML = ' s18погоршање анксиозности како се ситуација или објекат приближавају временом или физичком близином';
    }else if (currentQuestion === 'S19') {
      document.getElementById('current-question').innerHTML = ' s19 страх од места или ситуација које могу изазвати панику и стварају осећаје заробљености (коришћењејавног превоза, боравак у отвореним или затвореним просторима, стајање у реду или гужва)';
    }else if (currentQuestion === 'S20') {
      document.getElementById('current-question').innerHTML = ' s20 страх да не постоји лак начин да се побегне или добије помоћ ако се анксиозност појача';
    }else if (currentQuestion === 'S21') {
      document.getElementById('current-question').innerHTML = ' s21 страх од одлазка од куће сам, у гужви или чекању у реду';
    }else if (currentQuestion === 'S22') {
      document.getElementById('current-question').innerHTML = ' s22 изненадна појава симптома анксиозности након коришћења дрога, алкохола или лекова';
    }else if (currentQuestion === 'S23') {
      document.getElementById('current-question').innerHTML = ' s23 изненадна појава симптома анксиозности услед дијагностиковања и појаве друге болести';
    }else if (currentQuestion === 'S24') {
      document.getElementById('current-question').innerHTML = ' s24 константан страх од одсуства од куће или одвојености од особе за коју сте везани';
    }else if (currentQuestion === 'S25') {
      document.getElementById('current-question').innerHTML = 's25 Стална брига о губитку родитеља или друге вољене особе због болести или катастрофе';
    }else if (currentQuestion === 'S26') {
      document.getElementById('current-question').innerHTML = 's26 изражавање жеље за говором који је спутан анксиозношћу, страхом или стидом';
    }else if (currentQuestion === 'S27') {
      document.getElementById('current-question').innerHTML = 's27 избегавање контакта очима, недостатак покрета или недостатак израза у ситуацијама страха';
    }else if (currentQuestion === 'S28') {
      document.getElementById('current-question').innerHTML = 's28 поптуна немогућност говора у одређеним ситуацијама';
    }else if (currentQuestion === 'S29') {
      document.getElementById('current-question').innerHTML = 's29 одбијање да буде далеко од куће због страха од раздвајања';
    }else if (currentQuestion === 'S30') {
      document.getElementById('current-question').innerHTML = 's30 одбијање да буде сам код куће и без родитеља или друге вољене особе у кући';
    }

} else {
    document.getElementById('current-question').innerHTML = 'Solution: ' + currentQuestion;
    document.getElementById('questionContainer').style.display = 'block';
    const hideButtons = document.querySelectorAll('.btn2');

hideButtons.forEach(button => {
  button.style.display = 'none';
});
console.log(yesAnswers);
if (currentQuestion === 'T1') {
  if( yesAnswers=0 ){
    console.log(decisionTree['S1'][answer]);
    document.getElementById('current-question').innerHTML = 'NEMA';
}else  if( yesAnswers>=5 ){
    document.getElementById('current-question').innerHTML = 'T10';
  } else { document.getElementById('current-question').innerHTML = 'PRVA DIJAGNOZA';}

}else if (currentQuestion === 'T2') {
    document.getElementById('current-question').innerHTML = 'DRUGA DIJAGNOZA';
  }else if (currentQuestion === 'T3') {
      document.getElementById('current-question').innerHTML = 'TRECA DIJAGNOZA';
  }else if (currentQuestion === 'T4') {
        document.getElementById('current-question').innerHTML = 'CETVRTA DIJAGNOZA';
  }else if (currentQuestion === 'T5') {
          document.getElementById('current-question').innerHTML = 'PETA DIJAGNOZA';
  }else if (currentQuestion === 'T6') {
            document.getElementById('current-question').innerHTML = 'ŠESTA DIJAGNOZA';
  }else if (currentQuestion === 'T7') {
              document.getElementById('current-question').innerHTML = 'SEDMA DIJAGNOZA';
  }else if (currentQuestion === 'T8') {
                document.getElementById('current-question').innerHTML = 'OSMA DIJAGNOZA';
  }else if (currentQuestion === 'T9') {
                  document.getElementById('current-question').innerHTML = 'DEVETA DIJAGNOZA';
                }
  }
}
