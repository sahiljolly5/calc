
        function random(){
            var input1 = document.getElementById('finput').value
            var img = document.getElementById('dice')
            var ra = Math.floor(Math.random() * 6) + 1;
            img.src = `./dice_img/${ra}.png`
            // switch(ra) {
            //     case 1:
            //         img.src = './dice_img/1.png'
            //         break;
            //     case 2:
            //         img.src = './dice_img/2.png'
            //         break;
            //     case 3:
            //         img.src = './dice_img/3.png'
            //         break;
            //     case 4:
            //         img.src = './dice_img/4.png'
            //         break;
            //     case 5:
            //         img.src = './dice_img/5.png'
            //         break;
            //     case 6:
            //         img.src = './dice_img/6.png'
            //         break;
            // }
            // document.getElementById('demo').innerHTML = ra
            console.log(parseInt(input1));
            if (parseInt(input1) > ra)
            {
                document.getElementById('demo1').innerHTML="you win"
            } 
            else if(parseInt(input1) < ra) {
                document.getElementById('demo1').innerHTML="you loose"
                
            }
            else {
                document.getElementById('demo1').innerHTML="DRAW"
            }
        }


