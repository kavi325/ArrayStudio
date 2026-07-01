// ==========================================
// DS Studio Renderer
// ==========================================

function renderAll(){

    renderCurrentElements();

    renderVisualization();

}

// ==========================================
// CURRENT ELEMENTS
// ==========================================

function renderCurrentElements(){

    const values=document.getElementById("values");

    values.innerHTML="";

    const data=getArray();

    if(data.length===0){

        values.innerHTML=`
            <div class="emptyState">

                📦

                <br><br>

                Your data structure is empty.

            </div>
        `;

        return;

    }

    data.forEach((item,index)=>{

        const chip=document.createElement("div");

        chip.className="valueChip";

        chip.innerHTML=`

            <span>${item.value}</span>

            <div class="chipButtons">

                <button
                    class="editBtn"
                    onclick="editChip(${index})">

                    ✏️

                </button>

                <button
                    class="deleteBtn"
                    onclick="deleteChip(${index})">

                    🗑️

                </button>

            </div>

        `;

        values.appendChild(chip);

    });

}

// ==========================================
// VISUALIZATION
// ==========================================

function renderVisualization(){

    const output=document.getElementById("arrayOutput");

    output.innerHTML="";

    const mode=document
        .getElementById("renderMode")
        .value;

    switch(mode){

        case "array":

            renderArray(output);

            break;

        case "stack":

            renderStack(output);

            break;

    }

}
// ==========================================
// ARRAY RENDERER
// ==========================================

function renderArray(output){

    const data=getArray();

    if(data.length===0){

        return;

    }

    const array=document.createElement("div");

    array.className="array";

    data.forEach((item,index)=>{

        const container=document.createElement("div");

        container.className="cellContainer";

        // Index

        const idx=document.createElement("div");

        idx.className="index";

        idx.textContent=index;

        // Cell

        const cell=document.createElement("div");

        cell.className="cell";

        cell.textContent=item.value;

        // Auto Width

        const width=Math.max(
            80,
            String(item.value).length*14
        );

        cell.style.minWidth=width+"px";

        container.appendChild(idx);

        container.appendChild(cell);

        array.appendChild(container);

    });

    output.appendChild(array);

}
// ==========================================
// STACK RENDERER
// ==========================================

function renderStack(output){

    const data = getArray();

    if(data.length === 0){
        return;
    }

    // Main Stack Container
    const stackContainer = document.createElement("div");
    stackContainer.className = "stackContainer";

    // TOP Label
    const topLabel = document.createElement("div");
    topLabel.className = "stackLabel";
    topLabel.textContent = "TOP";

    stackContainer.appendChild(topLabel);

    // Stack Body
    const stack = document.createElement("div");
    stack.className = "stack";

    // Render from LAST to FIRST
    for(let i = data.length - 1; i >= 0; i--){

        const item = data[i];

        const cell = document.createElement("div");

        cell.className = "stackCell";

        cell.textContent = item.value;

        const width = Math.max(
            120,
            String(item.value).length * 14
        );

        cell.style.minWidth = width + "px";

        stack.appendChild(cell);

    }

    stackContainer.appendChild(stack);

    // BOTTOM Label
    const bottomLabel = document.createElement("div");
    bottomLabel.className = "stackLabel";
    bottomLabel.textContent = "BOTTOM";

    stackContainer.appendChild(bottomLabel);

    output.appendChild(stackContainer);

}
// ==========================================
// HELPER FUNCTIONS
// ==========================================

/**
 * Creates an index label.
 */
function createIndex(index){

    const idx = document.createElement("div");

    idx.className = "index";

    idx.textContent = index;

    return idx;

}

/**
 * Creates a standard array cell.
 */
function createArrayCell(value){

    const cell = document.createElement("div");

    cell.className = "cell";

    cell.textContent = value;

    const width = Math.max(
        80,
        String(value).length * 14
    );

    cell.style.minWidth = width + "px";

    return cell;

}

/**
 * Creates a stack cell.
 */
function createStackCell(value){

    const cell = document.createElement("div");

    cell.className = "stackCell";

    cell.textContent = value;

    const width = Math.max(
        120,
        String(value).length * 14
    );

    cell.style.minWidth = width + "px";

    return cell;

}

/**
 * Clears the visualization container.
 */
function clearVisualization(){

    const output = document.getElementById("arrayOutput");

    output.innerHTML = "";

}

/**
 * Returns the selected visualization mode.
 */
function getRenderMode(){

    return document
        .getElementById("renderMode")
        .value;

}
// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    const modeSelector = document.getElementById("renderMode");

    // Re-render when visualization mode changes
    if (modeSelector) {

        modeSelector.addEventListener("change", () => {

            renderVisualization();

        });

    }

    // Initial render
    renderAll();

});

// ==========================================
// FUTURE RENDERERS
// ==========================================
//
// These are placeholders for upcoming versions.
//
// renderQueue(output)
// renderLinkedList(output)
// renderBinaryTree(output)
// renderHeap(output)
//
// The switch statement inside renderVisualization()
// will simply call these functions when they're ready.
//
// ==========================================