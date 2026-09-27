// ========================================
// 男性声優 好き顔TOP9
// ========================================


// ========================================
// 声優一覧
// ========================================

const VOICE_ACTORS = [

  "浦和希",
  "海渡翼",
  "鈴木崚汰",
  "市川蒼",
  "三上瑛士",
  "羽多野渉",
  "梶田大嗣",
  "坂田将吾",
  "大野智敬",
  "榊原優希",
  "長岡龍歩",
  "石橋陽彩",
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
  "千葉翔也",
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
  "田丸篤志",
  "中島ヨシキ",
  "住谷哲栄",
  "矢野奨吾",
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
  "鈴村健一",
  "森久保祥太郎",
  "吉野裕行",
  "谷山紀章",
  "鳥海浩輔",
  "遊佐浩二",
  "宮田幸季",
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
  "森川智之",
  "重松千晴",
  "今井文也",
  "上村祐翔",
  "保住有哉",
  "吉永拓斗",
  "市川太一",
  "三浦魁",
  "堀金蒼平",
  "草野太一",
  "小野元春",
  "高坂篤志",
  "入野自由",
  "汐谷文康",
  "浦尾岳大",
  "櫻井孝宏",
  "橋本晃太朗",
  "伊瀬結陸",
  "菊池勇成",
  "中澤まさとも",
  "比留間俊哉",
  "豊永利行",
  "川島零士",
  "永野由祐",
  "小林親弘",
  "沢城千春",
  "夏目響平",
  "熊谷俊輝"

];


// ========================================
// 設定
// ========================================

const PRELIM_GROUP_SIZE = 6;

const MAX_PRELIM_SELECT = 3;

const MAX_FINALISTS = 36;

const BATTLE_ROUNDS = 5;

const INITIAL_ELO = 1500;

const ELO_K = 32;


// ========================================
// 画像パス
// ========================================

function imagePath(name) {

  return `images/${name}.jpg`;

}


// ========================================
// DOM
// ========================================

const startScreen =
  document.getElementById(
    "start-screen"
  );

const prelimScreen =
  document.getElementById(
    "prelim-screen"
  );

const prelimResultScreen =
  document.getElementById(
    "prelim-result-screen"
  );

const battleScreen =
  document.getElementById(
    "battle-screen"
  );

const resultScreen =
  document.getElementById(
    "result-screen"
  );


const startButton =
  document.getElementById(
    "start-button"
  );

const prelimMembers =
  document.getElementById(
    "prelim-members"
  );

const prelimPage =
  document.getElementById(
    "prelim-page"
  );

const prelimProgressFill =
  document.getElementById(
    "prelim-progress-fill"
  );

const prelimNextButton =
  document.getElementById(
    "prelim-next-button"
  );

const prelimSkipButton =
  document.getElementById(
    "prelim-skip-button"
  );

const prelimFinalistCount =
  document.getElementById(
    "prelim-finalist-count"
  );

const prelimFinalistNumber =
  document.getElementById(
    "prelim-finalist-number"
  );

const startBattleButton =
  document.getElementById(
    "start-battle-button"
  );

const battleMembers =
  document.getElementById(
    "battle-members"
  );

const battlePage =
  document.getElementById(
    "battle-page"
  );

const battleProgressFill =
  document.getElementById(
    "battle-progress-fill"
  );

const drawButton =
  document.getElementById(
    "draw-button"
  );

const top9Members =
  document.getElementById(
    "top9-members"
  );

const rankingList =
  document.getElementById(
    "ranking-list"
  );

const restartButton =
  document.getElementById(
    "restart-button"
  );

const generateImageButton =
  document.getElementById(
    "generate-image-button"
  );

const shareImageButton =
  document.getElementById(
    "share-image-button"
  );

const xShareButton =
  document.getElementById(
    "x-share-button"
  );


// ========================================
// ゲーム状態
// ========================================

let prelimGroups = [];

let prelimCurrentPage = 0;

let prelimSelections = [];

let prelimVotes = {};

let finalists = [];

let battlePlayers = [];

let battleSchedule = [];

let battleResults = [];

let battleCurrentPage = 0;

let eloRatings = {};

let generatedTop9Blob = null;

let generatedTop9Url = null;


// ========================================
// 画面切り替え
// ========================================

function showScreen(screen) {

  document
    .querySelectorAll(".screen")
    .forEach(
      element => {

        element.classList.remove(
          "active"
        );

      }
    );


  screen.classList.add(
    "active"
  );


  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

}


// ========================================
// シャッフル
// ========================================

function shuffle(array) {

  const result =
    [...array];


  for (
    let i = result.length - 1;
    i > 0;
    i--
  ) {

    const j =
      Math.floor(
        Math.random() *
        (i + 1)
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


// ========================================
// 予選グループ作成
// ========================================

function createPrelimGroups() {

  const shuffled =
    shuffle(
      VOICE_ACTORS
    );


  prelimGroups = [];


  for (
    let i = 0;
    i < shuffled.length;
    i += PRELIM_GROUP_SIZE
  ) {

    prelimGroups.push(
      shuffled.slice(
        i,
        i + PRELIM_GROUP_SIZE
      )
    );

  }

}


// ========================================
// ゲーム開始
// ========================================

function startGame() {

  prelimVotes = {};

  finalists = [];

  battlePlayers = [];

  battleSchedule = [];

  battleResults = [];

  battleCurrentPage = 0;

  eloRatings = {};

  generatedTop9Blob = null;


  if (
    generatedTop9Url
  ) {

    URL.revokeObjectURL(
      generatedTop9Url
    );

    generatedTop9Url = null;

  }


  createPrelimGroups();

  prelimCurrentPage = 0;

  renderPrelim();

  showScreen(
    prelimScreen
  );

}


// ========================================
// 予選表示
// ========================================

function renderPrelim() {

  const group =
    prelimGroups[
      prelimCurrentPage
    ];


  prelimSelections = [];


  prelimMembers.innerHTML = "";


  group.forEach(
    name => {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "member-card";


      card.dataset.name =
        name;


      card.innerHTML = `

        <div class="member-image">

          <img
            src="${imagePath(name)}"
            alt="${name}"
            loading="lazy"
            decoding="async"
          >

        </div>

        <div class="member-name">
          ${name}
        </div>

        <div class="selected-mark">
          ✓
        </div>

      `;


      card.addEventListener(
        "click",
        () => {

          togglePrelimSelection(
            card,
            name
          );

        }
      );


      prelimMembers.appendChild(
        card
      );

    }
  );


  const total =
    prelimGroups.length;


  prelimPage.textContent =
    `${prelimCurrentPage + 1} / ${total}`;


  const progress =
    (
      (prelimCurrentPage + 1) /
      total
    ) * 100;


  prelimProgressFill.style.width =
    `${progress}%`;

}


// ========================================
// 予選選択
// ========================================

function togglePrelimSelection(
  card,
  name
) {

  const index =
    prelimSelections.indexOf(
      name
    );


  if (
    index !== -1
  ) {

    prelimSelections.splice(
      index,
      1
    );


    card.classList.remove(
      "selected"
    );


    return;

  }


  if (
    prelimSelections.length >=
    MAX_PRELIM_SELECT
  ) {

    return;

  }


  prelimSelections.push(
    name
  );


  card.classList.add(
    "selected"
  );

}


// ========================================
// 予選次へ
// ========================================

function nextPrelim() {

  prelimSelections.forEach(
    name => {

      prelimVotes[name] =
        (
          prelimVotes[name] ||
          0
        ) + 1;

    }
  );


  if (
    prelimCurrentPage <
    prelimGroups.length - 1
  ) {

    prelimCurrentPage++;

    renderPrelim();

    return;

  }


  finishPrelim();

}


// ========================================
// 予選終了
// ========================================

function finishPrelim() {

  const allCandidates =
    Object.keys(
      prelimVotes
    );


  const sorted =
    allCandidates.sort(
      (a, b) => {

        return (
          prelimVotes[b] -
          prelimVotes[a]
        );

      }
    );


  finalists =
    sorted.slice(
      0,
      MAX_FINALISTS
    );


  prelimFinalistCount.textContent =
    finalists.length;


  prelimFinalistNumber.textContent =
    finalists.length;


  showScreen(
    prelimResultScreen
  );

}


// ========================================
// 本戦開始
// ========================================

function startBattle() {

  if (
    finalists.length === 0
  ) {

    alert(
      "本戦に進出する声優がいません。もう一度遊んでください。"
    );

    return;

  }


  if (
    finalists.length === 1
  ) {

    battlePlayers =
      [...finalists];


    eloRatings = {};


    finalists.forEach(
      name => {

        eloRatings[name] =
          INITIAL_ELO;

      }
    );


    showResult();

    return;

  }


  battlePlayers =
    [...finalists];


  eloRatings = {};


  battlePlayers.forEach(
    name => {

      eloRatings[name] =
        INITIAL_ELO;

    }
  );


  battleResults = [];

  battleCurrentPage = 0;


  createBattleSchedule();

  renderBattle();

  showScreen(
    battleScreen
  );

}


// ========================================
// 本戦スケジュール
// ========================================

function createBattleSchedule() {

  battleSchedule = [];


  let players =
    [...battlePlayers];


  for (
    let round = 0;
    round < BATTLE_ROUNDS;
    round++
  ) {

    let roundPlayers =
      [...players];


    if (
      roundPlayers.length % 2 !== 0
    ) {

      roundPlayers.push(
        null
      );

    }


    const roundMatches = [];


    const half =
      roundPlayers.length / 2;


    for (
      let i = 0;
      i < half;
      i++
    ) {

      const playerA =
        roundPlayers[i];


      const playerB =
        roundPlayers[
          roundPlayers.length -
          1 -
          i
        ];


      if (
        playerA &&
        playerB
      ) {

        roundMatches.push([
          playerA,
          playerB
        ]);

      }

    }


    battleSchedule.push(
      roundMatches
    );


    if (
      players.length > 2
    ) {

      const fixed =
        players[0];


      const rotating =
        players.slice(1);


      rotating.unshift(
        rotating.pop()
      );


      players =
        [
          fixed,
          ...rotating
        ];

    }

  }

}


// ========================================
// 本戦表示
// ========================================

function renderBattle() {

  const currentMatch =
    getCurrentBattleMatch();


  if (!currentMatch) {

    showResult();

    return;

  }


  const [
    playerA,
    playerB
  ] =
    currentMatch;


  battleMembers.innerHTML = "";


  const cardA =
    createBattleCard(
      playerA
    );


  const cardB =
    createBattleCard(
      playerB
    );


  battleMembers.appendChild(
    cardA
  );


  battleMembers.appendChild(
    cardB
  );


  const totalMatches =
    getTotalBattleMatches();


  const currentNumber =
    battleCurrentPage + 1;


  battlePage.textContent =
    `${currentNumber} / ${totalMatches}`;


  const progress =
    (
      currentNumber /
      totalMatches
    ) * 100;


  battleProgressFill.style.width =
    `${progress}%`;

}


// ========================================
// 本戦カード
// ========================================

function createBattleCard(
  name
) {

  const card =
    document.createElement(
      "div"
    );


  card.className =
    "battle-card";


  card.innerHTML = `

    <div class="battle-image">

      <img
        src="${imagePath(name)}"
        alt="${name}"
        loading="lazy"
        decoding="async"
      >

    </div>

    <div class="battle-name">
      ${name}
    </div>

  `;


  card.addEventListener(
    "click",
    () => {

      handleBattleResult(
        name
      );

    }
  );


  return card;

}


// ========================================
// 現在の対戦
// ========================================

function getCurrentBattleMatch() {

  let count = 0;


  for (
    const round of battleSchedule
  ) {

    for (
      const match of round
    ) {

      if (
        count ===
        battleCurrentPage
      ) {

        return match;

      }


      count++;

    }

  }


  return null;

}


// ========================================
// 総試合数
// ========================================

function getTotalBattleMatches() {

  return battleSchedule.reduce(
    (
      total,
      round
    ) => {

      return (
        total +
        round.length
      );

    },
    0
  );

}


// ========================================
// 本戦結果
// ========================================

function handleBattleResult(
  winner
) {

  const match =
    getCurrentBattleMatch();


  if (!match) {
    return;
  }


  const [
    playerA,
    playerB
  ] =
    match;


  const loser =
    winner === playerA
      ? playerB
      : playerA;


  updateElo(
    winner,
    loser,
    1
  );


  battleResults.push({
    winner,
    loser,
    draw: false
  });


  nextBattleMatch();

}


// ========================================
// 引き分け
// ========================================

function handleDraw() {

  const match =
    getCurrentBattleMatch();


  if (!match) {
    return;
  }


  const [
    playerA,
    playerB
  ] =
    match;


  updateElo(
    playerA,
    playerB,
    0.5
  );


  battleResults.push({
    winner: null,
    loser: null,
    draw: true,
    players: [
      playerA,
      playerB
    ]
  });


  nextBattleMatch();

}


// ========================================
// Elo
// ========================================

function updateElo(
  playerA,
  playerB,
  scoreA
) {

  const ratingA =
    eloRatings[playerA];


  const ratingB =
    eloRatings[playerB];


  const expectedA =
    1 /
    (
      1 +
      Math.pow(
        10,
        (ratingB - ratingA) / 400
      )
    );


  const expectedB =
    1 -
    expectedA;


  const scoreB =
    1 -
    scoreA;


  eloRatings[playerA] =
    ratingA +
    ELO_K *
    (
      scoreA -
      expectedA
    );


  eloRatings[playerB] =
    ratingB +
    ELO_K *
    (
      scoreB -
      expectedB
    );

}


// ========================================
// 次の試合
// ========================================

function nextBattleMatch() {

  battleCurrentPage++;


  if (
    battleCurrentPage >=
    getTotalBattleMatches()
  ) {

    showResult();

    return;

  }


  renderBattle();

}


// ========================================
// ランキング
// ========================================

function getRanking() {

  return Object
    .keys(eloRatings)
    .map(
      name => ({

        name,

        score:
          eloRatings[name]

      })
    )
    .sort(
      (a, b) =>
        b.score -
        a.score
    );

}


// ========================================
// 結果
// ========================================

function showResult() {

  const ranking =
    getRanking();


  renderTop9(
    ranking
  );


  renderRanking(
    ranking
  );


  showScreen(
    resultScreen
  );

}


// ========================================
// TOP9表示
// ========================================

function renderTop9(
  ranking
) {

  top9Members.innerHTML = "";


  const top9 =
    ranking.slice(
      0,
      9
    );


  top9.forEach(
    (
      player,
      index
    ) => {

      const card =
        document.createElement(
          "div"
        );


      card.className =
        "top9-card";


      card.innerHTML = `

        <div class="top9-rank">
          ${index + 1}
        </div>

        <img
          src="${imagePath(player.name)}"
          alt="${player.name}"
          loading="lazy"
          decoding="async"
        >

        <div class="top9-name">
          ${player.name}
        </div>

      `;


      top9Members.appendChild(
        card
      );

    }
  );

}


// ========================================
// ランキング表示
// ========================================

function renderRanking(
  ranking
) {

  rankingList.innerHTML = "";


  ranking.forEach(
    (
      player,
      index
    ) => {

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

        <div class="ranking-name">
          ${player.name}
        </div>

        <div class="ranking-score">
          ${Math.round(player.score)}
        </div>

      `;


      rankingList.appendChild(
        row
      );

    }
  );

}


// ========================================
// 画像読み込み
// ========================================

function loadImage(
  src
) {

  return new Promise(
    (
      resolve,
      reject
    ) => {

      const img =
        new Image();


      img.onload =
        () => resolve(img);


      img.onerror =
        () => reject(
          new Error(
            `画像を読み込めませんでした: ${src}`
          )
        );


      img.src =
        src;

    }
  );

}


// ========================================
// Canvas用：王冠を描く
// ========================================

function drawCrown(
  ctx,
  centerX,
  centerY,
  rank
) {

  let mainColor;
  let darkColor;
  let jewelColor;


  if (rank === 1) {

    // 金
    mainColor =
      "#F6C945";

    darkColor =
      "#D99F18";

    jewelColor =
      "#FFF2A8";

  } else if (rank === 2) {

    // 銀
    mainColor =
      "#D8DCE3";

    darkColor =
      "#9EA5B1";

    jewelColor =
      "#FFFFFF";

  } else {

    // 銅
    mainColor =
      "#CD8B5A";

    darkColor =
      "#9E5D37";

    jewelColor =
      "#F2C0A0";

  }


  ctx.save();


  // 王冠本体
  ctx.beginPath();

  ctx.moveTo(
    centerX - 42,
    centerY + 25
  );

  ctx.lineTo(
    centerX - 34,
    centerY - 25
  );

  ctx.lineTo(
    centerX - 12,
    centerY - 5
  );

  ctx.lineTo(
    centerX,
    centerY - 32
  );

  ctx.lineTo(
    centerX + 12,
    centerY - 5
  );

  ctx.lineTo(
    centerX + 34,
    centerY - 25
  );

  ctx.lineTo(
    centerX + 42,
    centerY + 25
  );

  ctx.closePath();


  ctx.fillStyle =
    mainColor;

  ctx.fill();


  ctx.strokeStyle =
    darkColor;

  ctx.lineWidth =
    3;

  ctx.stroke();


  // 王冠の下部分
  ctx.beginPath();

  ctx.roundRect(
    centerX - 43,
    centerY + 17,
    86,
    17,
    5
  );

  ctx.fillStyle =
    darkColor;

  ctx.fill();


  // 左ジュエル
  ctx.beginPath();

  ctx.arc(
    centerX - 25,
    centerY + 9,
    5,
    0,
    Math.PI * 2
  );

  ctx.fillStyle =
    jewelColor;

  ctx.fill();


  // 中央ジュエル
  ctx.beginPath();

  ctx.arc(
    centerX,
    centerY + 3,
    6,
    0,
    Math.PI * 2
  );

  ctx.fill();


  // 右ジュエル
  ctx.beginPath();

  ctx.arc(
    centerX + 25,
    centerY + 9,
    5,
    0,
    Math.PI * 2
  );

  ctx.fill();


  ctx.restore();

}


// ========================================
// TOP9画像生成
// ========================================

async function generateTop9Image() {

  const ranking =
    getRanking();


  const top9 =
    ranking.slice(
      0,
      9
    );


  if (
    top9.length === 0
  ) {

    alert(
      "TOP9を作成できませんでした。"
    );

    return;

  }


  // ======================================
  // Canvas
  // ======================================

  const canvas =
    document.createElement(
      "canvas"
    );


  const size =
    1080;


  canvas.width =
    size;

  canvas.height =
    size;


  const ctx =
    canvas.getContext(
      "2d"
    );


  // ======================================
  // 背景
  // ======================================

  ctx.fillStyle =
    "#fff8fc";


  ctx.fillRect(
    0,
    0,
    size,
    size
  );


  // ======================================
  // タイトル
  // ======================================

  ctx.fillStyle =
    "#5a4050";


  ctx.textAlign =
    "center";


  ctx.textBaseline =
    "alphabetic";


  ctx.font =
    "bold 42px sans-serif";


  ctx.fillText(
    "男性声優 好き顔TOP9",
    size / 2,
    65
  );


  // ======================================
  // 3×3グリッド
  // ======================================

  const padding =
    45;


  const gap =
    18;


  const gridTop =
    100;


  const gridSize =
    size -
    padding * 2;


  const cellSize =
    (
      gridSize -
      gap * 2
    ) / 3;


  // ======================================
  // 9人描画
  // ======================================

  for (
    let index = 0;
    index < top9.length;
    index++
  ) {

    const player =
      top9[index];


    const rank =
      index + 1;


    const row =
      Math.floor(
        index / 3
      );


    const col =
      index % 3;


    const x =
      padding +
      col *
      (
        cellSize +
        gap
      );


    const y =
      gridTop +
      row *
      (
        cellSize +
        gap
      );


    // ------------------------------------
    // カード背景
    // ------------------------------------

    ctx.fillStyle =
      "#ffffff";


    ctx.beginPath();


    ctx.roundRect(
      x,
      y,
      cellSize,
      cellSize,
      20
    );


    ctx.fill();


    ctx.strokeStyle =
      "#ead6e2";


    ctx.lineWidth =
      3;


    ctx.stroke();


    // ------------------------------------
    // 写真
    // ------------------------------------

    try {

      const img =
        await loadImage(
          imagePath(
            player.name
          )
        );


      const imageAreaTop =
        y + 10;


      const imageAreaSize =
        cellSize - 20;


      const scale =
        Math.max(
          imageAreaSize /
            img.width,
          imageAreaSize /
            img.height
        );


      const drawWidth =
        img.width *
        scale;


      const drawHeight =
        img.height *
        scale;


      const drawX =
        x +
        (
          cellSize -
          drawWidth
        ) / 2;


      const drawY =
        imageAreaTop +
        (
          imageAreaSize -
          drawHeight
        ) / 2;


      ctx.save();


      ctx.beginPath();


      ctx.roundRect(
        x + 10,
        imageAreaTop,
        imageAreaSize,
        imageAreaSize,
        15
      );


      ctx.clip();


      ctx.drawImage(
        img,
        drawX,
        drawY,
        drawWidth,
        drawHeight
      );


      ctx.restore();

    } catch (
      error
    ) {

      // 画像がない場合
      ctx.fillStyle =
        "#f5eaf1";


      ctx.fillRect(
        x + 10,
        y + 10,
        cellSize - 20,
        cellSize - 20
      );

    }


    // ====================================
    // 王冠 / 順位
    // ====================================

    if (
      rank <= 3
    ) {

      // 1〜3位は王冠
      drawCrown(
        ctx,
        x + 52,
        y + 52,
        rank
      );

    } else {

      // 4〜9位は通常順位
      ctx.fillStyle =
        "#ffffff";


      ctx.beginPath();


      ctx.arc(
        x + 42,
        y + 42,
        27,
        0,
        Math.PI * 2
      );


      ctx.fill();


      ctx.fillStyle =
        "#8c5572";


      ctx.font =
        "bold 25px sans-serif";


      ctx.textAlign =
        "center";


      ctx.textBaseline =
        "middle";


      ctx.fillText(
        `${rank}`,
        x + 42,
        y + 42
      );

    }


    // ====================================
    // 名前
    // ====================================

    ctx.fillStyle =
      "#4b3542";


    ctx.textAlign =
      "center";


    ctx.textBaseline =
      "alphabetic";


    if (
      player.name.length > 10
    ) {

      ctx.font =
        "bold 19px sans-serif";

    } else {

      ctx.font =
        "bold 24px sans-serif";

    }


    ctx.fillText(
      player.name,
      x +
        cellSize / 2,
      y +
        cellSize -
        18
    );

  }


  // ======================================
  // PNG化
  // ======================================

  const blob =
    await new Promise(
      resolve => {

        canvas.toBlob(
          resolve,
          "image/png",
          1
        );

      }
    );


  if (!blob) {

    alert(
      "画像の生成に失敗しました。"
    );

    return;

  }


  generatedTop9Blob =
    blob;


  if (
    generatedTop9Url
  ) {

    URL.revokeObjectURL(
      generatedTop9Url
    );

  }


  generatedTop9Url =
    URL.createObjectURL(
      blob
    );


  // ======================================
  // シェアボタン表示
  // ======================================

  shareImageButton.style.display =
    "inline-block";


  // ======================================
  // プレビュー
  // ======================================

  showGeneratedImage(
    generatedTop9Url
  );

}


// ========================================
// 生成画像プレビュー
// ========================================

function showGeneratedImage(
  url
) {

  let preview =
    document.getElementById(
      "top9-image-preview"
    );


  if (!preview) {

    preview =
      document.createElement(
        "div"
      );


    preview.id =
      "top9-image-preview";


    const resultButtons =
      document.querySelector(
        ".result-buttons"
      );


    resultButtons.parentNode.insertBefore(
      preview,
      resultButtons
    );

  }


  preview.innerHTML = `

    <p
      style="
        text-align:center;
        margin:20px 0 10px;
        font-weight:bold;
      "
    >
      完成♡
    </p>

    <img
      src="${url}"
      alt="あなたの男性声優好き顔TOP9"
      style="
        display:block;
        width:100%;
        max-width:540px;
        margin:0 auto 20px;
        border-radius:16px;
        box-shadow:0 8px 25px rgba(0,0,0,0.12);
      "
    >

  `;

}


// ========================================
// 画像シェア
// ========================================

async function shareTop9Image() {

  if (
    !generatedTop9Blob
  ) {

    await generateTop9Image();

  }


  if (
    !generatedTop9Blob
  ) {

    return;

  }


  const file =
    new File(
      [
        generatedTop9Blob
      ],
      "男性声優好き顔TOP9.png",
      {
        type:
          "image/png"
      }
    );


  if (
    navigator.share &&
    navigator.canShare &&
    navigator.canShare({
      files: [file]
    })
  ) {

    try {

      await navigator.share({

        files: [
          file
        ],

        title:
          "男性声優 好き顔TOP9",

        text:
          "私の男性声優 好き顔TOP9♡"

      });


      return;

    } catch (
      error
    ) {

      if (
        error &&
        error.name ===
          "AbortError"
      ) {

        return;

      }

    }

  }


  downloadTop9Image();

}


// ========================================
// 画像保存
// ========================================

function downloadTop9Image() {

  if (
    !generatedTop9Url
  ) {

    alert(
      "先に「TOP9画像を作る」を押してください♡"
    );

    return;

  }


  const link =
    document.createElement(
      "a"
    );


  link.href =
    generatedTop9Url;


  link.download =
    "男性声優好き顔TOP9.png";


  document.body.appendChild(
    link
  );


  link.click();


  link.remove();

}


// ========================================
// Xシェア
// ========================================

function shareToX() {

  const ranking =
    getRanking();


  const top9 =
    ranking.slice(
      0,
      9
    );


  const names =
    top9
      .map(
        (
          player,
          index
        ) =>
          `${index + 1}位 ${player.name}`
      )
      .join("\n");


  const text =
    `男性声優 好き顔TOP9やってみた♡\n\n${names}\n\n#男性声優好き顔TOP9`;


  const siteUrl =
    window.location.href;


  const shareUrl =
    "https://twitter.com/intent/tweet" +
    "?text=" +
    encodeURIComponent(
      text
    ) +
    "&url=" +
    encodeURIComponent(
      siteUrl
    );


  window.open(
    shareUrl,
    "_blank",
    "noopener,noreferrer"
  );

}


// ========================================
// イベント
// ========================================

startButton.addEventListener(
  "click",
  startGame
);


prelimNextButton.addEventListener(
  "click",
  nextPrelim
);


prelimSkipButton.addEventListener(
  "click",
  () => {

    prelimSelections = [];

    nextPrelim();

  }
);


startBattleButton.addEventListener(
  "click",
  startBattle
);


drawButton.addEventListener(
  "click",
  handleDraw
);


restartButton.addEventListener(
  "click",
  startGame
);


generateImageButton.addEventListener(
  "click",
  generateTop9Image
);


shareImageButton.addEventListener(
  "click",
  shareTop9Image
);


xShareButton.addEventListener(
  "click",
  shareToX
);


// ========================================
// 初期画面
// ========================================

showScreen(
  startScreen
);
