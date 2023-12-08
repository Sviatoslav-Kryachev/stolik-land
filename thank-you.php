
<?php
$method = $_SERVER['REQUEST_METHOD'];
$sitename = "SITENAME";
$name = trim(strip_tags($_POST["name"]));
$phone = trim(strip_tags($_POST["phone"]));
$comment = trim(strip_tags($_POST["comment"]));

$crm = trim(strip_tags($_POST["crm"]));
$price = trim(strip_tags($_POST["price"]));
$title = trim(strip_tags($_POST["title"]));


if(!$name){
    exit();
}

$texttg = urlencode("Інформація про покупця:\n\n" . $sitename . "\n\nПІП: " . $name . "\nТелефон: " . $phone . "\n\nЗапит надійшов з сайту: " . $_SERVER['HTTP_REFERER']);

$botToken = '5647573466:AAFXJ7KnyRQSt_rgTtdmEI0weW9p35G7q0Q';
$chatId = 'CHATID';

$dot = $title ? "\n Доп: $title" : '';

$sendToTelegram = fopen("https://api.telegram.org/bot{$botToken}/sendMessage?chat_id={$chatId}&parse_mode=html&text={$texttg}{$dot}","r");

session_start();

$products_list_dop = array(
    0 => array(
        'product_id' => '1601',
        'price' => 'PRICE',
        'count' => $comment ? $comment : 1
    )
);
$order_id = number_format(round(microtime(true) * 10) , 0, '.', '');


$products_dop = urlencode(serialize($products_list_dop));
$sender_dop = urlencode(serialize($_SERVER));

$data_dop = array(
    'key' => '11847da680a601c43768ec1e652b6b05',
    'order_id' => $order_id ,
    'country' => 'UA',
    'office' => '681',
    'products' => $products_dop,
    'bayer_name' => $_REQUEST['name'].'---'.$order_id,
    'phone' => $_REQUEST['phone'],
    'email' => $_REQUEST['email'],
    'comment' => $comment,
    'delivery' => $_REQUEST['delivery'],
    'delivery_adress' => $_REQUEST['delivery_adress'],
    'payment' => '',
    'sender' => $sender_dop,
    'utm_source' => $_SESSION['utms']['utm_source'],
    'utm_medium' => $_SESSION['utms']['utm_medium'],
    'utm_term' => $_SESSION['utms']['utm_term'],
    'utm_content' => $_SESSION['utms']['utm_content'],
    'utm_campaign' => $_SESSION['utms']['utm_campaign'],
    'additional_1' => '',
    'additional_2' => '',
    'additional_3' => '',
    'additional_4' => ''
);

$curl_dop = curl_init();
curl_setopt($curl_dop, CURLOPT_URL, 'http://unique.lp-crm.biz/api/addNewOrder.html');
curl_setopt($curl_dop, CURLOPT_POST, true);
curl_setopt($curl_dop, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl_dop, CURLOPT_POSTFIELDS, $data_dop);
$out_dop = curl_exec($curl_dop);

curl_close($curl_dop);

if($title) {
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Дякуємо за заявку!</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&amp;subset=cyrillic,cyrillic-ext" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="https://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
    
    <link href="thankyou.css" rel="stylesheet">

</head>
<body>

<style>
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        font-weight: 300;
    }
    .thank-please {
        font-size: 20px;
        color: #5b609a;
        font-weight: 700;
        display: block;
    }
    .info {
        border-top: 1px solid #dedede;
        margin: 10px 0;
    }
    .info span {
        font-size: 20px;
        font-weight: 700;
    }
    .product {
        border: 1px solid #ececec;
        /* padding: 10px; */
        margin-bottom: 30px;
    }

    a.button {
        display: block;
        background-color: green;
        color: #fff;
        width: 100%;
        padding: 10px 0;
        text-decoration: none;
        transition: all .3s ease;
        font-weight: 700;
        margin-top: 20px;
    }
    a.button:hover {
        text-decoration: none;
        background-color: rgb(5, 180, 5);
    }
    .old-price {
        font-size: 22px;
        line-height: 22px;
        text-decoration: line-through;
    }
    .new-price {
        font-size: 28px;
        line-height: 28px;
        color: green;
        font-weight: 700;
    }
    .product p {
        padding: 0;
        margin: 5px;
    }

    .product-title {
        padding: 10px;
    }
</style>

    <div class="container">
        <div class="row text-center">
        <div class="col-12">
            <h1>Вітаємо <span class="thank_name"><? echo $name; ?></span>, ваше замовлення прийнято!</h1>
            <p>Найближчим часом з вами зв'яжеться оператор для підтвердження замовлення.</p>
            <span class="thank-please">Прохання, тримайте увімкненим ваш телефон!</span>
            <div class="info" style="margin-top:10px;padding-top:20px;">
                <p>Будь ласка, перевірте правильність введеної Вами інформації!</p>
                <span>Ім'я:</span> <span id="user_name"><? echo $name; ?></span><br>
                <span>Телефон: </span> <span id="user_phone"><? echo $phone; ?></span>
                <p>Якщо Ви помилилися під час заповнення форми, можете <a href="/">заповнити заявку ще раз.</a></p>
            </div>
        </div>
        </div>
        <!--dophere-->
    </div>
    
<script>
$(function(){
    $('a.add-to-order').on('click',function(e){
    var crm = $(this).attr('data-crm');
    var name = $('#user_name').text();
    var phone = $('#user_phone').text();
    e.preventDefault();
    $.ajax({
        type:"POST",
        url:"thank-you.php",
        data: {
        crm: $(this).attr('data-crm'),
        price: $(this).attr('data-price'),
        title: $(this).attr('data-title'),
        name: name,
        phone: phone,
        product_name: "upsell",
        pagename: "upsell"
        },
        success:function(text){
        
            $('a[data-crm="'+ crm +'"]').css('display', 'none');
            $('a[data-crm="'+ crm +'"]').next().css('display', 'block');
        
        }
    });
    });
});
</script>
<script>
$(document).ready(function(){
    $('.more_info').click(function(){
            $(this).next().slideToggle("slow");
    });
});
</script>

</body>
</html>
    