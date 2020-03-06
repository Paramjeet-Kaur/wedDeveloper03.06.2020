var brownbear={whileloopadder:
function a(startnumber,endnumber,stepnumber){
    currentnumber=startnumber;
    sum=0;
    while(currentnumber>=endnumber)
    {
        sum=sum+currentnumber;
        currentnumber=currentnumber-stepnumber;
    }
    return(sum);

}
};
module.exports=brownbear;

