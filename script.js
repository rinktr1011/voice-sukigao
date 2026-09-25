document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     VOICE ACTORS
  ========================================================= */

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


  /* =========================================================
     SETTINGS
  ========================================================= */

  const PRELIM_GROUP_SIZE = 6;
  const MAX_PRELIM_SELECT = 3;
  const MAX_FINALISTS = 36;

  const BATTLE_ROUNDS = 5;

  const INITIAL_RATING = 1500;
  const ELO_K = 32;

  const TOP_COUNT = 9;


  /* =========================================================
     DOM
  ========================================================= */

  const screens = document.querySelectorAll(".screen");

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

  const prelimMembers =
    document.getElementById("prelim-members");

  const prelimPage =
    document.getElementById("prelim-page");

  const prelimProgressFill =
    document.getElementById("prelim-progress-fill");

  const prelimNextButton =
    document.getElementById("prelim-next-button");

  const prelimSkipButton =
    document.getElementById("prelim-skip-button");


  const prelimFinalistCount =
    document.getElementById("prelim-finalist-count");

  const prelimFinalistNumber =
    document.getElementById("prelim-finalist-number");

  const startBattleButton =
    document.getElementById("start-battle-button");


  const battleMembers =
    document.getElementById("battle-members");

  const battlePage =
    document.getElementById("battle-page");

  const battleProgressFill =
    document.getElementById("battle-progress-fill");

  const drawButton =
    document.getElementById("draw-button");


  const top9Members =
    document.getElementById("top9-members");

  const rankingList =
    document.getElementById("ranking-list");

  const restartButton =
    document.getElementById("restart-button");


  /* =========================================================
     GAME STATE
  ========================================================= */

  let shuffledActors = [];

  let prelimGroups = [];

  let prelimIndex = 0;

  let selectedInPrelim = new Set();

  let prelimVotes = {};

  let finalists = [];

  let battleMatches = [];

  let battleIndex = 0;

  let ratings = {};

  let battleWins = {};

  let battleDraws = {};


  /* =========================================================
     UTILITY
  ========================================================= */

  function shuffle(array) {

    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {

      const j =
        Math.floor(Math.random() * (i + 1));

      [result[i], result[j]] =
        [result[j], result[i]];
    }

    return result;
  }


  function imagePath(name) {

    const originalIndex =
      voiceActors.indexOf(name);

    const number =
      String(originalIndex + 1).padStart(3, "0");

    return `images/${number}.jpg`;
  }


  /* =========================================================
     SCREEN CONTROL
  ========================================================= */

  function showScreen(screen) {

    screens.forEach(s => {
      s.classList.remove("active");
      s.style.display = "none";
    });

    screen.classList.add("active");

    if (screen === startScreen) {
      screen.style.display = "flex";
    } else {
      screen.style.display = "block";
    }

    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }


  /* =========================================================
     INITIALIZE
  ========================================================= */

  function initializeGame() {

    shuffledActors =
      shuffle(voiceActors);

    prelimGroups = [];

    for (
      let i = 0;
      i < shuffledActors.length;
      i += PRELIM_GROUP_SIZE
    ) {

      prelimGroups.push(
        shuffledActors.slice(
          i,
          i + PRELIM_GROUP_SIZE
        )
      );

    }


    prelimIndex = 0;

    selectedInPrelim = new Set();

    prelimVotes = {};

    finalists = [];

    battleMatches = [];

    battleIndex = 0;

    ratings = {};

    battleWins = {};

    battleDraws = {};


    voiceActors.forEach(name => {

      prelimVotes[name] = 0;

      ratings[name] = INITIAL_RATING;

      battleWins[name] = 0;

      battleDraws[name] = 0;

    });


    showPrelim();
  }


  /* =========================================================
     PRELIM
  ========================================================= */

  function showPrelim() {

    showScreen(prelimScreen);

    selectedInPrelim = new Set();

    prelimMembers.innerHTML = "";


    const group =
      prelimGroups[prelimIndex];


    const totalGroups =
      prelimGroups.length;


    prelimPage.textContent =
      `${prelimIndex + 1} / ${totalGroups}`;


    const progress =
      ((prelimIndex + 1) / totalGroups) * 100;

    prelimProgressFill.style.width =
      `${progress}%`;


    group.forEach(name => {

      const card =
        document.createElement("button");

      card.type = "button";

      card.className =
        "member-card";


      const img =
        document.createElement("img");

      img.src =
        imagePath(name);

      img.alt =
        name;

      img.loading =
        "eager";


      const nameElement =
        document.createElement("div");

      nameElement.className =
        "member-name";

      nameElement.textContent =
        name;


      const mark =
        document.createElement("div");

      mark.className =
        "selected-mark";

      mark.textContent =
        "♡";


      card.appendChild(img);

      card.appendChild(nameElement);

      card.appendChild(mark);


      card.addEventListener(
        "click",
        () => {

          togglePrelimSelection(
            name,
            card
          );

        }
      );


      prelimMembers.appendChild(card);

    });

  }


  function togglePrelimSelection(
    name,
    card
  ) {

    if (
      selectedInPrelim.has(name)
    ) {

      selectedInPrelim.delete(name);

      card.classList.remove(
        "selected"
      );

      return;
    }


    if (
      selectedInPrelim.size >=
      MAX_PRELIM_SELECT
    ) {

      return;
    }


    selectedInPrelim.add(name);

    card.classList.add(
      "selected"
    );

  }


  function finishPrelimPage() {

    selectedInPrelim.forEach(name => {

      prelimVotes[name] =
        (prelimVotes[name] || 0) + 1;

    });


    if (
      prelimIndex <
      prelimGroups.length - 1
    ) {

      prelimIndex++;

      showPrelim();

    } else {

      finishPrelim();

    }

  }


  /* =========================================================
     PRELIM RESULT / FINALISTS
  ========================================================= */

  function finishPrelim() {

    const votedActors =
      shuffledActors
        .filter(name =>
          prelimVotes[name] > 0
        );


    if (
      votedActors.length === 0
    ) {

      alert(
        "少なくとも1人は選んでね♡"
      );

      prelimIndex = 0;

      Object.keys(prelimVotes)
        .forEach(name => {
          prelimVotes[name] = 0;
        });

      showPrelim();

      return;
    }


    finalists =
      votedActors
        .sort((a, b) => {

          const voteDifference =
            prelimVotes[b] -
            prelimVotes[a];

          if (
            voteDifference !== 0
          ) {
            return voteDifference;
          }

          return (
            Math.random() - 0.5
          );
        })
        .slice(
          0,
          Math.min(
            MAX_FINALISTS,
            votedActors.length
          )
        );


    prelimFinalistCount.textContent =
      finalists.length;

    prelimFinalistNumber.textContent =
      finalists.length;


    showScreen(
      prelimResultScreen
    );

  }


  /* =========================================================
     BATTLE MATCH GENERATION
  ========================================================= */

  function createBattleMatches() {

    const participants =
      [...finalists];


    if (
      participants.length < 2
    ) {

      battleMatches = [];

      return;
    }


    const matches = [];


    /*
      5ラウンド制。

      人数が偶数の場合：
        例：36人 → 18試合 × 5ラウンド

      人数が奇数の場合：
        例：31人 → 毎ラウンド15試合＋1人休み

      毎ラウンドでできるだけ
      違う組み合わせになるように
      サークル方式を使う。
    */


    let players =
      shuffle(participants);


    for (
      let round = 0;
      round < BATTLE_ROUNDS;
      round++
    ) {

      let roundPlayers =
        [...players];


      let bye = null;


      if (
        roundPlayers.length % 2 !== 0
      ) {

        bye = roundPlayers.pop();

      }


      for (
        let i = 0;
        i < roundPlayers.length;
        i += 2
      ) {

        const playerA =
          roundPlayers[i];

        const playerB =
          roundPlayers[i + 1];


        if (
          playerA &&
          playerB
        ) {

          matches.push({
            a: playerA,
            b: playerB,
            round
          });

        }

      }


      /*
        サークル方式。

        先頭を固定して
        残りを回転。
      */

      const fixed =
        players[0];

      const rotating =
        players.slice(1);


      rotating.unshift(
        rotating.pop()
      );


      players = [
        fixed,
        ...rotating
      ];

    }


    battleMatches =
      shuffle(
        matches
      );

  }


  /* =========================================================
     BATTLE START
  ========================================================= */

  function startBattle() {

    if (
      finalists.length < 2
    ) {

      showResult();

      return;
    }


    finalists.forEach(name => {

      ratings[name] =
        INITIAL_RATING;

      battleWins[name] =
        0;

      battleDraws[name] =
        0;

    });


    createBattleMatches();

    battleIndex = 0;

    showBattle();

  }


  /* =========================================================
     BATTLE DISPLAY
  ========================================================= */

  function showBattle() {

    showScreen(
      battleScreen
    );


    if (
      battleIndex >=
      battleMatches.length
    ) {

      showResult();

      return;
    }


    battleMembers.innerHTML = "";


    const match =
      battleMatches[battleIndex];


    const total =
      battleMatches.length;


    battlePage.textContent =
      `${battleIndex + 1} / ${total}`;


    const progress =
      ((battleIndex + 1) / total) * 100;

    battleProgressFill.style.width =
      `${progress}%`;


    const players =
      shuffle([
        match.a,
        match.b
      ]);


    players.forEach(name => {

      const card =
        document.createElement("button");

      card.type = "button";

      card.className =
        "battle-card";


      const img =
        document.createElement("img");

      img.src =
        imagePath(name);

      img.alt =
        name;

      img.loading =
        "eager";


      const nameElement =
        document.createElement("div");

      nameElement.className =
        "battle-name";

      nameElement.textContent =
        name;


      card.appendChild(img);

      card.appendChild(
        nameElement
      );


      card.addEventListener(
        "click",
        () => {

          handleBattleChoice(
            name
          );

        }
      );


      battleMembers.appendChild(
        card
      );

    });

  }


  /* =========================================================
     ELO
  ========================================================= */

  function expectedScore(
    ratingA,
    ratingB
  ) {

    return (
      1 /
      (
        1 +
        Math.pow(
          10,
          (ratingB - ratingA) / 400
        )
      )
    );

  }


  function updateRatings(
    winner,
    loser
  ) {

    const winnerRating =
      ratings[winner];

    const loserRating =
      ratings[loser];


    const expectedWinner =
      expectedScore(
        winnerRating,
        loserRating
      );


    const expectedLoser =
      expectedScore(
        loserRating,
        winnerRating
      );


    ratings[winner] =
      winnerRating +
      ELO_K *
      (
        1 -
        expectedWinner
      );


    ratings[loser] =
      loserRating +
      ELO_K *
      (
        0 -
        expectedLoser
      );


    battleWins[winner]++;

  }


  function updateDraw(
    playerA,
    playerB
  ) {

    const ratingA =
      ratings[playerA];

    const ratingB =
      ratings[playerB];


    const expectedA =
      expectedScore(
        ratingA,
        ratingB
      );


    const expectedB =
      expectedScore(
        ratingB,
        ratingA
      );


    ratings[playerA] =
      ratingA +
      ELO_K *
      (
        0.5 -
        expectedA
      );


    ratings[playerB] =
      ratingB +
      ELO_K *
      (
        0.5 -
        expectedB
      );


    battleDraws[playerA]++;

    battleDraws[playerB]++;

  }


  /* =========================================================
     BATTLE CHOICE
  ========================================================= */

  function handleBattleChoice(
    winner
  ) {

    const match =
      battleMatches[battleIndex];


    const loser =
      match.a === winner
        ? match.b
        : match.a;


    updateRatings(
      winner,
      loser
    );


    nextBattle();

  }


  function handleDraw() {

    const match =
      battleMatches[battleIndex];


    updateDraw(
      match.a,
      match.b
    );


    nextBattle();

  }


  function nextBattle() {

    battleIndex++;

    if (
      battleIndex >=
      battleMatches.length
    ) {

      showResult();

    } else {

      showBattle();

    }

  }


  /* =========================================================
     RESULT SORT
  ========================================================= */

  function getRanking() {

    return [...finalists]
      .sort((a, b) => {

        const ratingDifference =
          ratings[b] -
          ratings[a];


        if (
          Math.abs(
            ratingDifference
          ) > 0.0001
        ) {

          return ratingDifference;

        }


        const winDifference =
          battleWins[b] -
          battleWins[a];


        if (
          winDifference !== 0
        ) {

          return winDifference;

        }


        const voteDifference =
          prelimVotes[b] -
          prelimVotes[a];


        if (
          voteDifference !== 0
        ) {

          return voteDifference;

        }


        return (
          a.localeCompare(b)
        );

      });

  }


  /* =========================================================
     RESULT
  ========================================================= */

  function showResult() {

    showScreen(
      resultScreen
    );


    top9Members.innerHTML = "";

    rankingList.innerHTML = "";


    const ranking =
      getRanking();


    const top9 =
      ranking.slice(
        0,
        TOP_COUNT
      );


    /* =====================================================
       TOP9
    ====================================================== */

    top9.forEach(
      (name, index) => {

        const card =
          document.createElement("div");

        card.className =
          "top9-card";


        const img =
          document.createElement("img");

        img.src =
          imagePath(name);

        img.alt =
          name;


        const nameElement =
          document.createElement("div");

        nameElement.className =
          "top9-name";

        nameElement.textContent =
          name;


        const rank =
          document.createElement("div");

        rank.className =
          "top9-rank";


        if (index === 0) {

          rank.textContent =
            "♛ 1";

        } else if (
          index === 1
        ) {

          rank.textContent =
            "♕ 2";

        } else if (
          index === 2
        ) {

          rank.textContent =
            "♕ 3";

        } else {

          rank.textContent =
            String(index + 1);

        }


        card.appendChild(img);

        card.appendChild(rank);

        card.appendChild(
          nameElement
        );


        top9Members.appendChild(
          card
        );

      }
    );


    /* =====================================================
       FULL RANKING
    ====================================================== */

    ranking.forEach(
      (name, index) => {

        const row =
          document.createElement("div");

        row.className =
          "ranking-row";


        const number =
          document.createElement("div");

        number.className =
          "ranking-number";

        number.textContent =
          `${index + 1}`;


        const img =
          document.createElement("img");

        img.src =
          imagePath(name);

        img.alt =
          name;


        const nameElement =
          document.createElement("div");

        nameElement.className =
          "ranking-name";

        nameElement.textContent =
          name;


        const score =
          document.createElement("div");

        score.className =
          "ranking-score";

        score.textContent =
          `${Math.round(
            ratings[name]
          )} pt`;


        row.appendChild(number);

        row.appendChild(img);

        row.appendChild(
          nameElement
        );

        row.appendChild(score);


        rankingList.appendChild(
          row
        );

      }
    );

  }


  /* =========================================================
     BUTTON EVENTS
  ========================================================= */

  startButton.addEventListener(
    "click",
    () => {

      initializeGame();

    }
  );


  prelimNextButton.addEventListener(
    "click",
    () => {

      finishPrelimPage();

    }
  );


  prelimSkipButton.addEventListener(
    "click",
    () => {

      selectedInPrelim.clear();

      finishPrelimPage();

    }
  );


  startBattleButton.addEventListener(
    "click",
    () => {

      startBattle();

    }
  );


  drawButton.addEventListener(
    "click",
    () => {

      handleDraw();

    }
  );


  restartButton.addEventListener(
    "click",
    () => {

      initializeGame();

    }
  );


  /* =========================================================
     START STATE
  ========================================================= */

  showScreen(
    startScreen
  );

});
