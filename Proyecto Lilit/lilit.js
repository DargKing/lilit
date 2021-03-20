// Nav Fixed

if (document.getElementById('navFixed')) {
    window.onscroll = () => {
        var nav = document.getElementById('navFixed');
        var scrol = window.pageYOffset;
        if (scrol > 1) {
            nav.style.boxShadow = '0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)';
        } else {
            nav.style.boxShadow = 'none';
        }
    }
}

// Nav con aside

function openAsideNav() {
    var aside = document.getElementById('asideNav');
    aside.style.transform = 'translateX(0)';
}

function closeAsideNav() {
    var aside = document.getElementById('asideNav');
    aside.style.transform = 'translateX(-100%)';
}



// Modal Fixed

function openModalFixedBtn() {
    var modal = document.getElementById('modalFixed');
    modal.style.display = 'flex';
    var body = document.getElementsByTagName('body');
    console.log(body);
    body[0].style.overflowY = 'hidden';

}

function closeModalFixedBtn() {

    var modal = document.getElementById('modalFixed');
    modal.style.display = 'none';
    var body = document.getElementsByTagName('body');
    console.log(body);
    body[0].style.overflowY = 'scroll';

}



// Footer Light

// var footerHeight = document.documentElement.style 
if (document.getElementById('footerLL')) {

    const body = document.getElementsByTagName('body')[0].clientHeight;
    const footer = document.getElementById('footerLL');
    const positionFooter = body - footer.clientHeight+'px';
    footer.style.top = positionFooter;

}