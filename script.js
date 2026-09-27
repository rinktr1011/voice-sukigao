// ========================================
// 男性声優 好き顔TOP9
// ========================================

// ----------------------------------------
// 声優リスト（174名）
// ----------------------------------------

const VOICE_ACTORS = [
  "浦和希",
  "海渡翼",
  "鈴木崚汰",
  "市川蒼",
  "三上瑛士",
  "波多野翔",
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
  "宮崎雅也",
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
  "森川智之",
  "重松千晴",
  "ランズベリー・アーサー",
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
  "熊谷俊樹"
];


// ----------------------------------------
// 設定
// ----------------------------------------

const PRELIM_GROUP_SIZE = 6;
const MAX_PRELIM_SELECT = 3;
const MAX_FINALISTS = 36;
const BATTLE_ROUNDS = 5;
const INITIAL_ELO = 1500;
const ELO_K = 32;


// ----------------------------------------
// 画像パス
// ★ .jpg に変更済み
// ----------------------------------------

function imagePath(name) {
  return `images/${name}.jpg`;
}


// ----------------------------------------
// 状態
// ----------------------------------------

let prelimGroups = [];
let prelimCurrentPage = 0;

let prelimVotes = {};

let finalists = [];

let battleMatches = [];
let battleCurrentMatch = 0;

let playerStats = {};


// ----------------------------------------
// DOM
// ----------------------------------------

const screens = {
  start: document.getElementById("start-screen"),
  prelim: document.getElementById("prelim-screen"),
  prelimResult: document.getElementById("prelim-result-screen"),
  battle: document.getElementById("battle-screen"),
  result: document.getElementById("result-screen")
};


// ----------------------------------------
// 画面切り替え
// ----------------------------------------

function showScreen(name) {
  Object.values(screens).forEach(screen => {
    if (screen) {
      screen.classList.remove("active");
      screen.style.display = "none";
    }
  });

  const target = screens[name];

  if (target) {
    target.classList.add("active");
    target.style.display = "block";
  }

  window.scrollTo(0, 0);
}


// ----------------------------------------
// シャッフル
// ----------------------------------------

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}


// ----------------------------------------
// 予選グループ作成
// ----------------------------------------

function createPrelimGroups() {
  const shuffled = shuffle(VOICE_ACTORS);

  prelimGroups = [];

  for (let i = 0; i < shuffled.length; i += PRELIM_GROUP_SIZE) {
    prelimGroups.push(
      shuffled.slice(i, i + PRELIM_GROUP_SIZE)
    );
  }
}


// ----------------------------------------
// 予選開始
// ----------------------------------------

function startPrelim() {
  prelimVotes = {};

  VOICE_ACTORS.forEach(name => {
    prelimVotes[name] = 0;
  });

  prelimCurrentPage = 0;

  createPrelimGroups();

  renderPrelim();

  showScreen("prelim");
}


// ----------------------------------------
// 予選画面表示
// ----------------------------------------

function renderPrelim() {
  const membersContainer =
    document.getElementById("prelim-members");

  const pageElement =
    document.getElementById("prelim-page");

  const progressFill =
    document.getElementById("prelim-progress-fill");

  const group = prelimGroups[prelimCurrentPage];

  const totalPages = prelimGroups.length;

  pageElement.textContent =
    `${prelimCurrentPage + 1} / ${totalPages}`;

  const progress =
    ((prelimCurrentPage + 1) / totalPages) * 100;

  progressFill.style.width = `${progress}%`;

  membersContainer.innerHTML = "";

  group.forEach(name => {

    const card = document.createElement("div");

    card.className = "member-card";

    if (prelimVotes[name] > 0) {
      card.classList.add("selected");
    }

    card.innerHTML = `
      <img
        src="${imagePath(name)}"
        alt="${name}"
        onerror="this.style.display='none';"
      >

      <div class="member-name">
        ${name}
      </div>

      <div class="selected-mark">♡</div>
    `;

    card.addEventListener("click", () => {

      const currentlySelected =
        group.filter(member => prelimVotes[member] > 0).length;

      if (prelimVotes[name] > 0) {

        prelimVotes[name] = 0;

        card.classList.remove("selected");

      } else {

        if (currentlySelected >= MAX_PRELIM_SELECT) {
          alert("最大3人まで選べます♡");
          return;
        }

        prelimVotes[name] = 1;

        card.classList.add("selected");
      }

    });

    membersContainer.appendChild(card);
  });

  updatePrelimButtons();
}


// ----------------------------------------
// 予選ボタン状態
// ----------------------------------------

function updatePrelimButtons() {

  const nextButton =
    document.getElementById("prelim-next-button");

  const skipButton =
    document.getElementById("prelim-skip-button");

  if (prelimCurrentPage === prelimGroups.length - 1) {

    nextButton.textContent =
      "♡ 予選を終了する";

    skipButton.textContent =
      "選択せず終了";

  } else {

    nextButton.textContent =
      "♡ 決定して次へ";

    skipButton.textContent =
      "未選択で次へ";
  }
}


// ----------------------------------------
// 予選次へ
// ----------------------------------------

function nextPrelim() {

  if (prelimCurrentPage >= prelimGroups.length - 1) {

    finishPrelim();

    return;
  }

  prelimCurrentPage++;

  renderPrelim();
}


// ----------------------------------------
// 予選終了
// ----------------------------------------

function finishPrelim() {

  let selected = VOICE_ACTORS.filter(
    name => prelimVotes[name] > 0
  );

  // 36人を超えた場合は得票順
  if (selected.length > MAX_FINALISTS) {

    selected.sort((a, b) => {

      if (prelimVotes[b] !== prelimVotes[a]) {
        return prelimVotes[b] - prelimVotes[a];
      }

      return Math.random() - 0.5;
    });

    selected =
      selected.slice(0, MAX_FINALISTS);
  }

  finalists = shuffle(selected);

  document.getElementById(
    "prelim-finalist-count"
  ).textContent = finalists.length;

  document.getElementById(
    "prelim-finalist-number"
  ).textContent = finalists.length;

  showScreen("prelimResult");
}


// ----------------------------------------
// 本戦用プレイヤー初期化
// ----------------------------------------

function initializePlayerStats() {

  playerStats = {};

  finalists.forEach(name => {

    playerStats[name] = {
      name: name,
      elo: INITIAL_ELO,
      wins: 0,
      losses: 0,
      draws: 0,
      matches: 0
    };

  });
}


// ----------------------------------------
// ラウンドロビン形式の組み合わせ作成
// ----------------------------------------

function createRoundRobinMatches(players) {

  let list = [...players];

  // 奇数ならBYEを追加
  if (list.length % 2 === 1) {
    list.push(null);
  }

  const n = list.length;

  const rounds = [];

  // 円形方式
  for (let round = 0; round < n - 1; round++) {

    const matches = [];

    for (let i = 0; i < n / 2; i++) {

      const a = list[i];
      const b = list[n - 1 - i];

      if (a && b) {
        matches.push([a, b]);
      }
    }

    rounds.push(matches);

    // 先頭を固定して残りを回転
    const fixed = list[0];
    const rotating = list.slice(1);

    rotating.unshift(
      rotating.pop()
    );

    list = [fixed, ...rotating];
  }

  return rounds;
}


// ----------------------------------------
// 本戦開始
// ----------------------------------------

function startBattle() {

  if (finalists.length === 0) {

    alert(
      "本戦に進む声優がいません。\n" +
      "少なくとも1人選んでください♡"
    );

    showScreen("prelim");

    return;
  }

  initializePlayerStats();

  const rounds =
    createRoundRobinMatches(finalists);

  battleMatches = [];

  // 5ラウンド分だけ使用
  for (
    let round = 0;
    round < Math.min(BATTLE_ROUNDS, rounds.length);
    round++
  ) {

    rounds[round].forEach(pair => {

      battleMatches.push({
        round: round + 1,
        player1: pair[0],
        player2: pair[1]
      });

    });
  }

  battleCurrentMatch = 0;

  renderBattle();

  showScreen("battle");
}


// ----------------------------------------
// Elo計算
// ----------------------------------------

function expectedScore(ratingA, ratingB) {

  return 1 /
    (
      1 +
      Math.pow(
        10,
        (ratingB - ratingA) / 400
      )
    );
}


function updateElo(nameA, nameB, resultA) {

  const playerA = playerStats[nameA];
  const playerB = playerStats[nameB];

  const expectedA =
    expectedScore(
      playerA.elo,
      playerB.elo
    );

  const expectedB =
    expectedScore(
      playerB.elo,
      playerA.elo
    );

  const resultB =
    1 - resultA;

  playerA.elo +=
    ELO_K * (resultA - expectedA);

  playerB.elo +=
    ELO_K * (resultB - expectedB);

  playerA.elo =
    Math.round(playerA.elo);

  playerB.elo =
    Math.round(playerB.elo);
}


// ----------------------------------------
// 本戦画面表示
// ----------------------------------------

function renderBattle() {

  const match =
    battleMatches[battleCurrentMatch];

  if (!match) {

    finishBattle();

    return;
  }

  const pageElement =
    document.getElementById("battle-page");

  const progressFill =
    document.getElementById("battle-progress-fill");

  const total =
    battleMatches.length;

  pageElement.textContent =
    `${battleCurrentMatch + 1} / ${total}`;

  const progress =
    ((battleCurrentMatch + 1) / total) * 100;

  progressFill.style.width =
    `${progress}%`;

  const container =
    document.getElementById("battle-members");

  container.innerHTML = "";

  const card1 =
    createBattleCard(match.player1);

  const card2 =
    createBattleCard(match.player2);

  container.appendChild(card1);
  container.appendChild(card2);
}


// ----------------------------------------
// 本戦カード
// ----------------------------------------

function createBattleCard(name) {

  const card =
    document.createElement("div");

  card.className = "battle-card";

  card.innerHTML = `
    <img
      src="${imagePath(name)}"
      alt="${name}"
      onerror="this.style.display='none';"
    >

    <div class="battle-name">
      ${name}
    </div>
  `;

  card.addEventListener("click", () => {

    selectBattleWinner(name);

  });

  return card;
}


// ----------------------------------------
// 勝者選択
// ----------------------------------------

function selectBattleWinner(winner) {

  const match =
    battleMatches[battleCurrentMatch];

  const loser =
    winner === match.player1
      ? match.player2
      : match.player1;

  const winnerStats =
    playerStats[winner];

  const loserStats =
    playerStats[loser];

  winnerStats.wins++;
  loserStats.losses++;

  winnerStats.matches++;
  loserStats.matches++;

  updateElo(
    winner,
    loser,
    1
  );

  nextBattleMatch();
}


// ----------------------------------------
// 引き分け
// ----------------------------------------

function drawBattle() {

  const match =
    battleMatches[battleCurrentMatch];

  const player1 =
    playerStats[match.player1];

  const player2 =
    playerStats[match.player2];

  player1.draws++;
  player2.draws++;

  player1.matches++;
  player2.matches++;

  // 引き分けなのでEloは更新しない

  nextBattleMatch();
}


// ----------------------------------------
// 次の本戦
// ----------------------------------------

function nextBattleMatch() {

  battleCurrentMatch++;

  if (
    battleCurrentMatch >=
    battleMatches.length
  ) {

    finishBattle();

    return;
  }

  renderBattle();
}


// ----------------------------------------
// 本戦終了
// ----------------------------------------

function finishBattle() {

  showResult();
}


// ----------------------------------------
// 最終順位
// ----------------------------------------

function getRanking() {

  return Object.values(playerStats)
    .sort((a, b) => {

      // まずElo
      if (b.elo !== a.elo) {
        return b.elo - a.elo;
      }

      // 同点なら勝利数
      if (b.wins !== a.wins) {
        return b.wins - a.wins;
      }

      // それでも同点なら予選得票
      if (
        prelimVotes[b.name] !==
        prelimVotes[a.name]
      ) {
        return (
          prelimVotes[b.name] -
          prelimVotes[a.name]
        );
      }

      return a.name.localeCompare(b.name);
    });
}


// ----------------------------------------
// TOP9表示
// ----------------------------------------

function showResult() {

  const ranking =
    getRanking();

  const top9 =
    ranking.slice(
      0,
      Math.min(9, ranking.length)
    );

  const top9Container =
    document.getElementById("top9-members");

  const rankingContainer =
    document.getElementById("ranking-list");

  top9Container.innerHTML = "";
  rankingContainer.innerHTML = "";


  // --------------------------------------
  // TOP9
  // --------------------------------------

  top9.forEach((player, index) => {

    const rank =
      index + 1;

    const card =
      document.createElement("div");

    card.className =
      "top9-card";

    let badge = "";

    if (rank === 1) {
      badge = "♛ 1";
    } else if (rank === 2) {
      badge = "♕ 2";
    } else if (rank === 3) {
      badge = "♕ 3";
    } else {
      badge = rank;
    }

    card.innerHTML = `
      <div class="top9-rank
