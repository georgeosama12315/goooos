let bar = document.getElementById('bar');
        let span1 = document.getElementById('span-1');
        let span2 = document.getElementById('span-2');
        let span3 = document.getElementById('span-3');
        let barheader = document.getElementById('bar-header');
        let cont = document.getElementById('cont');
        let numbertoKnowheader = 0;
        let header = document.getElementById('header');

        bar.onclick = () => {
            if (numbertoKnowheader === 0) {
                bar.style.display = 'flex';
                bar.style.alignItems = 'center';
                bar.style.justifyContent = 'center';
                span2.style.display = 'none';
                span1.style.transform = 'rotate(45deg)';
                span3.style.transform = 'rotate(315deg)';
                span1.style.position = 'absolute';
                span3.style.position = 'absolute';
                barheader.style.marginRight = '0px';
                cont.style.marginRight = '0px';
                numbertoKnowheader = 1;
                header.style.background = '#000'
            } else {
                bar.style.display = 'block';
                bar.style.alignItems = 'initial';
                bar.style.justifyContent = 'initial';
                span2.style.display = 'block';
                span1.style.transform = 'rotate(0deg)';
                span3.style.transform = 'rotate(0deg)';
                span1.style.position = 'relative';
                span3.style.position = 'relative';
                barheader.style.marginRight = '-3000px';
                cont.style.marginRight = '-3000px';
                numbertoKnowheader = 0;
                header.style.background = 'none'
            }
        }
