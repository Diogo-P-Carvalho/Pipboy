/**Created by Diogo on 2018-08-13 */

$(document).ready(function(){ 
    var weapons = [
    {
        "name": "kelloggs_pistol",
        "damage": 57,
        "ammo": ".44",
        "ammo_qtd": 38,
        "fire_rate": 6,
        "range": 119,
        "accuracy": 70,
        "weight": 4.3,
        "value": 449,
        "weapon_img": "../Images/kelloggs_pistol.png",
        "shooting_type": "../Images/crosshair.png",
        "weapon_bonus": "Refills your Action Points on a Critical Hit."
    },
    {
        "name": "righteous_authority",
        "damage": 26,
        "ammo": "Cell",
        "ammo_qtd": 123,
        "fire_rate": 50,
        "range": 203,
        "accuracy": 76,
        "weight": 5.5,
        "value": 326,
        "weapon_img": "../Images/righteous_authority.png",
        "shooting_type": "../Images/energy.png",
        "weapon_bonus": "Critical shots do double damage and the critical meter fills 15% faster."
    },
    {
        "name": "le_fusil_terribles",
        "damage": 62,
        "ammo": "Shell",
        "ammo_qtd": 10,
        "fire_rate": 20,
        "range": 71,
        "accuracy": 42,
        "weight": 16.8,
        "value": 417,        
        "weapon_img": "../Images/le_fusil_terribles.png",
        "shooting_type": "../Images/crosshair.png",
        "weapon_bonus": "+25% damage and limb damage, but has more recoil."
    },
    {
        "name": "deliverer",
        "damage": 65,
        "ammo": "10mm",
        "ammo_qtd": 705,
        "fire_rate": 66,
        "range": 134,
        "accuracy": 72,
        "weight": 6.2,
        "value": 929,        
        "weapon_img": "../Images/deliverer.png",
        "shooting_type": "../Images/crosshair.png",
        "weapon_bonus": "Improved VATS hit chance, 25% less Action Point cost."
    },
    {
        "name": "overseers_guardian",
        "damage": 175,
        "ammo": ".45",
        "ammo_qtd": 640,
        "fire_rate": 90,
        "range": 173,
        "accuracy": 80,
        "weight": 21,
        "value": 1374,        
        "weapon_img": "../Images/overseers_guardian.png",
        "shooting_type": "../Images/crosshair.png",
        "weapon_bonus": "Shoots an additional projectile."
    },
    {
        "name": "big_boy",
        "damage": 486,
        "ammo": "Mini Nuke",
        "ammo_qtd": 1,
        "fire_rate": 1,
        "range": 117,
        "accuracy": 39,
        "weight": 30.7,
        "value": 13783,        
        "weapon_img": "../Images/big_boy.png",
        "shooting_type": "../Images/crosshair.png",
        "weapon_bonus": "Shoots an additional projectile."
    },
    {
        "name": "cryolator",
        "damage": 20,
        "ammo": "Cryo",
        "ammo_qtd": 5,
        "fire_rate": 90,
        "range": 71,
        "accuracy": 66,
        "weight": 13.2,
        "value": 302,        
        "weapon_img": "../Images/cryolator.png",
        "shooting_type": "../Images/energy.png",
        "weapon_bonus": ""
    },
    {
        "name": "lorenzos_artifact_gun",
        "damage": 28,
        "ammo": "Gamma Round",
        "ammo_qtd": 53,
        "fire_rate": 66,
        "range": 254,
        "accuracy": 69,
        "weight": 4.5,
        "value": 753,        
        "weapon_img": "../Images/lorenzos_artifact_gun.png",
        "shooting_type": "../Images/crosshair.png",
        "weapon_bonus": ""
    },
    {
        "name": "alien_blaster_pistol",
        "damage": 63,
        "ammo": "AB Round",
        "ammo_qtd": 42,
        "fire_rate": 100,
        "range": 119,
        "accuracy": 73,
        "weight": 2.5,
        "value": 1551,        
        "weapon_img": "../Images/alien_blaster_pistol.png",
        "shooting_type": "../Images/energy.png",
        "weapon_bonus": ""
    }, 
    {
        "name": "spray_n_pray",
        "damage": 48,
        "ammo": ".45",
        "ammo_qtd": 478,
        "fire_rate": 127,
        "range": 77,
        "accuracy": 69,
        "weight": 19.0,
        "value": 1084,        
        "weapon_img": "../Images/spray_n_pray.png",
        "shooting_type": "../Images/crosshair.png",
        "weapon_bonus": "Bullets explode on impact doing 15 points area effect damage."
    }    
    ];

    $('.item-list a').on('click', function(e){
        var item = $(e.currentTarget);
        
        $('.item-list a').removeClass('active'); 
        item.addClass('active');

        var current_item = item.attr('class').split(' ');

        for(i in weapons){
            if(weapons[i].name == current_item[0]){
                var footerDamage = $('.pip-footer');
                var footerImage = $('.footer-image');

                footerImage.find('.shooting_type').attr('src', weapons[i].shooting_type);
                footerDamage.find('.damage').html(weapons[i].damage);

                if(weapons[i].name == "lorenzos_artifact_gun"){
                    var content = '<img class="img-fluid gun-icon" src="../Images/gun.png">';
                    content += '<img class="img-fluid shooting_type shooting-type-icon shooting-type-icon-after" src="../Images/crosshair.png">';
                    content += '<span class="damage">28</span>';
                    content += '<img class="img-fluid shooting_type shooting-type-icon shooting-type-icon-after " src="../Images/radiation.png">';
                    content += '<span class="damage">14</span>';
    
                    $('.footer-image').html(content);
                }
                else{
                    var normalContent = '<img class="img-fluid gun-icon" src="../Images/gun.png">';
                    normalContent += '<img class="img-fluid shooting_type shooting-type-icon shooting-type-icon-after" src="">';
                    normalContent += '<span class="damage"></span>';
    
                    $('.footer-image').html(normalContent);
    
                    var footerDamage = $('.pip-footer');
                    var footerImage = $('.footer-image');
    
                    footerImage.find('.shooting_type').attr('src', weapons[i].shooting_type);
                    footerDamage.find('.damage').html(weapons[i].damage);
                }
            }           
        }
    });

    $('#stat-tab #nav-status').on('click', function(){
        $('#stat-tab').animate({
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

    $('#stat-tab #nav-special').on('click', function(){
        $('#stat-tab').animate({
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

    $('#stat-tab #nav-perks').on('click', function(){
        $('#stat-tab').animate({
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

    $('#inv-tab #nav-weapons').on('click', function(){
        $('#inv-tab').animate({
            margin: "10px",
            borderBottom: "none",
            padding: "0% 31%"});
        $(this).animate({
            opacity: "1"}, 500);
        $('#nav-apparel').animate({
            opacity: "0.4"}, 500);
        $('#nav-aid').animate({
            opacity: "0.2"}, 500);
    });

    $('#inv-tab #nav-apparel').on('click', function(){
        $('#inv-tab').animate({
            margin: "10px",
            borderBottom: "none",
            padding: "0% 25%"});
        $(this).animate({
            opacity: "1"}, 500);
        $('#nav-weapons').animate({
            opacity: "0.4"}, 500);
        $('#nav-aid').animate({
            opacity: "0.4"}, 500);
    });

    $('#inv-tab #nav-aid').on('click', function(){
        $('#inv-tab').animate({
            margin: "10px",
            borderBottom: "none",
            padding: "0% 20.3%"});
        $(this).animate({
            opacity: "1"}, 500);
        $('#nav-apparel').animate({
            opacity: "0.4"}, 500);
        $('#nav-weapons').animate({
            opacity: "0.2"}, 500);
    });

    $('.item-list a').on('mouseenter', function(e){
        var item = $(e.currentTarget);
        var current_item = item.attr('class').split(' '); 

        for(item in weapons){
            if(weapons[item].name == current_item[0]){
                var container = $('.item-stats');
                var weaponImage = $('.item-image');
                var shootingType = $('.shooting');
                var weaponBonus = $('.item-bonus');

                container.find('.damage').html(weapons[item].damage);                             
                container.find('.ammo').html(weapons[item].ammo);
                container.find('.ammo_qtd').html(weapons[item].ammo_qtd);
                container.find('.fire_rate').html(weapons[item].fire_rate);
                container.find('.range').html(weapons[item].range);
                container.find('.accuracy').html(weapons[item].accuracy);
                container.find('.weight').html(weapons[item].weight);
                container.find('.value').html(weapons[item].value);
                weaponImage.find('.weapon_img').attr('src', weapons[item].weapon_img);
                shootingType.find('.shooting_type').attr('src', weapons[item].shooting_type);
                weaponBonus.find('.weapon_bonus').html(weapons[item].weapon_bonus);

                if(weapons[item].name == "lorenzos_artifact_gun"){
                    var content = '<img class="img-fluid shooting_type" src="../Images/crosshair.png">';
                    content += '<span class="damage">28</span>';
                    content += '<br>';
                    content += '<img class="img-fluid shooting_type" src="../Images/radiation.png">';
                    content += '<span class="damage">14</span>';

                    $('.shooting').html(content);                                                                      
                }
                else{
                    var normalContent = '<img class="img-fluid shooting_type" src="../Images/crosshair.png">';
                    normalContent += '<span class="damage"></span>';
                    
                    $('.shooting').html(normalContent);

                    var container = $('.item-stats');
                    var weaponImage = $('.item-image');
                    var shootingType = $('.shooting');
                    var weaponBonus = $('.item-bonus');

                    container.find('.damage').html(weapons[item].damage);                             
                    container.find('.ammo').html(weapons[item].ammo);
                    container.find('.ammo_qtd').html(weapons[item].ammo_qtd);
                    container.find('.fire_rate').html(weapons[item].fire_rate);
                    container.find('.range').html(weapons[item].range);
                    container.find('.accuracy').html(weapons[item].accuracy);
                    container.find('.weight').html(weapons[item].weight);
                    container.find('.value').html(weapons[item].value);
                    weaponImage.find('.weapon_img').attr('src', weapons[item].weapon_img);
                    shootingType.find('.shooting_type').attr('src', weapons[item].shooting_type);
                    weaponBonus.find('.weapon_bonus').html(weapons[item].weapon_bonus);
                }
            }
        }
    });

    var tWeight = 0;

    function TotalWeight() {     
        for(item in weapons) {
            tWeight = parseFloat(weapons[item].weight) + tWeight;
        }
        $('.weightTotal').html(tWeight + "/240");
    }

    TotalWeight();

});