const img_url = [
        'images/kiki1.jpg',
        'images/kiki2.jpg',
        'images/kiki3.jpg',
        'images/kiki4.jpg',
        'images/kiki5.jpg',
        'images/kiki6.jpg',

    ];

    $(function(){

        function changeBg() {
          // 0 ~ 2 랜덤값 생성(이미지 번호)
          let imgNum = Math.floor(Math.random() * 6)
          console.log(imgNum);
      
          // 이미지 변경
          $('body').css({
            background: `url('images/filter-box.png'),
            url(${img_url[imgNum]})`
          })
        }
      
        // setInterval(함수, 시간ms)
        setInterval(changeBg, 5000);
      
      });

