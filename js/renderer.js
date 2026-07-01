// =========================
// Array Studio Renderer
// =========================

function renderCurrentElements() {

    const values = document.getElementById("values");

    values.innerHTML = "";

    const data = getArray();

    if (data.length === 0) {

        values.innerHTML = `
            <div class="emptyState">
                📦<br><br>
                Your array is empty.<br>
                Add your first element above.
            </div>
        `;

        return;
    }

    data.forEach((item, index) => {

        const chip = document.createElement("div");

        chip.className = "valueChip";

        chip.innerHTML = `
            <span>${item.value}</span>

            <div class="chipButtons">

                <button class="editBtn" onclick="editChip(${index})">
                    ✏️
                </button>

                <button class="deleteBtn" onclick="deleteChip(${index})">
                    🗑️
                </button>

            </div>
        `;

        values.appendChild(chip);

    });

}

function renderVisualization() {

    const output = document.getElementById("arrayOutput");

    output.innerHTML = "";

    const data = getArray();

    if(data.length === 0){

        return;

    }

    const array = document.createElement("div");

    array.className = "array";

    data.forEach((item,index)=>{

        const container=document.createElement("div");
        container.className="cellContainer";

        const idx=document.createElement("div");
        idx.className="index";
        idx.textContent=index;

        const cell=document.createElement("div");
        cell.className="cell";
        cell.textContent=item.value;

        container.appendChild(idx);
        container.appendChild(cell);

        array.appendChild(container);

    });

    output.appendChild(array);

}

function renderAll(){

    renderCurrentElements();

    renderVisualization();

}