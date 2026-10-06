const CHESS_PIECE_SVG = {
  "wK": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#fff" stroke="#26384a" stroke-width="5" stroke-linejoin="round"><path d="M50 8v22M40 18h20"/><path d="M34 39c0-11 7-17 16-17s16 6 16 17c0 8-5 14-10 18l10 15H34l10-15c-5-4-10-10-10-18z"/><path d="M27 73h46l6 12H21z"/><path d="M18 87h64v7H18z"/></g></svg>`,
  "bK": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#26384a" stroke="#f5f7fa" stroke-width="3" stroke-linejoin="round"><path d="M50 8v22M40 18h20"/><path d="M34 39c0-11 7-17 16-17s16 6 16 17c0 8-5 14-10 18l10 15H34l10-15c-5-4-10-10-10-18z"/><path d="M27 73h46l6 12H21z"/><path d="M18 87h64v7H18z"/></g></svg>`,
  "wQ": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#fff" stroke="#26384a" stroke-width="5" stroke-linejoin="round"><circle cx="18" cy="25" r="6"/><circle cx="38" cy="16" r="6"/><circle cx="62" cy="16" r="6"/><circle cx="82" cy="25" r="6"/><path d="M18 31l12 38h40l12-38-19 21-13-30-13 30z"/><path d="M26 70h48l5 13H21z"/><path d="M18 86h64v8H18z"/></g></svg>`,
  "bQ": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#26384a" stroke="#f5f7fa" stroke-width="3" stroke-linejoin="round"><circle cx="18" cy="25" r="6"/><circle cx="38" cy="16" r="6"/><circle cx="62" cy="16" r="6"/><circle cx="82" cy="25" r="6"/><path d="M18 31l12 38h40l12-38-19 21-13-30-13 30z"/><path d="M26 70h48l5 13H21z"/><path d="M18 86h64v8H18z"/></g></svg>`,
  "wR": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#fff" stroke="#26384a" stroke-width="5" stroke-linejoin="round"><path d="M24 16h13v12h13V16h13v12h13V16h8v27H16V16z"/><path d="M24 43h52l-6 34H30z"/><path d="M25 77h50l6 12H19z"/><path d="M16 90h68v6H16z"/></g></svg>`,
  "bR": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#26384a" stroke="#f5f7fa" stroke-width="3" stroke-linejoin="round"><path d="M24 16h13v12h13V16h13v12h13V16h8v27H16V16z"/><path d="M24 43h52l-6 34H30z"/><path d="M25 77h50l6 12H19z"/><path d="M16 90h68v6H16z"/></g></svg>`,
  "wB": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#fff" stroke="#26384a" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="18" r="7"/><path d="M50 25c-13 9-20 20-17 31 2 7 8 12 14 16h6c6-4 12-9 14-16 3-11-4-22-17-31z"/><path d="M58 33L43 53" fill="none" stroke-width="5"/><path d="M35 69h30l8 11H27z"/><path d="M23 80h54l6 11H17z"/><path d="M14 93h72" fill="none" stroke-width="6"/></g></svg>`,
  "bB": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#26384a" stroke="#f5f7fa" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="18" r="7"/><path d="M50 25c-13 9-20 20-17 31 2 7 8 12 14 16h6c6-4 12-9 14-16 3-11-4-22-17-31z"/><path d="M58 33L43 53" fill="none" stroke-width="4"/><path d="M35 69h30l8 11H27z"/><path d="M23 80h54l6 11H17z"/><path d="M14 93h72" fill="none" stroke-width="5"/></g></svg>`,
  "wN": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#fff" stroke="#26384a" stroke-width="5" stroke-linejoin="round"><path d="M27 70c2-20 10-31 27-40l-8-14c22 2 35 18 31 39-2 9-7 16-15 22H30z"/><path d="M48 35c-8 3-14 8-19 16 10-2 17-1 24 4"/><circle cx="61" cy="35" r="3" fill="#26384a" stroke="none"/><path d="M24 77h50l7 13H17z"/><path d="M14 92h70v5H14z"/></g></svg>`,
  "bN": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#26384a" stroke="#f5f7fa" stroke-width="3" stroke-linejoin="round"><path d="M27 70c2-20 10-31 27-40l-8-14c22 2 35 18 31 39-2 9-7 16-15 22H30z"/><path d="M48 35c-8 3-14 8-19 16 10-2 17-1 24 4"/><circle cx="61" cy="35" r="3" fill="#f5f7fa" stroke="none"/><path d="M24 77h50l7 13H17z"/><path d="M14 92h70v5H14z"/></g></svg>`,
  "wP": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#fff" stroke="#26384a" stroke-width="5" stroke-linejoin="round"><circle cx="50" cy="28" r="15"/><path d="M38 43h24c0 14 5 23 13 33H25c8-10 13-19 13-33z"/><path d="M23 77h54l7 14H16z"/><path d="M14 92h72v5H14z"/></g></svg>`,
  "bP": `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="#26384a" stroke="#f5f7fa" stroke-width="3" stroke-linejoin="round"><circle cx="50" cy="28" r="15"/><path d="M38 43h24c0 14 5 23 13 33H25c8-10 13-19 13-33z"/><path d="M23 77h54l7 14H16z"/><path d="M14 92h72v5H14z"/></g></svg>`
};

function pieceSvgMarkup(pieceCode){
    // Trong bàn cờ hiện tại: chữ HOA = quân Trắng, chữ thường = quân Đen.
    // Bộ SVG dùng khóa wK/wQ/... và bK/bQ/...
    if (!pieceCode) return "";
    const isWhite = pieceCode === pieceCode.toUpperCase();
    const key = (isWhite ? "w" : "b") + pieceCode.toUpperCase();
    return CHESS_PIECE_SVG[key] || "";
}

const firebaseConfig={apiKey:"AIzaSyBL95lreBAEGfPL2TIv2FnxTNBVarVA1t0",authDomain:"hoccovua-1f26d.firebaseapp.com",projectId:"hoccovua-1f26d",storageBucket:"hoccovua-1f26d.firebasestorage.app",messagingSenderId:"33828595114",appId:"1:33828595114:web:18869b2affad6b4044f7d3",measurementId:"G-682SXZ1W48"};
firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

/* =========================================================

   1. KÝ HIỆU QUÂN CỜ

========================================================= */



const pieceSymbols = {



    r:"♜",

    n:"♞",

    b:"♝",

    q:"♛",

    k:"♚",

    p:"♟",



    R:"♖",

    N:"♘",

    B:"♗",

    Q:"♕",

    K:"♔",

    P:"♙"



};





/* =========================================================

   2. BIẾN TRẠNG THÁI

========================================================= */



let state = [];



let selected = null;



let lastFrom = null;

let lastTo = null;



let role = "student";



let room = "";



let roomUnsubscribe = null;
let roomRef = null;



let history = [];

/* Trò chơi riêng cho từng quân cờ */
let pieceGame = null;
const pieceGameNames = {R:"Quân Xe",B:"Quân Tượng",Q:"Quân Hậu",K:"Quân Vua",N:"Quân Mã",P:"Quân Tốt"};
const pieceGameTips = {
  R:"Xe đi ngang hoặc dọc. Hãy đáp xuống ô có sao!",
  B:"Tượng chỉ đi chéo. Có 2 quân Tượng đứng trên hai màu ô khác nhau; hãy dùng đúng quân để nhặt đủ 6 ngôi sao!",
  Q:"Hậu đi ngang, dọc hoặc chéo.",
  K:"Vua chỉ đi 1 ô mỗi lượt theo mọi hướng.",
  N:"Mã đi hình chữ L: 2 ô một hướng và 1 ô vuông góc.",
  P:"Tốt trắng đi thẳng lên 1 ô. Có 2 quân Tốt và đủ 10 ngôi sao hiện sẵn trên hai đường tiến."
};





/* =========================================================

   3. TẠO THẾ CỜ BAN ĐẦU

========================================================= */



function getStartPosition(){



    const s =

        Array(64).fill("");



    const blackBack =

        "rnbqkbnr";



    const whiteBack =

        "RNBQKBNR";





    /* Quân đen */



    blackBack

        .split("")

        .forEach(

            (piece,index) =>

            s[index] = piece

        );





    for(

        let i = 8;

        i < 16;

        i++

    ){



        s[i] = "p";



    }





    /* Quân trắng */



    for(

        let i = 48;

        i < 56;

        i++

    ){



        s[i] = "P";



    }





    whiteBack

        .split("")

        .forEach(

            (piece,index) =>

            s[56 + index] = piece

        );





    return s;



}





/* =========================================================

   4. VẼ BÀN CỜ

========================================================= */



const board =

    document.getElementById("board");





function getPieceGameLegalMoves(from){
    if(!pieceGame || from===null || !state[from]) return [];
    const moving=state[from].toUpperCase();
    if(moving!==pieceGame.piece) return [];
    const moves=[];
    for(let to=0;to<64;to++){
        if(isLegalPieceGameMove(from,to,pieceGame.piece)) moves.push(to);
    }
    return moves;
}

function renderBoard(){



    board.innerHTML = "";





    state.forEach(

        (piece,index) => {



            const row =

                Math.floor(index / 8);



            const col =

                index % 8;





            const square =

                document.createElement("div");





            square.className =

                "square " +

                (

                    (row + col) % 2 === 0

                    ? "light"

                    : "dark"

                );





            /* Ô đang chọn */



            if(

                selected === index

            ){



                square.classList.add(

                    "selected"

                );



            }





            /* Nước đi vừa rồi */



            if(

                index === lastFrom ||

                index === lastTo

            ){



                square.classList.add(

                    "last"

                );



            }





            square.dataset.index =

                index;





            /* Cho phép thả quân */



            square.ondragover =

                event => {



                    event.preventDefault();



                };





            square.ondrop =

                event => {



                    event.preventDefault();



                    movePiece(index);



                };





            /* Click */



            square.onclick =

                () => {



                    clickSquare(index);



                };





            /* Hiển thị các ô quân đang chọn có thể đi tới */
            if(pieceGame && selected !== null && getPieceGameLegalMoves(selected).includes(index)){
                const hint = document.createElement("span");
                hint.className = "move-hint";
                hint.setAttribute("aria-hidden", "true");
                square.appendChild(hint);
            }

            /* Hiển thị ngôi sao cần nhặt trong thử thách */
            if(pieceGame && pieceGame.stars && pieceGame.stars.has(index)){
                square.classList.add("has-star");
                const starElement = document.createElement("span");
                starElement.className = "board-star";
                starElement.textContent = "⭐";
                starElement.setAttribute("aria-label", "Ngôi sao");
                square.appendChild(starElement);
            }



            /* Nếu ô có quân */



            if(piece){



                const pieceElement =

                    document.createElement(

                        "span"

                    );





                pieceElement.className =

                    "piece";





                pieceElement.innerHTML = pieceSvgMarkup(piece);





                pieceElement.draggable =

                    true;





                pieceElement.ondragstart =

                    event => {

                        selected = index;

                        // Giữ kích thước ô cờ cố định khi kéo quân.
                        // Chỉ truyền dữ liệu kéo, không thay đổi layout của bàn cờ.
                        if(event.dataTransfer){
                            event.dataTransfer.effectAllowed = "move";
                            event.dataTransfer.setData("text/plain", String(index));
                        }

                    };





                square.appendChild(

                    pieceElement

                );



            }





            board.appendChild(

                square

            );



        }

    );



}





/* =========================================================

   5. CLICK VÀO Ô

========================================================= */



function clickSquare(index){
    if(role==="teacher"&&roomRef){document.getElementById("status").textContent="👀 Giáo viên đang quan sát học sinh.";return;}



    /* Chưa chọn quân */



    if(selected === null){



        if(state[index]){



            selected = index;



            renderBoard();



        }



        return;



    }





    /* Click lại chính ô đó */



    if(selected === index){



        selected = null;



        renderBoard();



        return;



    }





    movePiece(index);



}





/* =========================================================

   6. DI CHUYỂN QUÂN

========================================================= */



function movePiece(to){
    if(role==="teacher"&&roomRef){selected=null;renderBoard();return;}



    if(selected === null){

        return;

    }





    const from =

        selected;





    if(!state[from]){



        selected = null;



        renderBoard();



        return;



    }





    /* Trong trò chơi quân cờ: chỉ cho phép nước đi đúng luật */
    if(pieceGame){
        if(!isLegalPieceGameMove(from,to,pieceGame.piece)){
            document.getElementById("status").textContent = "💡 Chưa đúng luật của " + pieceGameNames[pieceGame.piece] + ". Thử lại nhé!";
            const bad = board.children[to];
            if(bad){ bad.classList.remove("illegal"); void bad.offsetWidth; bad.classList.add("illegal"); }
            selected = from;
            return;
        }
    }

    /* Lưu để hoàn tác */



    history.push(

        [...state]

    );





    const movingPiece =

        state[from];





    state[to] =

        movingPiece;





    state[from] =

        "";

    let collectedStar = false;
    if(pieceGame){
        pieceGame.hasMoved = true;
        if(pieceGame.stars.has(to)){
            collectedStar = true;
            const starNode = board.children[to]?.querySelector(".board-star");
            if(starNode) starNode.classList.add("collected");
            pieceGame.stars.delete(to);
            pieceGame.score++;
            updatePieceGameBar();
            if(pieceGame.score >= 6){
                document.getElementById("status").innerHTML = "🏆 <b>Xuất sắc!</b> Em đã nhặt đủ 6/6 ngôi sao với " + pieceGameNames[pieceGame.piece] + "!";
            }
        }
    }



    selected =

        null;





    lastFrom =

        from;





    lastTo =

        to;





    const message =

        (

            role === "student"

            ? "Học sinh"

            : "Giáo viên"

        )

        +

        " đi "

        +

        squareName(from)

        +

        " → "

        +

        squareName(to);





    addLog(message);





    if(!pieceGame || pieceGame.score < 6){
        document.getElementById(
            "status"
        ).innerHTML = pieceGame
            ? "⭐ Đúng luật! Điểm: <b>" + pieceGame.score + "/6</b>"
            : "👏 <b>Tốt lắm!</b> " + squareName(from) + " → " + squareName(to);
    }





    if(collectedStar){
        // Cho hoạt ảnh nhặt sao chạy xong rồi mới vẽ lại bàn; sao đã bị xóa khỏi Set nên sẽ biến mất.
        setTimeout(renderBoard, 300);
    }else{
        renderBoard();
    }

    sendBoard();



}





/* =========================================================

   7. TÊN Ô CỜ

========================================================= */



function squareName(index){



    const files =

        "abcdefgh";





    const column =

        index % 8;





    const row =

        Math.floor(index / 8);





    return (

        files[column]

        +

        (8 - row)

    );



}





/* =========================================================

   8. NHẬT KÝ

========================================================= */



function addLog(text){



    const log =

        document.getElementById(

            "log"

        );





    const entry =

        document.createElement(

            "div"

        );





    entry.className =

        "log-entry";





    entry.textContent =

        new Date()

            .toLocaleTimeString(

                "vi-VN"

            )

        +

        " • "

        +

        text;





    log.prepend(

        entry

    );



}





/* =========================================================

   9. CHỌN VAI TRÒ

========================================================= */



function setRole(newRole){



    role =

        newRole;





    document

        .getElementById(

            "studentBtn"

        )

        .classList.toggle(

            "active",

            role === "student"

        );





    document

        .getElementById(

            "teacherBtn"

        )

        .classList.toggle(

            "active",

            role === "teacher"

        );





    if(

        role === "teacher"

    ){



        document.getElementById(

            "missionText"

        ).textContent =

            "Quan sát học sinh thao tác trực tiếp trên bàn cờ.";



    }



    else{



        document.getElementById(

            "missionText"

        ).textContent =

            "Hãy thử di chuyển một quân cờ trên bàn.";



    }





    addLog(

        "Đổi vai trò thành "

        +

        (

            role === "teacher"

            ? "Giáo viên"

            : "Học sinh"

        )

    );



}





/* =========================================================
   10. PHÒNG HỌC FIREBASE
========================================================= */
function normalizeRoomCode(v){return String(v||"").trim().toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,8);}
function stopRoomListener(){if(roomUnsubscribe){roomUnsubscribe();roomUnsubscribe=null;}}
function listenToRoom(){
  stopRoomListener();
  roomUnsubscribe=roomRef.onSnapshot(snap=>{
    if(!snap.exists)return;
    const data=snap.data();
    if(Array.isArray(data.state)&&data.state.length===64){state=[...data.state];lastFrom=data.lastFrom??null;lastTo=data.lastTo??null;selected=null;renderBoard();}
    if(role==="teacher"&&data.studentOnline)document.getElementById("connection").innerHTML='<div class="dot"></div>Học sinh đã vào • Phòng '+room;
  },err=>{console.error(err);document.getElementById("status").textContent="Không thể kết nối Firebase. Kiểm tra Firestore Rules và Internet.";});
}
async function createRoom(){
  try{
    setRole("teacher");room=String(Math.floor(100000+Math.random()*900000));document.getElementById("roomCode").value=room;roomRef=db.collection("rooms").doc(room);
    state=getStartPosition();lastFrom=lastTo=selected=null;renderBoard();
    await roomRef.set({state:[...state],lastFrom:null,lastTo:null,studentOnline:false,lastActor:"teacher",createdAt:firebase.firestore.FieldValue.serverTimestamp(),updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
    listenToRoom();document.getElementById("connection").innerHTML='<div class="dot"></div>Đã tạo phòng '+room+' • Chờ học sinh';document.getElementById("status").innerHTML='📨 Gửi mã <b>'+room+'</b> cho học sinh.';addLog("Giáo viên đã tạo phòng "+room);
  }catch(e){console.error(e);alert("Không tạo được phòng. Kiểm tra Firestore Rules và Internet.");}
}
async function joinRoom(){
  try{
    room=normalizeRoomCode(document.getElementById("roomCode").value);if(!room){alert("Hãy nhập mã phòng.");return;}document.getElementById("roomCode").value=room;roomRef=db.collection("rooms").doc(room);
    const snap=await roomRef.get();if(!snap.exists){alert("Không tìm thấy phòng "+room+".");roomRef=null;return;}
    if(role==="student")await roomRef.update({studentOnline:true,updatedAt:firebase.firestore.FieldValue.serverTimestamp()});
    listenToRoom();document.getElementById("connection").innerHTML='<div class="dot"></div>Đã vào phòng '+room;document.getElementById("status").textContent=role==="student"?"✅ Đã kết nối với giáo viên.":"👀 Đang quan sát học sinh.";addLog((role==="student"?"Học sinh":"Giáo viên")+" đã vào phòng "+room);
  }catch(e){console.error(e);alert("Không vào được phòng. Kiểm tra Firestore Rules và Internet.");}
}
/* =========================================================
   11. GỬI BÀN CỜ LÊN FIRESTORE
========================================================= */
async function sendBoard(){
  if(pieceGame)return;
  if(!roomRef||role!=="student")return;
  try{await roomRef.update({state:[...state],lastFrom:lastFrom??null,lastTo:lastTo??null,lastActor:"student",studentOnline:true,updatedAt:firebase.firestore.FieldValue.serverTimestamp()});}
  catch(e){console.error(e);document.getElementById("status").textContent="⚠️ Chưa gửi được thao tác lên Firebase.";}
}

/* =========================================================
   TRÒ CHƠI: MỖI QUÂN MỘT BÀN CỜ RIÊNG, NHẶT 10 SAO
========================================================= */
function isPathClear(from,to){
  const fr=Math.floor(from/8), fc=from%8, tr=Math.floor(to/8), tc=to%8;
  const dr=Math.sign(tr-fr), dc=Math.sign(tc-fc);
  let r=fr+dr,c=fc+dc;
  while(r!==tr || c!==tc){ if(state[r*8+c]) return false; r+=dr;c+=dc; }
  return true;
}
function isLegalPieceGameMove(from,to,piece){
  if(from===to || state[to]) return false;
  const fr=Math.floor(from/8),fc=from%8,tr=Math.floor(to/8),tc=to%8;
  const dr=tr-fr,dc=tc-fc,ar=Math.abs(dr),ac=Math.abs(dc);
  if(piece==="R") return (dr===0||dc===0) && isPathClear(from,to);
  if(piece==="B") return ar===ac && ar>0 && isPathClear(from,to);
  if(piece==="Q") return ((dr===0||dc===0)||(ar===ac&&ar>0)) && isPathClear(from,to);
  if(piece==="K") return Math.max(ar,ac)===1;
  if(piece==="N") return (ar===2&&ac===1)||(ar===1&&ac===2);
  if(piece==="P") return dc===0 && (dr===-1 || (!pieceGame.hasMoved && fr===6 && dr===-2));
  return false;
}
function randomChoice(a){return a[Math.floor(Math.random()*a.length)];}
function generateStarPath(piece,start,limit=6){
  const stars=[]; let cur=start; let first=true; let guard=0;
  while(stars.length<limit && guard++<1000){
    const candidates=[];
    for(let to=0;to<64;to++){
      if(to===cur || stars.includes(to)) continue;
      const saved=pieceGame;
      pieceGame={piece,hasMoved:!first,stars:new Set(),score:0};
      state=Array(64).fill(""); state[cur]=piece;
      if(isLegalPieceGameMove(cur,to,piece)) candidates.push(to);
      pieceGame=saved;
    }
    if(!candidates.length) break;
    const next=randomChoice(candidates); stars.push(next); cur=next; first=false;
  }
  return stars;
}
function startPieceGame(piece){
  history=[]; lastFrom=lastTo=selected=null;
  let start = piece==="P" ? 52 : 36; // e2 cho Tốt, e4 cho các quân khác
  state=Array(64).fill(""); state[start]=piece;
  pieceGame={piece,stars:new Set(),score:0,hasMoved:false};
  let stars=[];

  // Chỉ dùng 6 sao. Các vị trí được chọn cách xa nhau để bàn cờ thoáng,
  // học sinh phải di chuyển quân qua nhiều ô thay vì nhặt các sao liền nhau.
  if(piece==="P"){
    // Hai Tốt ở c2 và f2; mỗi quân có 3 sao trên đường tiến riêng.
    // Các sao xen kẽ theo hàng nên không nằm sát nhau.
    const pawnC=50; // c2
    const pawnF=53; // f2
    state=Array(64).fill("");
    state[pawnC]="P"; state[pawnF]="P";
    stars=[42,26,10, 37,21,5]; // c3,c5,c7 và f4,f6,f8
  }else if(piece==="B"){
    // Hai Tượng ở hai màu ô khác nhau, mỗi Tượng phụ trách 3 sao.
    const bishopA=36; // e4
    const bishopB=35; // d4
    state=Array(64).fill("");
    state[bishopA]="B"; state[bishopB]="B";
    stars=[0,18,54, 7,21,51];
  }else if(piece==="R"){
    stars=[0,7,16,47,56,63];
  }else if(piece==="Q"){
    stars=[2,7,16,47,56,61];
  }else if(piece==="K"){
    stars=[0,7,18,45,56,63];
  }else if(piece==="N"){
    stars=[1,14,16,47,49,62];
  }

  pieceGame.stars=new Set(stars);
  document.getElementById("pieceGameBar").classList.add("show");
  document.getElementById("pieceGameTitle").textContent="⭐ Thử thách " + pieceGameNames[piece];
  document.getElementById("pieceGameHelp").textContent=pieceGameTips[piece].replace(/10/g,"6");
  document.querySelectorAll(".board-toolbar").forEach(x=>x.style.display="none");
  document.getElementById("missionText").textContent="Đi đúng luật và nhặt đủ 6 ngôi sao. Mỗi sao = 1 điểm.";
  updatePieceGameBar(); renderBoard();
}
function updatePieceGameBar(){
  document.getElementById("pieceGameScore").textContent="⭐ " + pieceGame.score + " / 6";
}
function exitPieceGame(){
  pieceGame=null; history=[]; selected=lastFrom=lastTo=null; state=getStartPosition();
  document.getElementById("pieceGameBar").classList.remove("show");
  document.querySelectorAll(".board-toolbar").forEach(x=>x.style.display="flex");
  document.getElementById("missionText").textContent=role==="teacher"?"Quan sát học sinh thao tác trực tiếp trên bàn cờ.":"Hãy thử di chuyển một quân cờ trên bàn.";
  renderBoard();
}
document.querySelectorAll(".lesson[data-piece]").forEach(item=>{
  item.addEventListener("click",()=>{
    document.querySelectorAll(".lesson").forEach(x=>x.classList.remove("active")); item.classList.add("active");
    const p=item.dataset.piece;
    if(p==="FREE") exitPieceGame(); else startPieceGame(p);
  });
});

/* =========================================================

   12. XẾP BÀN CHUẨN

========================================================= */



function setupStart(){



    history.push(

        [...state]

    );





    state =

        getStartPosition();





    lastFrom =

        null;





    lastTo =

        null;





    selected =

        null;





    renderBoard();





    addLog(

        "Đã xếp bàn cờ chuẩn"

    );





    sendBoard();



}





/* =========================================================

   13. XÓA BÀN

========================================================= */



function clearBoard(){



    history.push(

        [...state]

    );





    state =

        Array(64).fill("");





    selected =

        null;





    lastFrom =

        null;





    lastTo =

        null;





    renderBoard();





    addLog(

        "Đã xóa bàn cờ"

    );





    sendBoard();



}





/* =========================================================

   14. HOÀN TÁC

========================================================= */



function undoMove(){



    if(

        history.length === 0

    ){



        document

            .getElementById(

                "status"

            )

            .textContent =

                "Chưa có nước đi nào để quay lại.";



        return;



    }





    state =

        history.pop();





    selected =

        null;





    lastFrom =

        null;





    lastTo =

        null;





    renderBoard();





    addLog(

        "Đã quay lại thao tác trước"

    );





    sendBoard();



}





/* =========================================================

   15. KHỞI TẠO

========================================================= */



state =

    getStartPosition();





renderBoard();





addLog(

    "Bàn cờ đã sẵn sàng!"

);
