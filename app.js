const site = window.location.hostname;
// let a = document.querySelector("nav");

if (site.includes("cirrus-ci.com")) {
  setTimeout(inject, 1000);
}

function inject() {
  addBtn("All", "nav", all);
  addBtn("PR", "nav", onlyPR);
  addBtn("Branch", "nav", onlyBranch);
  addBtn("Executing", "nav", onlyExecuting);
  addBtn("Aborted", "nav", onlyAborted);
  addBtn("Completed", "nav", onlyCompleted);
  addBtn("Failed", "nav", onlyFailed);

  let a = document.querySelector("#btnAll");
  let b = document.querySelector("#btnPR");
  let c = document.querySelector("#btnBranch");
  let d = document.querySelector("#btnExecuting");
  let e = document.querySelector("#btnAborted");
  let f = document.querySelector("#btnCompleted");
  let g = document.querySelector("#btnFailed");

  all.call(a);
  onlyPR.call(b);
  onlyBranch.call(c);
  all.call(a);
  onlyExecuting.call(d);
  all.call(a);
  onlyAborted.call(e);
  all.call(a);
  onlyCompleted.call(f);
  all.call(a);
  onlyFailed.call(g);
  all.call(a);

  function addBtn(text, selector, calledfunction) {
    try {
      document.querySelector("#btn" + text).remove();
    } catch (error) {
      true;
    }
    const btn = document.createElement("button");
    btn.innerText = text;
    btn.setAttribute("id", "btn" + text);
    btn.setAttribute("title", "Click All/PR/Branch first");
    document.querySelector(selector).append(btn);
    btn.addEventListener("click", calledfunction);
  }

  function all() {
    let allTableRow = Array.from(document.querySelectorAll("tr"));
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].innerText;
      allTableRow[i].style.display = "";
    }
    let div = document.createElement("div");
    div.setAttribute("id", "divAll");
    this.append(div);
    document.querySelector("#divAll").innerText = count();
  }

  function onlyPR() {
    let allTableRow = Array.from(document.querySelectorAll("tr"));
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].innerText;
      allTableRow[i].style.display = "";
      if (!branchName.includes("pull/")) {
        allTableRow[i].style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divPR");
    this.append(div);
    document.querySelector("#divPR").innerText = count();
  }

  function onlyBranch() {
    let allTableRow = Array.from(document.querySelectorAll("tr"));
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].innerText;
      allTableRow[i].style.display = "";
      if (branchName.includes("pull/")) {
        allTableRow[i].style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divBranch");
    this.append(div);
    document.querySelector("#divBranch").innerText = count();
  }

  function onlyExecuting() {
    let allTableRow = Array.from(document.querySelectorAll("tr"));
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].innerText;
      allTableRow[i].style.display = "";
      if (!branchName.includes("play_circle\nexecuting")) {
        allTableRow[i].style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divExecuting");
    this.append(div);
    document.querySelector("#divExecuting").innerText = count();
  }

  function onlyAborted() {
    let allTableRow = Array.from(document.querySelectorAll("tr"));
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].innerText;
      allTableRow[i].style.display = "";
      if (!branchName.includes("stop_circle\naborted")) {
        allTableRow[i].style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divAborted");
    this.append(div);
    document.querySelector("#divAborted").innerText = count();
  }

  function onlyCompleted() {
    let allTableRow = Array.from(document.querySelectorAll("tr"));
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].innerText;
      allTableRow[i].style.display = "";
      if (!branchName.includes("check_circle\ncompleted")) {
        allTableRow[i].style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divCompleted");
    this.append(div);
    document.querySelector("#divCompleted").innerText = count();
  }

  function onlyFailed() {
    let allTableRow = Array.from(document.querySelectorAll("tr"));
    for (let i = 0; i < allTableRow.length; i++) {
      let branchName = allTableRow[i].innerText;
      allTableRow[i].style.display = "";
      if (!branchName.includes("error_circle\nfailed")) {
        allTableRow[i].style.display = "none";
      }
    }
    let n = count();
    let div = document.createElement("div");
    div.setAttribute("id", "divFailed");
    this.append(div);
    document.querySelector("#divFailed").innerText = count();
  }

  function count(id) {
    let allTableRow = Array.from(document.querySelectorAll("tr"));
    let sDisplayBlank = 0;
    for (let i = 0; i < allTableRow.length; i++) {
      if (allTableRow[i].style.display == "") {
        sDisplayBlank += 1;
      }
    }
    return sDisplayBlank;
  }
}
