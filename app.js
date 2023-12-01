addEventListener("DOMContentLoaded", ()=>{
    const box=document.querySelector(".box");
    let blocks=[];
    const maxBlocks=10;
    let numBlocks=0;
    let fallSpeed=10;

    function createBlock(){
        const block=document.createElement("div");
        block.classList.add("block");
        block.style.left=(Math.random()*(500-30))+"px";
        blocks.push(block);
        numBlocks=blocks.length;
        console.log(numBlocks)
        box.appendChild(block);

    }


    function fall(){   
        for(let i=0;i<numBlocks;i++){
        blocks[i].style.top=(blocks[i].offsetTop+fallSpeed)+"px";
        if(blocks[i].offsetTop>(500-30)){
            box.removeChild(blocks[i]);
            if(blocks.length<maxBlocks){
                createBlock();
            }
        } 



        }
    }

    createBlock();  
    createBlock();
    console.log(numBlocks);
    //fall()
    //setInterval(fall, 100);
})