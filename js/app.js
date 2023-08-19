
function triangleCalculate(){
    const base = getInput('triangle-base');
    const height = getInput('triangle-height')
    if(isNaN(base) || isNaN(height)){
        alert('please provide number')
        return;
    }
    const area = 0.5 * base * height;
    InnerText('triangle', area)
    calculateHistory('Triangle', area)
}

// Rectangle
document.getElementById('rectangle-calculate').addEventListener('click',function(){
    const width = getInput('rectangle-width');
    const length = getInput('rectangle-length')
    if(isNaN(width) || isNaN(length)){
        alert('please provide number')
        return;
    }
    const area =width * length;
    InnerText('rectangle', area)
    calculateHistory('Rectangle', area)
})

// parallelogram
document.getElementById('parallelogram-calculate').addEventListener('click', function(){
    const base = getInput('parallelogram-base');
    const height = getInput('parallelogram-height')
    if(isNaN(base) || isNaN(height)){
        alert('please provide number')
        return;
    }
    const area =base * height;
    InnerText('parallelogram', area)
    calculateHistory('Parallelogram', area)
})

// rhombus
function rhombusCalculator(){
    const diagonal = getInput('rhombus-diagonal');
    const diagonal2 = getInput('rhombus-diagonal2')
    if(isNaN(diagonal) || isNaN(diagonal2)){
        alert('please provide number')
        return;
    }
    const area = 0.5 * diagonal * diagonal2;
    InnerText('rhombus', area)
    calculateHistory('Rhombus', area)
}

// Pentagon
function pentagonCalculator(){
    const pentagonP = getInput('pentagon-p');
    const pentagonB = getInput('pentagon-b')
    if(isNaN(pentagonP) || isNaN(pentagonB)){
        alert('please provide number')
        return;
    }
    const area = 0.5 * pentagonP * pentagonB;
    InnerText('pentagon', area)
    calculateHistory('Pentagon', area)
}

// Ellipse                 
function ellipseCalculator(){
    const axisA = getInput('ellipse-axis');
    const axisB = getInput('ellipse-axis2')
    if(isNaN(axisA) || isNaN(axisB)){
        alert('please provide number')
        return;
    }
    const area = (Math.PI * axisA * axisB).toFixed(2);
    InnerText('ellipse', area)
    calculateHistory('Ellipse', area)
}




// reuseable function
function getInput(inputId){
  const input =  document.getElementById(inputId);
  const inputValue = input.value;
  const convertNum = parseFloat(inputValue);
  input.value = '';
    return convertNum
}
// innertext setup function 
function InnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerHTML = `${area} cm<sup>2</sup>`
}

// calculate history

function calculateHistory(name, area){
    const areaList = document.getElementById('area-list');

    const p = document.createElement('p');
    p.classList.add('my-4')

    p.innerHTML = `
    ${areaList.childElementCount + 1} ${name} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success capitalize ">Convert</button>
    `
    areaList.appendChild(p)
}