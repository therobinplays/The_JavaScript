function great(a,b,c){
    if(a>b && a>c){
        console.log(`The number ${a} is greater`);

    }
    else if(b>c && b>a){
        console.log(`The Number ${b} is Greater `);
    }

    else{
        console.log(`The number ${c} is Greater`);

    }
    return a,b,c;
}

great(5,9,22);