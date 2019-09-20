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
  return raids.sort((a, b) => a.Order - b.Order);
};

export const raidsByDesc = raids => {
  return raids.sort((a, b) => b.Order - a.Order);
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

export const ChangePlayerState = (status, event) => {
  let state = status;
  const element = event.currentTarget;

  switch (state) {
    case "0":
      element.classList.remove("badge-danger");
      element.classList.add("badge-success");
      element.innerHTML = "";
      state = 1;
      break;
    case "2":
      element.classList.remove("badge-out");
      element.classList.add("badge-danger");
      element.innerHTML = "<i class='fas fa-slash'></i>";
      state = 0;
      break;
    case "1":
      element.classList.remove("badge-success");
      element.classList.add("badge-out");
      element.innerHTML = "<i class='fas fa-slash'></i>";
      state = 2;
      break;
    default:
      element.classList.remove("badge-success");
      element.classList.add("badge-out");
      element.innerHTML = "<i class='fas fa-slash'></i>";
  }
};

export const SetInitPlayerState = (status, event) => {
  let state = status;
  const element = event.currentTarget;

  switch (state) {
    case 0:
      element.classList.add("badge-danger");
      element.innerHTML = "<i class='fas fa-slash'></i>";
      break;
    case 2:
      element.classList.add("badge-out");
      element.innerHTML = "<i class='fas fa-slash'></i>";
      break;
    case 1:
      element.classList.add("badge-success");
      element.innerHTML = "";
      break;
    default:
      element.classList.add("badge-success");
      element.innerHTML = "";
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

export const AnimateOnStateChange = () => {
  const wrapper = document.getElementById("table-setup");
  if (wrapper) {
    wrapper.classList.toggle("show");
  }
};
