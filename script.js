// =====================================================
// 男性声優 好き顔9選
//
// 150人
// ↓
// 予選：25画面 × 6人
// ↓
// 選択数で上位36人
// ↓
// 本戦：二者択一
// ↓
// Elo方式で自動ランキング
// ↓
// TOP9
// =====================================================


// =====================================================
// 声優150人
// =====================================================

const voiceActors = [

  "浦和希",
  "海渡翼",
  "鈴木崚汰",
  "市川蒼",
  "三上瑛士",
  "波多野翔",
  "梶田大嗣",
  "坂田将吾",
  "三浦魁",
  "大野智敬",

  "榊原優希",
  "長岡龍歩",
  "大畑伸太郎",
  "峯田大夢",
  "戸谷菊之介",
  "安田陸矢",
  "岡野友佑",
  "徳留慎乃佑",
  "梅田修一朗",
  "石毛翔弥",

  "新祐樹",
  "福西勝也",
  "坂泰斗",
  "小林大紀",
  "広瀬裕也",
  "石井孝英",
  "酒井広大",
  "永塚拓馬",
  "野上翔",
  "佐藤元",

  "宮﨑雅也",
  "宮瀬尚也",
  "大鈴功起",
  "橘龍丸",
  "堂島颯人",
  "森永彩斗",
  "小野将夢",
  "鈴木裕斗",
  "熊谷健太郎",
  "小松昌平",

  "寺島惇太",
  "仲村宗悟",
  "深町寿成",
  "葉山翔太",
  "狩野翔",
  "土田玲央",
  "堀江瞬",
  "土岐隼一",
  "天﨑滉平",
  "山下誠一郎",

  "石谷春貴",
  "八代拓",
  "畠中祐",
  "小林千晃",
  "大塚剛央",
  "榎木淳弥",
  "梶原岳人",
  "山下大輝",
  "内田雄馬",
  "石川界人",

  "増田俊樹",
  "斉藤壮馬",
  "江口拓也",
  "西山宏太朗",
  "梅原裕一郎",
  "古川慎",
  "伊東健人",
  "野津山幸宏",
  "木島隆一",
  "白井悠介",

  "高塚智人",
  "土屋神葉",
  "岩崎諒太",
  "小林裕介",
  "岡本信彦",
  "村瀬歩",
  "木村良平",
  "島﨑信長",
  "小野賢章",
  "花江夏樹",

  "内山昂輝",
  "松岡禎丞",
  "KENN",
  "逢坂良太",
  "河西健吾",
  "阿座上洋平",
  "濱野大輝",
  "駒田航",
  "神尾晋一郎",
  "笠間淳",

  "濱健人",
  "佐藤拓也",
  "浅沼晋太郎",
  "小野友樹",
  "浦田わたる",
  "田丸篤志",
  "仲田博喜",
  "中島ヨシキ",
  "住谷哲栄",
  "矢野奨吾",

  "バトリ勝悟",
  "山口智広",
  "帆世雄一",
  "宮野真守",
  "梶裕貴",
  "蒼井翔太",
  "中村悠一",
  "細谷佳正",
  "前野智昭",
  "立花慎之介",

  "柿原徹也",
  "諏訪部順一",
  "福山潤",
  "木村昴",
  "浪川大輔",
  "下野紘",
  "寺島拓篤",
  "羽多野渉",
  "鈴村健一",
  "森久保祥太郎",

  "吉野裕行",
  "谷山紀章",
  "鳥海浩輔",
  "遊佐浩二",
  "宮田幸季",
  "岸尾だいすけ",
  "山谷祥生",
  "村田太志",
  "高橋英則",
  "益山武明",

  "深川和征",
  "室元気",
  "井上雄貴",
  "笹翼",
  "山本和臣",
  "鈴木千尋",
  "森嶋秀太",
  "阿部敦",
  "代永翼",
  "平川大輔",

  "大河元気",
  "神谷浩史",
  "小野大輔",
  "石田彰",
  "津田健次郎",
  "杉田智和",
  "三木眞一郎",
  "子安武人",
  "森川智之"
];


// =====================================================
// 設定
// =====================================================

const PRELIM_GROUP_SIZE = 6;

const PRELIM_GROUPS = 25;

const PRELIM_SELECT_MAX = 3;

const MAIN_FINALISTS = 36;

const TOP_COUNT = 9;

const BATTLE_ROUNDS = 7;


// =====================================================
// 状態
// =====================================================

let shuffledMembers = [];

let prelimGroups = [];

let prelimPage = 0;

let prelimVotes = {};

let finalists = [];

let ratings = {};

let battleHistory = [];

let currentLeft = null;

let currentRight = null;

let battleCount = 0;

let totalBattles = 0;


// =====================================================
// DOM
// =====================================================

const startScreen =
  document.getElementById("start-screen");

const prelimScreen =
  document.getElementById("prelim-screen");

const prelimResultScreen =
  document.getElementById("prelim-result-screen");

const battleScreen =
  document.getElementById("battle-screen");

const resultScreen =
  document.getElementById("result-screen");


// =====================================================
// Utility
// =====================================================

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
    ] = [
      result[j],
      result[i]
    ];
  }

  return result;
}


function imagePath(name) {

  const index =
    voiceActors.indexOf(name) + 1;

  return `images/${String(index).padStart(3, "0")}.jpg`;
}


// =====================================================
// START
// =====================================================

document
  .getElementById("start-button")
  .addEventListener(
    "click",
    startPrelim
  );


function startPrelim() {

  startScreen.classList.add("hidden");

  prelimScreen.classList.remove("hidden");

  shuffledMembers =
    shuffle(voiceActors);

  prelimGroups = [];

  for (
    let i = 0;
    i < PRELIM_GROUPS;
    i++
  ) {

    prelimGroups.push(
      shuffledMembers.slice(
        i * PRELIM_GROUP_SIZE,
        (i + 1) * PRELIM_GROUP_SIZE
      )
    );
  }

  prelimVotes = {};

  voiceActors.forEach(name => {

    prelimVotes[name] = 0;

  });

  prelimPage = 0;

  showPrelimPage();
}


// =====================================================
// 予選
// =====================================================

function showPrelimPage() {

  const group =
    prelimGroups[prelimPage];

  const choices =
    document.getElementById(
      "prelim-choices"
    );

  choices.innerHTML = "";

  document.getElementById(
    "prelim-progress"
  ).textContent =
    `${prelimPage + 1} / ${PRELIM_GROUPS}`;


  document.getElementById(
    "prelim-progress-fill"
  ).style.width =
    `${((prelimPage + 1) / PRELIM_GROUPS) * 100}%`;


  document.getElementById(
    "prelim-selected-count"
  ).textContent = "0";


  const selected =
    new Set();


  group.forEach(name => {

    const card =
      document.createElement("button");

    card.className = "choice";

    card.innerHTML = `
      <img
        src="${imagePath(name)}"
        alt="${name}"
        onerror="
          this.style.background='#eee';
        "
      >

      <div class="choice-name">
        ${name}
      </div>
    `;


    card.addEventListener(
      "click",
      () => {

        if (selected.has(name)) {

          selected.delete(name);

          card.classList.remove(
            "selected"
          );

        } else {

          if (
            selected.size >=
            PRELIM_SELECT_MAX
          ) {

            return;
          }

          selected.add(name);

          card.classList.add(
            "selected"
          );
        }


        document.getElementById(
          "prelim-selected-count"
        ).textContent =
          selected.size;

      }
    );


    choices.appendChild(card);

  });


  const nextButton =
    document.getElementById(
      "prelim-next-button"
    );


  nextButton.textContent =
    prelimPage ===
    PRELIM_GROUPS - 1

      ? "決定して次へ"

      : "決定して次へ";


  nextButton.onclick =
    () => {

      selected.forEach(name => {

        prelimVotes[name]++;

      });


      prelimPage++;


      if (
        prelimPage >=
        PRELIM_GROUPS
      ) {

        finishPrelim();

      } else {

        showPrelimPage();

      }

    };
}


// =====================================================
// 予選終了
// =====================================================

function finishPrelim() {

  finalists =
    [...voiceActors]
      .sort(
        (a, b) =>
          prelimVotes[b] -
          prelimVotes[a]
      )
      .slice(
        0,
        MAIN_FINALISTS
      );


  showPrelimResult();
}


// =====================================================
// 予選結果
// =====================================================

function showPrelimResult() {

  prelimScreen.classList.add(
    "hidden"
  );

  prelimResultScreen.classList.remove(
    "hidden"
  );


  const container =
    document.getElementById(
      "prelim-finalists"
    );

  container.innerHTML = "";


  finalists.forEach(name => {

    const card =
      document.createElement("div");

    card.className =
      "mini-card";


    card.innerHTML = `

      <img
        src="${imagePath(name)}"
        alt="${name}"
      >

      <div class="mini-name">
        ${name}
      </div>

    `;


    container.appendChild(card);

  });
}


// =====================================================
// 本戦開始
// =====================================================

document
  .getElementById("main-start-button")
  .addEventListener(
    "click",
    startBattle
  );


function startBattle() {

  prelimResultScreen.classList.add(
    "hidden"
  );

  battleScreen.classList.remove(
    "hidden"
  );


  ratings = {};

  finalists.forEach(name => {

    ratings[name] = 1500;

  });


  battleHistory = [];

  battleCount = 0;

  totalBattles =
    Math.floor(
      finalists.length * BATTLE_ROUNDS / 2
    );


  nextBattle();
}


// =====================================================
// 次の対戦を作る
// =====================================================

function nextBattle() {

  if (
    battleCount >=
    totalBattles
  ) {

    finishBattle();

    return;
  }


  const sorted =
    [...finalists]
      .sort(
        (a, b) =>
          ratings[b] -
          ratings[a]
      );


  let left;
  let right;


  // できるだけ近いレート同士を対戦
  // ただし同じ組み合わせを避ける

  const possiblePairs = [];


  for (
    let i = 0;
    i < sorted.length;
    i++
  ) {

    for (
      let j = i + 1;
      j < sorted.length;
      j++
    ) {

      const a = sorted[i];

      const b = sorted[j];


      const already =
        battleHistory.some(
          pair =>
            (
              pair[0] === a &&
              pair[1] === b
            ) ||
            (
              pair[0] === b &&
              pair[1] === a
            )
        );


      if (!already) {

        possiblePairs.push([
          a,
          b
        ]);

      }
    }
  }


  // レート差が小さい順
  possiblePairs.sort(
    (a, b) => {

      const diffA =
        Math.abs(
          ratings[a[0]] -
          ratings[a[1]]
        );

      const diffB =
        Math.abs(
          ratings[b[0]] -
          ratings[b[1]]
        );

      return diffA - diffB;
    }
  );


  const pair =
    possiblePairs.length > 0
      ? possiblePairs[0]
      : [
          sorted[0],
          sorted[1]
        ];


  left = pair[0];

  right = pair[1];


  currentLeft = left;

  currentRight = right;


  showBattle(
    left,
    right
  );
}


// =====================================================
// 対戦表示
// =====================================================

function showBattle(
  left,
  right
) {

  const leftButton =
    document.getElementById(
      "left-person"
    );

  const rightButton =
    document.getElementById(
      "right-person"
    );


  leftButton.innerHTML = `

    <img
      src="${imagePath(left)}"
      alt="${left}"
    >

    <div class="battle-name">
      ${left}
    </div>

  `;


  rightButton.innerHTML = `

    <img
      src="${imagePath(right)}"
      alt="${right}"
    >

    <div class="battle-name">
      ${right}
    </div>

  `;


  document.getElementById(
    "battle-progress"
  ).textContent =
    `${battleCount + 1} / ${totalBattles}`;


  document.getElementById(
    "battle-progress-fill"
  ).style.width =
    `${((battleCount + 1) / totalBattles) * 100}%`;
}


// =====================================================
// 対戦結果
// =====================================================

document
  .getElementById("left-person")
  .addEventListener(
    "click",
    () => recordBattle(
      currentLeft,
      currentRight,
      1
    )
  );


document
  .getElementById("right-person")
  .addEventListener(
    "click",
    () => recordBattle(
      currentRight,
      currentLeft,
      1
    )
  );


document
  .getElementById("draw-button")
  .addEventListener(
    "click",
    () => recordBattle(
      currentLeft,
      currentRight,
      0.5
    )
  );


// =====================================================
// Elo計算
// =====================================================

function recordBattle(
  winner,
  loser,
  result
) {

  const ratingWinner =
    ratings[winner];

  const ratingLoser =
    ratings[loser];


  const expectedWinner =
    1 /
    (
      1 +
      Math.pow(
        10,
        (
          ratingLoser -
          ratingWinner
        ) / 400
      )
    );


  const expectedLoser =
    1 -
    expectedWinner;


  const K = 32;


  ratings[winner] +=
    K *
    (
      result -
      expectedWinner
    );


  ratings[loser] +=
    K *
    (
      (1 - result) -
      expectedLoser
    );


  battleHistory.push([
    winner,
    loser
  ]);


  battleCount++;


  nextBattle();
}


// =====================================================
// 本戦終了
// =====================================================

function finishBattle() {

  const ranking =
    [...finalists]
      .sort(
        (a, b) =>
          ratings[b] -
          ratings[a]
      );


  showResult(
    ranking
  );
}


// =====================================================
// 結果表示
// =====================================================

function showResult(
  ranking
) {

  battleScreen.classList.add(
    "hidden"
  );

  resultScreen.classList.remove(
    "hidden"
  );


  // TOP9
  const top9 =
    document.getElementById(
      "top9-grid"
    );

  top9.innerHTML = "";


  ranking
    .slice(0, TOP_COUNT)
    .forEach(
      (name, index) => {

        const card =
          document.createElement(
            "div"
          );

        card.className =
          "top9-card";


        card.innerHTML = `

          <div class="top9-rank">
            ${index + 1}位
          </div>

          <img
            src="${imagePath(name)}"
            alt="${name}"
          >

          <div class="top9-name">
            ${name}
          </div>

        `;


        top9.appendChild(card);

      }
    );


  // 全順位
  const rankingList =
    document.getElementById(
      "ranking-list"
    );

  rankingList.innerHTML = "";


  ranking.forEach(
    (name, index) => {

      const row =
        document.createElement(
          "div"
        );

      row.className =
        "ranking-row";


      row.innerHTML = `

        <div class="ranking-number">
          ${index + 1}
        </div>

        <img
          src="${imagePath(name)}"
          alt="${name}"
        >

        <div class="ranking-name">
          ${name}
        </div>

        <div class="ranking-score">
          ${Math.round(ratings[name])}
        </div>

      `;


      rankingList.appendChild(row);

    }
  );
}


// =====================================================
// リスタート
// =====================================================

document
  .getElementById("restart-button")
  .addEventListener(
    "click",
    () => {

      resultScreen.classList.add(
        "hidden"
      );

      startScreen.classList.remove(
        "hidden"
      );

    }
  );
