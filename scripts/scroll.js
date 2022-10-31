window.addEventListener('load', (event) => {

    document.querySelectorAll('a[href^="#st"]').forEach(e => e.addEventListener('click', function(e){

        //a要素のクリックイベントをキャンセル。
        e.preventDefault();

        //a要素が持つhref属性の値を取得。（#content1のように先頭に#が付いた状態で取得される。）
        let target = e.target.getAttribute("href");

        //指定した要素までの距離を取得。
        let targetTop = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset;

        let scrollOptions = {
          left: 0,
          top: targetTop - 300,
          behavior: 'smooth'
        }

        //指定した要素へスクロールする。
        window.scrollTo(scrollOptions);
    }));

});

window.addEventListener('load', (event) => {

    document.querySelectorAll('a[href^="#mst"]').forEach(e => e.addEventListener('click', function(e){

        //a要素のクリックイベントをキャンセル。
        e.preventDefault();

        //a要素が持つhref属性の値を取得。（#content1のように先頭に#が付いた状態で取得される。）
        let target = e.target.getAttribute("href");

        //指定した要素までの距離を取得。
        let targetTop = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset;

        let scrollOptions = {
          left: 0,
          top: targetTop -300,
          behavior: 'smooth'
        }

        //指定した要素へスクロールする。
        window.scrollTo(scrollOptions);
    }));

});