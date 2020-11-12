const clientId = 'fbf3c301b2a749407b4539437d664f03'
const clientSecret = '2cdb0b11ae78edfcd9cf77174d372c64'
let ip;
let country;
let region;
let city;

$('#InputName').keyup(()=>{
    if($('#InputName').val().length<2){
        $('#InputName').addClass('bad-input')
        $('#InputName').removeClass('good-input')
    }else{
        $('#InputName').removeClass('bad-input')
        $('#InputName').addClass('good-input')
    }
})
$('#message').keyup(()=>{
    if($('#message').val().length<5){
        $('#message').addClass('bad-input')
        $('#message').removeClass('good-input')
    }else{
        $('#message').removeClass('bad-input')
        $('#message').addClass('good-input')
    }
})

$.get("https://ipinfo.io?token=c8dedc79c07efe", function (response) {
    ({ip,country,city,region}=response);
}, "jsonp")
$('form').submit((e) => {
    e.preventDefault()
    const sender = $('#InputName').val()
    const message = $('#message').val()
    const email = $('#Email1').val()
    if(sender.length<2||message.length<5){
        alert('Sorry, you need to add your name and a message before submitting the form')
        return
    }
    $.post({
        url: 'https://cors-anywhere.herokuapp.com/https://api.mailjet.com/v3.1/send',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        data: JSON.stringify({
            "Messages": [
                {
                    "From": {
                        "Email": "tonnabil@gmail.com",
                        "Name": `Message from-${sender}`
                    },
                    "To": [
                        {
                            "Email": "tonymelek.au@gmail.com",
                            "Name": "Tony Melek"
                        }
                    ],
                    "Subject": `${sender}`,
                    "HTMLPart": `<h3>${sender}- ${email}</h3><pre style="font-family:arial;font-size:12pt;">${message}
                    ${city},${region},${country}
                    ${ip}</pre>`
                }
            ]
        })
    }).then(function (res) {
        alert("Thanks\n Your message has been successfully sent to Tony");
        location.reload()
    }).catch(err => console.log(err))
})
