/* =====================================================
   男性声優 好き顔9選メーカー
   ===================================================== */


/* =====================================================
   声優データ 150人
   写真は images/001.jpg ～ images/150.jpg
   ===================================================== */

const people = [
  { id: 1, name: "浦和希", image: "images/001.jpg" },
  { id: 2, name: "海渡翼", image: "images/002.jpg" },
  { id: 3, name: "鈴木崚汰", image: "images/003.jpg" },
  { id: 4, name: "市川蒼", image: "images/004.jpg" },
  { id: 5, name: "千葉翔也", image: "images/005.jpg" },
  { id: 6, name: "三上瑛士", image: "images/006.jpg" },
  { id: 7, name: "波多野翔", image: "images/007.jpg" },
  { id: 8, name: "梶田大嗣", image: "images/008.jpg" },
  { id: 9, name: "坂田将吾", image: "images/009.jpg" },
  { id: 10, name: "三浦魁", image: "images/010.jpg" },
  { id: 11, name: "大野智敬", image: "images/011.jpg" },
  { id: 12, name: "榊原優希", image: "images/012.jpg" },
  { id: 13, name: "長岡龍歩", image: "images/013.jpg" },
  { id: 14, name: "大畑伸太郎", image: "images/014.jpg" },
  { id: 15, name: "峯田大夢", image: "images/015.jpg" },
  { id: 16, name: "戸谷菊之介", image: "images/016.jpg" },
  { id: 17, name: "安田陸矢", image: "images/017.jpg" },
  { id: 18, name: "岡野友佑", image: "images/018.jpg" },
  { id: 19, name: "徳留慎乃佑", image: "images/019.jpg" },
  { id: 20, name: "梅田修一朗", image: "images/020.jpg" },
  { id: 21, name: "石毛翔弥", image: "images/021.jpg" },
  { id: 22, name: "新祐樹", image: "images/022.jpg" },
  { id: 23, name: "福西勝也", image: "images/023.jpg" },
  { id: 24, name: "坂泰斗", image: "images/024.jpg" },
  { id: 25, name: "小林大紀", image: "images/025.jpg" },
  { id: 26, name: "広瀬裕也", image: "images/026.jpg" },
  { id: 27, name: "石井孝英", image: "images/027.jpg" },
  { id: 28, name: "酒井広大", image: "images/028.jpg" },
  { id: 29, name: "永塚拓馬", image: "images/029.jpg" },
  { id: 30, name: "野上翔", image: "images/030.jpg" },

  { id: 31, name: "佐藤元", image: "images/031.jpg" },
  { id: 32, name: "宮﨑雅也", image: "images/032.jpg" },
  { id: 33, name: "宮瀬尚也", image: "images/033.jpg" },
  { id: 34, name: "大鈴功起", image: "images/034.jpg" },
  { id: 35, name: "橘龍丸", image: "images/035.jpg" },
  { id: 36, name: "堂島颯人", image: "images/036.jpg" },
  { id: 37, name: "森永彩斗", image: "images/037.jpg" },
  { id: 38, name: "小野将夢", image: "images/038.jpg" },
  { id: 39, name: "鈴木裕斗", image: "images/039.jpg" },

  { id: 40, name: "熊谷健太郎", image: "images/040.jpg" },
  { id: 41, name: "小松昌平", image: "images/041.jpg" },
  { id: 42, name: "寺島惇太", image: "images/042.jpg" },
  { id: 43, name: "仲村宗悟", image: "images/043.jpg" },
  { id: 44, name: "深町寿成", image: "images/044.jpg" },

  { id: 45, name: "葉山翔太", image: "images/045.jpg" },
  { id: 46, name: "狩野翔", image: "images/046.jpg" },
  { id: 47, name: "土田玲央", image: "images/047.jpg" },
  { id: 48, name: "堀江瞬", image: "images/048.jpg" },
  { id: 49, name: "土岐隼一", image: "images/049.jpg" },
  { id: 50, name: "天﨑滉平", image: "images/050.jpg" },

  { id: 51, name: "山下誠一郎", image: "images/051.jpg" },
  { id: 52, name: "石谷春貴", image: "images/052.jpg" },
  { id: 53, name: "八代拓", image: "images/053.jpg" },
  { id: 54, name: "畠中祐", image: "images/054.jpg" },
  { id: 55, name: "小林千晃", image: "images/055.jpg" },
  { id: 56, name: "大塚剛央", image: "images/056.jpg" },
  { id: 57, name: "榎木淳弥", image: "images/057.jpg" },
  { id: 58, name: "梶原岳人", image: "images/058.jpg" },
  { id: 59, name: "山下大輝", image: "images/059.jpg" },
  { id: 60, name: "内田雄馬", image: "images/060.jpg" },

  { id: 61, name: "石川界人", image: "images/061.jpg" },
  { id: 62, name: "増田俊樹", image: "images/062.jpg" },
  { id: 63, name: "斉藤壮馬", image: "images/063.jpg" },
  { id: 64, name: "江口拓也", image: "images/064.jpg" },
  { id: 65, name: "西山宏太朗", image: "images/065.jpg" },
  { id: 66, name: "梅原裕一郎", image: "images/066.jpg" },
  { id: 67, name: "古川慎", image: "images/067.jpg" },
  { id: 68, name: "伊東健人", image: "images/068.jpg" },
  { id: 69, name: "野津山幸宏", image: "images/069.jpg" },
  { id: 70, name: "木島隆一", image: "images/070.jpg" },

  { id: 71, name: "白井悠介", image: "images/071.jpg" },
  { id: 72, name: "高塚智人", image: "images/072.jpg" },
  { id: 73, name: "土屋神葉", image: "images/073.jpg" },
  { id: 74, name: "岩崎諒太", image: "images/074.jpg" },
  { id: 75, name: "小林裕介", image: "images/075.jpg" },
  { id: 76, name: "岡本信彦", image: "images/076.jpg" },
  { id: 77, name: "村瀬歩", image: "images/077.jpg" },
  { id: 78, name: "木村良平", image: "images/078.jpg" },
  { id: 79, name: "島﨑信長", image: "images/079.jpg" },
  { id: 80, name: "小野賢章", image: "images/080.jpg" },

  { id: 81, name: "花江夏樹", image: "images/081.jpg" },
  { id: 82, name: "内山昂輝", image: "images/082.jpg" },
  { id: 83, name: "松岡禎丞", image: "images/083.jpg" },
  { id: 84, name: "KENN", image: "images/084.jpg" },
  { id: 85, name: "逢坂良太", image: "images/085.jpg" },
  { id: 86, name: "河西健吾", image: "images/086.jpg" },
  { id: 87, name: "阿座上洋平", image: "images/087.jpg" },
  { id: 88, name: "濱野大輝", image: "images/088.jpg" },
  { id: 89, name: "駒田航", image: "images/089.jpg" },
  { id: 90, name: "神尾晋一郎", image: "images/090.jpg" },

  { id: 91, name: "笠間淳", image: "images/091.jpg" },
  { id: 92, name: "濱健人", image: "images/092.jpg" },
  { id: 93, name: "佐藤拓也", image: "images/093.jpg" },
  { id: 94, name: "浅沼晋太郎", image: "images/094.jpg" },
  { id: 95, name: "小野友樹", image: "images/095.jpg" },
  { id: 96, name: "浦田わたる", image: "images/096.jpg" },
  { id: 97, name: "田丸篤志", image: "images/097.jpg" },
  { id: 98, name: "仲田博喜", image: "images/098.jpg" },
  { id: 99, name: "中島ヨシキ", image: "images/099.jpg" },
  { id: 100, name: "住谷哲栄", image: "images/100.jpg" },

  { id: 101, name: "矢野奨吾", image: "images/101.jpg" },
  { id: 102, name: "バトリ勝悟", image: "images/102.jpg" },
  { id: 103, name: "山口智広", image: "images/103.jpg" },
  { id: 104, name: "帆世雄一", image: "images/104.jpg" },
  { id: 105, name: "宮野真守", image: "images/105.jpg" },
  { id: 106, name: "梶裕貴", image: "images/106.jpg" },
  { id: 107, name: "蒼井翔太", image: "images/107.jpg" },
  { id: 108, name: "中村悠一", image: "images/108.jpg" },
  { id: 109, name: "細谷佳正", image: "images/109.jpg" },
  { id: 110, name: "前野智昭", image: "images/110.jpg" },

  { id: 111, name: "立花慎之介", image: "images/111.jpg" },
  { id: 112, name: "柿原徹也", image: "images/112.jpg" },
  { id: 113, name: "諏訪部順一", image: "images/113.jpg" },
  { id: 114, name: "福山潤", image: "images/114.jpg" },
  { id: 115, name: "木村昴", image: "images/115.jpg" },
  { id: 116, name: "浪川大輔", image: "images/116.jpg" },
  { id: 117, name: "下野紘", image: "images/117.jpg" },
  { id: 118, name: "寺島拓篤", image: "images/118.jpg" },
  { id: 119, name: "羽多野渉", image: "images/119.jpg" },
  { id: 120, name: "鈴村健一", image: "images/120.jpg" },

  { id: 121, name: "森久保祥太郎", image: "images/121.jpg" },
  { id: 122, name: "吉野裕行", image: "images/122.jpg" },
  { id: 123, name: "谷山紀章", image: "images/123.jpg" },
  { id: 124, name: "鳥海浩輔", image: "images/124.jpg" },
  { id: 125, name: "遊佐浩二", image: "images/125.jpg" },
  { id: 126, name: "宮田幸季", image: "images/126.jpg" },
  { id: 127, name: "岸尾だいすけ", image: "images/127.jpg" },
  { id: 128, name: "山谷祥生", image: "images/128.jpg" },
  { id: 129, name: "村田太志", image: "images/129.jpg" },
  { id: 130, name: "高橋英則", image: "images/130.jpg" },

  { id: 131, name: "益山武明", image: "images/131.jpg" },
  { id: 132, name: "深川和征", image: "images/132.jpg" },
  { id: 133, name: "室元気", image: "images/133.jpg" },
  { id: 134, name: "井上雄貴", image: "images/134.jpg" },
  { id: 135, name: "笹翼", image: "images/135.jpg" },
  { id: 136, name: "山本和臣", image: "images/136.jpg" },
  { id: 137, name: "鈴木千尋", image: "images/137.jpg" },
  { id: 138, name: "森嶋秀太", image: "images/138.jpg" },

  { id: 139, name: "阿部敦", image: "images/139.jpg" },
  { id: 140, name: "代永翼", image: "images/140.jpg" },
  { id: 141, name: "平川大輔", image: "images/141.jpg" },
  { id: 142, name: "大河元気", image: "images/142.jpg" },
  { id: 143, name: "神谷浩史", image: "images/143.jpg" },
  { id: 144, name: "小野大輔", image: "images/144.jpg" },
  { id: 145, name: "石田彰", image: "images/145.jpg" },
  { id: 146, name: "津田健次郎", image: "images/146.jpg" },
  { id: 147, name: "杉田智和", image: "images/147.jpg" },
  { id: 148, name: "三木眞一郎", image: "images/148.jpg" },
  { id: 149, name: "子安武人", image: "images/149.jpg" },
  { id: 150, name: "森川智之", image: "images/150.jpg" }
];


/* =====================================================
   設定
===================================================== */

const GROUP_SIZE = 9;

// 9人から3人を予選通過
const QUALIFY_WINNERS = 3;

// 本選は50人 → 20人
const SEMIFINALISTS = 20;

// 最後に9人を選ぶ
const FINALISTS = 9;


/* =====================================================
   状態
===================================================== */

let remainingPeople = [];

let qualifyingWinners = [];

let currentGroup = [];

let currentSelected = [];

let currentPhase = "";

let currentGroupNumber = 0;

let totalGroups = 0;

let finalCandidates = [];

let finalSelected = [];


/* =====================================================
   DOM
===================================================== */

const startScreen =
  document.getElementById("start-screen");

const gameScreen =
  document.getElementById("game-screen");

const resultScreen =
  document.getElementById("result-screen");

const choices =
  document.getElementById("choices");

const progress =
  document.getElementById("progress");

const progressFill =
  document.getElementById("progress-fill");

const phaseName =
  document.getElementById("phase-name");


/* =====================================================
   シャッフル
===================================================== */

function shuffle(array) {

  const result = [...array];

  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      result[i],
      result[j]
    ] =
    [
      result[j],
      result[i]
    ];
  }

  return result;
}


/* =====================================================
   START
===================================================== */

document
  .getElementById("start-button")
  .addEventListener(
    "click",
    startGame
  );


function startGame() {

  startScreen.classList.add(
    "hidden"
  );

  gameScreen.classList.remove(
    "hidden"
  );

  remainingPeople =
    shuffle(people);

  qualifyingWinners = [];

  currentGroupNumber = 0;

  startQualifying();

}


/* =====================================================
   予選開始
===================================================== */

function startQualifying() {

  currentPhase = "予選";

  phaseName.textContent =
    "予選";

  totalGroups =
    Math.ceil(
      remainingPeople.length /
      GROUP_SIZE
    );

  currentGroupNumber = 0;

  nextQualifyingGroup();

}


/* =====================================================
   予選：9人ずつ
===================================================== */

function nextQualifyingGroup() {

  if (
    remainingPeople.length === 0
  ) {

    startSemiFinal();

    return;
  }


  currentGroup =
    remainingPeople.splice(
      0,
      GROUP_SIZE
    );


  /*
    9人から3人選択
  */

  currentSelected = [];

  renderQualifying();

}


/* =====================================================
   予選画面
===================================================== */

function renderQualifying() {

  choices.innerHTML = "";

  currentGroupNumber++;

  progress.textContent =
    `${currentGroupNumber} / ${totalGroups}`;

  progressFill.style.width =
    `${
      (currentGroupNumber /
      totalGroups) * 100
    }%`;


  const subtitle =
    document.querySelector(
      "#game-screen h2"
    );

  subtitle.textContent =
    `この中から好きな顔を${QUALIFY_WINNERS}人選んでね`;


  currentGroup.forEach(
    person => {

      const button =
        createPersonCard(
          person
        );


      button.addEventListener(
        "click",
        () => {

          toggleSelection(
            person,
            button,
            QUALIFY_WINNERS
          );

        }
      );


      choices.appendChild(
        button
      );

    }
  );

}


/* =====================================================
   選択ON/OFF
===================================================== */

function toggleSelection(
  person,
  button,
  max
) {

  const index =
    currentSelected.indexOf(
      person
    );


  if (index !== -1) {

    currentSelected.splice(
      index,
      1
    );

    button.classList.remove(
      "selected"
    );

    return;
  }


  if (
    currentSelected.length >= max
  ) {

    return;
  }


  currentSelected.push(
    person
  );

  button.classList.add(
    "selected"
  );


  /*
    必要人数を選んだら次へ
  */

  if (
    currentSelected.length === max
  ) {

    setTimeout(
      finishQualifyingGroup,
      350
    );

  }

}


/* =====================================================
   予選グループ終了
===================================================== */

function finishQualifyingGroup() {

  qualifyingWinners.push(
    ...currentSelected
  );

  nextQualifyingGroup();

}


/* =====================================================
   カード生成
===================================================== */

function createPersonCard(
  person
) {

  const button =
    document.createElement(
      "button"
    );

  button.className =
    "choice";


  button.innerHTML = `

    <img
      src="${person.image}"
      alt="${person.name}"
    >

    <div class="choice-name">
      ${person.name}
    </div>

  `;


  return button;

}


/* =====================================================
   本選開始
===================================================== */

function startSemiFinal() {

  currentPhase =
    "本選";

  phaseName.textContent =
    "本選";


  /*
    150人 → 50人
  */

  qualifyingWinners =
    shuffle(
      qualifyingWinners
    );


  /*
    50人の中から20人を選ぶ
  */

  finalCandidates =
    qualifyingWinners;


  renderSemiFinal();

}


/* =====================================================
   本選
===================================================== */

function renderSemiFinal() {

  choices.innerHTML = "";

  progress.textContent =
    "50人 → 20人";

  progressFill.style.width =
    "50%";


  const subtitle =
    document.querySelector(
      "#game-screen h2"
    );

  subtitle.textContent =
    "この中から好きな顔を20人選んでね";


  currentSelected = [];


  /*
    50人全部表示すると
    スマホではかなり長くなるので
    10人ずつ5ページ
  */

  const groups = [];

  for (
    let i = 0;
    i < finalCandidates.length;
    i += 10
  ) {

    groups.push(
      finalCandidates.slice(
        i,
        i + 10
      )
    );

  }


  let groupIndex = 0;


  function showGroup() {

    choices.innerHTML = "";

    const group =
      groups[groupIndex];


    progress.textContent =
      `本選 ${groupIndex + 1} / ${groups.length}`;


    group.forEach(
      person => {

        const button =
          createPersonCard(
            person
          );


        button.addEventListener(
          "click",
          () => {

            toggleSelection(
              person,
              button,
              4
            );

          }
        );


        choices.appendChild(
          button
        );

      }
    );


    /*
      4人選択したら次の10人へ
    */

    const checkInterval =
      setInterval(
        () => {

          if (
            currentSelected.length >=
            (groupIndex + 1) * 4
          ) {

            clearInterval(
              checkInterval
            );

          }

        },
        100
      );


    /*
      この実装では
      各グループから4人選ぶ
    */

  }


  /*
    本選を別方式で処理
    */

  currentSelected = [];

  let semiWinners = [];

  function showNextSemiGroup() {

    if (
      groupIndex >= groups.length
    ) {

      /*
        50人 → 20人
      */

      startFinalSelection(
        semiWinners
      );

      return;
    }


    choices.innerHTML = "";

    const group =
      groups[groupIndex];


    progress.textContent =
      `本選 ${groupIndex + 1} / ${groups.length}`;


    const localSelected = [];


    group.forEach(
      person => {

        const button =
          createPersonCard(
            person
          );


        button.addEventListener(
          "click",
          () => {

            const index =
              localSelected.indexOf(
                person
              );


            if (index !== -1) {

              localSelected.splice(
                index,
                1
              );

              button.classList.remove(
                "selected"
              );

              return;

            }


            if (
              localSelected.length >= 4
            ) {

              return;

            }


            localSelected.push(
              person
            );

            button.classList.add(
              "selected"
            );


            if (
              localSelected.length === 4
            ) {

              semiWinners.push(
                ...localSelected
              );

              setTimeout(
                () => {

                  groupIndex++;

                  showNextSemiGroup();

                },
                350
              );

            }

          }
        );


        choices.appendChild(
          button
        );

      }
    );

  }


  showNextSemiGroup();

}


/* =====================================================
   最終選抜
===================================================== */

function startFinalSelection(
  candidates
) {

  currentPhase =
    "決勝";

  phaseName.textContent =
    "決勝";


  /*
    本選で20人
  */

  finalCandidates =
    shuffle(
      candidates
    ).slice(
      0,
      SEMIFINALISTS
    );


  currentSelected = [];

  renderFinalSelection();

}


/* =====================================================
   決勝：20人から9人
===================================================== */

function renderFinalSelection() {

  choices.innerHTML = "";

  progress.textContent =
    "20人 → 9人";

  progressFill.style.width =
    "80%";


  const subtitle =
    document.querySelector(
      "#game-screen h2"
    );

  subtitle.textContent =
    "最後に、好きな顔を9人選んでね";


  finalCandidates.forEach(
    person => {

      const button =
        createPersonCard(
          person
        );


      button.addEventListener(
        "click",
        () => {

          toggleSelection(
            person,
            button,
            FINALISTS
          );


          /*
            9人選んだら
            順位付けへ
          */

          if (
            currentSelected.length ===
            FINALISTS
          ) {

            setTimeout(
              () => {

                startRanking(
                  currentSelected
                );

              },
              500
            );

          }

        }
      );


      choices.appendChild(
        button
      );

    }
  );

}


/* =====================================================
   TOP9の順位付け
===================================================== */

function startRanking(
  selected
) {

  currentPhase =
    "順位決定";

  phaseName.textContent =
    "順位決定";


  /*
    選んだ9人を
    1位から順番にタップ
  */

  finalSelected = [];

  showRankingSelection(
    selected
  );

}


/* =====================================================
   順位決定画面
===================================================== */

function showRankingSelection(
  candidates
) {

  choices.innerHTML = "";


  const rank =
    finalSelected.length + 1;


  progress.textContent =
    `${rank}位を選択`;


  progressFill.style.width =
    `${(rank / 9) * 100}%`;


  const subtitle =
    document.querySelector(
      "#game-screen h2"
    );


  if (rank === 9) {

    subtitle.textContent =
      "最後に9位を選んでね";

  } else {

    subtitle.textContent =
      `あなたの${rank}位を選んでね`;

  }


  /*
    まだ順位が決まっていない人だけ表示
  */

  candidates
    .filter(
      person =>
        !finalSelected.includes(
          person
        )
    )
    .forEach(
      person => {

        const button =
          createPersonCard(
            person
          );


        button.addEventListener(
          "click",
          () => {

            finalSelected.push(
              person
            );


            if (
              finalSelected.length === 9
            ) {

              showResult();

            } else {

              showRankingSelection(
                candidates
              );

            }

          }
        );


        choices.appendChild(
          button
        );

      }
    );

}


/* =====================================================
   結果
===================================================== */

function showResult() {

  gameScreen.classList.add(
    "hidden"
  );

  resultScreen.classList.remove(
    "hidden"
  );


  const grid =
    document.getElementById(
      "result-grid"
    );


  grid.innerHTML = "";


  finalSelected.forEach(
    (person, index) => {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "result-card";


      card.innerHTML = `

        <div class="rank">
          ${index + 1}
        </div>

        <img
          src="${person.image}"
          alt="${person.name}"
        >

        <div class="result-name">
          ${person.name}
        </div>

      `;


      grid.appendChild(
        card
      );

    }
  );

}


/* =====================================================
   リスタート
===================================================== */

document
  .getElementById("restart-button")
  .addEventListener(
    "click",
    () => {

      location.reload();

    }
  );
