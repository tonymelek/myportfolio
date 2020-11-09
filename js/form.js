const clientId = 'fbf3c301b2a749407b4539437d664f03'
const clientSecret = '2cdb0b11ae78edfcd9cf77174d372c64'
$('form').submit((e) => {
    e.preventDefault()
    const sender = $('#InputName').val()
    const message = $('#message').val()
    const email = $('#Email1').val()
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
                    "HTMLPart": `<h3>${sender}- ${email}</h3><pre style="font-family:arial;font-size:12pt;">${message}</pre>`
                }
            ]
        })
    }).then(function (res) {
        alert("Thanks\n your message has been successfully sent to Tony");
        location.reload()
    }).catch(err => console.log(err))
})
