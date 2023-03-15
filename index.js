let arr = [3, 6, 9, 12, 15, 18, 21, 24];

let n = arr.length;
let arr2=[3,6,9,12,15,18,21,24];
let k = 1;



function rotate(){
    for(let i=0; i<n; i++){
        arr2[(i+k)%n] = arr[i];
    }
    for(let i=0; i<n; i++){
        arr[i] = arr2[i]
    }

    console.log(arr2);

    document.getElementsByTagName('h1')[0].innerHTML = arr2[0];
    document.getElementsByTagName('h1')[1].innerHTML = arr2[1];
    document.getElementsByTagName('h1')[2].innerHTML = arr2[2];
    document.getElementsByTagName('h1')[3].innerHTML = arr2[7];
    document.getElementsByTagName('h1')[5].innerHTML = arr2[3];
    document.getElementsByTagName('h1')[6].innerHTML = arr2[6];
    document.getElementsByTagName('h1')[7].innerHTML = arr2[5];
    document.getElementsByTagName('h1')[8].innerHTML = arr2[4];
}

const btn = document.getElementById('btn')
console.log(btn)
if(btn){
    btn.addEventListener('click' , rotate);
}

// setInterval(rotate, 2000);





