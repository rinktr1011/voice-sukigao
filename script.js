document.addEventListener("DOMContentLoaded", function () {

  // =====================================================
  // 男性声優150人
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

  const MAX_PRELIM_SELECT = 3;

  const FINALISTS_COUNT = 36;

  const BATTLE_ROUNDS = 10;

  const INITIAL_RATING = 1500;

  const ELO_K = 32;

  const TOP_COUNT = 9;


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


  const startButton =
    document.getElementById("start-button");

  const prelimNextButton =
    document.getElementById("prelim-next-button");

  const mainStartButton =
    document.getElementById("main-start-button");

  const restartButton =
    document.getElementById("restart-button");

  const leftPerson =
    document.getElementById("left-person");

  const rightPerson =
    document.getElementById("right-person");

  const drawButton =
    document.getElementById("draw-button");


  // =====================================================
  // 状態
  // =====================================================

  let prelimGroups = [];

  let prelimIndex = 0;

  let prelimVotes = {};

  let currentSelected = new Set();

  let finalists = [];

  let ratings = {};

  let battlePairs = [];

  let battleIndex = 0;

  let currentLeft = null;

  let currentRight = null;


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
        Math.floor(Math.random() * (i + 1));

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

    return (
      "images/" +
      String(index).padStart(3, "0") +
      ".jpg"
    );
  }


  // =====================================================
  // 予選グループ作成
  // =====================================================

  function createPrelimGroups() {

    const shuffled =
      shuffle(voiceActors);

    prelimGroups = [];

    for (
      let i = 0;
      i < PRELIM_GROUPS;
      i++
    ) {

      prelimGroups.push(
        shuffled.slice(
          i * PRELIM_GROUP_SIZE,
          (i + 1) * PRELIM_GROUP_SIZE
        )
      );
    }
  }


  // =====================================================
  // START
  // =====================================================

  startButton.addEventListener(
    "click",
    function () {

      startScreen.classList.add("hidden");

      prelimScreen.classList.remove("hidden");

      prelimVotes = {};

      voiceActors.forEach(
        name => {
          prelimVotes[name] = 0;
        }
      );

      prelimIndex = 0;

      createPrelimGroups();

      showPrelim();

    }
  );


  // =====================================================
  // 予選表示
  // =====================================================

  function showPrelim() {

    currentSelected =
      new Set();

    const group =
      prelimGroups[prelimIndex];


    document.getElementById(
      "prelim-progress"
    ).textContent =
      `${prelimIndex + 1} / ${PRELIM_GROUPS}`;


    document.getElementById(
      "prelim-progress-fill"
    ).style.width =
      `${((prelimIndex + 1) / PRELIM_GROUPS) * 100}%`;


    document.getElementById(
      "prelim-selected-count"
    ).textContent = "0";


    const container =
      document.getElementById(
        "prelim-choices"
      );

    container.innerHTML = "";


    group.forEach(name => {

      const card =
        document.createElement("button");

      card.className = "choice";


      card.innerHTML = `

        <img
          src="${imagePath(name)}"
          alt="${name}"
        >

        <div class="choice-name">
          ${name}
        </div>

      `;


      card.addEventListener(
        "click",
        function () {

          if (
            currentSelected.has(name)
          ) {

            currentSelected.delete(name);

            card.classList.remove(
              "selected"
            );

          } else {

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


          document.getElementById(
            "prelim-selected-count"
          ).textContent =
            currentSelected.size;

        }
      );


      container.appendChild(card);

    });


    prelimNextButton.textContent =
      "決定して次へ";

  }


  // =====================================================
  // 予選次へ
  // =====================================================

  prelimNextButton.addEventListener(
    "click",
    function () {

      currentSelected.forEach(
        name => {
          prelimVotes[name]++;
        }
      );


      prelimIndex++;


      if (
        prelimIndex >=
        PRELIM_GROUPS
      ) {

        finishPrelim();

      } else {

        showPrelim();

      }

    }
  );


  // =====================================================
  // 予選終了
  // =====================================================

  function finishPrelim() {

    finalists =
      shuffle(voiceActors)
        .sort(
          (a, b) =>
            prelimVotes[b] -
            prelimVotes[a]
        )
        .slice(
          0,
          FINALISTS_COUNT
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

  mainStartButton.addEventListener(
    "click",
    function () {

      prelimResultScreen.classList.add(
        "hidden"
      );

      battleScreen.classList.remove(
        "hidden"
      );


      startBattles();

    }
  );


  // =====================================================
  // 本戦の対戦表を作る
  //
  // 36人を10ラウンド
  // 1人あたり10戦
  // 合計180戦
  //
  // 同じ組み合わせは作らない
  // =====================================================

  function createBattlePairs() {

    const players =
      shuffle(finalists);

    const rounds = [];

    let list =
      [...players];


    for (
      let round = 0;
      round < 35;
      round++
    ) {

      const pairs = [];


      for (
        let i = 0;
        i < list.length / 2;
        i++
      ) {

        pairs.push([
          list[i],
          list[list.length - 1 - i]
        ]);

      }


      rounds.push(pairs);


      // 円形ローテーション
      const fixed =
        list[0];

      const rest =
        list.slice(1);

      rest.unshift(
        rest.pop()
      );

      list =
        [
          fixed,
          ...rest
        ];

    }


    // 35ラウンドの中から
    // ランダムに10ラウンド使用

    return shuffle(rounds)
      .slice(
        0,
        BATTLE_ROUNDS
      )
      .flat();

  }


  // =====================================================
  // 本戦開始
  // =====================================================

  function startBattles() {

    ratings = {};

    finalists.forEach(
      name => {
        ratings[name] =
          INITIAL_RATING;
      }
    );


    battlePairs =
      createBattlePairs();


    battleIndex = 0;


    showNextBattle();

  }


  // =====================================================
  // 次の対戦
  // =====================================================

  function showNextBattle() {

    if (
      battleIndex >=
      battlePairs.length
    ) {

      finishBattles();

      return;

    }


    const pair =
      battlePairs[battleIndex];


    currentLeft =
      pair[0];

    currentRight =
      pair[1];


    leftPerson.innerHTML = `

      <img
        src="${imagePath(currentLeft)}"
        alt="${currentLeft}"
      >

      <div class="battle-name">
        ${currentLeft}
      </div>

    `;


    rightPerson.innerHTML = `

      <img
        src="${imagePath(currentRight)}"
        alt="${currentRight}"
      >

      <div class="battle-name">
        ${currentRight}
      </div>

    `;


    document.getElementById(
      "battle-progress"
    ).textContent =
      `${battleIndex + 1} / ${battlePairs.length}`;


    document.getElementById(
      "battle-progress-fill"
    ).style.width =
      `${((battleIndex + 1) / battlePairs.length) * 100}%`;

  }


  // =====================================================
  // Elo計算
  // =====================================================

  function updateRatings(
    playerA,
    playerB,
    resultA
  ) {

    const ratingA =
      ratings[playerA];

    const ratingB =
      ratings[playerB];


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
      1 - expectedA;


    const resultB =
      1 - resultA;


    ratings[playerA] =
      ratingA +
      ELO_K *
      (resultA - expectedA);


    ratings[playerB] =
      ratingB +
      ELO_K *
      (resultB - expectedB);

  }


  // =====================================================
  // 左を選択
  // =====================================================

  leftPerson.addEventListener(
    "click",
    function () {

      updateRatings(
        currentLeft,
        currentRight,
        1
      );

      battleIndex++;

      showNextBattle();

    }
  );


  // =====================================================
  // 右を選択
  // =====================================================

  rightPerson.addEventListener(
    "click",
    function () {

      updateRatings(
        currentLeft,
        currentRight,
        0
      );

      battleIndex++;

      showNextBattle();

    }
  );


  // =====================================================
  // 引き分け
  // =====================================================

  drawButton.addEventListener(
    "click",
    function () {

      updateRatings(
        currentLeft,
        currentRight,
        0.5
      );

      battleIndex++;

      showNextBattle();

    }
  );


  // =====================================================
  // 本戦終了
  // =====================================================

  function finishBattles() {

    const ranking =
      [...finalists]
        .sort(
          (a, b) =>
            ratings[b] -
            ratings[a]
        );


    showResult(ranking);

  }


  // =====================================================
  // 結果
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


    // -------------------------
    // TOP9
    // -------------------------

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


    // -------------------------
    // 36人ランキング
    // -------------------------

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
  // もう一度
  // =====================================================

  restartButton.addEventListener(
    "click",
    function () {

      resultScreen.classList.add(
        "hidden"
      );

      startScreen.classList.remove(
        "hidden"
      );

    }
  );

});
