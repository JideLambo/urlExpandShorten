// Include data for accessing Google APIs

const apiKey = 'AIzaSyAxAmxXBn1lS7ZsdXc0fhUP3m3tfTW0ysA';

const url = 'https://www.googleapis.com/urlshortener/v1/url';


// Some page elements

const $inputField = $('#input');
const $expandButton = $('#expand');
const $shortenButton = $('#shorten');
const $responseField = $('#responseField');


//AJAX functions

function expandUrl(){
    const urlToExpand = url + '?shortUrl=' + $inputField.val() + '&key=' + apiKey;
    
    const xhr = new XMLHttpRequest();
    
    xhr.responseType = 'json';
    
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            $responseField.append('<p>Your expanded url is: </p><p>' + xhr.response.longUrl + '</p>');
        }
    }
    
    xhr.open('GET', urlToExpand);
    xhr.send();
}

function expand(){
    $responseField.empty();
    expandUrl();
    return false;
}

$expandButton.click(expand);