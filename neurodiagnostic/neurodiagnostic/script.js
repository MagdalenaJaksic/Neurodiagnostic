
var decisionTree = {
  'S1': {
    'yes': 'S2',
    'no': 'S2'
  },
  'S2': {
    'yes': 'S3',
    'no': 'S3'
  },
  'S3': {
    'yes': 'S4',
    'no': 'S4'
  },
  'S4': {
    'yes': 'S111',
    'no': 'S111'
  },
  //dodatak
  'S111': {
    'yes': 'S222',
    'no': 'S222'
  },
  'S222': {
    'yes': 'S333',
    'no': 'S333'
  },
  'S333': {
    'yes': 'S444',
    'no': 'S444'
  },
  'S444': {
    'yes': 'S555',
    'no': 'S555'
  },
  'S555': {
    'yes': 'S12',
    'no': 'S12'
  },
  //kraj
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
    'yes': 'S32',
    'no': 'S19'
  },
  'S32': {
    'yes': 'T41',
    'no': 'S33'
  },
  'S33': {
    'yes': 'T42',
    'no': 'S34'
  },
  'S34': {
    'yes': 'T43',
    'no': 'S35'
  },
  'S35': {
    'yes': 'T44',
    'no': 'S36'
  },
  'S36': {
    'yes': 'T45',
    'no': 'T4'
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
    'yes': 'S31',
    'no': 'S26'
  },
  'S31': {
    'yes': 'T61',
    'no': 'T6'
  },

  'S26': {
    'yes': 'S27',
    'no': 'T1'
    },
  'S27': {
    'yes': 'S28',
    'no': 'T1'
  },
  'S28': {
    'yes': 'T9',
    'no': 'T1'
  },
};
let s1ans;
let s2ans;
let s3ans;
let s4ans;
let si1;
let si2;
let si3;
let si4;
let si5;
let br=0;
var currentQuestion = 'S1';
var startButton = document.getElementById('start-button');
startButton.addEventListener('click', startQuestions);
function startQuestions() {
  document.getElementById('mains').style.display='none';
  document.getElementById('questionContainer').style.display = 'block';
  document.getElementById('current-question').innerHTML = 'Da li ste u poslednjih 6 meseci više dana nego ne iskusili neprimerenu brigu oko događaja ili aktivnosti koja nije srazmerna situaciji?';
}
var yesAnswers = 0;
function answerQuestion(answer) {
  if (answer === 'yes') {
  yesAnswers++;
}
  currentQuestion = decisionTree[currentQuestion][answer];

  if (currentQuestion.startsWith('S')) {
    if (currentQuestion === 'S2') {
      document.getElementById('current-question').innerHTML = 'Da li ne možete da kontrolišete konstantnu brigu?';
      s1ans=answer;
      console.log(s1ans);
    } else if (currentQuestion === 'S3') {
      document.getElementById('current-question').innerHTML = 'Da li imate poteškoće u funkcionisanju usled simptoma?';
      s2ans=answer;
      console.log(s2ans);
    } else if (currentQuestion === 'S4') {
      document.getElementById('current-question').innerHTML = 'Da li imate prisutno tri ili više simptoma: umor, uzrujanost, problemi sa koncentracijom, bolovi u mišićima ili drugi neobjašnjivi bolovi, problemi sa spavanjem ?';
      s3ans=answer;
      console.log(s3ans);
    }
    else if (currentQuestion === 'S5') {
       console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li osećate strah i uzrujanost usled socijalnih situacija i aktivnosti?';
    } else if (currentQuestion === 'S6') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li imate prisutan osećaj da drugi prate svaki Vaš pokret?';
    } else if (currentQuestion === 'S7') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li pribegavate izolaciji i izbegavate ljude i interakcije usled straha?';
    } else if (currentQuestion === 'S8') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li strahujete od fizičkih simptoma koji Vam mogu izazvati neugodnost, kao što su crvenilo, znojenje, drhtave ruke ili drhtav glas?';
    } else if (currentQuestion === 'S9') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li izbegavate dogadjaje i razgovore sa ljudima zbog osećaja straha i sramote?';
    } else if (currentQuestion === 'S10') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li vršite analiziranje i nalazite nedostatke u Vašim interakcijama nakon društvene situacije?';
    } else if (currentQuestion === 'S11') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li očekujete najgore moguće iskustvo tokom društvene situacije?';
    } else if (currentQuestion === 'S12') {

      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);

      document.getElementById('current-question').innerHTML = 'Da li imate iznenadan osećaj straha praćen drhtanjem, osećajem dezorijentisanosti, mučninom, ubrzanim radom srca, nedotatkom daha, znojenjem i vrtoglavicom? (napad panike)';

    si5=answer;
    console.log(si5);
    if(si5==='yes'){br++; yesAnswers=yesAnswers-1;}
    }else if (currentQuestion === 'S13') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li imate napade straha i panike koji se pojavljuju iznenadno?';
    }else if (currentQuestion === 'S14') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li imate redovne i neočekivane napade panike koje prati najmanje mesec dana neprekidne brige zbog daljih napada?';
    }else if (currentQuestion === 'S15') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li imate nesrazmeran strah koji se ponavlja prilikom <b>iste</b>, specifične situacije ili strah od nekog objekta koji ne predstavlja realnu pretnju?';
    }else if (currentQuestion === 'S16') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li Vas prati osećaj intezivnog straha, anksioznosti i panike prilikom izloženosti situaciji ili objektu Vašeg straha i razmišljanju o njemu?';
    }else if (currentQuestion === 'S17') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li ste svesni da su Vaši strahovi nerazumni ili preuveličani ali ne možete da ih kontrolišete?';
    }else if (currentQuestion === 'S18') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li osećate pogoršanje anksioznosti kako se ta situacija ili objekat približavaju vremenom ili blizinom? ';
    }else if (currentQuestion === 'S19') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li Vam izazivaju strah i anskioznost barem dve od sledećih pet situacija:<br>1.Korišćenje javnog prevoza<br>2.Biti na otvorenim prostorima,<br>3.Biti u zatvorenim prostorima (npr. prodavnice, pozorišta, bioskopi), <br>4.Stajati u redu ili biti u gomili, <br>5.Biti sam van kuće';
    }else if (currentQuestion === 'S20') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li izbegavate navedene situacije ili ih podnosite sa izraženim stresom ili uznemirenošću zbog napada panike ili zahtevate prisustvo pratioca?';
    }else if (currentQuestion === 'S21') {
      console.log("Current node key: " + currentQuestion + ", Answer: " + answer);
      document.getElementById('current-question').innerHTML = 'Da li imate strah da nećete moći da pronadjete izlaz iz situacije ili nećete moći da nadjete pomoć u slučaju razvoja simptoma panike ili sličnih simptoma?';
    }else if (currentQuestion === 'S22') {
      document.getElementById('current-question').innerHTML = 'Da li su vam se simptomi iznenadno pojavili nakon korišćenja droga, alkohola ili lekova?';
    }else if (currentQuestion === 'S23') {
      document.getElementById('current-question').innerHTML = 'Da li su Vam se simtomi iznenadno pojavili nakon dijagnostikovanja i pojave drugih bolesti?';
    }else if (currentQuestion === 'S24') {
      document.getElementById('current-question').innerHTML = 'Da li kao dete ili sada osećate strah od odsustva od kuće ili odvojenosti od osobe za koju ste vezani?';
    }else if (currentQuestion === 'S25') {
      document.getElementById('current-question').innerHTML = 'Da li kao dete ili sada stalno brinete o gubitku roditelja ili druge voljene osobe usled bolesti ili katastrofe?';
    }else if (currentQuestion === 'S26') {
      document.getElementById('current-question').innerHTML = 'Da li kao dete ili sada pokazujete izražavanje želje za govorom koji je sputan anksioznošću, strahom ili stidom?';
    }else if (currentQuestion === 'S27') {
      document.getElementById('current-question').innerHTML = 'Da li kao dete ili sada izbegavate kontakt očima, imate nedostatak govora ili izraza u socijalnim situacijama koje izazivaju strah?';
    }else if (currentQuestion === 'S28') {
      document.getElementById('current-question').innerHTML = 'Da li kao dete ili sada imate potpunu nemogućnost govora u odredjenim situcaijama?';
    }else if (currentQuestion === 'S29') {
      document.getElementById('current-question').innerHTML = 'Da li kao dete ili sada odbijate da budete daleko od kuće zbog straha od razdvajanja?';
    }else if (currentQuestion === 'S30') {
      document.getElementById('current-question').innerHTML = 'Da li kao dete ili sada odbijate da budete sami kod kuće bez roditelja ili druge voljene osobe?';
    }else if (currentQuestion === 'S31') {
    document.getElementById('current-question').innerHTML = 'Da li su Vaši simptomi i strah ograničeni samo na dogadjaje koji zahtevaju govor i nastup u javnosti?';
  }else if (currentQuestion === 'S32') {
  document.getElementById('current-question').innerHTML = 'Da li je Vaš strah ograničen samo na životinje?(na primer: paukovi, insekti, kučići) ?';
}else if (currentQuestion === 'S33') {
document.getElementById('current-question').innerHTML = 'Da li je Vaš strah ograničen samo na prirodno okruženje?( visine, oluje, voda)';
}else if (currentQuestion === 'S34') {
document.getElementById('current-question').innerHTML = 'Da li je Vaš strah ograničen samo na krv, povrede i inekcije? ( igle, invazivne medicinske procedure)';
}else if (currentQuestion === 'S35') {
document.getElementById('current-question').innerHTML = 'Da je Vaš strah ograničen samo na odredjene prostore? (liftovi, zatvoreni prostori, avioni )';
} else if (currentQuestion === 'S36') {
document.getElementById('current-question').innerHTML = 'Da li je Vaš strah ograničen samo na situacije koje mogu da vode do gušenja, povraćanja ili zaraze bolestima?';

} else if (currentQuestion === 'S111'  ) {
document.getElementById('current-question').innerHTML = 'Pogledajte snimak ispod. Ako se slažete sa sledećom tvrdnjom kliknite da, u suprotnom kliknite ne.<br><b> Prikazana maska je konkavna( ili šuplja), nije konveksna.</b><br><br><video width="320" height="240" autoplay muted><source src="video.mp4" type="video/mp4">  <source src="movie.ogg" type="video/ogg">' ;
s4ans=answer;
    console.log(s4ans);

} else if (currentQuestion === 'S222' ) {

document.getElementById('current-question').innerHTML = 'Pogledajte sliku ispod. Koji od krugova najviše odgovara krugu u sredini? Ako se slažete sa sledećom tvrdnjom kliknite da, u suprotnom kliknite ne.<br><b> Krug na 6 sati najviše odgovara krugu u sredini.</b><br><br><img src="img/2.jpg" alt="">' ;
si1=answer;
console.log(si1);
if(si1==='yes'){br++; yesAnswers=yesAnswers-1;}
} else if (currentQuestion === 'S333'  ) {

document.getElementById('current-question').innerHTML = 'Pogledajte sliku ispod. Ako se slažete sa sledećom tvrdnjom kliknite da, u suprotnom kliknite ne.<br><b>Linije su različite dužine.</b><br><br><img src="img/3.png" alt=""><br>' ;
si2=answer;
console.log(si2);
if(si2==='yes'){br++; yesAnswers=yesAnswers-1;}
}  else if (currentQuestion === 'S444' ) {

document.getElementById('current-question').innerHTML = 'Pogledajte sliku ispod. Ako se slažete sa sledećom tvrdnjom kliknite da, u suprotnom kliknite ne.<br><b>Linije su iste dužine.</b><br><br><img src="img/4.png" alt=""><br>' ;
si3=answer;
console.log(si3);
if(si3==='yes'){br++; yesAnswers=yesAnswers-1;}
} else if (currentQuestion === 'S555') {
document.getElementById('current-question').innerHTML = 'Pogledajte sliku ispod. Ako se slažete sa sledećom tvrdnjom kliknite da, u suprotnom kliknite ne.<br><b>Na slici nije prikazan trougao.</b><br><br><img src="img/5.jpg" alt=""><br>' ;
si4=answer;
console.log(si4);
if(si4==='yes'){br++; yesAnswers=yesAnswers-1;}
}

} else {
  //  document.getElementById('current-question').innerHTML = 'Solution: ' + currentQuestion;
    document.getElementById('questionContainer').style.display = 'block';
    const hideButtons = document.querySelectorAll('.btn2');

hideButtons.forEach(button => {
  button.style.display = 'none';
});
console.log(yesAnswers);
console.log(br);

if (currentQuestion === 'T1') {

if( s1ans==='yes' && s2ans==='yes' && s3ans==='yes' && s4ans==='yes' && yesAnswers==4  ){
    document.getElementById('current-question').innerHTML =  "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>GENERALIZOVANI ANKSIOZNI POREMEĆAj</h2>Dobijena dijagnoza prema ekspertnom sistemu je generalizovani anksiozni poremećaj. Generalizovani anksiozni poremećaj pripada grupi tz. anksioznih poremećaja i njegov glavni simptom je veoma izražena, patološka anksioznost i briga. Za postavljanje dijagnoze neophodno je da ovakva anksioznost bude prisutna u većem broju dana nego što je nije bilo, u periodu od 6 meseci. Briga je povezana sa mnogim oblastima iz svakodnevnog života poput zdravlja, posla i finansija.<br><br><h3 class='h3'>LEČENJE</h3> Terapijski pristupi koji se mogu primeniti u lečenju GAP-a uključuju kognitivno-bihevioralnu terapiju (CBT), terapiju usmerenu na emocije i farmakoterapiju. CBT je najčešće korišćena terapija za GAP i obično se sastoji od različitih tehnika koje pomažu ljudima da prepoznaju i menjaju negativne misli i ponašanja. Terapija usmerena na emocije fokusira se na istraživanje i razumevanje emocija i kako se nositi s njima. Farmakoterapija se takođe može koristiti za lečenje simptoma GAP-a, obično kroz upotrebu antidepresiva i/ili anksiolitika. Međutim, važno je napomenuti da se farmakoterapija ne bi trebala koristiti kao jedini tretman, već se preporučuje kombinacija s drugim terapijskim pristupima.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu generalizovanog anksioznog poremećaja je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";
  } else  if(yesAnswers<1){
      document.getElementById('current-question').innerHTML = " <h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>NEMA PRISUTNOSTI SIMPTOMA ANSKIOZNOSTI</h2><br>Važno je naglasiti da čak i ako ne postoje simptomi anksioznosti, mogu postojati drugi zdravstveni problemi ili simptomi koji mogu uticati na mentalno zdravlje. Stoga je važno posetiti lekara ako primetite bilo kakve promene u svom zdravlju ili ponašanju koje bi mogle ukazivati ​​na prisutnost drugih poremećaja. <br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualizirani plan lečenja.</b></div>" ;
    } else if(yesAnswers>=3){ document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
    else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>MANJI ZNACI ANSKIOZNOSTI</h2><br><br>Prema ekspertnom sistemu pokazujete blage znake koji su karakteristični za anksizonost ali nisu toliko ozbiljni ili izrašeni da bi ne ispunili kriterijum za odredjenu dijagnozu. <br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}

}else if (currentQuestion === 'T2') {
if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
    document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>AGORAFOBIJA</h2><br>Agorafobija je vrsta anksioznog poremećaja koju karakteriše intenzivni strah od situacija ili mesta u kojima osoba oseća da ne može pobeći ili pronaći pomoć u slučaju da se pojave simptomi panike ili anksioznosti. To može uključivati strah od javnih mesta, trgovine, prevoza, otvorenih prostora ili gužve.<br><br><h3 class='h3'>LEČENJE</h3> Lečenje agorafobije obično uključuje kombinaciju terapija, poput terapije izloženosti i kognitivno-bihevioralne terapije. Terapija izloženosti se koristi za postupno izlaganje osobe situacijama koje su joj izazivale strah i paniku, dok se kognitivno-bihevioralna terapija fokusira na prepoznavanje i menjanje negativnih misli i uverenja povezanih s agorafobijom. Lekovi se takođe mogu koristiti u lečenju agorafobije, poput anksiolitika i antidepresiva. Međutim, važno je napomenuti da lekovi ne leče samu agorafobiju, već samo ublažavaju simptome. Stoga se preporučuje kombinacija terapije i lekova za najbolje rezultate. U svakom slučaju, važno je potražiti pomoć stručnjaka za mentalno zdravlje kako bi se dijagnostikovala i lečila agorafobija. Bez lečenja, agorafobija može imati značajan uticaj na svakodnevni život osobe i dovesti do ozbiljnih problema.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div> " ;
} else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
}else if (currentQuestion === 'T3') {
  if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
      document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SEPARACIONA ANSKIOZNOSTI</h2><br>Separaciona anksioznost, takođe poznata i kao separacioni poremećaj, je anksiozni poremećaj koji se obično javlja kod dece, ali se može pojaviti i kod adolescenata i odraslih. Ovaj poremećaj karakteriše strah ili napetost vezanu uz razdvajanje od osoba s kojima se osoba oseća povezano i sigurno, kao što su roditelji, članovi porodice ili druge važne osobe. Osobe koje pate od separacione anksioznosti mogu doživeti intenzivan strah od napuštanja, gubitka ili razdvajanja od osobe s kojom se osećaju sigurno. Mogu se bojati da će se nešto loše dogoditi osobi koju vole ili da će biti izloženi opasnosti ako se razdvoje od nje. Ovo stanje može dovesti do izbegavanja aktivnosti koje uključuju razdvajanje od osobe s kojom se osoba oseća sigurno, kao što su odlasci u školu, posao ili bilo koje druge aktivnosti koje bi mogli dovesti do razdvajanja. Osobe koje pate od separacione anksioznosti takođe doživivljavaju fizičke simptome kao što su glavobolje, mučnina, povraćanje i napade panike kada su razdvojeni od osobe s kojom se osećaju sigurno. <br><br><h3 class='h3'>LEČENJE</h3>  Lečenje separacione anksioznosti obično uključuje psihoterapiju, koja može pomoći osobi da nauči nove načine suočavanja s razdvajanjem i smanjenju straha. U nekim slučajevima, tretman lekovima takođe može biti koristan za kontrolu simptoma. Međutim, svaki pojedinac ima jedinstvene potrebe i preporučuje se individualni pristup lečenju.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div> ";}
      else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
  }else if (currentQuestion === 'T4') {
    if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
        document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIČNE FOBIJE</h2><br>Specifične fobije su vrsta anksioznog poremećaja koji se karakteriše izrazitim i iracionalnim strahom od specifičnih situacija, predmeta, životinja ili aktivnosti koje su u suštini bezopasne. Osobe s ovim poremećajem mogu osećati veliku napetost i strah u prisustvu fobije, a to može dovesti do izbegavanja situacija u kojima se fobija može pojaviti. Primeri specifičnih fobija uključuju strah od letenja, visine, pauka, zmija, zatvorenog prostora, gušenja, uboda iglom, javnog govora i mnogih drugih stvari. Osobe s specifičnim fobijama obično su svesne da je njihov strah iracionalan, ali ipak ne mogu kontrolisati svoje reakcije na fobiju.<br><br><h3 class='h3'>LEČENJE</h3> Lečenje specifičnih fobija obično uključuje terapiju izloženosti, koja se sastoji od postupnog izlaganja osobe fobiji u kontrolisanim uslovima uz podršku stručnjaka za mentalno zdravlje. Cilj je pomoći osobi da se navikne na fobiju i nauči nove načine suočavanja s njom. Kognitivna terapija takođe može biti korisna u pomoći osobi da prepozna i menja negativne misli i uverenja povezana s fobijom. U nekim slučajevima, lečenje lekovima može biti korisno za kontrolu simptoma specifičnih fobija, kao što su povišen puls, znojenje i drhtanje. Kao i kod svih mentalnih poremećaja, preporučuje se individualni pristup lečenju, jer svaka osoba ima jedinstvene potrebe i okolnosti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div> " ;}
        else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
    }else if (currentQuestion === 'T5') {
      if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
          document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>PANIČNI POREMEĆAJ</h2><br>Panični poremećaj je vrsta anksioznog poremećaja koji se karakteriše ponavljajućim, neočekivanim napadima panike i intenzivnim strahom od ponovljenih napada. Simptomi mogu uključivati srčane palpitacije, znojenje, drhtanje, osećaj gušenja ili nedostatka vazduha, mučninu ili vrtoglavicu.<br><br><h3 class='h3'>LEČENJE</h3> Lečenje paničnog poremećaja obično uključuje kombinaciju terapija, poput kognitivno-bihevioralne terapije i terapije izlaganja. Kognitivno-bihevioralna terapija se koristi za prepoznavanje i menjanje negativnih misli i uverenja povezanih s paničnim napadima, dok terapija izlaganja uključuje postupno izlaganje osobe situacijama koje su joj izazivale paniku. Lekovi se takođe mogu koristiti u lečenju paničnog poremećaja, poput antidepresiva i anksiolitika. Ti lekovi pomažu u smanjenju simptoma i olakšavaju terapiju, ali ne leče sam poremećaj. Važno je napomenuti da je panični poremećaj tretljiv i da se većina ljudi koji traže lečenje uspešno oporavi. Stoga je važno potražiti pomoć stručnjaka za mentalno zdravlje kako bi se dijagnostikovao i lečio panični poremećaj.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>"; }
        else {
          document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";
        }

    }else if (currentQuestion === 'T6') {
      if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
        document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SOCIJALNI ANKSIOZNI POREMEĆAJ</h2><br>Socijalni anksiozni poremećaj predstavlja emocionalni poremećaj koji se manifestuje kao preterani strah u društvenim situacijama i strah od negativne procene drugih ljudi. Ljudi s ovim poremećajem često se osećaju nelagodno i anksiozno kada su izloženi društvenim situacijama poput razgovora s nepoznatim ljudima, javnom govorenju, učestvovanju na društvenim događajima ili drugim aktivnostima koje uključuju interakciju s drugima.<br><br><h3 class='h3'>LEČENJE</h3> Lečenje socijalnog anksioznog poremećaja može uključivati psihoterapiju, kao što je kognitivno-bihevioralna terapija, koja se temelji na identifikovanju i promeni negativnih uverenja i ponašanja koja izazivaju anksioznost u društvenim situacijama. Terapija izlaganja, koja uključuje postupno izlaganje osobe situacijama koje su joj izazivale anksioznost, takođe može biti korisna. Lekovi se takođe mogu koristiti za lečenje socijalnog anksioznog poremećaja. Antidepresivi i anksiolitici se često koriste jer pomažu u smanjenju simptoma i olakšavaju psihoterapiju.Važno je napomenuti da socijalni anksiozni poremećaj može biti težak, ali je tretljiv. Važno je potražiti stručnu pomoć kako bi se postavila dijagnoza i započeo odgovarajući tretman koji će pomoći u smanjenju simptoma i poboljšanju kvaliteta života.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
        else  {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}

    }else if (currentQuestion === 'T7') {
      if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
              document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>ANKSIOZNI POREMEĆAj IZAZVAN SUPSTANCAMA/LEKOVIMA</h2><br>Anksiozni poremećaj izazvan supstancama/lekovima je poremećaj koji nastaje kao posledica korišćenja ili prestanka korišćenja određenih stvari poput droga, alkohola, lekova ili drugih hemikalija. Simptomi ovog poremećaja mogu uključivati ​​anksioznost, napetost, nemir, panične napade, promene raspoloženja i fizičke simptome poput znojenja i ubrzanih otkucaja srca.<br><br><h3 class='h3'>LEČENJE</h3>Lečenje anksioznog poremećaja izazvanog supstancama/lekovima zavisi od vrste supstance koja uzrokuje poremećaj i njenoj težini. Obično se koristi kombinacija medicinskih i psiholoških tretmana. Medicinski tretmani uključuju detoksikaciju i upotrebu lekova koji pomažu u ublažavanju simptoma anksioznosti. Psihološki tretmani uključuju grupne ili individualne terapije i terapiju usmerenu na smanjenje anksioznosti poput kognitivno-bihevioralne terapije. Ovi tretmani pomažu u promeni navika i ponašanja koja su dovela do korišćenja supstanci i učenju novih strategija za suočavanje sa stresom i anksioznošću. Važno je potražiti pomoć stručnjaka za mentalno zdravlje kako bi se postavila dijagnoza i započeo odgovarajući tretman. Važno je shvatiti da anksiozni poremećaj izazvan supstancama/lekovima uz odgovarajući tretman može biti uspešno lečen.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
              else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
    }else if (currentQuestion === 'T8') {
      if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
                document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>ANKSIOZNI POREMEĆAJ ZBOG DRUGOG ZDRAVSVENOG STANJA</h2><br>Anksiozni poremećaj koji se javlja u sklopu drugog zdravstvenog stanja može biti uzrokovan različitim bolestima, stanjima ili poremećajima u telu. Na primer, anksioznost se često javlja u osobama s kardiovaskularnim problemima, dijabetesom, autoimunim bolestima, gastrointestinalnim problemima i sl. Simptomi anksioznosti u ovim slučajevima mogu se razlikovati od simptoma klasičnog anksioznog poremećaja, a mogu uključivati ​​mučninu, strah od pogoršanja zdravstvenog stanja, strah od smrti, hipervigilanciju, promene raspoloženja i druge.<br><br><h3 class='h3'>LEČENJE</h3> Lečenje anksioznosti u ovim slučajevima uključuje lečenje osnovnog zdravstvenog problema, što može pomoći u smanjenju simptoma anksioznosti. Osim toga, mogu se primeniti i druge terapije poput psihoterapije, vežbi disanja, meditacije i drugih strategija za suočavanje sa stresom. U nekim slučajevima, lekovi protiv anksioznosti ili antidepresivi mogu se koristiti kao pomoć u smanjenju simptoma anksioznosti. Važno je da osoba sa anksioznošću zbog drugog zdravstvenog stanja ima adekvatnu zdravstvenu negu i da se posavetuje sa stručnjacima za mentalno zdravlje kako bi dobila odgovarajuću dijagnozu i terapiju.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
                else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
  }else if (currentQuestion === 'T9') {
    if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
                  document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SELEKTIVNI MUTIZAM</h2><br>Selektivni mutizam je anksiozni poremećaj koji se najčešće javlja u detinjstvu, ali u retkim slučajevima može se pojaviti i kod odraslih osoba. Kod odraslih osoba, selektivni mutizam često može biti povezan s drugim anksioznim poremećajima, poput socijalne anksioznosti ili paničnog poremećaja. Simptomi selektivnog mutizma kod odraslih mogu uključivati ​​nesposobnost da se govori u određenim društvenim situacijama, poput sastanaka na poslu, društvenih okupljanja, razgovora s nepoznatim ljudima ili čak kod kuće s određenim osobama. Druge karakteristike mogu uključivati strah od situacija koje zahtevaju govor, izbegavanje takvih situacija, osećaj stida ili sramote zbog nesposobnosti govora i poteškoće u komunikaciji.<br><br><h3 class='h3'>LEČENJE</h3>Lečenje selektivnog mutizma kod odraslih slično je kao i kod dece, a može uključivati ​​terapiju baziranu na ponašanju, psihoterapiju i farmakoterapiju. Terapija bazirana na ponašanju obično se fokusira na postupno izlaganje situacijama u kojima osoba ima poteškoće s govorom, kao i obuku socijalnih veština i tehnika smanjenja straha. Psihoterapija se obično usredjuje na poboljšanje samopouzdanja i razumevanja uzroka selektivnog mutizma. Farmakoterapija se može koristiti u kombinaciji s drugim oblicima terapije kako bi se pomoglo u smanjenju simptoma anksioznosti. Važno je da se odrasle osobe s selektivnim mutizmom obrate stručnjaku za mentalno zdravlje kako bi dobili adekvatnu dijagnozu i lečenje.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>" ;}
                  else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
                }
    else if (currentQuestion === 'T61') {
                if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
                              document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SOCIJALNI ANKSIOZNI POREMEĆAJ PODTIP: JAVNI NASTUPI</h2><br>Socijalni anksiozni poremećaj predstavlja emocionalni poremećaj koji se manifestuje kao preterani strah u društvenim situacijama i strah od negativne procene drugih ljudi. Ljudi s ovim poremećajem često se osećaju nelagodno i anksiozno kada su izloženi društvenim situacijama poput razgovora s nepoznatim ljudima, javnom govorenju, učestvovanju na društvenim događajima ili drugim aktivnostima koje uključuju interakciju s drugima.<br><br><h3 class='h3'>LEČENJE</h3> Lečenje socijalnog anksioznog poremećaja može uključivati psihoterapiju, kao što je kognitivno-bihevioralna terapija, koja se temelji na identifikovanju i promeni negativnih uverenja i ponašanja koja izazivaju anksioznost u društvenim situacijama. Terapija izlaganja, koja uključuje postupno izlaganje osobe situacijama koje su joj izazivale anksioznost, takođe može biti korisna. Lekovi se takođe mogu koristiti za lečenje socijalnog anksioznog poremećaja. Antidepresivi i anksiolitici se često koriste jer pomažu u smanjenju simptoma i olakšavaju psihoterapiju.Važno je napomenuti da socijalni anksiozni poremećaj može biti težak, ali je tretljiv. Važno je potražiti stručnu pomoć kako bi se postavila dijagnoza i započeo odgovarajući tretman koji će pomoći u smanjenju simptoma i poboljšanju kvaliteta života.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
                              else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
                            }
else if (currentQuestion === 'T41') {
    if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
                                            document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIČNE FOBIJE PODTIP: ŽIVOTINJE </h2><br>Specifične fobije su vrsta anksioznog poremećaja koji se karakteriše izrazitim i iracionalnim strahom od specifičnih situacija, predmeta, životinja ili aktivnosti koje su u suštini bezopasne. Osobe s ovim poremećajem mogu osećati veliku napetost i strah u prisustvu fobije, a to može dovesti do izbegavanja situacija u kojima se fobija može pojaviti. Primeri specifičnih fobija uključuju strah od letenja, visine, pauka, zmija, zatvorenog prostora, gušenja, uboda iglom, javnog govora i mnogih drugih stvari. Osobe s specifičnim fobijama obično su svesne da je njihov strah iracionalan, ali ipak ne mogu kontrolisati svoje reakcije na fobiju.<br><br><h3 class='h3'>LEČENJE</h3> Lečenje specifičnih fobija obično uključuje terapiju izloženosti, koja se sastoji od postupnog izlaganja osobe fobiji u kontrolisanim uslovima uz podršku stručnjaka za mentalno zdravlje. Cilj je pomoći osobi da se navikne na fobiju i nauči nove načine suočavanja s njom. Kognitivna terapija takođe može biti korisna u pomoći osobi da prepozna i menja negativne misli i uverenja povezana s fobijom. U nekim slučajevima, lečenje lekovima može biti korisno za kontrolu simptoma specifičnih fobija, kao što su povišen puls, znojenje i drhtanje. Kao i kod svih mentalnih poremećaja, preporučuje se individualni pristup lečenju, jer svaka osoba ima jedinstvene potrebe i okolnosti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div> " ;}
                                            else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
                                          }
  else if (currentQuestion === 'T42') {
       if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
                                            document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIČNE FOBIJE PODTIP: PRIRODNA SREDINA </h2><br>Specifične fobije su vrsta anksioznog poremećaja koji se karakteriše izrazitim i iracionalnim strahom od specifičnih situacija, predmeta, životinja ili aktivnosti koje su u suštini bezopasne. Osobe s ovim poremećajem mogu osećati veliku napetost i strah u prisustvu fobije, a to može dovesti do izbegavanja situacija u kojima se fobija može pojaviti. Primeri specifičnih fobija uključuju strah od letenja, visine, pauka, zmija, zatvorenog prostora, gušenja, uboda iglom, javnog govora i mnogih drugih stvari. Osobe s specifičnim fobijama obično su svesne da je njihov strah iracionalan, ali ipak ne mogu kontrolisati svoje reakcije na fobiju.<br><br><h3 class='h3'>LEČENJE</h3> Lečenje specifičnih fobija obično uključuje terapiju izloženosti, koja se sastoji od postupnog izlaganja osobe fobiji u kontrolisanim uslovima uz podršku stručnjaka za mentalno zdravlje. Cilj je pomoći osobi da se navikne na fobiju i nauči nove načine suočavanja s njom. Kognitivna terapija takođe može biti korisna u pomoći osobi da prepozna i menja negativne misli i uverenja povezana s fobijom. U nekim slučajevima, lečenje lekovima može biti korisno za kontrolu simptoma specifičnih fobija, kao što su povišen puls, znojenje i drhtanje. Kao i kod svih mentalnih poremećaja, preporučuje se individualni pristup lečenju, jer svaka osoba ima jedinstvene potrebe i okolnosti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div> " ;}
                                            else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
                                                        }
  else if (currentQuestion === 'T43') {
      if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
                                            document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIČNE FOBIJE PODTIP: KRV-INKECIJE-POVREDE </h2><br>Specifične fobije su vrsta anksioznog poremećaja koji se karakteriše izrazitim i iracionalnim strahom od specifičnih situacija, predmeta, životinja ili aktivnosti koje su u suštini bezopasne. Osobe s ovim poremećajem mogu osećati veliku napetost i strah u prisustvu fobije, a to može dovesti do izbegavanja situacija u kojima se fobija može pojaviti. Primeri specifičnih fobija uključuju strah od letenja, visine, pauka, zmija, zatvorenog prostora, gušenja, uboda iglom, javnog govora i mnogih drugih stvari. Osobe s specifičnim fobijama obično su svesne da je njihov strah iracionalan, ali ipak ne mogu kontrolisati svoje reakcije na fobiju.<br><br><h3 class='h3'>LEČENJE</h3> Lečenje specifičnih fobija obično uključuje terapiju izloženosti, koja se sastoji od postupnog izlaganja osobe fobiji u kontrolisanim uslovima uz podršku stručnjaka za mentalno zdravlje. Cilj je pomoći osobi da se navikne na fobiju i nauči nove načine suočavanja s njom. Kognitivna terapija takođe može biti korisna u pomoći osobi da prepozna i menja negativne misli i uverenja povezana s fobijom. U nekim slučajevima, lečenje lekovima može biti korisno za kontrolu simptoma specifičnih fobija, kao što su povišen puls, znojenje i drhtanje. Kao i kod svih mentalnih poremećaja, preporučuje se individualni pristup lečenju, jer svaka osoba ima jedinstvene potrebe i okolnosti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div> " ;}
                                            else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
                                                                      }
  else if (currentQuestion === 'T44') {
      if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
                                            document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIČNE FOBIJE PODTIP: SITUACIJSKE</h2><br>Specifične fobije su vrsta anksioznog poremećaja koji se karakteriše izrazitim i iracionalnim strahom od specifičnih situacija, predmeta, životinja ili aktivnosti koje su u suštini bezopasne. Osobe s ovim poremećajem mogu osećati veliku napetost i strah u prisustvu fobije, a to može dovesti do izbegavanja situacija u kojima se fobija može pojaviti. Primeri specifičnih fobija uključuju strah od letenja, visine, pauka, zmija, zatvorenog prostora, gušenja, uboda iglom, javnog govora i mnogih drugih stvari. Osobe s specifičnim fobijama obično su svesne da je njihov strah iracionalan, ali ipak ne mogu kontrolisati svoje reakcije na fobiju.<br><br><h3 class='h3'>LEČENJE</h3> Lečenje specifičnih fobija obično uključuje terapiju izloženosti, koja se sastoji od postupnog izlaganja osobe fobiji u kontrolisanim uslovima uz podršku stručnjaka za mentalno zdravlje. Cilj je pomoći osobi da se navikne na fobiju i nauči nove načine suočavanja s njom. Kognitivna terapija takođe može biti korisna u pomoći osobi da prepozna i menja negativne misli i uverenja povezana s fobijom. U nekim slučajevima, lečenje lekovima može biti korisno za kontrolu simptoma specifičnih fobija, kao što su povišen puls, znojenje i drhtanje. Kao i kod svih mentalnih poremećaja, preporučuje se individualni pristup lečenju, jer svaka osoba ima jedinstvene potrebe i okolnosti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div> " ;}
                                            else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
                                                                                    }
    else if (currentQuestion === 'T45') {
        if(s1ans==='yes' && s2ans==='yes' && s3ans==='yes'){
                                          document.getElementById('current-question').innerHTML = "<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIČNE FOBIJE PODTIP: DRUGE</h2><br>Specifične fobije su vrsta anksioznog poremećaja koji se karakteriše izrazitim i iracionalnim strahom od specifičnih situacija, predmeta, životinja ili aktivnosti koje su u suštini bezopasne. Osobe s ovim poremećajem mogu osećati veliku napetost i strah u prisustvu fobije, a to može dovesti do izbegavanja situacija u kojima se fobija može pojaviti. Primeri specifičnih fobija uključuju strah od letenja, visine, pauka, zmija, zatvorenog prostora, gušenja, uboda iglom, javnog govora i mnogih drugih stvari. Osobe s specifičnim fobijama obično su svesne da je njihov strah iracionalan, ali ipak ne mogu kontrolisati svoje reakcije na fobiju.<br><br><h3 class='h3'>LEČENJE</h3> Lečenje specifičnih fobija obično uključuje terapiju izloženosti, koja se sastoji od postupnog izlaganja osobe fobiji u kontrolisanim uslovima uz podršku stručnjaka za mentalno zdravlje. Cilj je pomoći osobi da se navikne na fobiju i nauči nove načine suočavanja s njom. Kognitivna terapija takođe može biti korisna u pomoći osobi da prepozna i menja negativne misli i uverenja povezana s fobijom. U nekim slučajevima, lečenje lekovima može biti korisno za kontrolu simptoma specifičnih fobija, kao što su povišen puls, znojenje i drhtanje. Kao i kod svih mentalnih poremećaja, preporučuje se individualni pristup lečenju, jer svaka osoba ima jedinstvene potrebe i okolnosti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div> " ;}
                                          else {document.getElementById('current-question').innerHTML ="<h1 class='h1'>REZULTAT</h1><br><h2 class='h2'>SPECIFIRANI ILI NESPECIFIRANI TIPOVI ANKSIOZNOG POREMEĆAJA</h2><br><br>Specificirani anksiozni poremećaj i nespecificirani anksiozni poremećaj su termini za anksioznost ili fobije koji ne ispunjavaju tačne kriterijume za bilo koji drugi anksiozni poremećaj, ali su dovoljno značajni da budu uznemirujući i ometajući.<br><br> <h3 class='h3'>LEČENJE</h3>Lečenje obično uključuje terapiju izloženosti i kognitivno-bihevioralnu terapiju, a u nekim slučajevima se koriste i lekovi. Važno je napomenuti da dijagnozu i lečenje anksioznih poremećaja treba provesti stručni psihijatar ili psiholog nakon adekvatne procene simptoma i istorije bolesti.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Stoga bi se svaka osoba koja pati od simptoma anksioznosti trebala obratiti kvalifikovanom stručnjaku za mentalno zdravlje kako bi dobila pravi i individualni plan lečenja.</b></div>";}
                                                                                                  }
    document.getElementById('current-question').innerHTML += "<br><br><h1 class='h1'>REZULTAT - ŠIZOFRENI POREMEĆAJ </h1><br><h2 class='h2'>Broj odgovora: "+br+"/5</h2><br>Šizofrenija je hronični i ozbiljan mentalni poremećaj koji može izazvati niz simptoma, uključujući zablude, halucinacije, poremećeno razmišljanje i socijalno povlačenje.<br>Istraživanja su pokazala da osobe sa šizofrenijom mogu drugačije da percipiraju optičke iluzije od osoba bez poremećaja. Na primer, studija objavljena u Journal of Abnormal Psichology otkrila je da osobe sa šizofrenijom mogu biti manje podložne određenim vrstama iluzija, kao što je Ponzo iluzija, ali više podložne drugim, kao što je Miler-Lajerova iluzija. Pojedinci sa šizofrenijom imaju veću verovatnoću da vide iluziju šuplje maske kao konkavno lice, a ne kao konveksno lice, dok je osobe bez poremećaja obično vide kao konveksno lice. Istraživanja sugerišu da to može biti zbog razlika u načinu na koji mozak obrađuje vizuelne informacije kod osoba sa šizofrenijom. Pacijenti sa šizofrenijom su u stanju da pravilno vide kroz iluziju poznatu kao iluzija 'šuplje maske', verovatno zato što njihov mozak odvaja 'ono što oči vide' od onoga što 'mozak misli da vidi', navodi se u studiji objavljenoj 2009. u časopisu NeuroImage.<br><br><div class='border border-success p-3'><b>NAPOMENA: Ekspertni sistem koji je dao dijagnozu je algoritamski softver, a ne stručnjak za mentalno zdravlje. Optičke iluzije nisu dijagnostički alat za šizofreniju iako pojedinci sa šizofrenijom mogu doživeti određene vrste optičkih iluzija drugačije od osoba bez poremećaja, ovo je samo jedan aspekt složene i višestruke prirode poremećaja. Dijagnostikovanje šizofrenije zahteva sveobuhvatnu procenu stručnjaka za mentalno zdravlje, koji će uzeti u obzir niz faktora kao što su simptomi pojedinca, medicinska istorija i porodična istorija. </b></div><br><br><a href='index.html' class='btn btn-success'>Nazad</a>";
  }
}
