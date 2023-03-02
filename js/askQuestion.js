function questionSubmitted() {
    email = document.getElementById("email").value;
    usersName = document.getElementById("email").value;
    console.log(email);
    sendMail();

    function sendMail(name, email, subject, message) {
        subject = "Thank you for the question!";
        message = "Thank you the the message! Our team will respond as soon as possible!"
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.set('Authorization', 'Basic ' + btoa('<API Key>'+":" +'<Secret Key>'));
      
        const data = JSON.stringify({
          "Messages": [{
            "From": {"Email": "TSAtmosphere2023@gmail.com", "Name": "<YOUR NAME>"},
            "To": [{"Email": email, "Name": usersName}],
            "Subject": subject,
            "TextPart": message
          }]
        });
      
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: data,
        };
      
        fetch("https://api.mailjet.com/v3.1/send", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
      }
      
      sendMail('Test Name',"<YOUR EMAIL>",'Test Subject','Test Message')
    
    /*function sendEmail() {
      Email.send({
        Host: "smtp.gmail.com",
        Username: "TSAtmosphere2023@gmail.com",
        Password: "YrfB9xDYeQtBVis",
        To: "lucas.j.famous@gmail.com",
        From: "TSAtmosphere2023@gmail.com",
        Subject: "Question Submitted on our site",
        Body: "Thank you for the question, we will get back as soon as possible!",
      })
        .then(function (message) {
          alert("mail sent successfully")
        });
    }

    window.alert("Thank you for your question!");

   
*/

}