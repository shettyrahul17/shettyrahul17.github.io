
var unit = [" ","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteeen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
var tens = [" ","Ten","Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninty"];
var u,t,h,T,Te,m,Tm = 0;
function OneD(num)
{
    return unit[num]
}

function TwoD(num)
{
    u = num%10;
    t = Math.floor(num/10);
    return tens[t]+unit[u]
}

function ThreeD(num)
{
    var out = ""
    h=Math.floor(num/100);
    if(h!=0)
    out += unit[h]+" Hundered "
    if(num%100 <=19 && num%100>=0)
    {
        out += OneD(num%100);
    }
    else
    {
        out += TwoD(num%100);
    }
    return out
}

function take_input()
{
    var num = document.getElementById('num').value
    if(num>=1 && num<=19)
    {
        var output = OneD(num);
        document.getElementById("out").innerHTML = output
    }
    else if(num>=20 && num<=99)
    {
        var output = TwoD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=100 && num<=999)
    {
        var output = ThreeD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=1000 && num<=9999)
    {
       var output = FourD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=10000 && num<=99999)
    {
       var output = FiveD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=100000 && num<=999999)
    {
        var output = SixD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=1000000 && num<=9999999)
    {
       var output = SevenD(num);
        document.getElementById("out").innerHTML = output

    }
    else if(num>=10000000 && num<=99999999)
    {
       var output = EightD(num);
        document.getElementById("out").innerHTML = output
    }
}