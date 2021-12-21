//# Create an email pattern ...


let  email   = 'mdakashshikder958@gmail.com'

let  conemail = /^[a-zA-Z0-9-]*@[a-zA-z]*\.[a-z]{1,5}$/;


console.log(conemail.test(email));










//# Create a Bangladeshi phone number pattern....

let  number    = '01819522713';

let  nmp = /^(01|8801|\+8801)[0-9]{9}$/;


console.log(nmp.test(number));















//# Create a  username pattern...


let  euser    = 'freelancerakash'

let  coneuser = /^[a-z\.]{6,16}$/;

console.log(coneuser.test(euser));










//# Create a password pattern .....

let  pass    = 'akash&$%^%^&5454!AB(){}[]?><';

let  conpass = /[\.]*$/;


console.log(conpass.test(pass));










//# Create a zipcode pattern  ...

let  zip     = '1254';

let  conzip  = /^[0-9]{4}$/;


console.log(conzip.test(zip));




