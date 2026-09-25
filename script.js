document.addEventListener("DOMContentLoaded", () => {

  // ========================================
  // 🎙️ 男性声優リスト
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


  // ========================================
  // 🎮 設定
  // ========================================

  const PRELIM_GROUP_SIZE = 6;

  // 174 ÷ 6 = 29
  const PRELIM_GROUPS =
    Math.ceil(
      voiceActors.length /
      PRELIM_GROUP_SIZE
    );

  const MAX_PRELIM_SELECT = 3;

  // 最大36人
  const MAX_FINALISTS = 36;

  // 本戦ラウンド数
  const BATTLE_ROUNDS = 5;

  const INITIAL_RATING = 1500;

  const ELO_K = 32;

  const TOP_COUNT = 9;


  // ========================================
  // 🔧 状態
  // ========================================

  let shuffledActors = [];

  let prelimVotes = {};

  let finalists = [];

  let ratings = {};

  let currentPrelimGroup = 0;

  let currentBattle = 0;

  let battlePairs = [];

  let selectedPrelim = [];


  // ========================================
  // 🔄 シャッフル
  // ========================================

  function shuffle(array) {

    const arr = [...array];

    for (
      let i = arr.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random() * (i + 1)
        );

      [
        arr[i],
        arr[j]
      ] = [
        arr[j],
        arr[i]
      ];
    }

    return arr;
  }


  // ========================================
  // 📺 画面切り替え
  // ========================================

  function showScreen(id) {

    document
      .querySelectorAll(".screen")
      .forEach(screen => {

        screen.style.display = "none";

        screen.classList.remove(
          "active"
        );
      });


    const target =
      document.getElementById(id);


    if (!target) return;


    target.style.display =
      id === "start-screen"
        ? "flex"
        : "block";


    target.classList.add("active");


    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }


  // ========================================
  // 🎬 初期化
  // ========================================

  function initializeGame() {

    shuffledActors =
      shuffle(
        voiceActors.map(
          (name, index) => ({
            name,
            originalIndex: index
          })
        )
      );


    prelimVotes = {};

    finalists = [];

    ratings = {};

    currentPrelimGroup = 0;

    currentBattle = 0;

    battlePairs = [];

    selectedPrelim = [];


    voiceActors.forEach(name => {

      prelimVotes[name] = 0;
    });


    const prelimProgress =
      document.getElementById(
        "prelim-progress-fill"
      );


    const battleProgress =
      document.getElementById(
        "battle-progress-fill"
      );


    if (prelimProgress) {

      prelimProgress.style.width =
        "0%";
    }


    if (battleProgress) {

      battleProgress.style.width =
        "0%";
    }


    showScreen(
      "start-screen"
    );
  }


  // ========================================
  // 🎙️ 予選表示
  // ========================================

  function renderPrelim() {

    const container =
      document.getElementById(
        "prelim-members"
      );


    if (!container) return;


    container.innerHTML = "";


    const startIndex =
      currentPrelimGroup *
      PRELIM_GROUP_SIZE;


    const group =
      shuffledActors.slice(
        startIndex,
        startIndex +
        PRELIM_GROUP_SIZE
      );


    group.forEach(actor => {

      const card =
        document.createElement("div");


      card.className =
        "member-card";


      card.dataset.name =
        actor.name;


      const imageNumber =
        String(
          actor.originalIndex + 1
        ).padStart(3, "0");


      card.innerHTML = `
        <div class="member-image-wrap">

          <img
            src="images/${imageNumber}.jpg"
            alt="${actor.name}"
            class="member-image"
            loading="lazy"
          >

          <div class="selected-mark">
            ♡
          </div>

        </div>

        <div class="member-name">
          ${actor.name}
        </div>
      `;


      card.addEventListener(
        "click",
        () => {

          const alreadySelected =
            card.classList.contains(
              "selected"
            );


          if (alreadySelected) {

            card.classList.remove(
              "selected"
            );


            selectedPrelim =
              selectedPrelim.filter(
                name =>
                  name !== actor.name
              );


            return;
          }


          if (
            selectedPrelim.length >=
            MAX_PRELIM_SELECT
          ) {

            return;
          }


          card.classList.add(
            "selected"
          );


          selectedPrelim.push(
            actor.name
          );
        }
      );


      container.appendChild(card);
    });


    const page =
      document.getElementById(
        "prelim-page"
      );


    if (page) {

      page.textContent =
        `${currentPrelimGroup + 1} / ${PRELIM_GROUPS}`;
    }


    const progress =
      document.getElementById(
        "prelim-progress-fill"
      );


    if (progress) {

      const percent =
        (
          (currentPrelimGroup + 1) /
          PRELIM_GROUPS
        ) * 100;


      progress.style.width =
        `${percent}%`;
    }


    selectedPrelim = [];
  }


  // ========================================
  // ▶️ 次の予選
  // ========================================

  function goToNextPrelim() {

    selectedPrelim.forEach(
      name => {

        prelimVotes[name] =
          (prelimVotes[name] || 0) + 1;
      }
    );


    currentPrelimGroup++;


    if (
      currentPrelimGroup >=
      PRELIM_GROUPS
    ) {

      finishPrelim();

      return;
    }


    renderPrelim();
  }


  // ========================================
  // 🎉 予選終了
  // ========================================

  function finishPrelim() {

    /*
      ★ここが今回の重要変更★

      0票の人は完全に除外。

      1票以上入った人だけを
      本戦候補にする。
    */


    const votedActors =
      shuffledActors.filter(
        actor =>
          prelimVotes[actor.name] > 0
      );


    /*
      得票数順。

      同票の場合はランダム。
    */

    const sorted =
      shuffle(votedActors)
        .sort(
          (a, b) =>
            prelimVotes[b.name] -
            prelimVotes[a.name]
        );


    /*
      36人を超えた場合だけ
      上位36人に絞る。

      36人以下なら全員。
    */

    finalists =
      sorted.slice(
        0,
        Math.min(
          MAX_FINALISTS,
          sorted.length
        )
      );


    /*
      本戦参加者が0人の場合。
    */

    if (finalists.length === 0) {

      alert(
        "予選で選ばれた人がいませんでした。\nもう一度予選をお願いします。"
      );

      initializeGame();

      return;
    }


    // Elo初期化

    ratings = {};


    finalists.forEach(actor => {

      ratings[actor.name] =
        INITIAL_RATING;
    });


    // 人数を表示

    const count =
      finalists.length;


    const countText =
      document.getElementById(
        "prelim-finalist-count"
      );


    const countNumber =
      document.getElementById(
        "prelim-finalist-number"
      );


    if (countText) {

      countText.textContent =
        count;
    }


    if (countNumber) {

      countNumber.textContent =
        count;
    }


    showScreen(
      "prelim-result-screen"
    );
  }


  // ========================================
  // ⚔️ 本戦ペア作成
  // ========================================

  function createBattlePairs() {

    /*
      本戦参加者が
      何人でも対応できるようにする。

      31人なら、
      1ラウンド15試合＋1人休み。

      36人なら、
      1ラウンド18試合。

      それを5ラウンド行う。
    */


    const rounds = [];

    let players =
      shuffle([...finalists]);


    /*
      まず参加者数に応じた
      総当たり形式のラウンドを作る。

      奇数の場合は「bye」を入れる。
    */

    if (
      players.length % 2 !== 0
    ) {

      players.push(null);
    }


    const totalPlayers =
      players.length;


    const totalRounds =
      totalPlayers - 1;


    for (
      let round = 0;
      round < totalRounds;
      round++
    ) {

      const pairs = [];


      for (
        let i = 0;
        i < totalPlayers / 2;
        i++
      ) {

        const a =
          players[i];


        const b =
          players[
            totalPlayers - 1 - i
          ];


        // 休み枠

        if (
          a === null ||
          b === null
        ) {

          continue;
        }


        pairs.push([
          a,
          b
        ]);
      }


      rounds.push(pairs);


      /*
        サークル方式で回転。
      */

      const fixed =
        players[0];


      const rest =
        players.slice(1);


      rest.unshift(
        rest.pop()
      );


      players = [
        fixed,
        ...rest
      ];
    }


    /*
      5ラウンドをランダム選択。
    */

    const selectedRounds =
      shuffle(rounds).slice(
        0,
        Math.min(
          BATTLE_ROUNDS,
          rounds.length
        )
      );


    battlePairs =
      selectedRounds.flat();


    /*
      念のため。
    */

    if (
      battlePairs.length === 0
    ) {

      battlePairs = [];
    }
  }


  // ========================================
  // ⚔️ 本戦開始
  // ========================================

  function startBattle() {

    currentBattle = 0;


    createBattlePairs();


    /*
      本戦参加者が1人だけなら
      そのまま結果へ。
    */

    if (
      finalists.length < 2
    ) {

      finishBattle();

      return;
    }


    showScreen(
      "battle-screen"
    );


    renderBattle();
  }


  // ========================================
  // 🥊 本戦表示
  // ========================================

  function renderBattle() {

    const container =
      document.getElementById(
        "battle-members"
      );


    if (!container) return;


    const pair =
      battlePairs[currentBattle];


    if (!pair) {

      finishBattle();

      return;
    }


    container.innerHTML = "";


    pair.forEach(actor => {

      const card =
        document.createElement("div");


      card.className =
        "battle-card";


      const imageNumber =
        String(
          actor.originalIndex + 1
        ).padStart(3, "0");


      card.innerHTML = `
        <div class="battle-image-wrap">

          <img
            src="images/${imageNumber}.jpg"
            alt="${actor.name}"
            class="battle-image"
            loading="lazy"
          >

        </div>

        <div class="battle-name">
          ${actor.name}
        </div>
      `;


      card.addEventListener(
        "click",
        () => {

          const opponent =
            pair.find(
              x =>
                x.name !==
                actor.name
            );


          if (!opponent) return;


          updateElo(
            actor.name,
            opponent.name,
            1
          );


          nextBattle();
        }
      );


      container.appendChild(card);
    });


    const page =
      document.getElementById(
        "battle-page"
      );


    if (page) {

      page.textContent =
        `${currentBattle + 1} / ${battlePairs.length}`;
    }


    const progress =
      document.getElementById(
        "battle-progress-fill"
      );


    if (progress) {

      const percent =
        (
          (currentBattle + 1) /
          battlePairs.length
        ) * 100;


      progress.style.width =
        `${percent}%`;
    }
  }


  // ========================================
  // ⚖️ Elo計算
  // ========================================

  function updateElo(
    winnerName,
    loserName,
    result
  ) {

    const winnerRating =
      ratings[winnerName];


    const loserRating =
      ratings[loserName];


    const expectedWinner =
      1 /
      (
        1 +
        Math.pow(
          10,
          (
            loserRating -
            winnerRating
          ) / 400
        )
      );


    const expectedLoser =
      1 - expectedWinner;


    ratings[winnerName] =
      winnerRating +
      ELO_K *
      (
        result -
        expectedWinner
      );


    ratings[loserName] =
      loserRating +
      ELO_K *
      (
        (1 - result) -
        expectedLoser
      );
  }


  // ========================================
  // ♡ 引き分け
  // ========================================

  function drawBattle() {

    const pair =
      battlePairs[currentBattle];


    if (!pair) return;


    const a =
      pair[0].name;


    const b =
      pair[1].name;


    updateElo(
      a,
      b,
      0.5
    );


    nextBattle();
  }


  // ========================================
  // ▶️ 次の本戦
  // ========================================

  function nextBattle() {

    currentBattle++;


    if (
      currentBattle >=
      battlePairs.length
    ) {

      finishBattle();

      return;
    }


    renderBattle();
  }


  // ========================================
  // 🏆 結果
  // ========================================

  function finishBattle() {

    const ranking =
      [...finalists]
        .sort(
          (a, b) =>
            ratings[b.name] -
            ratings[a.name]
        );


    /*
      参加者が9人未満なら
      いる人数だけ表示。
    */

    const top9 =
      ranking.slice(
        0,
        Math.min(
          TOP_COUNT,
          ranking.length
        )
      );


    // ========================================
    // TOP9
    // ========================================

    const container =
      document.getElementById(
        "top9-members"
      );


    if (container) {

      container.innerHTML = "";


      top9.forEach(
        (actor, index) => {

          const card =
            document.createElement(
              "div"
            );


          card.className =
            "top9-card";


          const imageNumber =
            String(
              actor.originalIndex + 1
            ).padStart(3, "0");


          const rank =
            index + 1;


          let badge;


          if (rank === 1) {

            badge = "♛ 1";

          }
          else if (rank === 2) {

            badge = "♕ 2";

          }
          else if (rank === 3) {

            badge = "♕ 3";

          }
          else {

            badge = rank;
          }


          card.innerHTML = `
            <div class="top9-image-wrap">

              <img
                src="images/${imageNumber}.jpg"
                alt="${actor.name}"
                class="top9-image"
              >

              <div class="rank-badge">
                ${badge}
              </div>

            </div>

            <div class="top9-name">
              ${actor.name}
            </div>
          `;


          container.appendChild(
            card
          );
        }
      );
    }


    // ========================================
    // 📊 本戦順位
    // ========================================

    const rankingContainer =
      document.getElementById(
        "ranking-list"
      );


    if (rankingContainer) {

      rankingContainer.innerHTML = "";


      ranking.forEach(
        (actor, index) => {

          const row =
            document.createElement(
              "div"
            );


          row.className =
            "ranking-item";


          const imageNumber =
            String(
              actor.originalIndex + 1
            ).padStart(3, "0");


          row.innerHTML = `
            <div class="ranking-number">
              ${index + 1}
            </div>

            <img
              src="images/${imageNumber}.jpg"
              alt="${actor.name}"
              class="ranking-image"
            >

            <div class="ranking-name">
              ${actor.name}
            </div>

            <div class="ranking-score">
              ${Math.round(
                ratings[actor.name]
              )}
            </div>
          `;


          rankingContainer.appendChild(
            row
          );
        }
      );
    }


    showScreen(
      "result-screen"
    );
  }


  // ========================================
  // 🎛️ ボタン
  // ========================================

  const startButton =
    document.getElementById(
      "start-button"
    );


  if (startButton) {

    startButton.addEventListener(
      "click",
      () => {

        currentPrelimGroup = 0;

        selectedPrelim = [];

        showScreen(
          "prelim-screen"
        );

        renderPrelim();
      }
    );
  }


  const nextButton =
    document.getElementById(
      "prelim-next-button"
    );


  if (nextButton) {

    nextButton.addEventListener(
      "click",
      goToNextPrelim
    );
  }


  const skipButton =
    document.getElementById(
      "prelim-skip-button"
    );


  if (skipButton) {

    skipButton.addEventListener(
      "click",
      goToNextPrelim
    );
  }


  const startBattleButton =
    document.getElementById(
      "start-battle-button"
    );


  if (startBattleButton) {

    startBattleButton.addEventListener(
      "click",
      startBattle
    );
  }


  const drawButton =
    document.getElementById(
      "draw-button"
    );


  if (drawButton) {

    drawButton.addEventListener(
      "click",
      drawBattle
    );
  }


  const restartButton =
    document.getElementById(
      "restart-button"
    );


  if (restartButton) {

    restartButton.addEventListener(
      "click",
      initializeGame
    );
  }


  // ========================================
  // 🚀 起動
  // ========================================

  initializeGame();


  console.log(
    `男性声優リスト：${voiceActors.length}名`
  );


  console.log(
    "重複チェック：",
    voiceActors.filter(
      (name, index) =>
        voiceActors.indexOf(name) !== index
    )
  );

});
