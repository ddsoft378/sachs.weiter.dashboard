/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-09-14",
  monthLabel: "September 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:91300, _monthStartFollowers:90777, followerGoal:100000,
      viewsMonthly:4053286, newThisMonth:523, deltaViewsPct:0,
      erreichteKonten:387477, interaktionen:138180,
      newestPost:{typ:"reel",code:"DdOTA48KoMM",likes:631,comments:2,shares:7},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:28200, _monthStartFollowers:27347, followerGoal:35000,
      viewsMonthly:847304, newThisMonth:853, deltaViewsPct:0,
      erreichteKonten:144816, interaktionen:29346,
      newestPost:{typ:"p",code:"DdPHai-grfv",likes:159,comments:7,shares:1},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:24300, _monthStartFollowers:23837, followerGoal:30000,
      viewsMonthly:1127144, newThisMonth:463, deltaViewsPct:0,
      erreichteKonten:174927, interaktionen:26500,
      newestPost:{typ:"p",code:"DdO8KcPjmta",likes:174,comments:1,shares:2},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:20900, _monthStartFollowers:19958, followerGoal:25000,
      viewsMonthly:1218006, newThisMonth:942, deltaViewsPct:0,
      erreichteKonten:179658, interaktionen:57315,
      newestPost:{typ:"reel",code:"DdMQii8qfhT",likes:223,comments:2,shares:0},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
