function printPyramid(containerSelector, height, char) {
    function drawRowPart(n, divRow, className, char)
    {
        for (let i=0;i<n;i++)
        {
            let divBlock = document.createElement("div");
            divBlock.className=className;
            divBlock.innerHTML=char;
            divRow.appendChild(divBlock);
        };
    }

    const container = document.body.querySelector(containerSelector);
    for (var i=1;i<=height;i++){
       
        var divRow = document.createElement("div");
        container.appendChild(divRow);
        
        drawRowPart(height-i, divRow, "block", "");
        drawRowPart(i+1, divRow, "block", char);
    }
};