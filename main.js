function chngColor(n)
{
    
    for(let i=1; i <=8;i++)
    {
        let element = document.querySelector(".feature-btn"+n);
    
        let element1 = document.querySelector(".feature-btn"+i);
        if(i==n){
            element.style.background = "#E8450C" ;
            element.style.color = "#FFFFFF"
        }
        else
        {
            element1.style.background = 'none' ;
            element1.style.color = "#000000"
        }
    }
}

// collapse, homepage
function minusicon(n){
    let btn = document.getElementById("btn"+n);
    if(btn.innerHTML=="^")
    {
      btn.innerHTML = "⌄";
    }
    else
    {
      btn.innerHTML = "^";
    }
  }
  