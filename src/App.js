import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const users = [
  {
    name: 'Kokomi',
    imageUrl: 'ui-avataricon-kokomi.png',
    id: 'drag1'
  },
  {
    name: 'Yae',
    imageUrl: 'ui-avataricon-yae.png',
    id: 'drag2'
  },
  {
    name: 'Nahida',
    imageUrl: 'ui-avataricon-nahida.png',
    id: 'drag3'
  },
  {
    name: 'Neuvillette',
    imageUrl: 'ui-avataricon-neuvillette.png',
    id: 'drag4'
  },
  {
    name: 'HuTao',
    imageUrl: 'ui-avataricon-hutao.png',
    id: 'drag5'
  },
  {
    name: 'zhongli',
    imageUrl: 'ui-avataricon-zhongli.png',
    id: 'drag6'
  },
  {
    name: 'shougun',
    imageUrl: 'ui-avataricon-shougun.png',
    id: 'drag7'
  },
  {
    name: 'ganyu',
    imageUrl: 'ui-avataricon-ganyu.png',
    id: 'drag8'
  },
  {
    name: 'furina',
    imageUrl: 'ui-avataricon-furina.png',
    id: 'drag9'
  },
  {
    name: 'kazuha',
    imageUrl: 'ui-avataricon-kazuha.png',
    id: 'drag10'
  },
  {
    name: 'ayaka',
    imageUrl: 'ui-avataricon-ayaka.png',
    id: 'drag11'
  }
];

class DragAndDrop extends React.Component {
  allowDrop = (ev) => {
    ev.preventDefault();
  }

  drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const target = ev.target;
    const draggedElement = document.getElementById(data);
  
    console.log("Target:", target);
    console.log("Dragged Element:", draggedElement);
  
    // Check if the dragged element is null or if the target div is the same as the dragged element
    if (!draggedElement || target === draggedElement) {
      // If yes, return early without performing any action
      return;
    }
  
    // Check if the target is not null and if the drop event occurred inside one of the target divs
    if (!target || (target.id !== "teamSelect" && target.id !== "div1" && target.id !== "div2" && target.id !== "div3" && target.id !== "div4")) {
      // If not, return early without performing any actions
      return;
    }

    // Check if the target is divTeamSelect
    if (target.id === "teamSelect") {
      // If yes, append the dragged element to the target div
      target.appendChild(draggedElement);
    } else {
      // If no, check if the target already contains an image
      if (target.children.length > 0) {
        // If yes, return early without appending another image
        return;
      }

      // Append the dragged element to the target div
      target.appendChild(draggedElement);
    }
  }

  render() {
    return (
      <div class="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
        <h2>Genshin Impact Party Builder</h2>
        <p>Drag the characters back and forth as see fit.</p>

        <div class="container text-center">
            <div class="row">
              <div class="col" id="div1" onDrop={this.drop} onDragOver={this.allowDrop}></div>
              <div class="col" id="div2" onDrop={this.drop} onDragOver={this.allowDrop}></div>
              <div class="col" id="div3" onDrop={this.drop} onDragOver={this.allowDrop}></div>
              <div class="col" id="div4" onDrop={this.drop} onDragOver={this.allowDrop}></div>
            </div>
        </div>

        <div id="teamSelect" onDrop={this.drop} onDragOver={this.allowDrop}>
          {users.map(user => (
            <img 
              key={user.id}
              src={user.imageUrl} 
              draggable="true" 
              onDragStart={this.drag} 
              id={user.id} 
              alt={`${user.name} Character Avatar`} 
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DragAndDrop;