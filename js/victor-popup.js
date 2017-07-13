var VictorPopup = function(param){
    
    var self = this;
    
    for(var i=0;i<param.el.length;i++){
        $(param.el[i]).click(function(){
            var el = this;
            self.open(self, el);
            return false;
        });
    }
            
    $('body').prepend('<div class="victor-popup"><div class="vp-container"><img src="" class="vp-img"><div class="vp-description"></div></div></div>');
    
    $('.vp-img').css({
        'max-width': Math.floor(window.innerWidth * .9),
        'max-height': Math.floor(window.innerHeight * .8)
    });
    
    $('.victor-popup').click(function(){
        self.close(self);
    });
    
    
    this.open = function(self, el){
        $('.victor-popup .vp-img').attr('src', $(el).attr('href'));
        $('.victor-popup').fadeIn(300);
    }
    
    this.close = function(self){
        $('.victor-popup').fadeOut();
    }
    
}