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
    
    $.ajax({
        url: urlToExpand,
        type: 'GET',
        dataType: 'json',
        success(response){
          $responseField.append('<p>Your expanded url is: </p><p>' + response.longUrl + '</p>');  
        },
        error(jqXHR, status, errorThrown){
            console.log(jqXHR);
        }
    });
}

function shortenUrl(){
    const urlWithKey = url + '?key=' + apiKey;
    const urlToShorten = $inputField.val();
    const data = JSON.stringify({
        longUrl: urlToShorten
    });
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onreadystatechange = function(){
        if(xhr.readyState === XMLHttpRequest.DONE){
            $responseField.append('<p>your shortened url is: </p><p>' + xhr.response.id + '</p>');
        }
    }
    xhr.open('POST', urlWithKey);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
}

function expand(){
    $responseField.empty();
    expandUrl();
    return false;
}

function shorten(){
    $responseField.empty();
    shortenUrl();
    return false;
}

$expandButton.click(expand);
$shortenButton.click(shorten);