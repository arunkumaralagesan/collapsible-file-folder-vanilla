import "./styles.css";

const FODLER_DETAILS = [
  {
    type: "folder",
    name: "src F",
    childrens: [
      {
        type: "folder",
        name: "pages F",
        childrens: [
          {
            type: "folder",
            name: "pagesNested F",
            childrens: [
              { type: "file", name: "App1.js" },
              { type: "file", name: "reducer1.js" },
              { type: "file", name: "actions1.js" }
            ]
          },
          { type: "file", name: "App.js" },
          { type: "file", name: "reducer.js" },
          { type: "file", name: "actions.js" }
        ]
      },
      { type: "file", name: "webpack.js" },
      { type: "file", name: "package.json" }
    ]
  }
];
main();
document.addEventListener("DOMContentLoaded", main);
function main() {
  const tree = document.createElement("div");
  const treeContainer = document.createElement("div");
  treeContainer.className = "tree";
  tree.innerText = "tree";
  FODLER_DETAILS.forEach((item) => {
    if (item.type === "folder") {
      const folder = createFolder(item);
      treeContainer.appendChild(folder);
    } else if (item.type === "file") {
      const file = createFile(item);
      treeContainer.appendChild(file);
    }
  });

  tree.appendChild(treeContainer);

  document.getElementById("app").appendChild(tree);
}

function createFolder(item) {
  const folder = document.createElement("div");
  const folderChildren = document.createElement("div");
  folderChildren.className = "folder_children";
  folder.className = "folder";
  folder.onclick = handleFolderClick;
  folder.innerText = item.name;
  (item.childrens || []).forEach((item) => {
    if (item.type === "folder") {
      folderChildren.appendChild(createFolder(item));
    } else {
      folderChildren.appendChild(createFile(item));
    }
  });
  folder.appendChild(folderChildren);
  return folder;
}

function createFile(item) {
  const file = document.createElement("div");
  file.className = "file";
  file.innerText = item.name;
  return file;
}

function handleFolderClick(event) {
  // improve thiss
  console.log(event.target?.querySelectorAll(".folder_children"));
  event.target
    ?.querySelectorAll(".folder_children")
    ?.forEach((chil) => chil?.classList?.toggle("hidden"));
  event.target
    ?.querySelectorAll(".folder")
    ?.forEach((chil) => chil?.classList?.toggle("hidden"));
}
