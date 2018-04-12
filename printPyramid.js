function printPyramid(container, height, char) {

    function drawRowPart(n, divRow, className, char) {
        for (let i = 0; i < n; i++) {
            $(`<div class=${className}>${char}</div>`)
                .appendTo(divRow);
        }
    }

    for (var i = 1; i <= height; i++) {
        container.append(`<div id="r${i}" class="rowblock"/>`);
        let divRow = $(`#r${i}`);
        drawRowPart(height - i, divRow, "block", "");
        drawRowPart(i + 1, divRow, "block", char);
    }
}