/**Created by Diogo on 2018-08-13 */

$(document).ready(function(){ 
    var weapons = [
    {
        "name": "44_pistol",
        "damage": 48,
        "ammo": ".44",
        "ammo_qtd": 68,
        "fire_rate": 6,
        "range": 119,
        "accuracy": 66,
        "weight": 4.2,
        "value": 99
    },
    {
        "name": "10mm_pistol",
        "damage": 18,
        "ammo": "10mm",
        "ammo_qtd": 92,
        "fire_rate": 46,
        "range": 119,
        "accuracy": 61,
        "weight": 4.2,
        "value": 53
    },
    {
        "name": "assault_rifle",
        "damage": 30,
        "ammo": "5.56mm",
        "ammo_qtd": 487,
        "fire_rate": 40,
        "range": 119,
        "accuracy": 72,
        "weight": 13.1,
        "value": 144
    }
    ];

    $('.item-list a').on('click', function(e){
        $('.item-list a').removeClass('active');
        $(e.currentTarget).addClass('active');
    });

    $('#tab #nav-status').on('click', function(){
        $('#tab').animate({
            margin: "10px",
            borderBottom: "none",
            padding: "0% 15.7%"});
        $(this).animate({
            opacity: "1"}, 500);
        $('#nav-special').animate({
            opacity: "0.4"}, 500);
        $('#nav-perks').animate({
            opacity: "0.2"}, 500);
    });

    $('#tab #nav-special').on('click', function(){
        $('#tab').animate({
            margin: "10px",
            borderBottom: "none",
            padding: "0% 10.3%"});
        $(this).animate({
            opacity: "1"}, 500);
        $('#nav-status').animate({
            opacity: "0.4"}, 500);
        $('#nav-perks').animate({
            opacity: "0.4"}, 500);
    });

    $('#tab #nav-perks').on('click', function(){
        $('#tab').animate({
            margin: "10px",
            borderBottom: "none",
            padding: "0% 4.8%"});
        $(this).animate({
            opacity: "1"}, 500);
        $('#nav-special').animate({
            opacity: "0.4"}, 500);
        $('#nav-status').animate({
            opacity: "0.2"}, 500);
    });

    $('.item-list a').on('mouseenter', function(e){
        var current_item = $(e.currentTarget).attr('class');
        
        for(item in weapons){
            if(weapons[item].name == current_item){
                var container = $('.item-stats');
                
                container.find('.damage').html(weapons[item].damage);                             
                container.find('.ammo').html(weapons[item].ammo);
                container.find('.ammo_qtd').html(weapons[item].ammo_qtd);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.range').html(weapons[item].range);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);
            }
        }
    });

});