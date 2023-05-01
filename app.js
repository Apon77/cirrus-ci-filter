if (window.location.hostname.includes("cirrus-ci.com")) {
  setTimeout(inject, 1000);
}

function inject() {
  addBtn("All", all);
  addBtn("PR", onlyPR);
  addBtn("Branch", onlyBranch);
  addBtn("Executing", onlyExecuting);
  addBtn("Aborted", onlyAborted);
  addBtn("Completed", onlyCompleted);
  addBtn("Failed", onlyFailed);

  function addBtn(text, calledfunction) {
    try {
      document.querySelector("#btn" + text).remove();
    } catch (error) {
      true;
    }
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.setAttribute("id", "btn" + text);
    btn.setAttribute("title", "Click All/PR/Branch first");
    document.querySelector("nav").append(btn);
    btn.addEventListener("click", calledfunction);
    calledfunction.call(document.querySelector("#btn" + text));
    all.call(document.querySelector("#btnAll"));
  }

  function all() {
    let allTableRow = Array.from(
      document.querySelectorAll(".MuiGrid2-container .MuiGrid2-wrap-xs-nowrap")
    );
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].parentNode.parentNode.innerText;
      allTableRow[i].parentNode.parentNode.style.display = "";
    }
    let div = document.createElement("div");
    div.setAttribute("id", "divAll");
    this.append(div);
    document.querySelector("#divAll").innerText = count();
  }

  function onlyPR() {
    let allTableRow = Array.from(
      document.querySelectorAll(".MuiGrid2-container .MuiGrid2-wrap-xs-nowrap")
    );
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].parentNode.parentNode.innerText;
      allTableRow[i].parentNode.parentNode.style.display = "";
      if (!branchName.includes("pull/")) {
        allTableRow[i].parentNode.parentNode.style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divPR");
    this.append(div);
    document.querySelector("#divPR").innerText = count();
  }

  function onlyBranch() {
    let allTableRow = Array.from(
      document.querySelectorAll(".MuiGrid2-container .MuiGrid2-wrap-xs-nowrap")
    );
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].parentNode.parentNode.innerText;
      allTableRow[i].parentNode.parentNode.style.display = "";
      if (branchName.includes("pull/")) {
        allTableRow[i].parentNode.parentNode.style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divBranch");
    this.append(div);
    document.querySelector("#divBranch").innerText = count();
  }

  function onlyExecuting() {
    let allTableRow = Array.from(
      document.querySelectorAll(".MuiGrid2-container .MuiGrid2-wrap-xs-nowrap")
    );
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].parentNode.parentNode.innerText;
      allTableRow[i].parentNode.parentNode.style.display = "";
      if (!branchName.includes("play_circle\nexecuting")) {
        allTableRow[i].parentNode.parentNode.style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divExecuting");
    this.append(div);
    document.querySelector("#divExecuting").innerText = count();
  }

  function onlyAborted() {
    let allTableRow = Array.from(
      document.querySelectorAll(".MuiGrid2-container .MuiGrid2-wrap-xs-nowrap")
    );
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].parentNode.parentNode.innerText;
      allTableRow[i].parentNode.parentNode.style.display = "";
      if (!branchName.includes("stop_circle\naborted")) {
        allTableRow[i].parentNode.parentNode.style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divAborted");
    this.append(div);
    document.querySelector("#divAborted").innerText = count();
  }

  function onlyCompleted() {
    let allTableRow = Array.from(
      document.querySelectorAll(".MuiGrid2-container .MuiGrid2-wrap-xs-nowrap")
    );
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].parentNode.parentNode.innerText;
      allTableRow[i].parentNode.parentNode.style.display = "";
      if (!branchName.includes("check_circle\ncompleted")) {
        allTableRow[i].parentNode.parentNode.style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divCompleted");
    this.append(div);
    document.querySelector("#divCompleted").innerText = count();
  }

  function onlyFailed() {
    let allTableRow = Array.from(
      document.querySelectorAll(".MuiGrid2-container .MuiGrid2-wrap-xs-nowrap")
    );
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].parentNode.parentNode.innerText;
      allTableRow[i].parentNode.parentNode.style.display = "";
      if (!branchName.includes("error_circle\nfailed")) {
        allTableRow[i].parentNode.parentNode.style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divFailed");
    this.append(div);
    document.querySelector("#divFailed").innerText = count();
  }

  function count(id) {
    let allTableRow = Array.from(
      document.querySelectorAll(".MuiGrid2-container .MuiGrid2-wrap-xs-nowrap")
    );
    let sDisplayBlank = 0;
    for (let i = 0; i < allTableRow.length; i++) {
      if (allTableRow[i].parentNode.parentNode.style.display == "") {
        sDisplayBlank += 1;
      }
    }
    return sDisplayBlank;
  }
}
