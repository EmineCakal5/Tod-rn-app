const express = require('express');
const router = express.Router();

const fileRead = require('../utils/readTheFile');
const area = 'todmena';

// Main
router.get('/', (req, res) => {
  res.send({ message: `${area} servisine hoşgelsiniz...` });
});

// Home Page
router.get('/page/home', (req, res) => {
  res.send(fileRead(area, 'page_home.json'));
});

// Tv Shows
router.get('/page/tvshows', (req, res) => {
  res.send(fileRead(area, 'tvshows.json'));
});

// Movies Page
router.get('/page/movies', (req, res) => {
  res.send(fileRead(area, 'movies.json'));
});

// MyList Page
router.get('/page/mylist', (req, res) => {
  res.send(fileRead(area, 'mylist.json'));
});

// Sports Page
router.get('/page/sports', (req, res) => {
  res.send(fileRead(area, 'page_sports.json'));
});

// Tournaments
router.get('/tournaments', (req, res) => {
  res.send(fileRead(area, 'tournaments.json'));
});

// Box Sets
router.get('/boxsets', (req, res) => {
  res.send(fileRead(area, 'boxsets.json'));
});

// competitions
router.get('/competitions', (req, res) => {
  res.send(fileRead(area, 'competitions.json'));
});

// newontod
router.get('/newontod', (req, res) => {
  res.send(fileRead(area, 'newontod.json'));
});

// sports
router.get('/sports', (req, res) => {
  res.send(fileRead(area, 'sports.json'));
});

// trendingontod
router.get('/trendingontod', (req, res) => {
  res.send(fileRead(area, 'trendingontod.json'));
});

// top10inregion
router.get('/top10inregion', (req, res) => {
  res.send(fileRead(area, 'top10inregion.json'));
});

// top10inlocal
router.get('/top10inlocal', (req, res) => {
  res.send(fileRead(area, 'top10inlocal.json'));
});

// topcategory10inlocal
router.get('/topcategory10inlocal', (req, res) => {
  res.send(fileRead(area, 'topcategory10inlocal.json'));
});

// whatsonnow
router.get('/whatsonnow', (req, res) => {
  res.send(fileRead(area, 'whatsonnow.json'));
});

// continuewatching
router.get('/continuewatching', (req, res) => {
  res.send(fileRead(area, 'continuewatching.json'));
});

// horizontalcollection
router.get('/horizontalcollection', (req, res) => {
  res.send(fileRead(area, 'horizontalcollection.json'));
});

// squarecollection
router.get('/squarecollection', (req, res) => {
  res.send(fileRead(area, 'squarecollection.json'));
});

// verticalcollection
router.get('/verticalcollection', (req, res) => {
  res.send(fileRead(area, 'verticalcollection.json'));
});

// comingsoon
router.get('/comingsoon', (req, res) => {
  res.send(fileRead(area, 'comingsoon.json'));
});

// superheroesontod
router.get('/superheroesontod', (req, res) => {
  res.send(fileRead(area, 'superheroesontod.json'));
});

// dontmissout
router.get('/dontmissout', (req, res) => {
  res.send(fileRead(area, 'dontmissout.json'));
});

// liveandupcoming
router.get('/liveandupcoming', (req, res) => {
  res.send(fileRead(area, 'liveandupcoming.json'));
});

// livefootball
router.get('/livefootball', (req, res) => {
  res.send(fileRead(area, 'livefootball.json'));
});
// showcase
router.get('/showcase', (req, res) => {
  res.send(fileRead(area, 'showcase.json'));
});

//video
router.get('/video', (req, res) => {
  res.send(fileRead(area, 'videodetail.json'));
});

//watch-test-endpoint
router.get('/watch/:videoId/:type', (req, res) => {
  const videoId = req.params.videoId;
  const type = req.params.type;

  const datas = fileRead(area, 'watch.json');
  const data = datas.data.find((item) => {
    if (item.id === videoId && item.type === type) return item;
  });

  return res.json(data);
});
// tod360
router.get('/tod360', (req, res) => {
  res.send(fileRead(area, 'tod360.json'));
});
// Movie Detail Page
router.get('/productDetail', (req, res) => {
  res.send(fileRead(area, 'productDetail.json'));
});

// Tv Shows Detail Page
router.get('/tvshowdetails', (req, res) => {
  res.send(fileRead(area, 'tvshowdetails.json'));
});
// Tv Shows Detail Episodes
router.get('/episodes', (req, res) => {
  res.send(fileRead(area, 'episodes.json'));
});
module.exports = router;
