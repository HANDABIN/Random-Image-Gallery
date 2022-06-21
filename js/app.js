const img_url = [
        'images/kiki1.jpg',
        'images/kiki2.jpg',
        'images/kiki3.jpg',
        'images/kiki4.jpg',
        'images/kiki5.jpg',
        'images/kiki6.jpg',
    ];

    //작가명
    const author = [
        '스티브 J',
        '요니 P'

    ]

    $(function(){

        // 년/월/일
        let d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        let date = d.getDate();
        console.log(year, month, date);
        $('.year').html(year);
        $('.month').html(month);
        $('.date').html(date);

        
        
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

