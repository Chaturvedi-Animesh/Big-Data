const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2ec6b9a50e8b49a9964dec11ac6279ec');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
module.exports.headlines= newsapi.v2.topHeadlines({
  country: 'in'
}).then(response => {
  return response
});
// To query /v2/everything
// You must include at least one q, source, or domain
// newsapi.v2.everything({
//   q: 'bitcoin',
//   sources: 'bbc-news,the-verge',
//   domains: 'bbc.co.uk, techcrunch.com',
//   from: '2017-12-01',
//   to: '2017-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// });
// // To query sources
// // All options are optional
// newsapi.v2.sources({
//   category: 'technology',
//   language: 'en',
//   country: 'us'
// }).then(response => {
//   console.log(response);
//   /*
//     {
//       status: "ok",
//       sources: [...]
//     }
//   */
// });