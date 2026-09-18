/* ============================================================
   sachs.weiter – Dashboard-Daten
   Wird taeglich vom Task 'sachsweiter-dashboard-feed-opus' aus
   06_Analytics/analytics_daily/sachsweiter_analytics_latest.json erzeugt.
   Ziele (goals, followerGoal, goals2026) werden dabei bewahrt.
   ============================================================ */
window.SW_DATA = {
  updated: "2026-09-16",
  monthLabel: "September 2026",

  goals: { followersTotal: 200000, viewsMonthly: 10000000 },

  cities: [
    {
      key:"dresden", name:"Dresden",
      followers:91387, _monthStartFollowers:90777, followerGoal:100000,
      viewsMonthly:4053286, newThisMonth:610, deltaViewsPct:0,
      erreichteKonten:387477, interaktionen:138180,
      newestPost:{typ:"reel",code:"DdUFTwmM9ZA",likes:174,comments:10,shares:0},
      goals2026:["100.000 Follower","Dresden-Website live","Große Aktion (Müllsammeln, Wanderung)"]
    },
    {
      key:"leipzig", name:"Leipzig",
      followers:28349, _monthStartFollowers:27347, followerGoal:35000,
      viewsMonthly:847304, newThisMonth:1002, deltaViewsPct:0,
      erreichteKonten:144816, interaktionen:29346,
      newestPost:{typ:"p",code:"DdRnF6SAg83",likes:173,comments:82,shares:0},
      goals2026:["35.000 Follower","Mehr Ausflüge, Unternehmungen & Gratis-Tipps","Dauerhaft passende Kooperationspartner"]
    },
    {
      key:"chemnitz", name:"Chemnitz",
      followers:24352, _monthStartFollowers:23837, followerGoal:30000,
      viewsMonthly:1127144, newThisMonth:515, deltaViewsPct:0,
      erreichteKonten:174927, interaktionen:26500,
      newestPost:{typ:"p",code:"DdUF1qtDiho",likes:62,comments:0,shares:0},
      goals2026:["30.000 Follower","Team ausbauen","Content-Vielfalt & neue Gesichter etablieren"]
    },
    {
      key:"erfurt", name:"Erfurt",
      followers:20963, _monthStartFollowers:19958, followerGoal:25000,
      viewsMonthly:1218006, newThisMonth:1005, deltaViewsPct:0,
      erreichteKonten:179658, interaktionen:57315,
      newestPost:{typ:"reel",code:"DdT3wRFohlo",likes:488,comments:13,shares:0},
      goals2026:["25.000 Follower","Zur Go-to-Seite der Stadt werden","Erste passende Kooperationspartner"]
    }
  ]
};
