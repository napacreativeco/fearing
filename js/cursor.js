
    // *
    // * Cursor
    // *

    var cursor = {
        delay: 12,
        _x: 0,
        _y: 0,
        endX: (window.innerWidth / 2),
        endY: (window.innerHeight / 2),
        cursorVisible: true,
        cursorEnlarged: false,
        $dot: document.querySelector('.cursor-dot'),
        $outline: document.querySelector('.cursor-dot-outline'),
        $inverted: document.getElementsByClassName('social'),
    
        init: function() {
            // Set up element sizes
            this.dotSize = this.$dot.offsetWidth;
            this.outlineSize = this.$outline.offsetWidth;
            
            this.setupEventListeners();
            this.animateDotOutline();
        },

        setupEventListeners: function() {
            var self = this;
        
            // Anchor hovering
            document.querySelectorAll('a').forEach(function(el) {
                el.addEventListener('mouseover', function() {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener('mouseout', function() {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });

            // Anchor hovering
            document.querySelectorAll('button').forEach(function(el) {
                el.addEventListener('mouseover', function() {
                    self.cursorEnlarged = true;
                    self.toggleCursorSize();
                });
                el.addEventListener('mouseout', function() {
                    self.cursorEnlarged = false;
                    self.toggleCursorSize();
                });
            });
        
            // Click events
            document.addEventListener('mousedown', function() {
                self.cursorEnlarged = true;
                self.toggleCursorSize();
            });
            document.addEventListener('mouseup', function() {
                self.cursorEnlarged = false;
                self.toggleCursorSize();
            });


            document.addEventListener('mousemove', function(e) {
                // Show the cursor
                self.cursorVisible = true;
                self.toggleCursorVisibility();

                // Position the dot
                self.endX = e.pageX;
                self.endY = e.pageY;
                // self.$dot.style.top = self.endY + 'px';
                // self.$dot.style.left = self.endX + 'px';

                self._x += (self.endX - self._x) / self.delay;
                self._y += (self.endY - self._y) / self.delay;
                self.$dot.style.top = self._y + 'px';
                self.$dot.style.left = self._x + 'px';
            });
            
            // Hide/show cursor
            document.addEventListener('mouseenter', function(e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 1;
                // self.$outline.style.opacity = 1;
            });
        
            document.addEventListener('mouseleave', function(e) {
                self.cursorVisible = true;
                self.toggleCursorVisibility();
                self.$dot.style.opacity = 0;
                // self.$outline.style.opacity = 0;
            });
        },
    
        animateDotOutline: function() {
            var self = this;
            
            self._x += (self.endX - self._x) / self.delay;
            self._y += (self.endY - self._y) / self.delay;
            self.$outline.style.top = self._y + 'px';
            self.$outline.style.left = self._x + 'px';
            
            requestAnimationFrame(this.animateDotOutline.bind(self));
        },
    
        toggleCursorSize: function() {
            var self = this;
            
            if (self.cursorEnlarged) {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(5)';
                self.$dot.style.background = 'rgba(255, 255, 255, 0)';
                self.$dot.style.border = '1px solid rgba(255, 255, 2555, 1)';
                // self.$outline.style.transform = 'translate(-50%, -50%) scale(2.5)';
                // self.$outline.style.background = 'rgba(229, 128, 128, 0.2)';
                // self.$outline.style.border = '2px solid rgba(255, 255, 2555, 1)';
            } else {
                self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
                self.$dot.style.background = 'rgba(255, 255, 255, 1)';
                self.$dot.style.border = '0px solid rgba(255, 255, 2555, 1)';
                // self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
                // self.$outline.style.background = 'rgba(255, 255, 255, 0)';
                // self.$outline.style.border = '0px';
            }
        },
    
        toggleCursorVisibility: function() {
            var self = this;
            
            if (self.cursorVisible) {
                self.$dot.style.opacity = 1;
                self.$outline.style.opacity = 1;
            } else {
                self.$dot.style.opacity = 0;
                self.$outline.style.opacity = 0;
            }
        }
    }

    cursor.init();


    // Inverted Cursor
    $('.inverted').on('mouseenter', function() {
        $('.cursor-dot').css({
            backgroundColor: 'rgba(0, 0, 0, 1)',
            borderColor: 'rgba(0, 0, 0, 1)'
        });
    });

    $('.inverted > a').on('mouseenter', function() {
        $('.cursor-dot').css({
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(0, 0, 0, 1)'
        });
    });

    // Leave
    $('.inverted').on('mouseleave', function() {
        $('.cursor-dot').css({
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor: 'rgba(255, 255, 255, 1)'
        });
    });

    $('.inverted > a').on('mouseleave', function() {
        $('.cursor-dot').css({
            backgroundColor: 'rgba(0, 0, 0, 1)',
            borderColor: 'rgba(0, 0, 0, 1)'
        });
    });



 
// *
// * Waypoints
// *
// var waypoint = new Waypoint({
//     element: document.getElementById('discography'),
//     handler: function(direction) {
        
//         console.log('discography reached');

//         $('nav > ul').css({
//             top: '10px',
//             opacity: '1'
//         });

//     },
//     context: document.getElementById('scrolling-container')
// });

// var discography = new Waypoint({
//     element: document.getElementById('contact'),
//     handler: function(direction) {
//         console.log('social reached');
//     },
//     context: document.getElementById('social'),
//     offset: 50
// });
    