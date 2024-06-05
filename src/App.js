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
  
    // Check if the dragged element and target element are valid nodes
    if (draggedElement && target) {
      // Check if the target is divTeamSelect or an existing image within the #teamSelect div
      if (target.id === "teamSelect" || target.tagName === "IMG") {
        // If the target is an existing image, insert the dragged element before the target image
        if (target.tagName === "IMG") {
          // If previous target element sibling is null, insert image before target
          if (target.previousElementSibling) {
            target.parentNode.insertBefore(draggedElement, target);
          }
        } else {
          // If the target is the #teamSelect div itself, append the dragged element to the end
          target.appendChild(draggedElement);
        }
      } else {
        // Append the dragged element to the target div
        if (target.children.length === 0) {
          target.appendChild(draggedElement);
        }
      }
    }
  }

  render() {
    return (
      <div className="container-xxl bd-gutter mt-3 my-md-4 bd-layout">
        <h2>Genshin Impact Party Builder</h2>
        <p>Drag the characters back and forth as see fit.</p>

        <div className="container text-center">
          <div className="row">
            <div className="col" id="div1" onDrop={this.drop} onDragOver={this.allowDrop}></div>
            <div className="col" id="div2" onDrop={this.drop} onDragOver={this.allowDrop}></div>
            <div className="col" id="div3" onDrop={this.drop} onDragOver={this.allowDrop}></div>
            <div className="col" id="div4" onDrop={this.drop} onDragOver={this.allowDrop}></div>
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
