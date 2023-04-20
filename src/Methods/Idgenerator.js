const alphabet=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9'];

export function stringGenerator(){
    let string='';
    for(let i=0;i<10;i++){
        string+=alphabet[Math.floor(Math.random()*alphabet.length)];
    }
    return string;
}

