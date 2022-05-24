var num = document.getElementsByClassName("num")[0];
var previous = document.createElement("img");
previous.src = "images/icon-previous.svg";
previous.alt = "images/svg";
var next = document.createElement("img");
next.src = "images/icon-next.svg";
next.alt = "images/svg";

if(innerWidth <= 767) {
    previous.style.cssText = "position: absolute; z-index: 3; width: 7%; height: 10%; background-color: white; padding: 1%; border-radius: 50%; top: 50%; right: auto; left: 3%; transform: translateY(-50%);"
    next.style.cssText = "position: absolute; z-index: 3; width: 7%; height: 10%; background-color: white; padding: 1%; border-radius: 50%; top: 50%; left: auto; right: 3%; transform: translateY(-50%);"
    document.querySelector("section nav .img").append(previous);
    document.querySelector("section nav .img").append(next);
}

document.querySelector("nav > .img").onclick = function() {
    if(innerWidth > 767) {
        var img = this.cloneNode(true)
        img.style.cssText = "width: 35%;height: 71%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 5; box-shadow: 0 0 0px 500px #000000d1;"
        
        var close = document.createElement("img");
        close.src = "images/icon-close.svg";
        close.alt = "images/svg";
        close.style.cssText = "position: absolute; width: 4%; height: 4%; top: -39px; left: 96%; cursor: pointer; filter: grayscale(100%) brightness(54%) sepia(220%) hue-rotate(-50deg) saturate(600%) contrast(0.8);";
        close.onclick = function() {
            this.parentElement.remove();
            document.querySelector("header").style.cssText = "position: relative; z-index: 0";
            document.querySelector("section").style.cssText = "position: relative; z-index: 0";
        };
        previous.style.cssText = "position: absolute; width: 4%; height: 5%; top: 49%; left: -5%; background-color: white; padding: 1%; border-radius: 50%; cursor: pointer";

        next.style.cssText = "position: absolute; width: 4%; height: 5%; top: 48.5%; left: 101%; background-color: white; padding: 1%; border-radius: 50%; cursor: pointer";

        img.prepend(previous);
        img.prepend(close);
        img.append(next);
        document.body.prepend(img);

        document.body.style.position = "relative";
        document.querySelector("header").style.cssText = "position: relative; z-index: -10";
        document.querySelector("section").style.cssText = "position: relative; z-index: -10";
    }
};

previous.addEventListener("click",function() {
    if(innerWidth > 767) {
        var tab = [...document.querySelectorAll(".images li")];
        for(let i=1;i<tab.length;i++) {
            if(tab[0].className == "active")
                break;
            if(tab[i].className == "active") {
                tab[i-1].className = "active";
                tab[i].classList.remove("active");
                document.querySelector("body > .img").children[2].src = tab[i-1].firstElementChild.src.slice(0,tab[i-1].firstElementChild.src.lastIndexOf("-")) + ".jpg";
            }
        }
    }
    else {
        var tab = [...document.querySelectorAll("nav .img img")];
        for(let i=1;i<tab.length-2;i++) {
            if(getComputedStyle(tab[0]).left == "0px")
                break;
            if(getComputedStyle(tab[i]).left == "0px") {
                tab[i-1].style.left = "0";
                tab[i].style.left = "100%";
                break;
            }
        }
    }
});
next.addEventListener("click",function() {
    if(innerWidth > 767) {
        var tab = [...document.querySelectorAll(".images li")];
        for(let i=0;i<tab.length-1;i++) {
            if(tab[tab.length-1].className == "active")
                break;
                if(tab[i].className == "active") {
                    tab[i+1].className = "active";
                    tab[i].classList.remove("active");
                    document.querySelector("body > .img").children[2].src = tab[i+1].firstElementChild.src.slice(0,tab[i+1].firstElementChild.src.lastIndexOf("-")) + ".jpg";
                    break;
            }
        }
    } else {
        var tab = [...document.querySelectorAll("nav .img img")];
        for(let i=0;i<tab.length-2;i++) {
            if(getComputedStyle(tab[tab.length - 3]).left == "0px")
                break;
            if(getComputedStyle(tab[i]).left == "0px") {
                tab[i+1].style.left = "0";
                tab[i].style.left = "-100%";
                break;
            }
        }
    }
});

[...document.getElementsByClassName("images")[0].children].forEach(function(ele) {
    ele.onclick = function() {
        [...this.parentElement.children].forEach(function(e) {
            e.removeAttribute("class");
        });
        if(this == document.getElementsByClassName("images")[0].firstElementChild)
            document.getElementsByClassName("images")[0].previousElementSibling.firstElementChild.src = "images/image-product-1.jpg";
        else if(this == document.getElementsByClassName("images")[0].children[1])
            document.getElementsByClassName("images")[0].previousElementSibling.firstElementChild.src = "images/image-product-2.jpg";
        else if(this == document.getElementsByClassName("images")[0].children[2])
            document.getElementsByClassName("images")[0].previousElementSibling.firstElementChild.src = "images/image-product-3.jpg";
        else 
            document.getElementsByClassName("images")[0].previousElementSibling.firstElementChild.src = "images/image-product-4.jpg";
        this.className = "active";
    }
});

num.firstElementChild.onclick = function() {
    if(this.nextElementSibling.textContent > 0) 
        this.nextElementSibling.textContent--;
};
num.lastElementChild.onclick = function() {
    this.previousElementSibling.textContent++;
};

document.querySelector(".info > img").addEventListener("click", function() {
    document.querySelector(".info div").classList.toggle("show");
});

document.getElementsByTagName("button")[0].addEventListener("click",function() {
    var div = document.createElement("div");

    var img1 = document.querySelector(".images img").cloneNode(true);
    img1.style.cssText = "width: 17%; height: 78%; border-radius: 6px;"
    div.append(img1);

    var p1 = document.createElement("p");
    p1.textContent = "Fall Limited Edition Sneakers";
    var p2 = document.createElement("p");
    p2.textContent = `$125.00 x ${document.querySelector(".num > p").textContent}  $${document.querySelector(".num > p").textContent * 125.00}.00`;
    var divClone = div.cloneNode(false);
    divClone.style.cssText = "display: block; padding: 0; padding-top: 2%; font-size: 12px; height: 60px;"
    divClone.append(p1);
    divClone.append(p2);
    div.append(divClone);

    var img2 = document.createElement("img");
    img2.alt = "trash";
    img2.src = "images/icon-delete.svg";
    img2.style.cssText = "width: 6%; height: 29%; margin-top: 4%;"
    div.append(img2);

    var num = document.createElement("p");
    num.textContent = `${document.querySelector(".num > p").textContent}`;
    num.style.cssText = "color: white; position: absolute; background-color: rgb(255, 125, 26); padding: 0px 6px; font-size: 9px; border-radius: 11px ; top: -27%; right: -49.5%;";
    if(innerWidth > 767) {
        num.style.top = "27%";
        num.style.right = "7.5%";
    }
    if(document.querySelector(".info").firstElementChild == document.querySelector(".info > img"))
        document.querySelector(".info").prepend(num);
    else {
        document.querySelector(".info").firstElementChild.remove();
        document.querySelector(".info").prepend(num);
    }

    img2.onclick = function() {
        document.querySelector(".info").firstElementChild.remove();
        this.parentElement.nextElementSibling.remove();
        this.parentElement.remove();
        document.querySelector(".info h4 + div").textContent = "Your cart is empty.";
        document.querySelector(".info h4 + div").style.cssText = "display: flex; justify-content: center; align-items: center;";
    }

    var button = document.createElement("button");
    button.textContent = "Checkout";
    button.style.cssText = "background-color: hsl(26, 100%, 55%); border: none; padding: 5% 35%; margin-left: 4%; color: white; font-weight: 500; border-radius: 10px; cursor: pointer;"

    document.querySelector(".info h4 + div").textContent = "";
    document.querySelector(".info h4 + div").append(div);
    document.querySelector(".info h4 + div").append(button);

    div.style.cssText = "justify-content: space-evenly; align-items: normal; padding-top: 5%; height: 70px;";
    div.parentElement.style.display = "block";
});

document.querySelector("header ul").onclick = function() {
    document.querySelectorAll("header ul")[1].style.left = "-8px";
    var close = document.createElement("img");
    close.src = "images/icon-close.svg";
    close.style.cssText = "position: absolute; width: 12px; height: 12px; z-index: 20; left: 4%; top: 22%;";
    document.querySelector("header").prepend(close);
    close.onclick = function() {
        document.querySelectorAll("header ul")[1].style.left = "-103%";
        close.remove()
    }
}