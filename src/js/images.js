import imagesServices from './images-service'
import imageItemTamplate from './../templates/image.hbs'
import imagesService from './images-service';

const refs = {
    searchForm: document.querySelector(".js-search-form"),
    imageContainer: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.js-btn-load-more')
};

refs.searchForm.addEventListener("input", searchFormInputHandler);
refs.loadMoreBtn.addEventListener('click',loadMoreBtnHandler)

function searchFormInputHandler (e) { 
    e.preventDefault(); 
    const inputValue = e.target.value;
    imagesService.searchQuery = inputValue;
    clearList ();
    imagesServices.resetPage();
    fetchItems();
}
function isertListItems (items) {
    refs.imageContainer.insertAdjacentHTML('beforeend', items)
}

function buildListItemMarkup (items) {
    return imageItemTamplate(items)
}

function clearList () {
    refs.imageContainer.innerHTML = '';
}
function loadMoreBtnHandler() {
    fetchItems();

}
function fetchItems (){
    if (imagesService.searchQuery !== '') {
        imagesServices.fetchImages()
        .then(data => { 
            const markup = buildListItemMarkup (data.hits);
            isertListItems(markup);
            scroll ()
    });
    }

}
function scroll () {
    window.scrollTo({
        top: document.documentElement.offsetHeight,
        left: 0,
        behavior: "smooth"
      });
}