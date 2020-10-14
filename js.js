window.document.onload = function(event){ 
  const e = 'ewelinaschoonmaken@',
        mail = 'yahoo.com';

  const emailFiller = document.getElementsByClassName("spamspan-mail");

  emailFiller[0].text = `${e}${mail}`;
  emailFiller[0].href = `mailto:${e}${mail}`;
  
}();