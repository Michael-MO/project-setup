import React from "react";

// "The Ultimate Way to Slugify a URL String in JavaScript".
// Source & Credit: https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1
// This function turns a string into a URL-friendly string.
// E.g. "My name is Michael" => "my-name-is-michael".

export const convertToURL = string => {
  const a = "àáäâãåăæçèéëêǵḧìíïîḿńǹñòóöôœṕŕßśșțùúüûǘẃẍÿź·/_,:;";
  const b = "aaaaaaaaceeeeghiiiimnnnoooooprssstuuuuuwxyz------";
  const p = new RegExp(a.split("").join("|"), "g");

  return string
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, "-and-") // Replace & with ‘and’
    .replace(/[^\w-]+/g, "") // Remove all non-word characters
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

export const raidsByAsc = raids => {
  return raids.sort((a, b) => a.ID - b.ID);
};

export const raidsByDesc = raids => {
  return raids.sort((a, b) => b.ID - a.ID);
};

export const playersByClass = players => {
  return players.sort((a, b) => a.Class - b.Class);
};

export const playersByName = players => {
  return players.sort((a, b) => a.Name - b.Name);
};

export const playersBySuperSort = players => {
  return players.sort((a, b) => {
    if (a.RoleID === b.RoleID) {
      if (a.ClassID === b.ClassID) {
        return a.Name < b.Name ? -1 : a.Name > b.Name ? 1 : 0;
      } else {
        return a.ClassID < b.ClassID ? -1 : 1;
      }
    } else {
      return a.RoleID < b.RoleID ? -1 : 1;
    }
  });
};

export const CalColumnWidth = columns => {
  return 100 / columns + "%";
};

export const ChangePlayerState = event => {
  let state = event.currentTarget.className.split(" ")[2];
  const element = event.currentTarget;

  switch (state) {
    case "badge-danger":
      element.classList.remove("badge-danger");
      element.classList.add("badge-success");
      element.innerHTML = "";
      break;
    case "badge-out":
      element.classList.remove("badge-out");
      element.classList.add("badge-danger");
      element.innerHTML = '<i class="fas fa-slash"></i>';
      break;
    case "badge-success":
      element.classList.remove("badge-success");
      element.classList.add("badge-out");
      element.innerHTML = '<i class="fas fa-slash"></i>';
      break;
    default:
      element.classList.remove("badge-success");
      element.classList.add("badge-out");
      element.innerHTML = '<i class="fas fa-slash"></i>';
  }
};

export const ChangeWholePlayerState = event => {
  return;
};

export const CreateArrow = () => {
  const arrow = document.createElement("span");

  arrow.setAttribute("ID", "PlayerIdentifierArrow");
  arrow.className = "player-arrow";
  arrow.innerText = "Hello";
  return arrow;
};

export const Loading = () => {
  return (
    <div
      className="spinner-border"
      style={{ width: "3rem", height: "3rem", color: "#d82731" }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
