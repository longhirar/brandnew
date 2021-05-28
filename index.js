window.onscroll = function(ev) {
    if (window.scrollY > 0) {
        document.getElementById('arrow-down').className = "unsel invis";
    } else {
        document.getElementById('arrow-down').className = "unsel";
    }
};

function pagealert(html) {
    var alertmask = document.getElementById('alertmask');
    var alertdiv = document.getElementById('alertdiv');
    alertmask.className = "";
    alertdiv.className = "";

    
    alertdiv.innerHTML = html;
}

function close_pagealert() {
    var alertmask = document.getElementById('alertmask');
    var alertdiv = document.getElementById('alertdiv');
    alertmask.className = "invis";
    alertdiv.className = "invis";

    alertdiv.innerHTML = "";
}


close_pagealert();

function alert(txt) {
    pagealert(`
                <style>
                    .popdiv {
                        color:white;
                        background-color: #1e1e1e;
                        padding: .5rem;
                        font-size: xx-large;

                        display: flex;
                        align-items: center;
                        justify-content: center;

                        margin: 2rem;
                    }
                </style>
                <script>
                    function copy() {
                        console.log('started copying!')
                    
                        var copyText = document.getElementById("tocopy");
                        copyText.select();
                        copyText.setSelectionRange(0, 99999)
                    
                        document.execCommand("copy");
                    
                        document.getElementById("copylabel").innerHTML = "Copied!"
                        document.getElementById("copylabel").style.color = "green";
                        console.log('copied!')
                    }
                </script>
                <div>
                    <div class="popdiv" onclick="copy()" id="tocopy">`+ txt +`</div>
                    
                    <div class="button-row">
                        <button onclick="copy()">Copy</button>
                        <button onclick="close_pagealert()">Close</button>
                    </div>
                </div>`)
}