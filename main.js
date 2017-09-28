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
    $.ajax({
        url: urlWithKey,
        type: 'POST',
        data: JSON.stringify({longUrl: urlToShorten});
        dataType: 'json',
        contentType: 'application/json',
        success(response){
          $responseField.append('<p>Your shortened url is: </p><p>' + response.id + '</p>');  
        },
        error(jqXHR, status, errorThrown){
            console.log(jqXHR);
        }
    });
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