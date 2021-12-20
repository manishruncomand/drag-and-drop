const imgbox = document.querySelector(".imgBox");
const whiteboxs = document.getElementsByClassName("whiteBox");

imgbox. addEventListener('dragstart', (e)=>{
    console.log("drag start now");
    e.target.className += " hold";
    setTimeout(() => {
        e.target.className += " hide";
    },0);
    
});
imgbox. addEventListener('dragend',(e)=>{
    console.log("drag end now");
    e.target.className = "imgBox";
});

for (whiteBox of whiteboxs){
    whiteBox .addEventListener('dragover',(e)=>{
        e.preventDefault();
        console.log("dragover start now");


    });
    whiteBox .addEventListener('dragenter',()=>{
        console.log("dragenter start now");

    });
    whiteBox .addEventListener('dragleave',()=>{
        console.log("dragleave start now");

    });
    whiteBox .addEventListener('drop',(e)=>{
        console.log("drop start now");
        e.target.append(imgbox);
    });
    
}