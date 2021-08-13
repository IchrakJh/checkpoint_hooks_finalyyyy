import './App.css';
import MovieList from './components/MovieList/MovieList';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from './components/Filter/Filter';



function App() {

  const [movies, setMovies] = useState([
    {
    title:"THELMA ET LOUISE",
    poster:"http://www.slate.fr/sites/default/files/styles/1200x680/public/thelmalouiseune.jpg",
    description:"Deux amies lassées de leur vie quotidienne aux côtés de leur mari et leur petit ami",
    rating:5,
    },{
    title:"PIERROT LE FOU",
    poster:"https://pce.univ-tours.fr/sites/default/files/styles/illustration_medium/public/ged/pierrot-le-fou-2_focusfillwzezmzysodawlcj4iiwzmdrd.jpg?itok=7E93zGdl",
    description:"Ce road movie franco-italien est l’un des premiers films de ce genre, ce qui fait de lui un classique.",
    rating:2,
    },{
    title:"EASY RIDER",
    poster:"https://www.hollywoodreporter.com/wp-content/uploads/2019/07/easy_rider_1_-_h_-_1969.jpg",
    description:"Deux jeunes motards, Wyatt et Billy, veulent se rendre à la fête du Carnaval de la Nouvelle Orléans. ",
    rating:1,
    },{
    title:"INTO THE WILD",
    poster:"https://focus.nouvelobs.com/2021/03/24/122/0/1119/558/1377/667/75/0/6a6d8c2_673143668-into-the-wild.JPG",
    description:"Christopher a 22 ans et est promis à un bel avenir. Mais, le jeune homme n’entend pas mener cette vie déjà toute tracée et sans surprise. ",
    rating:3,
  },
  {
    title: "Oxygène",
    poster:"https://pyxis.nymag.com/v1/imgs/27b/053/10a0030f37134dcbca49af2e7f0a81b308-oxygen.1x.rsocial.w1200.jpg",
    description: "Une jeune femme se réveille seule dans une capsule cryogénique.Elle a perdu la mémoire et ne sait pas comment elle a pu finir enfermée dans un coffre de la taille d'un cercueil.",
    rating: 5,
  },
  {
    title: "La Nuée",
    poster:"https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2021-06/LA%20NUE%CC%81E_120x160_HD.jpg",
    description: "La Nuée est un film français réalisé par Just Philippot, sorti en 2020. Il s'agit de son premier long métrage. Il est sélectionné à la Semaine de la critique du festival de Cannes 2020, annulé en raison de la pandémie de Covid-19.",
    rating: 4,
  },
  {
    title: "Koğuştaki Mucize",
    poster:"https://www.programme-tv.net/imgre/fit/https.3A.2F.2Fprd2-tel-epg-img.2Es3-eu-west-1.2Eamazonaws.2Ecom.2Fprogram.2F83bf7af784fa3c72.2Ejpeg/630x355/quality/80/crop-from/top/7-kogustaki-mucize.jpeg",
    description: "Memo, un berger handicapé mental, vit avec sa fille et sa grand-mère dans un village de la côte égéenne turque. Un jour, sa vie est bouleversée lorsque l'enfant du commandant local est assassiné et que Memo est accusé du meurtre et condamné à mort.",
    rating: 2,
  },
  {
    title: "La Femme à la fenêtre",
    poster:"https://imgsrc.cineserie.com/2021/04/la-femme-a-la-fenetre-nouvelle-bande-annonce-du-film-netflix-avec-amy-adams.jpg?ver=1",
    description: "Le docteur Anna Fox boit seule dans son appartement en regardant de vieux films. Lorsque les Russell emménagent près de chez elle, elle se met à espionner cette famille si parfaite, jusqu'à ce qu'un drame ne survienne.",
    rating: 3,
  },
  
  {
    title: "Run",
    poster:"https://fr.web.img2.acsta.net/pictures/21/06/25/17/30/1095745.jpg",
    description: "Run est un film d'horreur américain réalisé par Aneesh Chaganty, sorti en 2020. Il est présenté au Nightstream Film Festival avant une diffusion sur la plateforme Hulu pour les États-Unis.",
    rating: 1,
  },
  {
    title: "Annihilation",
    poster:"https://m.media-amazon.com/images/M/MV5BMTk2Mjc2NzYxNl5BMl5BanBnXkFtZTgwMTA2OTA1NDM@._V1_.jpg",
    description: "Lena, biologiste et ancienne militaire, participe à une mission destinée à comprendre ce qui est arrivé à son mari dans une zone où un mystérieux et sinistre phénomène se propage le long des côtes américaines.",
    rating: 5,
  },
  {
    title: "Bloodline",
    poster:"https://media.senscritique.com/media/000019746507/source_big/Bloodline.jpg",
    description: "Lauren, procureure accomplie et héritière d'une riche et puissante famille new yorkaise, voit sa vie être bouleversée lors de la mort soudaine et mystérieuse de son père. ",
    rating: 3,
  },
  {
    title: "The Call",
    poster:"https://moviesmood.net/wp-content/uploads/2021/02/%D9%85%D8%B4%D8%A7%D9%87%D8%AF%D8%A9-%D9%81%D9%8A%D9%84%D9%85-The-Call-2020-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-%D8%A7%D9%84%D9%85%D9%83%D8%A7%D9%84%D9%85%D8%A9.jpg",
    description: "The Call est un thriller sud-coréen écrit et réalisé par Lee Chung-hyun, sorti en 2020. Il s'agit de l'adaptation libre du film portoricano-britannique The Caller de Matthew Parkhill.",
    rating: 5,
  },
  {
    title: "Holidate",
    poster:"https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABXPYSKRamWm38KuX53054YtqER87QIAoejD_mfJsYPaWE0llEQ2YXozt3pyfDdPo9eglw6_Qf7pXZDt2-EvEFI7--ujf.jpg?r=064",
    description: "Lors des fêtes, deux célibataires endurcis se retrouvent souvent à la table des enfants ou aux côtés d'inutiles petits amis. À la suite d'une rencontre fortuite, ils se promettent de s'accompagner l'un l'autre au fil du calendrier festif des mois à venir. ",
    rating: 5,
  },
  {
    title: "The Old Guard",
    poster:"http://www.premiere.fr/sites/default/files/styles/partage_rs/public/2020-07/old.jpg",
    description:"Une équipe soudée de mercenaires immortels, dirigée par la redoutable Andy, lutte depuis des siècles pour protéger les humains. Lors d'une mission des plus périlleuses, les pouvoirs hors du commun du groupe sont soudainement révélés au grand jour.",
    rating: 2,
  },
  
  {
    title:"LAS VEGAS PARANO",
    poster:"https://media.senscritique.com/media/000010922245/1200/Las_Vegas_Parano.jpg",
    description:"Ce road movie complètement décalé retrace le parcours du journaliste Raoul Duke et de son avocat Mr.Gonzo",
    rating:5,
  },
  {
    title:"FLEUR DU DÉSERT",
    poster:"https://premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2019-03/Untitled%20collage%20%283%29_2.jpg",
    description:"Waris est issue d’une famille de nomades somaliens. Malgré les difficultés imposées par ses conditions de vie",
    rating:2,
  },
]);
   
  const [searchCondition, setSearchCondition] = useState("");
  const [selectRating, setSelectRating] = useState(0)

  return (
    <div className="App" style={{backgroundColor: "gray"}}>
      
      <Filter 
      setSearchCondition={setSearchCondition} 
      setSelectRating={setSelectRating} 
      selectRating={selectRating}
      movies={movies}
      setMovies={setMovies}/>     

      <MovieList movies={movies} 
      searchCondition={searchCondition} 
      selectRating={selectRating}/>
   
    </div>
  );
}

export default App;
