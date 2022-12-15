//sections
const headerSection=document.querySelector('#header');
const trendingPreviewSection=document.querySelector('#trendingPreview');
const categoriesPreviewSection=document.querySelector('#categoriesPreview');
const genericSection=document.querySelector('#genericList');
const movieDetailSection=document.querySelector('#movieDetail');
const likedSection=document.querySelector('#liked');

//lists and containers
const searchForm=document.querySelector('#searchForm');
const trendingMoviesPreviewList=document.querySelector('.trendingPreview-movieList');
const categoriesPreviewList=document.querySelector('.categoriesPreview-list');
const movieDetailCategoriesList=document.querySelector('#movieDetail .categories-list');
const relatedMoviesContainer=document.querySelector('.relatedMovies-scrollContainer');
const likedMoviesListArticle = document.querySelector('.liked-movieList');

//elements
const headerTitle=document.querySelector('.header-title');
const arrowBtn=document.querySelector('.header-arrow');
const searchFormGeneral = document.querySelector('form').addEventListener('submit', (event)=> {
    event.preventDefault();
});
const headerCategoryTitle=document.querySelector('.header-title--categoryView');


const searchFormInput=document.querySelector('#searchForm input');
const searchFormBtn=document.querySelector('#searchBtn');
const trendingBtn=document.querySelector('.trendingPreview-btn');


const movieDetailTitle=document.querySelector('.movieDetail-title');
const movieDetailDescription=document.querySelector('.movieDetail-description');
const movieDetailScore=document.querySelector('.movieDetail-score');