function fuc() {
    let pop = window.pageYOffset;
    document.getElementById('bigtitle').style.backdropFilter = `blur(${pop/150}px)`;
    document.getElementById('bigtitle').style.filter = `blur(${pop/200}px)`;
    document.getElementById('bigtitle').style.fontSize = `${12-pop/280}vw`;
    let inn = window.innerHeight
    document.getElementById('s2').style.borderTopLeftRadius = `${16-pop/(inn/30)}px`;
    document.getElementById('s2').style.borderTopRightRadius = `${16-pop/(inn/30)}px`;
    let perc = 5+pop/inn*20;
    document.getElementById('s2').style.backgroundColor = `hsl(231,97%,${Math.min(15,perc)}%)`
    
    document.querySelector('h2').style.filter = `blur(${0.5-pop/inn}px)`;
    document.querySelector('p').style.filter = `blur(${0.5-pop/inn}px)`;
    document.querySelector('h3').style.filter = `blur(${0.5-pop/inn}px)`;
    document.querySelector('.h3').style.filter = `blur(${0.5-pop/inn}px)`;
    document.querySelector('#foc').style.filter = `blur(${0.5-pop/inn}px)`;
    document.querySelector('#t2').style.filter = `blur(${0.5-pop/inn}px)`;
    document.querySelector('#t3').style.filter = `blur(${0.5-pop/inn}px)`;
}
