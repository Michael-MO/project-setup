
  ArrowIn(event) {
    let element = event.currentTarget;
    element.appendChild(CreateArrow());
  }

  ArrowOut(event) {
    let element = event.currentTarget;
    element.removeChild(document.getElementById("PlayerIdentifierArrow"));
  }

  
