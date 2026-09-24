document.addEventListener("DOMContentLoaded", function () {

  // =========================================================
  // 男性声優リスト
  // 180人・重複なし
  // =========================================================

  const voiceActors = [

    // =====================================================
    // 若手・人気声優
    // =====================================================

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
    "浦田わたる",
    "田丸篤志",
    "仲田博喜",
    "中島ヨシキ",
    "住谷哲栄",
    "矢野奨吾",
    "バトリ勝悟",
    "山口智広",
    "帆世雄一",

    // =====================================================
    // 人気・中堅声優
    // =====================================================

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
    "森川智之",

    // =====================================================
    // 若手・Kiramune・2.5次元・ボイコミ系
    // =====================================================

    "重松千晴",
    "ランズベリー・アーサー",
    "荒牧慶彦",
    "北村諒",
    "今井文也",
    "廣瀬大介",
    "上村祐翔",
    "保住有哉",
    "吉永拓斗",
    "市川太一",
    "小野元春",
    "草野太一",
    "堀金蒼平",
    "佐藤瑠雅",
    "山﨑晶吾",
    "松田凌",
    "北川尚弥",
    "田中涼星",
    "橋本祥平",
    "植田圭輔",
    "糸川耀士郎",
    "岡宮来夢",
    "立花裕大",
    "木津つばさ",
    "笹森裕貴",
    "田村升吾",
    "高野洸",
    "佐藤流司",
    "有澤樟太郎",
    "阿久津仁愛"

  ];


  // =========================================================
  // 人数チェック
  // =========================================================

  console.log(
    "男性声優リスト:",
    voiceActors.length,
    "人"
  );

  const duplicateActors =
    voiceActors.filter(
      function (name, index) {
        return voiceActors.indexOf(name) !== index;
      }
    );

  if (duplicateActors.length > 0) {

    console.error(
      "重複しています:",
      duplicateActors
    );

  }


  // =========================================================
  // 設定
  // =========================================================

  const PRELIM_GROUP_SIZE = 6;

  const PRELIM_GROUPS = 30;

  const MAX_PRELIM_SELECT = 3;

  const FINALISTS_COUNT = 36;

  const BATTLE_ROUNDS = 5;

  const INITIAL_RATING = 1500;

  const ELO_K = 32;

  const TOP_COUNT = 9;


  // =========================================================
  // 画面
  // =========================================================

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


  // =========================================================
  // ボタン
  // =========================================================

  const startButton =
    document.getElementById("start-button");

  const prelimNextButton =
    document.getElementById("prelim-next-button");

  const prelimSkipButton =
    document.getElementById("prelim-skip-button");

  const startBattleButton =
    document.getElementById("start-battle-button");

  const drawButton =
    document.getElementById("draw-button");

  const restartButton =
    document.getElementById("restart-button");


  // =========================================================
  // 表示エリア
  // =========================================================

  const prelimMembers =
    document.getElementById("prelim-members");

  const prelimProgress =
    document.getElementById("prelim-progress");

  const prelimProgressFill =
    document.getElementById("prelim-progress-fill");

  const battleMembers =
    document.getElementById("battle-members");

  const battleProgress =
    document.getElementById("battle-progress");

  const battleProgressFill =
    document.getElementById("battle-progress-fill");

  const top9Members =
    document.getElementById("top9-members");

  const rankingList =
    document.getElementById("ranking-list");


  // =========================================================
  // データ
  // =========================================================

  let shuffledActors = [];

  let prelimIndex = 0;

  let currentSelected = new Set();

  let prelimVotes = {};

  let finalists = [];

  let battlePairs = [];

  let battleIndex = 0;

  let ratings = {};


  // =========================================================
  // 画面切り替え
  // =========================================================

  function showScreen(screen) {

    document
      .querySelectorAll(".screen")
      .forEach(
        function (element) {

          element.classList.remove("active");

          /*
           * CSSだけに頼らず、
           * JSでもdisplayを直接指定する。
           * Safariのキャッシュ等で表示が崩れるのを防ぐ。
           */

          element.style.display = "none";

        }
      );


    if (!screen) {
      return;
    }


    if (
      screen.id === "start-screen"
    ) {

      screen.style.display = "flex";

    } else {

      screen.style.display = "block";

    }


    screen.classList.add("active");

    window.scrollTo(0, 0);
  }


  // =========================================================
  // シャッフル
  // =========================================================

  function shuffle(array) {

    for (
      let i = array.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random() * (i + 1)
        );

      [
        array[i],
        array[j]
      ] = [
        array[j],
        array[i]
      ];

    }

    return array;
  }


  // =========================================================
  // ゲーム初期化
  // =========================================================

  function initializeGame() {

    shuffledActors =
      [...voiceActors];

    shuffle(shuffledActors);


    prelimIndex = 0;

    currentSelected =
      new Set();


    prelimVotes = {};


    voiceActors.forEach(
      function (name) {

        prelimVotes[name] = 0;

      }
    );


    finalists = [];

    battlePairs = [];

    battleIndex = 0;

    ratings = {};


    // プログレスバーをリセット

    if (prelimProgressFill) {

      prelimProgressFill.style.width =
        "0%";

    }

    if (battleProgressFill) {

      battleProgressFill.style.width =
        "0%";

    }


    showScreen(startScreen);
  }


  // =========================================================
  // 予選開始
  // =========================================================

  function startPrelim() {

    prelimIndex = 0;

    currentSelected =
      new Set();


    if (prelimProgressFill) {

      prelimProgressFill.style.width =
        "0%";

    }


    showScreen(prelimScreen);

    renderPrelim();
  }


  // =========================================================
  // 予選表示
  // =========================================================

  function renderPrelim() {

    prelimMembers.innerHTML = "";

    currentSelected =
      new Set();


    const start =
      prelimIndex *
      PRELIM_GROUP_SIZE;

    const end =
      start +
      PRELIM_GROUP_SIZE;


    const members =
      shuffledActors.slice(
        start,
        end
      );


    // -----------------------------------------
    // 進行状況
    // -----------------------------------------

    prelimProgress.textContent =
      `${prelimIndex + 1} / ${PRELIM_GROUPS}`;


    if (prelimProgressFill) {

      prelimProgressFill.style.width =
        `${
          (
            (prelimIndex + 1) /
            PRELIM_GROUPS
          ) * 100
        }%`;

    }


    // -----------------------------------------
    // 6人表示
    // -----------------------------------------

    members.forEach(
      function (name) {

        const card =
          document.createElement("button");

        card.type = "button";

        card.className =
          "member-card";

        card.dataset.name =
          name;


        // 写真

        const image =
          document.createElement("img");


        const imageNumber =
          String(
            voiceActors.indexOf(name) + 1
          ).padStart(
            3,
            "0"
          );


        image.src =
          `images/${imageNumber}.jpg`;

        image.alt =
          name;


        // 名前

        const nameElement =
          document.createElement("div");

        nameElement.className =
          "member-name";

        nameElement.textContent =
          name;


        // 選択マーク

        const check =
          document.createElement("div");

        check.className =
          "selected-mark";

        check.textContent =
          "♡";


        card.appendChild(image);

        card.appendChild(nameElement);

        card.appendChild(check);


        // タップ

        card.addEventListener(
          "click",
          function () {

            togglePrelimSelection(
              name,
              card
            );

          }
        );


        prelimMembers.appendChild(card);

      }
    );
  }


  // =========================================================
  // 予選 選択・解除
  // =========================================================

  function togglePrelimSelection(
    name,
    card
  ) {

    // 選択済み → 解除

    if (
      currentSelected.has(name)
    ) {

      currentSelected.delete(name);

      card.classList.remove(
        "selected"
      );

      return;
    }


    // 最大3人

    if (
      currentSelected.size >=
      MAX_PRELIM_SELECT
    ) {

      return;
    }


    currentSelected.add(name);

    card.classList.add(
      "selected"
    );
  }


  // =========================================================
  // 予選 次へ
  // =========================================================

  function goToNextPrelim() {

    // 選択した人に1票

    currentSelected.forEach(
      function (name) {

        prelimVotes[name]++;

      }
    );


    prelimIndex++;


    // 全30画面終了

    if (
      prelimIndex >=
      PRELIM_GROUPS
    ) {

      finishPrelim();

      return;
    }


    renderPrelim();
  }


  // =========================================================
  // 予選終了
  // =========================================================

  function finishPrelim() {

    /*
     * 同票の場合はランダム。
     * 先にシャッフルしてから
     * 票数順に並べる。
     */

    const candidates =
      shuffle(
        [...voiceActors]
      );


    candidates.sort(
      function (a, b) {

        return (
          prelimVotes[b] -
          prelimVotes[a]
        );

      }
    );


    // 上位36人

    finalists =
      candidates.slice(
        0,
        FINALISTS_COUNT
      );


    // 本戦レーティング

    finalists.forEach(
      function (name) {

        ratings[name] =
          INITIAL_RATING;

      }
    );


    showScreen(
      prelimResultScreen
    );
  }


  // =========================================================
  // 本戦開始
  // =========================================================

  function startBattle() {

    battleIndex = 0;


    battlePairs =
      createBattlePairs(
        finalists,
        BATTLE_ROUNDS
      );


    if (battleProgressFill) {

      battleProgressFill.style.width =
        "0%";

    }


    showScreen(
      battleScreen
    );


    renderBattle();
  }


  // =========================================================
  // 本戦ペア作成
  // =========================================================

  function createBattlePairs(
    players,
    rounds
  ) {

    const list =
      [...players];


    const allRounds = [];


    /*
     * 36人の総当たり方式。
     * 全35ラウンドを作ったあと、
     * その中からランダムに5ラウンドを使用。
     *
     * 36人 × 5試合 ÷ 2 = 90試合
     */

    for (
      let round = 0;
      round < players.length - 1;
      round++
    ) {

      const pairs = [];


      for (
        let i = 0;
        i < players.length / 2;
        i++
      ) {

        const a =
          list[i];

        const b =
          list[
            players.length - 1 - i
          ];


        if (a && b) {

          pairs.push([
            a,
            b
          ]);

        }
      }


      allRounds.push(pairs);


      // 円形にローテーション

      const fixed =
        list[0];

      const rest =
        list.slice(1);


      rest.unshift(
        rest.pop()
      );


      list.splice(
        0,
        list.length,
        fixed,
        ...rest
      );
    }


    // ラウンドをシャッフル

    shuffle(allRounds);


    // 5ラウンド使用

    const selectedRounds =
      allRounds.slice(
        0,
        rounds
      );


    return selectedRounds.flat();
  }


  // =========================================================
  // 本戦表示
  // =========================================================

  function renderBattle() {

    battleMembers.innerHTML = "";


    // 全試合終了

    if (
      battleIndex >=
      battlePairs.length
    ) {

      finishBattle();

      return;
    }


    const pair =
      battlePairs[battleIndex];


    const leftName =
      pair[0];

    const rightName =
      pair[1];


    // -----------------------------------------
    // 進行状況
    // -----------------------------------------

    battleProgress.textContent =
      `${battleIndex + 1} / ${battlePairs.length}`;


    if (battleProgressFill) {

      battleProgressFill.style.width =
        `${
          (
            (battleIndex + 1) /
            battlePairs.length
          ) * 100
        }%`;

    }


    // -----------------------------------------
    // 左右カード
    // -----------------------------------------

    createBattleCard(
      leftName,
      "left"
    );

    createBattleCard(
      rightName,
      "right"
    );
  }


  // =========================================================
  // 本戦カード作成
  // =========================================================

  function createBattleCard(
    name,
    side
  ) {

    const card =
      document.createElement("button");

    card.type = "button";

    card.className =
      `battle-card ${side}`;


    // 写真

    const image =
      document.createElement("img");


    const imageNumber =
      String(
        voiceActors.indexOf(name) + 1
      ).padStart(
        3,
        "0"
      );


    image.src =
      `images/${imageNumber}.jpg`;

    image.alt =
      name;


    // 名前

    const nameElement =
      document.createElement("div");

    nameElement.className =
      "battle-name";

    nameElement.textContent =
      name;


    card.appendChild(image);

    card.appendChild(nameElement);


    // タップ

    card.addEventListener(
      "click",
      function () {

        if (
          side === "left"
        ) {

          recordBattle("left");

        } else {

          recordBattle("right");

        }

      }
    );


    battleMembers.appendChild(card);
  }


  // =========================================================
  // 本戦結果
  // =========================================================

  function recordBattle(result) {

    if (
      battleIndex >=
      battlePairs.length
    ) {

      return;
    }


    const pair =
      battlePairs[battleIndex];


    const playerA =
      pair[0];

    const playerB =
      pair[1];


    const ratingA =
      ratings[playerA];

    const ratingB =
      ratings[playerB];


    // -----------------------------------------
    // 勝率予測
    // -----------------------------------------

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


    let scoreA;

    let scoreB;


    // 左が勝ち

    if (
      result === "left"
    ) {

      scoreA = 1;

      scoreB = 0;

    }


    // 右が勝ち

    else if (
      result === "right"
    ) {

      scoreA = 0;

      scoreB = 1;

    }


    // 引き分け

    else {

      scoreA = 0.5;

      scoreB = 0.5;

    }


    // -----------------------------------------
    // Elo更新
    // -----------------------------------------

    ratings[playerA] =
      ratingA +
      ELO_K *
      (
        scoreA -
        expectedA
      );


    ratings[playerB] =
      ratingB +
      ELO_K *
      (
        scoreB -
        expectedB
      );


    battleIndex++;


    renderBattle();
  }


  // =========================================================
  // 本戦終了
  // =========================================================

  function finishBattle() {

    const ranking =
      [...finalists].sort(
        function (a, b) {

          return (
            ratings[b] -
            ratings[a]
          );

        }
      );


    renderResults(
      ranking
    );


    showScreen(
      resultScreen
    );
  }


  // =========================================================
  // 結果表示
  // =========================================================

  function renderResults(
    ranking
  ) {

    // =====================================================
    // TOP9
    // =====================================================

    top9Members.innerHTML = "";


    ranking
      .slice(
        0,
        TOP_COUNT
      )
      .forEach(
        function (
          name,
          index
        ) {

          const card =
            document.createElement("div");

          card.className =
            "top9-card";


          // 順位

          const rank =
            document.createElement("div");

          rank.className =
            "top9-rank";


          /*
           * CSS側で
           * 1位・2位・3位を
           * 王子様風に配置する。
           */

          if (index === 0) {

            rank.textContent =
              "♛ 1";

          } else if (index === 1) {

            rank.textContent =
              "♕ 2";

          } else if (index === 2) {

            rank.textContent =
              "♕ 3";

          } else {

            rank.textContent =
              index + 1;

          }


          // 写真

          const image =
            document.createElement("img");


          const imageNumber =
            String(
              voiceActors.indexOf(name) + 1
            ).padStart(
              3,
              "0"
            );


          image.src =
            `images/${imageNumber}.jpg`;

          image.alt =
            name;


          // 名前

          const nameElement =
            document.createElement("div");

          nameElement.className =
            "top9-name";

          nameElement.textContent =
            name;


          card.appendChild(rank);

          card.appendChild(image);

          card.appendChild(nameElement);


          top9Members.appendChild(card);

        }
      );


    // =====================================================
    // 36人ランキング
    // =====================================================

    rankingList.innerHTML = "";


    ranking.forEach(
      function (
        name,
        index
      ) {

        const row =
          document.createElement("div");

        row.className =
          "ranking-row";


        // 順位

        const rank =
          document.createElement("div");

        rank.className =
          "ranking-number";

        rank.textContent =
          index + 1;


        // 写真

        const image =
          document.createElement("img");


        const imageNumber =
          String(
            voiceActors.indexOf(name) + 1
          ).padStart(
            3,
            "0"
          );


        image.src =
          `images/${imageNumber}.jpg`;

        image.alt =
          name;


        // 名前

        const nameElement =
          document.createElement("div");

        nameElement.className =
          "ranking-name";

        nameElement.textContent =
          name;


        // スコア

        const score =
          document.createElement("div");

        score.className =
          "ranking-score";

        score.textContent =
          Math.round(
            ratings[name]
          );


        row.appendChild(rank);

        row.appendChild(image);

        row.appendChild(nameElement);

        row.appendChild(score);


        rankingList.appendChild(row);

      }
    );
  }


  // =========================================================
  // START
  // =========================================================

  startButton.addEventListener(
    "click",
    function () {

      startPrelim();

    }
  );


  // =========================================================
  // 予選：決定して次へ
  // =========================================================

  prelimNextButton.addEventListener(
    "click",
    function () {

      goToNextPrelim();

    }
  );


  // =========================================================
  // 予選：未選択で次へ
  // =========================================================

  prelimSkipButton.addEventListener(
    "click",
    function () {

      currentSelected.clear();

      goToNextPrelim();

    }
  );


  // =========================================================
  // 本戦開始
  // =========================================================

  startBattleButton.addEventListener(
    "click",
    function () {

      startBattle();

    }
  );


  // =========================================================
  // 引き分け
  // =========================================================

  drawButton.addEventListener(
    "click",
    function () {

      recordBattle("draw");

    }
  );


  // =========================================================
  // もう一度遊ぶ
  // =========================================================

  restartButton.addEventListener(
    "click",
    function () {

      initializeGame();

    }
  );


  // =========================================================
  // ゲーム開始
  // =========================================================

  initializeGame();

});
