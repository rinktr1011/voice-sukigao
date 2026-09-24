// ========================================
// 男性声優 好き顔9選
// 150人 → 50人 → 20人 → 9人 → TOP9
// ========================================

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


// ========================================
// 設定
// ========================================

const PRELIM_GROUP_SIZE = 15;
const PRELIM_SELECT = 5;

const MAIN_GROUP_SIZE = 10;
const MAIN_SELECT = 4;

const FINAL_SELECT = 9;


// ========================================
// HTML要素
// ========================================

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const resultScreen = document.getElementById("result-screen");

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");

const phaseName = document.getElementById("phase-name");
const progress = document.getElementById("progress");
const progressFill = document.getElementById("progress-fill");

const choices = document.getElementById("choices");
const resultGrid = document.getElementById("result-grid");


// ========================================
// 状態
// ========================================

let prelimGroups = [];
let mainGroups = [];

let prelimWinners = [];
let mainWinners = [];

let finalCandidates = [];
let finalSelected = [];

let ranking = [];

let currentGroupIndex = 0;
let selectedInCurrentGroup = [];

let rankingIndex = 0;


// ========================================
// 配列をシャッフル
// ========================================

function shuffle(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}


// ========================================
// グループ作成
// ========================================

function makeGroups(array, groupSize) {
  const shuffled = shuffle(array);
  const groups = [];

  for (let i = 0; i < shuffled.length; i += groupSize) {
    groups.push(shuffled.slice(i, i + groupSize));
  }

  return groups;
}


// ========================================
// ゲーム開始
// ========================================

function startGame() {

  // 150人を15人×10グループ
  prelimGroups = makeGroups(
    voiceActors,
    PRELIM_GROUP_SIZE
  );

  prelimWinners = [];

  mainWinners = [];

  finalCandidates = [];

  finalSelected = [];

  ranking = [];

  currentGroupIndex = 0;

  selectedInCurrentGroup = [];

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");

  startPrelim();
}


// ========================================
// 予選開始
// ========================================

function startPrelim() {

  phaseName.textContent = "予選";

  currentGroupIndex = 0;

  showSelectionGroup(
    prelimGroups[currentGroupIndex],
    PRELIM_SELECT,
    prelimGroups.length,
    "予選"
  );
}


// ========================================
// 本選開始
// ========================================

function startMain() {

  // 50人を10人×5グループ
  mainGroups = makeGroups(
    prelimWinners,
    MAIN_GROUP_SIZE
  );

  currentGroupIndex = 0;

  phaseName.textContent = "本選";

  showSelectionGroup(
    mainGroups[currentGroupIndex],
    MAIN_SELECT,
    mainGroups.length,
    "本選"
  );
}


// ========================================
// 選択画面
// ========================================

function showSelectionGroup(
  group,
  selectCount,
  totalGroups,
  phase
) {

  selectedInCurrentGroup = [];

  choices.innerHTML = "";

  progress.textContent =
    `${currentGroupIndex + 1} / ${totalGroups}`;

  progressFill.style.width =
    `${((currentGroupIndex + 1) / totalGroups) * 100}%`;

  // タイトル変更
  const heading = document.querySelector("#game-screen h2");

  heading.textContent =
    `この中から好きな顔を${selectCount}人選んでね`;

  // カード表示
  group.forEach((name, index) => {

    const card = document.createElement("button");

    card.className = "choice";

    const imageNumber =
      voiceActors.indexOf(name) + 1;

    const imagePath =
      `images/${String(imageNumber).padStart(3, "0")}.jpg`;

    card.innerHTML = `
      <img
        src="${imagePath}"
        alt="${name}"
        onerror="this.style.background='#eeeeee'; this.style.minHeight='180px';"
      >
      <div class="choice-name">${name}</div>
    `;

    card.addEventListener("click", () => {

      if (
        selectedInCurrentGroup.includes(name)
      ) {

        // 選択解除
        selectedInCurrentGroup =
          selectedInCurrentGroup.filter(
            item => item !== name
          );

        card.classList.remove("selected");

      } else {

        // 最大人数チェック
        if (
          selectedInCurrentGroup.length >= selectCount
        ) {
          return;
        }

        selectedInCurrentGroup.push(name);

        card.classList.add("selected");
      }

      updateNextButton(selectCount);
    });

    choices.appendChild(card);
  });


  // 次へボタン
  const nextButton =
    document.createElement("button");

  nextButton.id = "next-selection-button";

  nextButton.className = "main-button";

  nextButton.style.marginTop = "25px";

  nextButton.textContent =
    `次へ（0 / ${selectCount}）`;

  nextButton.disabled = true;

  nextButton.style.opacity = "0.45";

  nextButton.addEventListener(
    "click",
    () => finishGroup(selectCount)
  );

  choices.parentElement.appendChild(nextButton);
}


// ========================================
// 次へボタン更新
// ========================================

function updateNextButton(selectCount) {

  const button =
    document.getElementById(
      "next-selection-button"
    );

  if (!button) return;

  button.textContent =
    `次へ（${selectedInCurrentGroup.length} / ${selectCount}）`;

  if (
    selectedInCurrentGroup.length === selectCount
  ) {

    button.disabled = false;

    button.style.opacity = "1";

  } else {

    button.disabled = true;

    button.style.opacity = "0.45";
  }
}


// ========================================
// グループ終了
// ========================================

function finishGroup(selectCount) {

  if (
    selectedInCurrentGroup.length !== selectCount
  ) {
    return;
  }

  // 現在の選択結果を保存
  if (phaseName.textContent === "予選") {

    prelimWinners.push(
      ...selectedInCurrentGroup
    );

  } else if (
    phaseName.textContent === "本選"
  ) {

    mainWinners.push(
      ...selectedInCurrentGroup
    );
  }


  // ボタン削除
  const nextButton =
    document.getElementById(
      "next-selection-button"
    );

  if (nextButton) {
    nextButton.remove();
  }


  // 次のグループ
  currentGroupIndex++;


  // 予選
  if (
    phaseName.textContent === "予選"
  ) {

    if (
      currentGroupIndex <
      prelimGroups.length
    ) {

      showSelectionGroup(
        prelimGroups[currentGroupIndex],
        PRELIM_SELECT,
        prelimGroups.length,
        "予選"
      );

    } else {

      // 予選終了
      startMain();
    }

    return;
  }


  // 本選
  if (
    phaseName.textContent === "本選"
  ) {

    if (
      currentGroupIndex <
      mainGroups.length
    ) {

      showSelectionGroup(
        mainGroups[currentGroupIndex],
        MAIN_SELECT,
        mainGroups.length,
        "本選"
      );

    } else {

      // 本選終了
      startFinalSelection();
    }
  }
}


// ========================================
// 決勝：20人から9人選択
// ========================================

function startFinalSelection() {

  phaseName.textContent = "決勝";

  finalCandidates =
    shuffle(mainWinners);

  finalSelected = [];

  choices.innerHTML = "";

  progress.textContent = "1 / 1";

  progressFill.style.width = "100%";

  const heading =
    document.querySelector("#game-screen h2");

  heading.textContent =
    "この中から好きな顔を9人選んでね";


  finalCandidates.forEach(name => {

    const card =
      document.createElement("button");

    card.className = "choice";

    const imageNumber =
      voiceActors.indexOf(name) + 1;

    const imagePath =
      `images/${String(imageNumber).padStart(3, "0")}.jpg`;

    card.innerHTML = `
      <img
        src="${imagePath}"
        alt="${name}"
        onerror="this.style.background='#eeeeee'; this.style.minHeight='180px';"
      >
      <div class="choice-name">${name}</div>
    `;


    card.addEventListener("click", () => {

      if (
        finalSelected.includes(name)
      ) {

        finalSelected =
          finalSelected.filter(
            item => item !== name
          );

        card.classList.remove("selected");

      } else {

        if (
          finalSelected.length >= FINAL_SELECT
        ) {
          return;
        }

        finalSelected.push(name);

        card.classList.add("selected");
      }

      updateFinalButton();
    });


    choices.appendChild(card);
  });


  const nextButton =
    document.createElement("button");

  nextButton.id =
    "final-selection-button";

  nextButton.className =
    "main-button";

  nextButton.style.marginTop = "25px";

  nextButton.textContent =
    "次へ（0 / 9）";

  nextButton.disabled = true;

  nextButton.style.opacity = "0.45";

  nextButton.addEventListener(
    "click",
    startRanking
  );

  choices.parentElement.appendChild(
    nextButton
  );
}


// ========================================
// 決勝ボタン
// ========================================

function updateFinalButton() {

  const button =
    document.getElementById(
      "final-selection-button"
    );

  if (!button) return;

  button.textContent =
    `次へ（${finalSelected.length} / 9）`;


  if (
    finalSelected.length === 9
  ) {

    button.disabled = false;

    button.style.opacity = "1";

  } else {

    button.disabled = true;

    button.style.opacity = "0.45";
  }
}


// ========================================
// TOP9の順位決め
// ========================================

function startRanking() {

  const button =
    document.getElementById(
      "final-selection-button"
    );

  if (button) {
    button.remove();
  }

  ranking = [];

  rankingIndex = 0;

  phaseName.textContent = "最終決定";

  showRankingChoice();
}


// ========================================
// 順位選択
// ========================================

function showRankingChoice() {

  choices.innerHTML = "";

  progress.textContent =
    `${rankingIndex + 1} / 9`;

  progressFill.style.width =
    `${((rankingIndex + 1) / 9) * 100}%`;


  const heading =
    document.querySelector("#game-screen h2");

  heading.textContent =
    `${rankingIndex + 1}位にしたい顔を選んでね`;


  // まだ順位が決まっていない9人
  const remaining =
    finalSelected.filter(
      name => !ranking.includes(name)
    );


  remaining.forEach(name => {

    const card =
      document.createElement("button");

    card.className = "choice";


    const imageNumber =
      voiceActors.indexOf(name) + 1;

    const imagePath =
      `images/${String(imageNumber).padStart(3, "0")}.jpg`;


    card.innerHTML = `
      <img
        src="${imagePath}"
        alt="${name}"
        onerror="this.style.background='#eeeeee'; this.style.minHeight='180px';"
      >
      <div class="choice-name">${name}</div>
    `;


    card.addEventListener(
      "click",
      () => selectRanking(name)
    );


    choices.appendChild(card);
  });
}


// ========================================
// 順位決定
// ========================================

function selectRanking(name) {

  ranking.push(name);

  rankingIndex++;


  if (rankingIndex >= 9) {

    showResult();

  } else {

    showRankingChoice();
  }
}


// ========================================
// 結果表示
// ========================================

function showResult() {

  gameScreen.classList.add("hidden");

  resultScreen.classList.remove("hidden");

  resultGrid.innerHTML = "";


  ranking.forEach((name, index) => {

    const card =
      document.createElement("div");

    card.className =
      "result-card";


    const imageNumber =
      voiceActors.indexOf(name) + 1;

    const imagePath =
      `images/${String(imageNumber).padStart(3, "0")}.jpg`;


    card.innerHTML = `
      <div class="rank">
        ${index + 1}位
      </div>

      <img
        src="${imagePath}"
        alt="${name}"
        onerror="this.style.background='#eeeeee'; this.style.minHeight='180px';"
      >

      <div class="result-name">
        ${name}
      </div>
    `;


    resultGrid.appendChild(card);
  });
}


// ========================================
// 最初から
// ========================================

function restartGame() {

  resultScreen.classList.add("hidden");

  gameScreen.classList.remove("hidden");

  startGame();
}


// ========================================
// ボタンイベント
// ========================================

startButton.addEventListener(
  "click",
  startGame
);

restartButton.addEventListener(
  "click",
  restartGame
);
