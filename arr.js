let val=()=>
{
    console.log("a");
};
let btn=document.querySelector(".btn");
let div;
let ab;
let div1=document.querySelector(".loaderhead");
console.log(div1);
async function abb()
{
    ab=document.querySelector(".name");
    div=document.querySelector(".div");
    div.innerHTML=ab.value;
    ab=ab.value;
    let data=await mn(ab);
    //console.log(data);
    let i;
    for (i of data.results)
    {
        if(i.name.toLowerCase()==ab.toLowerCase())
        {
            data=i;
        }
    }
    console.log(data);
    data=data.image.url;
    if(ab!="")
    {
        div1.remove();
    }
    let newnode=document.createElement("img");
    newnode.setAttribute("src",`${data}`);
    div.appendChild(newnode);
}
async function mul(ab) {
    let x = await fetch(`https://www.superheroapi.com/api.php/a9849035a4e096d0c41b9cbb8306d312/search/${ab}`);
    x= await x.json();
    return x;
}
async function mn(ab) {
    let data = await mul(ab);
    return data;
}